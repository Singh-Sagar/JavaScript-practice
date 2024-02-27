let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

// object assign method
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

// just keep in mind the syntax
// const journal = {a:"apple",b:"ball"}
// for (let entry of JOURNAL) {
//     console.log(`${} events.`);
//   }

// indexOf method for strings works for multiple characters too
console.log("one two three".indexOf("ee"));
// → 11