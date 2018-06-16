// New Today Date Object
var Today           = new Date();

//Select Month Label Element
var monthLabel      = document.getElementById("month");

//Select Year Label Element
var yearLabel       = document.getElementById("year");

//Select Previous Month Control Element
var previousMonth   = document.getElementById("previous-month");

//Select Next Month Control Element
var nextMonth       = document.getElementById("next-month");

//Day Array Data
var day             = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

//Month Array Data
var month           = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

//Days in Month Array Data
var daysInMonth     = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//Get Month Index
var monthIndex      = Today.getMonth();

//Get Month Name
var monthName       = getMonthNameFromArrayIndex(monthIndex);

//Get Day of Month
var dayOfMonth      = Today.getDay();

//Get Selected Year
var selectedYear    = Today.getFullYear();


// Calendar Object Literal
var Calendar        = {
    "initialize": function(){
        console.log(Today);
        monthLabel.innerHTML = monthName;
        yearLabel.innerHTML = selectedYear;
        
    },
    "display":{
        "defaultMonth": monthName,
        "defaultYear": selectedYear,
        "new": function(){
            //Get Current Month
            //Get Current Year
        }
    },
    "get":{
        "currentCalendarMonth":function(){
            return monthLabel.innerHTML;
        },
        "currentCalendarYear": function(){
            return parseInt(yearLabel.innerHTML);
        },
        "previousMonth": function(){
            console.log("Return Previous Month...");
        },
        "nextMonth": function(){
            console.log("Return Next Month...");
        }
    },
    "set":{
        "newCalendarMonth":function(month){
            monthLabel.innerHTML = month;
        },
        "newCalendarYear": function(year){
            yearLabel.innerHTML = year;
        }
    }
};



//Add Event Listeners to Previous and Next Month Controls
previousMonth.addEventListener("click", previousCalendarMonth);
nextMonth.addEventListener("click", nextCalendarMonth);

//Get Previous Calendar Month
function previousCalendarMonth(){
    console.log("Returning Previous Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentCalendarMonth();

    //Get IndexOf Current Month
    var monthIndex      = getArrayIndexFromMonthName(currentMonth);
    
    //Get Current Year
    var currentYear     = Calendar.get.currentCalendarYear();
    
    //If IndexOf Current Month is [0] (Jan), the New Month Index is 11 and the New Year is Current Year - 1
    if(monthIndex == 0){
       
            var newMonthIndex   = 11;
            var newMonth        = getMonthNameFromArrayIndex(newMonthIndex);
            var newYear         = currentYear - 1;
            
        
       }else{
           
            var newMonthIndex   = monthIndex - 1;
            var newMonth        = getMonthNameFromArrayIndex(newMonthIndex);
            var newYear         = currentYear;
           
       }
    
    setNewCalendarLabel(newMonth, newYear);
}

//Get Next Calendar Month
function nextCalendarMonth(){
    console.log("Returning Next Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentCalendarMonth();

    //Get IndexOf Current Month
    var monthIndex      = getArrayIndexFromMonthName(currentMonth);
    
    //Get Current Year
    var currentYear     = Calendar.get.currentCalendarYear();
    
    //If IndexOf Current Month is [11] (Dec), the New Month Index is 0 and the New Year is Current Year + 1
    if(monthIndex == 11){
       
            var newMonthIndex   = 0;
            var newMonth        = getMonthNameFromArrayIndex(newMonthIndex);
            var newYear         = currentYear + 1;
            
        
       }else{
           
            var newMonthIndex   = monthIndex + 1;
            var newMonth        = getMonthNameFromArrayIndex(newMonthIndex);
            var newYear         = currentYear;
           
       }
    
    setNewCalendarLabel(newMonth, newYear);
}

//Set New Calendar Label
function setNewCalendarLabel(month, year){
    //Set New Calendar Month
    Calendar.set.newCalendarMonth(month);
    //Set New Calendar Year
    Calendar.set.newCalendarYear(year);
}

//Return Array Index From Month Name
function getArrayIndexFromMonthName(monthName){
    return month.indexOf(monthName);
}
//Return Month Using an Array Index as an Argument
function getMonthNameFromArrayIndex(index){
    return month[index];
}

Calendar.initialize();