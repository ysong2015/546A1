var moduleNum = module.exports = {};

moduleNum.triangleArea = function (base, height) {
    return 0.5*base*height;
};

moduleNum.perimeterOfTriangle = function (side1, side2, side3) {
    return side1+side2+side3;
};

moduleNum.areaOfSquare = function (side) {
     return Math.pow(side, 2);
};

moduleNum.perimeterOfSqure = function (side) {
    return side * 4;
};

moduleNum.areaOfCube = function (side) {
    return Math.pow(side, 3);
};

moduleNum.surfaceAreaOfCube = function (side) {
    return moduleNum.areaOfSquare(side)*6;
};

moduleNum.perimeterOfCube = function (side) {
    return side*12;
};

moduleNum.circumferenceOfCircle = function (radius) {
    return 2*Math.PI*radius;
};

moduleNum.areaOfCircle = function (radius) {
    return Math.PI * Math.pow(radius, 2);
};