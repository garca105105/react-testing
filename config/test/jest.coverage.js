const base = require('./jest');

module.exports = {
  ...base,
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 80,
      statements: 90,
    },
    'src/**/*.hooks.ts': {
      branches: 100,
    },
  },
  coveragePathIgnorePatterns: ['node_modules', 'src/api.ts'] //excluiria esas todas esas carpetas
};
