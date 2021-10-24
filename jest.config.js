const config = {
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
    verbose: true,
    reporters: [
      "default",
      "jest-html-reporters"
    ]
  };
  
module.exports = config;