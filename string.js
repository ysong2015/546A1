var moduleString = module.exports = {};
var arrayModule = require("./arrays.js")

moduleString.occurrencesOfSubstring = function (main, substr) {
    var lastIndex = 0;
    var count = 0;
    if (typeof main !== 'string' || typeof substr !== 'string') {
        throw "The typeof input should be string.";
    } else {
        while (lastIndex != -1) {
            lastIndex = main.indexOf(substr, lastIndex);
            if (lastIndex != -1) {
                count++;
                lastIndex += substr.length;
            }
        }
        return count;
    }
};

moduleString.occurrencesOfSubstringInsensivie = function (main, substr) {
    if (typeof main !== 'string' || typeof substr !== 'string') {
        throw "The type of input should be string.";
    } else {
        var mainLowCase = main.toLowerCase();
        var substrLowCase = substr.toLowerCase();

        var lastIndex = 0;
        var count = 0;

        while (lastIndex != -1) {
            lastIndex = mainLowCase.indexOf(substrLowCase, lastIndex);
            if (lastIndex != -1) {
                count++;
                lastIndex += substrLowCase.length;
            }
        }
        return count;
    }
};

moduleString.randomizeSentences = function (paragraph) {
    if (typeof paragraph !== 'string') {
        throw "The type of input should be string.";
    } else {
        try {
            var paragraphArr = paragraph.split(/[\\.!\?,]/); //Split the text when meet ,.!?
            return arrayModule.randomized(paragraphArr).join(' ');
        } catch (e) {
            throw e.message;
        }
    }
};