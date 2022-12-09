# fcc-intermediate-algorithm-scripting-lesson-07

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-jxyxfe)

## SEARCH AND REPLACE
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argumetn is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the first character in the original word when you are replacing it.  For example, if you mean to replace the word `Book` with the word `dog`, it should be replaced as `Dog`.

## PROBLEM STATEMENT
You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.

### REFERENCE LINKS
- [String global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)


## HINTS
### Hint 1
- Find the index where `before` is in the string.

### Hint 2
- Check first letter case.

### Hint 3
- Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes were done using just that one variable.


