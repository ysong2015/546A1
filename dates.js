var moduleDates = module.exports = {};

moduleDates.daysUntil = function (someDate) {
    return Math.floor(Math.abs((Date.now()-someDate.getTime())/(1000*60*60*24)))+1;
};

moduleDates.daysLeftInYear = function () {
    var endDateofYear = new Date (2016,11,31); // Dec/31/2016
    return Math.floor(Math.abs((Date.now()-endDateofYear.getTime())/(1000*60*60*24)))+1;
 
};

moduleDates.daysSince = function (someDate) {
    
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