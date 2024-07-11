module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended" // Add this line
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks" // Add this line
    ],
    "rules": {
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "no-useless-catch": "off",
      "no-const-assign": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off" // Add this line to disable unescaped entities warning
    }
  }
  