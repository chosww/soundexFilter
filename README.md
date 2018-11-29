## Function Description

Catch spelling errors or re-write acronym of words into initial phrase before passing user inputs to Lex.

## Setup

-Install npm to the required version.
-Inside of library, include any words that need to be captured by the function, under first letter of the words.
-Please note that some words have same soundex value.

## How to use

```javascript
const soundexFilter = require("./soundexFilter.js");

console.log(soundexFilter.correctSentence("helo tere, ttyl"));
//output: "hello there talk to you later"
```
