var moduleObj = module.exports = {};

moduleObj.shallowClone = function (baseObject) {
    var copyObject = baseObject;
    return copyObject;
};

moduleObj.deepClone = function (baseObject) {
    if (baseObject == null || typeof baseObject !== 'object') {
        return baseObject;
    }
    var copyObject = baseObject.constructor(); //give copyObject the original obj's constructor
    for (var key in baseObject){
        if (baseObject.hasOwnProperty(key)) {
            copyObject[key]=moduleObj.deepClone(baseObject[key]);            
        }
    }
    return copyObject;
};

// moduleObj.cClone = function (baseObject) {
//     var obj = moduleObj.deepClone(baseObject);
//     baseObject.foo.bar=1;
//     console.log(baseObject);
//     console.log(obj);
// };