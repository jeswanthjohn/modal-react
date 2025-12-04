import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

export default function Modal({ open, onClose, title = "Modal Title", children }) {
  const overlayRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const focusable = overlayRef.current.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        (focusable[0] || overlayRef.current).focus();
      }, 50);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      if (lastActiveRef.current) lastActiveRef.current.focus();
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function handleKeyDown(e) {
    if (e.key === "Escape") onClose();
    if (e.key === "Tab") trapFocus(e);
  }

  function trapFocus(e) {
    const focusable = overlayRef.current.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function overlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={overlayRef}
      onMouseDown={overlayClick}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <h2 id="modal-title">{title}</h2>
          <button className={styles.close} aria-label="Close" onClick={onClose}>
            &times;
          </button>
        </header>

        <section className={styles.body}>{children}</section>

        <footer className={styles.footer}>
          <button onClick={onClose} className={styles.primaryBtn}>Close</button>
        </footer>
      </div>
    </div>,
    document.body
  );
}
