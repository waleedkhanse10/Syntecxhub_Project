# Quiz Application

A simple, clean quiz application built with vanilla HTML, CSS, and JavaScript. It shows one question with multiple options at a time, tracks your progress, and displays your final score at the end.

## Features

- 10 general knowledge questions (easily customizable)
- Question counter that tracks progress (e.g., `1 / 10`)
- Animated progress bar with completion percentage
- Instant answer feedback (green for correct, red for wrong)
- Score summary screen with a percentage ring
- Restart option to retake the quiz
- Fully responsive and keyboard friendly

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla, no frameworks or libraries)

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/waleedkhanse10/Syntecxhub_Project
   ```

2. Open the project folder:

   ```bash
   cd YOUR_REPO_NAME
   ```

3. Open `index.html` in your browser (double-click it, or use a live server extension in VS Code).

## Project Structure

```
├── index.html   # Page structure
├── style.css    # Styling and layout
└── script.js    # Quiz logic and questions
```

## Customizing Questions

Open `script.js` and edit the `questions` array. Each question follows this pattern:

```js
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
}
```

The `answer` value must exactly match one of the options.


# Developer
**Waleed Khan**