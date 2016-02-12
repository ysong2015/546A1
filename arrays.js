var moduleArr = module.exports = {};

moduleArr.shallowClone = function (baseArr) {
    var copyArr = baseArr.slice();
    return copyArr;
};

moduleArr.randomized = function (baseArr) {
    if(baseArr == null || baseArr.length == 1) return baseArr;
    var randomArr = moduleArr.shallowClone(baseArr);
    for(var i=0; i<randomArr.length; i++){
        var randomItemNum = Math.floor(Math.random()*(baseArr.length-1));      
        randomArr[i]= baseArr[randomItemNum];
        baseArr.splice(randomItemNum, 1); // Remove this random item from baseArr
    }
    
    return randomArr;
};