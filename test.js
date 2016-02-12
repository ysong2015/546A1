var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

console.log(strModule.occurrencesOfSubstring("Abababc", "ab"));
console.log(strModule.occurrencesOfSubstringInsensivie("Abababc", "ab"));
console.log(strModule.randomizeSentences("Hello, world! My name is Phil. This is a wonderful day because the snow did not delay me. The class was very sad that class was still, right? Of course they were."));

console.log(numberModule.triangleArea(10, 10));
console.log(numberModule.perimeterOfTriangle(10, 10, 10));
console.log(numberModule.areaOfSquare(10));
console.log(numberModule.perimeterOfSqure(10));
console.log(numberModule.areaOfCube(10));
console.log(numberModule.surfaceAreaOfCube(10));
console.log(numberModule.perimeterOfCube(10));
console.log(numberModule.circumferenceOfCircle(10));
console.log(numberModule.areaOfCircle(10));

var obj = { foo: { bar: 2 } };
console.log(objectModule.shallowClone(obj));
console.log(objectModule.deepClone(obj));

var arr = [1, 2, 3, 4, 5];
console.log(arrayModule.shallowClone(arr));
console.log(arrayModule.randomized(arr));

var date1 = new Date(2016, 2, 1); // Mar/1/2016
var date2 = new Date(2016, 1, 1); // Feb/1/2016
console.log(dateModule.daysUntil(date1));
console.log(dateModule.daysLeftInYear());
console.log(dateModule.daysSince(date2));
console.log(dateModule.nextFridayTheThirteenth());