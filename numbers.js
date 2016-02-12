var moduleNum = module.exports = {};

moduleNum.triangleArea = function (base, height) {
    if (typeof base === 'number' && typeof height === 'number') {
        var area = 0.5 * base * height;
        if (area > 0) {
            return area;
        } else {
            throw "Invaild input. The area should be a positive number."
        }
    } else {
        throw "Invaild input. The input should be numbers."
    }
};

moduleNum.perimeterOfTriangle = function (side1, side2, side3) {
    if (typeof side1 === 'number' && typeof side2 === 'number' && typeof side3 === 'number') {
        var perimeter = side1 + side2 + side3;
        if (perimeter > 0) {
            return perimeter;
        } else {
            throw "Invaild input. The perimeter should be a positive number."
        }
    } else {
        throw "Invaild input. The input should be numbers."
    }
};

moduleNum.areaOfSquare = function (side) {
    if (typeof side === 'number' && side > 0) {
        return Math.pow(side, 2);
    } else {
        throw "Invaild input. The side should be a positive number."
    }
};

moduleNum.perimeterOfSqure = function (side) {
    if (typeof side === 'number' && side > 0) {
        return side * 4;
    } else {
        throw "Invaild input. The side should be a positive number."

    }
};

moduleNum.areaOfCube = function (side) {
    if (typeof side === 'number' && side > 0) {
        return Math.pow(side, 3);
    } else {
        throw "Invaild input. The side should be a positive number."

    }
};

moduleNum.surfaceAreaOfCube = function (side) {
    if (typeof side === 'number' && side > 0) {
        return moduleNum.areaOfSquare(side) * 6;
    } else {
        throw "Invaild input. The side should be a positive number."

    }
};

moduleNum.perimeterOfCube = function (side) {
    if (typeof side === 'number' && side > 0) {
        return side * 12;
    } else {
        throw "Invaild input. The side should be a positive number."

    }
};

moduleNum.circumferenceOfCircle = function (radius) {
    if (typeof radius === 'number' && radius > 0) {
        return 2 * Math.PI * radius;
    } else {
        throw "Invaild input. The radius should be a positive number."

    }
};

moduleNum.areaOfCircle = function (radius) {
    if (typeof radius === 'number' && radius > 0) {
        return Math.PI * Math.pow(radius, 2);
    } else {
        throw "Invaild input. The radius should be a positive number."

    }
};