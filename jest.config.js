module.exports = {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }