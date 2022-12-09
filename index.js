// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Search and Replace</h1>`;

/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 *
 * First argument is the sentence to perform the search and replace on.
 *
 * Second argument is the word that you will be replacing (before).
 *
 * Third argument is what you will be replacing the second argument with (after).
 *
 * NOTE: Preserve the case of the first character in the original word when you are replacing it.  For example, if you want to replace the word `Book` with the word `dog`, it should be replaced as `Dog`.
 */

function myReplace(str, before, after) {
  const regExpCaps = /[A-Z]/;
  const regExpSmall = /[a-z]/;
  let newStr = str;
  if (regExpCaps.test(before)) {
    newStr = newStr.replace(
      before,
      after.replace(after[0], after[0].toUpperCase())
    );
  } else if (regExpSmall.test(before) && regExpCaps.test(after)) {
    newStr = newStr.replace(
      before,
      after.replace(after[0], after[0].toLowerCase())
    );
  } else {
    newStr = newStr.replace(before, after);
  }
  return newStr;
}

console.log(myReplace('Let us go to the store', 'store', 'mall'));
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
console.log(myReplace('I think we should look up there', 'up', 'Down'));
console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling'));
console.log(myReplace('His name is Tom', 'Tom', 'john'));
console.log(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
);
