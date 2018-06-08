module.exports = function(wallaby) {
    return {
      files: [
        'src/**/*.ts?(x)',
        '!src/**/**/spec.tsx',
        'tsconfig.json'
      ],
      tests: [
        'src/**/**/spec.tsx'
      ],
      env: {
        type: 'node'
      },
      testFramework: 'jest',
      debug: false,
  
      setup: function (wallaby) {
        var jestConfig = require('./package.json').jest;
        wallaby.testFramework.configure(jestConfig);
      }
    };
  }