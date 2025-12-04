📘 Modal Window Project — React + Vite

A fully accessible, reusable Modal Window component built with React + Vite, implementing industry-standard UI/UX patterns such as focus trap, ESC-to-close, overlay click close, portal rendering, and keyboard accessibility.

This project was created as part of a structured mini-projects curriculum aimed at mastering front-end fundamentals and demonstrating real-world development proficiency.

🚀 Live Demo

(Add your Vercel link here once deployed)
Example:

https://modal-react-demo.vercel.app/

🎯 Features
✔ Accessibility (A11y)

role="dialog" and aria-modal="true"

Focus trap inside modal

ESC key closes modal

Restores focus to the trigger button

Overlay click closes modal

✔ UX Enhancements

Smooth pop animation

Portal rendering using ReactDOM.createPortal()

Background scroll locking

Click outside to close

✔ Clean Developer Experience

Reusable <Modal /> component

Easy props: open, onClose, title

Supports any JSX content as children

Styled using CSS Modules

📂 Project Structure
modal-react/
│
├─ src/
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ components/
│ ├─ Modal.jsx
│ └─ Modal.module.css
│
├─ index.html
├─ package.json
└─ README.md

🛠️ Tech Stack

React 18

Vite 7

JavaScript

CSS Modules

React Portals

📦 Installation & Setup
Clone repo
git clone https://github.com/jeswanthjohn/modal-react.git
cd modal-react

Install dependencies
npm install

Run development server
npm run dev

Vite will start on:

http://localhost:5173/

🧩 Usage Example

Inside App.jsx:

import { useState } from 'react';
import Modal from './components/Modal';

function App() {
const [open, setOpen] = useState(false);

return (
<div style={{ padding: "2rem" }}>
<h1>Modal Window Project</h1>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Welcome!">
        <p>This modal demonstrates accessibility, focus trap, ESC close, and portal rendering.</p>
      </Modal>
    </div>

);
}

export default App;

🧪 Future Improvements

Add sliding / fade animations

Add dark mode modal

Build useModal() custom hook

Add unit tests using Vitest + Testing Library

Add Storybook documentation

📜 License

This project is open-source and free to use.
