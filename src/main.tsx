import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './index.css';

// Add browser compatibility check
const isModernBrowser = () => {
  try {
    const testAsync = new Function('return async () => {}');
    testAsync();
    return true;
  } catch (e) {
    return false;
  }
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

if (!isModernBrowser()) {
  container.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h1 style="color: #444;">浏览器版本过低</h1>
      <p style="color: #666;">
        请使用较新版本的浏览器访问，推荐：
        <br/>
        Chrome 63+, Firefox 67+, Safari 11.1+, Edge 79+
      </p>
    </div>
  `;
} else {
  const root = createRoot(container);
  root.render(<App />);
}
