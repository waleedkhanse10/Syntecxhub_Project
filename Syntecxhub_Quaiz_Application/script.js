const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which language is primarily used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        answer: "CSS"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What does 'HTTP' stand for?",
        options: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "HyperText Transmission Process",
            "Hosted Text Transfer Protocol"
        ],
        answer: "HyperText Transfer Protocol"
    }
];

let currentIndex = 0;
let score = 0;

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");
const counterEl = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const scoreCircle = document.getElementById("score-circle");
const scoreValue = document.getElementById("score-value");
const resultMessage = document.getElementById("result-message");
const resultDetail = document.getElementById("result-detail");

function updateProgress() {
    const total = questions.length;
    const completed = currentIndex;

    counterEl.textContent = `${currentIndex + 1} / ${total}`;
    progressBar.style.width = `${(completed / total) * 100}%`;
    progressText.textContent = `${(completed / total) * 100}% completed`;
}

function showQuestion() {
    const q = questions[currentIndex];

    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;

    q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectOption(btn, opt));
        optionsEl.appendChild(btn);
    });

    updateProgress();
}

function selectOption(button, selected) {
    const q = questions[currentIndex];

    optionsEl.querySelectorAll(".option").forEach((b) => (b.disabled = true));

    if (selected === q.answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        optionsEl.querySelectorAll(".option").forEach((b) => {
            if (b.textContent === q.answer) b.classList.add("correct");
        });
    }

    nextBtn.disabled = false;
    nextBtn.textContent = currentIndex === questions.length - 1 ? "Show Score" : "Next";
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    scoreValue.textContent = score;
    scoreCircle.style.setProperty("--percent", `${(score / questions.length) * 100}%`);

    const percent = (score / questions.length) * 100;
    let message;
    if (percent === 100) message = "Perfect score!";
    else if (percent >= 80) message = "Excellent work!";
    else if (percent >= 50) message = "Good job!";
    else message = "Better luck next time!";

    resultMessage.textContent = message;
    resultDetail.textContent = `You answered ${score} out of ${questions.length} questions correctly (${percent}%).`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;

    progressBar.style.width = "0";
    progressText.textContent = "0% completed";
    nextBtn.textContent = "Next";

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
});

showQuestion();
