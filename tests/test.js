/*
    ---------------------------------------------
   !!!!! Do not fix this file. !!!!
   ---------------------------------------------
    This is a file that is intentionally broken,
   meant to test out eslint.
*/

// Should not throw an error
// Since var `thing` is used later
var thing = 'nothing';

// Console.log shouldn't be allowed
//what shouldn't exist
console.log(what);

// if the Rhino environment is added, java should be defined
// (see tests/environments/test.js for to see a working example)
// Shouldn't allow unused variables (no-unused-vars)
const globalJava = java;

// content should be undefined here
// Since it is a global through t4 environemnt
// (see tests/environments/test.js for to see a working example)
content.getStuff(thing);

// No unused variables
const clee = new thing();

// shouldn't be able to reassign a const
clee = 'Chris';

// Prettier should ask for a trailing comma
// Should also complain about the double quotes
export const cdud = {
    pizza: "pie",
  // bad indentation
  indent: "bad"
};
