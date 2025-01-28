import React from "react";

function Carousel() {
  return (
    <>
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div class="glass-effect section p-4 rounded-xl">
          <h2>Fact Checking</h2>
          <p>
            Verify your knowledge and understand facts with this interactive
            section.
          </p>
          <a href="#" class="button" onclick="startFactCheck()">
            Start Fact Check
          </a>
        </div>

        <div class="glass-effect section p-4 rounded-xl">
          <h2>Quiz</h2>
          <p>
            Test your knowledge with our exciting quizzes. Challenge yourself!
          </p>
          <a href="#" class="button" onclick="startQuiz()">
            Take the Quiz
          </a>
        </div>

        <div class="glass-effect section p-4 rounded-xl">
          <h2>Summary</h2>
          <p>Review the key points and learnings from today. Stay updated!</p>
          <a href="#" class="button" onclick="viewSummary()">
            View Summary
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
