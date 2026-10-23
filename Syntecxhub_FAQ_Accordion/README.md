# FAQ Accordion Widget

A clean, responsive FAQ accordion built with **HTML, CSS, and JavaScript**. Click a question to smoothly expand or collapse its answer.

Built as **Project 2 (Week 2)** of the **Syntecxhub Front-End Development Internship**.

## Features

- Collapsible FAQ items with open/close toggle
- Smooth CSS transitions for expand/collapse and icon rotation
- Clean, professional UI with hover and active states
- Fully responsive (desktop and mobile)
- Keyboard accessible (questions are real `<button>` elements)

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, transitions, media queries)
- Vanilla JavaScript (no libraries)

## Project Structure

```
Syntecxhub_FAQ_Accordion/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/waleedkhanse10/Syntecxhub_Project
```
2. Open the Syntecxhub_FAQ_Accordion folder.
3. Open `index.html` in your browser.

No installation or build step required.

## How It Works

JavaScript attaches a click listener to each `.faq-question` button. Clicking it toggles an `active` class on the parent `.faq-item`, and CSS handles the animation (answer height, icon rotation, and colors).

## Author
**Waleed Khan** 