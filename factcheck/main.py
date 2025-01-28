import re
import json
import requests
import time

# Read the SRT file and parse captions
def parse_srt(file_path):
    with open(file_path, "r") as file:
        content = file.read()
    
    # Split by double newlines, as each caption is separated
    blocks = content.strip().split("\n\n")
    captions = []

    for block in blocks:
        lines = block.split("\n")
        if len(lines) >= 3:
            # The third line onwards is the text (after index and timestamp)
            captions.append(" ".join(lines[2:]).strip())

    return captions

# Split captions into n parts
def split_into_parts(captions, n):
    chunk_size = len(captions) // n
    parts = [" ".join(captions[i * chunk_size:(i + 1) * chunk_size]) for i in range(n - 1)]
    parts.append(" ".join(captions[(n - 1) * chunk_size:]))  # Remaining captions
    return parts

# Fact-check a text using the On-Demand.io API
def fact_check(text, api_key, session_id, endpoint_id):
    url = f"https://api.on-demand.io/chat/v1/sessions/{session_id}/query"
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "apikey": api_key
    }
    data = {
        "query": text,
        "endpointId": endpoint_id,
        "responseMode": "sync",
        "pluginIds": [],
        "onlyFulfillment": False
    }

    response = requests.post(url, headers=headers, json=data)
    response_data = response.json()
    return response_data.get("data", {}).get("answer", "No response received.")

# Generate summary of fact-checking results
def summarize_results(results):
    correct = []
    incorrect = []

    for idx, result in enumerate(results):
        if "correct" in result.lower():
            correct.append(f"Part {idx + 1}: {result}")
        else:
            incorrect.append(f"Part {idx + 1}: {result}")

    summary = (
        f"Correct Parts: {len(correct)}\n" + "\n".join(correct) + "\n\n" +
        f"Incorrect Parts: {len(incorrect)}\n" + "\n".join(incorrect)
    )
    return summary

# Main script
def main():
    # File and API configuration
    srt_file = "caption.srt"
    api_key = "rQ6UBn3zmBJK1jnrUI8Pr0lMRLt4KFK8"
    session_id = "6798bac30b80580b8d5d6356"
    endpoint_id = "predefined-openai-gpt4o"

    # Step 1: Parse the SRT file
    captions = parse_srt(srt_file)

    # Step 2: Divide into 20 parts
    parts = split_into_parts(captions, 20)

    # Step 3: Fact-check each part serially
    results = []
    for idx, part in enumerate(parts):
        print(f"Fact-checking part {idx + 1}...")
        result = fact_check(part, api_key, session_id, endpoint_id)
        results.append(result)

        print(f"Result for part {idx + 1}: {result}")

        # Wait for 2 minutes before processing the next part
        time.sleep(120)

    # Step 4: Summarize results
    summary = summarize_results(results)

    # Step 5: Output summary
    print("\nFact-Checking Summary:\n")
    print(summary)

if __name__ == "__main__":
    main()