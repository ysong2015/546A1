var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

console.log(strModule.randomizeSentences("asd,asdqw dqwqw?qweqw!te."));

console.log(numberModule.triangleArea(10,10));
console.log(numberModule.perimeterOfTriangle(10,10,10));
console.log(numberModule.areaOfSquare(10));
console.log(numberModule.perimeterOfSqure(10));
console.log(numberModule.areaOfCube(10));
console.log(numberModule.surfaceAreaOfCube(10));
console.log(numberModule.perimeterOfCube(10));
console.log(numberModule.circumferenceOfCircle(10));
console.log(numberModule.areaOfCircle(10));
