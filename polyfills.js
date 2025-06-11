// Polyfills for React Native components running in web environment

// setImmediate polyfill for web
if (typeof window !== 'undefined' && typeof window.setImmediate === 'undefined') {
  window.setImmediate = function(callback, ...args) {
    return setTimeout(callback, 0, ...args);
  };
  
  window.clearImmediate = function(id) {
    clearTimeout(id);
  };
}

// Global polyfill as well for Node.js-style access
if (typeof global !== 'undefined' && typeof global.setImmediate === 'undefined') {
  global.setImmediate = function(callback, ...args) {
    return setTimeout(callback, 0, ...args);
  };
  
  global.clearImmediate = function(id) {
    clearTimeout(id);
  };
}

export {};
