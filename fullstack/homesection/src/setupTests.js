// src/setupTests.js
import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';
if (typeof window !== 'undefined') {
  window.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe(element) {
      // Simulate adding the fade-in class directly, for testing
      element.classList.add("fade-in");
      this.callback([{ isIntersecting: true, target: element }]);
    }
    unobserve() {}
    disconnect() {}
  };
}