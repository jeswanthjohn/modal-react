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
        <p>
          This is a fully accessible Modal with focus trap, ESC close, 
          overlay close, and portal rendering.
        </p>
      </Modal>
    </div>
  );
}

export default App;
