//Is The Current Year Leap Year
function isLeapYear(){
        var year = Calendar.get.currentYear();
        if(year){
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }
    }

    
//Get First Day Index
function getFirstDayIndex(){
    
    //Get New Date Object
    var newDate         = getNewDateObject();
    //Call the getDay() Method to find the Index of the First Day of the month
    var firstDayIndex   = newDate.getDay();
    
    return firstDayIndex;
    
}

//Get New Date Object
function getNewDateObject(){
    
    //Create New Month/Year String
    var newDateString   = getNewDateString();
    
    //Create New Date Object with newly created Month/Date String
    var newDate         = new Date(newDateString);
    
    return newDate;
}

//Get New Month/Year String
function getNewDateString(){
    //Get Current Month
    var currentMonth = Calendar.get.currentCalendarMonth();
    
    //Get Current Year
    var currentYear  = Calendar.get.currentCalendarYear();
    
    return currentMonth+" "+currentYear;
}

//Display Calendar Days
function displayCalendarDays(){
    
     var calenderHeadElement = document.createElement("tr");
    calenderHeadElement.setAttribute("class", "calendar-head");   
}

//Create Calendar Day Data Element
function createCalendarHeadDataElement(dayNumber){
    var td = document.createElement("td");
    td.setAttribute("class", "day");
    td.innerHTML = dayNumber;
    return td;
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

//Get Previous Calendar Month
function previousCalendarMonth(){
    
    console.log("Returning Previous Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentMonth();

    //Get IndexOf Current Month
    var monthIndex      = Calendar.get.monthIndex();
    
    //Get Current Year
    var currentYear     = Calendar.get.currentYear();
    
    //If IndexOf Current Month is [0] (Jan), the New Month Index is 11 and the New Year is Current Year - 1
    if(monthIndex == 0){
       
            var newMonthIndex   = 11;
            var newMonth        = Calendar.get.monthByIndex(newMonthIndex);
            var newYear         = currentYear - 1;
            
        
       }else{
           
            var newMonthIndex   = monthIndex - 1;
            var newMonth        = Calendar.get.monthByIndex(newMonthIndex);
            var newYear         = currentYear;
           
       }
    
    Calendar.set.label(newMonth, newYear);
    Calendar.reset();
    Calendar.display.new();
}

//Get Next Calendar Month
function nextCalendarMonth(){
    
    console.log("Returning Next Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentMonth();

    //Get IndexOf Current Month
    var monthIndex      = Calendar.get.monthIndex();
    
    //Get Current Year
    var currentYear     = Calendar.get.currentYear();
    
    //If IndexOf Current Month is [11] (Dec), the New Month Index is 0 and the New Year is Current Year + 1
    if(monthIndex == 11){
       
            var newMonthIndex   = 0;
            var newMonth        = Calendar.get.monthByIndex(newMonthIndex);
            var newYear         = currentYear + 1;
            
        
       }else{
           
            var newMonthIndex   = monthIndex + 1;
            var newMonth        = Calendar.get.monthByIndex(newMonthIndex);
            var newYear         = currentYear;
           
       }
    
    Calendar.set.label(newMonth, newYear);
    Calendar.reset();
    Calendar.display.new();
}

//Create Calendar Head Data Element
function createCalendarHeadDataElement(dayIndex){
    var th = document.createElement("th");
    th.setAttribute("class", "dayLabel");
    th.innerHTML = day[dayIndex];
    return th;
}