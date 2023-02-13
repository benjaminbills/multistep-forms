const myObject = { name: 'John', age: 30 };

// Sample array
let myArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];

// Check if the object exists in the array
if (myArray.includes(myObject)) {
  // Remove the object if it exists
  myArray.splice(myArray.indexOf(myObject), 1);
} else {
  // Add the object if it doesn't exist
  myArray.push(myObject);
}

let newEl = myArray.find((el) => el.name === 'Bob');
console.log(newEl);
