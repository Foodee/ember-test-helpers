module.exports = {
  "root": true,
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": "eslint:recommended",

  "globals": {
    "waitTime": 1,
    "waitUntil": 1,
    "fillInTyping": 1,
    "fillInAddress": 1,
    "fillInPhone": 1,
    "$": 1,
    "_": 1,
    "visit": 1,
    "andThen": 1,
    "currentPath": 1,
    "fillIn": 1,
    "click": 1,
    "triggerEvent": 1,
    "pauseTest": 1
  },

  "rules": {
    "no-unused-vars": [1, {
      "varsIgnorePattern": "_",
      "argsIgnorePattern": "_"
    }]
  }

};
