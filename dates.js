var moduleDates = module.exports = {};

moduleDates.daysUntil = function (someDate) {
    var date = new Date();
    if(typeof someDate == typeof date){
            var days = Math.floor((someDate.getTime()-Date.now())/(1000*60*60*24))+1;
            if (days>=0) {
                return days;
            }else{
                throw "Invaild input, the input date should be after current date.";
            }               
    } else{
        throw "Invaild input, check the if your input is a date object.";
    }
};

moduleDates.daysLeftInYear = function () {
    var endDateofYear = new Date (2016,11,31); // Dec/31/2016
    return Math.floor((endDateofYear.getTime()-Date.now())/(1000*60*60*24))+1;
};

moduleDates.daysSince = function (someDate) {
    var date = new Date();
    if(typeof someDate == typeof date){
            var days = Math.floor((Date.now()-someDate.getTime())/(1000*60*60*24))+1;
            if (days>=0) {
                return days;
            }else{
                throw "Invaild input, the input date should be before current date.";
            }
    } else{
        throw "Invaild input, check the if your input is a date object.";
    } 
};

moduleDates.nextFridayTheThirteenth = function () {
    var date = new Date();
    date.setTime(Date.now());
    var search = true;
    while(search){
        if (date.getUTCDay() !== 5 || date.getUTCDate() !== 13) {
           date.setTime(date.getTime()+24*60*60*1000);  
        }else{
           search = false;
        }        
    }
    return date.toDateString();
};