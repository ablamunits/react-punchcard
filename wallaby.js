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
  
      // setup: function (wallaby) {
      //   var jestConfig = require('./jest.config.js');
      //   console.log(jestConfig);
      //   wallaby.testFramework.configure(jestConfig);
      // }
    };
  }