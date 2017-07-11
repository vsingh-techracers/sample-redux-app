module.exports = {
 "extends": "airbnb",
 "plugins": [
   "react",
   "jsx-a11y",
   "import"
 ],
 "ecmaFeatures": {
    "jsx": true,
    "arrowFunctions": true,
    "blockBindings": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "templateStrings": true,
    "modules": true,
    "classes": true
  },
 "rules": {
   "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
   "import/prefer-default-export": 0,
   "react/no-string-refs": 0,
   "class-methods-use-this": 0,
   "no-unused-expressions": 0,
   "react/no-unused-prop-types": 0,
   "import/no-extraneous-dependencies": 0,
   "import/no-unresolved": 0,
   "import/extensions": 0,
 },
 "globals": {
   "describe": true, 
   "it": true,
   "expect": true,
   "fetch": true
 },
 "env": {
   "jest": true,
 },
 "overrides": [
    {
      "excludedFiles": "*.test.js",
    }
  ],
};