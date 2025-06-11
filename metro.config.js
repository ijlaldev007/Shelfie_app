const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add polyfills for web
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Configure web-specific polyfills
if (config.resolver.alias) {
  config.resolver.alias = {
    ...config.resolver.alias,
  };
} else {
  config.resolver.alias = {};
}

module.exports = config;
