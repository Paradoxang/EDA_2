//push
let array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]

//pop
let array = [1, 2, 3];
let lastElement = array.pop();
console.log(array); // [1, 2, 3]
console.log(lastElement); // 3

//shift
let array = [1, 2, 3];
let firstElement = array.shift();
console.log(array); // [2, 3]
console.log(firstElement); // 1

//unshift
let array = [1, 2, 3];
array.unshift(0);
console.log(array); // [0, 1, 2, 3]

//map
let array = [1, 2, 3];
let mappedArray = array.map(x => x * 2);
console.log(mappedArray); // [2, 4, 6]

//filter
let array = [1, 2, 3];
let mappedArray = array.map(x => x * 2);
console.log(mappedArray); // [2, 4, 6]

//redue
let array = [1, 2, 3, 4];
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10

//forEach
let array = [1, 2, 3];
array.forEach(element => console.log(element));
// Output: 1, 2, 3 (en diferentes líneas)

//find
let array = [1, 2, 3, 4];
let foundElement = array.find(element => element > 2);
console.log(foundElement); // 3

//findIndex
let array = [1, 2, 3, 4];
let foundIndex = array.findIndex(element => element > 2);
console.log(foundIndex); // 2

//includes
let array = [1, 2, 3];
let includesTwo = array.includes(2);
console.log(includesTwo); // true

//indexOf
let array = [1, 2, 3, 2];
let indexOfTwo = array.indexOf(2);
console.log(indexOfTwo); // 1

//lastIndexOf
let array = [1, 2, 3, 2];
let lastIndexOfTwo = array.lastIndexOf(2);
console.log(lastIndexOfTwo); // 3

//slice
let array = [1, 2, 3, 4];
let slicedArray = array.slice(1, 3);
console.log(slicedArray); // [2, 3]

//splice
let array = [1, 2, 3, 4];
array.splice(1, 2, 5, 6);
console.log(array); // [1, 5, 6, 4]

//sort
let array = [3, 1, 4, 2];
array.sort();
console.log(array); // [1, 2, 3, 4]

//reverse
let array = [1, 2, 3];
array.reverse();
console.log(array); // [3, 2, 1]

//concat
let array1 = [1, 2];
let array2 = [3, 4];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // [1, 2, 3, 4]

//join
let array = [1, 2, 3];
let joinedString = array.join('-');
console.log(joinedString); // "1-2-3"

//every
let array = [2, 4, 6];
let allEven = array.every(num => num % 2 === 0);
console.log(allEven); // true

//some
let array = [1, 2, 3];
let hasEven = array.some(num => num % 2 === 0);
console.log(hasEven); // true

//fill
let array = [1, 2, 3, 4];
array.fill(0, 1, 3);
console.log(array); // [1, 0, 0, 4]

//flat
let array = [1, [2, 3], [4, [5]]];
let flatArray = array.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5]

//flatMap
let array = [1, 2, 3];
let flatMappedArray = array.flatMap(x => [x, x * 2]);
console.log(flatMappedArray); // [1, 2, 2, 4, 3, 6]
