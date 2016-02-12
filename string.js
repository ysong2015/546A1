var moduleString = module.exports = {};

moduleString.occurrencesOfSubstring = function (main, substr){
    var lastIndex = 0;
    var count = 0;

    while(lastIndex != -1){
        lastIndex = main.indexOf(substr,lastIndex);
        if(lastIndex != -1){
        count ++;
        lastIndex += substr.length();
        }
    }
    return count;
};

moduleString.occurrencesOfSubstringInsensivie = function (main, substr){
    var mainLowCase = main.toLowerCase();
    var substrLowCase = substr.toLowerCase();
    
    var lastIndex = 0;
    var count = 0;

    while(lastIndex != -1){
        lastIndex = mainLowCase.indexOf(substrLowCase,lastIndex);
        if(lastIndex != -1){
        count ++;
        lastIndex += substrLowCase.length();
        }
    }
    return count;
};

moduleString.randomizeSentences = function (paragraph) {
    var paragraphArr = paragraph.split(/[\\.!\?,]/); //Split the text when meet ,.!?
    paragraphArr.move(0,paragraphArr.length-1);
    return paragraphArr.join(' ');           
};

// var getRandomInt = function (min, max) {
//     return Math.floor(Math.random()*(max-min+1) + min);
// };

Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from,1)[0]);
};