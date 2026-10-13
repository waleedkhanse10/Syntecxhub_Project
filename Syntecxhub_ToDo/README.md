# To-Do List App

A simple, clean To-Do List web app built with vanilla HTML, CSS and JavaScript.
Created as part of the **Syntecxhub Internship**.

## Features

- Add tasks with the "Add Task" button or by pressing **Enter**
- Mark tasks as complete / incomplete
- Delete tasks with a smooth slide-and-collapse animation
- Tasks are saved in **localStorage**, so they stay after a page refresh
- Empty state message when there are no tasks
- Fade-in animation when a task is added
- Responsive layout for mobile screens

## Tech Stack

- HTML5
- CSS3 (transitions, `:has()` selector, flexbox)
- Vanilla JavaScript (DOM manipulation, localStorage)
- Font Awesome (icons)

## Project Structure

```
├── index.html
├── style.css
└── script.js
```

## How to Run

1. Clone or download this repository
2. Open `index.html` in any modern browser

No installation or build step is needed.

## How It Works

- Each task is an object: `{ id, title, completed }`
- The `Tasks` array is saved to localStorage on every change
- On page load, saved tasks are read from localStorage and rendered
- Each task gets a unique id using `crypto.randomUUID()`

## What I Learned

- DOM manipulation (`createElement`, `append`, `classList`)
- Working with localStorage and JSON
- Closures and event listeners
- CSS transitions and `requestAnimationFrame` for enter/exit animations

## Author

**Waleed Khan**