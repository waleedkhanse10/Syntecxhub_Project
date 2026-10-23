# Modal / Popup Window

A clean, responsive modal (popup) window built with **HTML, CSS, and JavaScript**. Click the button to open the modal, and close it with the close button or by clicking outside the box.

Built as **Project 3 (Week 2)** of the **Syntecxhub Front-End Development Internship**.

## Features

- Button that opens a modal window
- Dark blurred overlay background
- Close with the ✕ button or by clicking outside the modal
- Smooth CSS animation for entry and exit (fade + slide/scale)
- Message content inside the modal
- Fully responsive (desktop and mobile)
- Basic accessibility (`role="dialog"`, `aria-label`, focus styles)

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, transitions, media queries)
- Vanilla JavaScript (no libraries)

## Project Structure

```
Syntecxhub_Modal_Popup/
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
2. Open the project folder.
3. Open `index.html` in your browser.

No installation or build step required.

## How It Works

- The overlay is hidden by default (`opacity: 0`, `visibility: hidden`).
- Clicking the open button adds an `active` class to the overlay, which makes it visible and animates the modal box in.
- Clicking the close button removes the `active` class.
- Clicking the overlay itself (checked with `e.target === overlay`) also closes the modal, while clicks inside the box do not.

## Author
**Waleed Khan**
