

// Rhino environment: java should be defined as a global
const globalJava = java;

// t4 environemnt: content should be defined as a global
content.getStuff(thing);

// webpack environment: __webpack_public_path__ Should be defined as a global
if (__webpack_public_path__) {
    console.info(process.env)
}

