/*
    ---------------------------------------------
   !!!!! Do not fix this file. !!!!
   ---------------------------------------------
    This is a file that is intentionally broken,
   meant to test out eslint.
*/

var thing = 'nothing';

// Console.log shouldn't be allowed
//what shouldn't exist
console.log(what);

// if the Rhino environment is added, java should be defined
// Shouldn't allow unused variables (no-unused-vars)
const globalJava = java;

// content should be defined as a global through t4 environemnt
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
