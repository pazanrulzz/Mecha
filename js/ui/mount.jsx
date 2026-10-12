// mount.jsx - draws the React interface into the page (dark mode)
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import App from './App.jsx';

export function mountUI() {
  document.documentElement.classList.add('dark');   // shadcn dark theme
  const host = document.getElementById('ui');
  flushSync(() => createRoot(host).render(<App />));
}
