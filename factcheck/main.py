// Import necessary modules
const fs = require('fs');
const axios = require('axios');

// Read the SRT file and parse captions
function parseSrt(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Split by double newlines, as each caption is separated
    const blocks = content.trim().split("\n\n");
    const captions = [];

    blocks.forEach(block => {
        const lines = block.split("\n");
        if (lines.length >= 3) {
            // The third line onwards is the text (after index and timestamp)
            captions.push(lines.slice(2).join(" ").trim());
        }
    });

    return captions;
}

// Split captions into n parts
function splitIntoParts(captions, n) {
    const chunkSize = Math.floor(captions.length / n);
    const parts = [];

    for (let i = 0; i < n - 1; i++) {
        parts.push(captions.slice(i * chunkSize, (i + 1) * chunkSize).join(" "));
    }

    // Add remaining captions to the last part
    parts.push(captions.slice((n - 1) * chunkSize).join(" "));

    return parts;
}

// Fact-check a text using the On-Demand.io API
async function factCheck(text, apiKey, sessionId, endpointId) {
    const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;
    const headers = {
        accept: "application/json",
        "content-type": "application/json",
        apikey: apiKey
    };

    const data = {
        query: text,
        endpointId: endpointId,
        responseMode: "sync",
        pluginIds: [],
        onlyFulfillment: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data?.data?.answer || "No response received.";
    } catch (error) {
        console.error("Error during fact-checking:", error.message);
        return "Error during fact-checking.";
    }
}

// Generate summary of fact-checking results
function summarizeResults(results) {
    const correct = [];
    const incorrect = [];

    results.forEach((result, idx) => {
        if (result.toLowerCase().includes("correct")) {
            correct.push(`Part ${idx + 1}: ${result}`);
        } else {
            incorrect.push(`Part ${idx + 1}: ${result}`);
        }
    });

    const summary = `Correct Parts: ${correct.length}\n` + correct.join("\n") + "\n\n" +
                    `Incorrect Parts: ${incorrect.length}\n` + incorrect.join("\n");
    return summary;
}

// Main script
async function main() {
    // File and API configuration
    const srtFile = "caption.srt";
    const apiKey = "rQ6UBn3zmBJK1jnrUI8Pr0lMRLt4KFK8";
    const sessionId = "6798bac30b80580b8d5d6356";
    const endpointId = "predefined-openai-gpt4o";

    // Step 1: Parse the SRT file
    const captions = parseSrt(srtFile);

    // Step 2: Divide into 20 parts
    const parts = splitIntoParts(captions, 20);

    // Step 3: Fact-check each part serially
    const results = [];
    for (let i = 0; i < parts.length; i++) {
        console.log(`Fact-checking part ${i + 1}...`);
        const result = await factCheck(parts[i], apiKey, sessionId, endpointId);
        results.push(result);

        console.log(`Result for part ${i + 1}: ${result}`);

        // Wait for 2 minutes before processing the next part
        if (i < parts.length - 1) {
            console.log("Waiting for 2 minutes...");
            await new Promise(resolve => setTimeout(resolve, 120000));
        }
    }

    // Step 4: Summarize results
    const summary = summarizeResults(results);

    // Step 5: Output summary
    console.log("\nFact-Checking Summary:\n");
    console.log(summary);
}

main().catch(err => console.error("An error occurred:", err));
