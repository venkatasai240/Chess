// script.js

// Define Quiz Questions
const quizQuestions = [
    {
        question: "How many squares are on a chessboard?",
        options: [
            "64", 
            "81", 
            "49", 
            "100"
        ],
        answer: "64"
    },
    {
        question: "What is the name of the only piece that can jump over other pieces?",
        options: [
            "King", 
            "Queen", 
            "Bishop", 
            "Knight"
        ],
        answer: "Knight"
    },
    // Add more questions and answers as needed
];

// Function to Display Quiz Questions
function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <form id="question${index}">
                ${question.options.map((option, i) => `
                    <input type="radio" id="option${i}" name="question${index}" value="${option}">
                    <label for="option${i}">${option}</label><br>
                `).join('')}
            </form>
        `;
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit Quiz";
    submitButton.addEventListener("click", submitQuiz);
    quizContainer.appendChild(submitButton);
}

// Function to Submit Quiz
function submitQuiz() {
    // Add logic to check answers and calculate score
    // Display result to the user
    alert("Quiz submitted. Check console for results");
}

// Call the Function to Display the Quiz Questions
displayQuiz();
