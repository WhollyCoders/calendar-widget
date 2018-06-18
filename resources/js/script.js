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

//Add Event Listeners to Previous and Next Month Controls
previousMonth.addEventListener("click", previousCalendarMonth);
nextMonth.addEventListener("click", nextCalendarMonth);

//Select Table Root Element (id="calendar-body")
var tableElement = document.getElementById("calendar-body");



//Get Month Index
var monthIndex      = Today.getMonth();

//Get Month Name
var monthName       = getMonthNameFromArrayIndex(monthIndex);

//Get Day of Month
var dayOfMonth      = Today.getDay();

//Get Selected Year
var selectedYear    = Today.getFullYear();



//Display New Calendar By Using the Data in the Calendar Label (Month, Year)
//function displayNewCalendar(){
//    
//    //Get First Day Index
//    var firstDayIndex       = getFirstDayIndex();
//    
//    //Get Total Days In Month
//    var totalDaysInMonth    = getDaysInMonth();
//    
//    //Set the Empty Cell variable to the Value of the First Day Index
//    var emptyCells          = firstDayIndex;
//    
//    //Compute the Number of First Row Days using the Empty Cells (firstRowDays = 7 - emptyCells)
//    var firstRowDays = 7 - emptyCells;
//    
//    //Compute the number of Full Rows by using the FIRST ROW DAYS and the TOTAL DAYS IN THE MONTH Math.floor((TotalDays - FirstRowDays) / 7)
//    var fullRows = getFullRows(firstRowDays, totalDaysInMonth);
//    
//    //Compute Last Row Days [(TotalDays - FirstRowDays) % 7]
//    var lastRowDays = getLastRowDays(firstRowDays, totalDaysInMonth);
//    
//    //Compute TOTAL CALENDAR ROWS (FirstRow + NumberOfFullRows + LastRow)
//    var totalCalendarRows = getTotalRows(fullRows, lastRowDays);
    
    //Display First Row
//    var firstCalendarRowElement = document.createElement("tr");
//    firstCalendarRowElement.setAttribute("class", "first-row");
//    
//        for(var i = 0; i < firstRowDays; i++){
//            var count = 1;
//            while(count <= emptyCells){
//                    var td = document.createElement("td");
//                    td.setAttribute("class", "day");
//                    tr.appendChild(td);
//                    count++;
//                  }
//                    var td = document.createElement("td");
//                    td.setAttribute("class", "day");
//                    var dayNumber = i + 1;
//                    td.innerHTML = dayNumber;
//                    firstCalendarRowElement.appendChild(td);
//        }
//
//        tableElement.appendChild(firstCalendarRowElement);
            //Display Empty Cells
            
            //Display First Row Days
    
    //Display Full Rows
    
    //Display Last Row


////Display First Row
//function displayFirstRow(){
//    
//    //Create First Row Element
//    var firstCalendarRowElement = document.createElement("tr");
//    firstCalendarRowElement.setAttribute("class", "first-row");
//    
//        for(var i = 0; i < Calendar.get.firstRowDays(); i++){
//            var count = 1;
//            while(count <= Calendar.get.emptyCells()){
//                console.log("Generating Empty Cells...");
//                    var td = document.createElement("td");
//                    td.setAttribute("class", "day");
//                    tr.appendChild(td);
//                    count++;
//                  }
//                    var td = document.createElement("td");
//                    td.setAttribute("class", "day");
//                    var dayNumber = i + 1;
//                    td.innerHTML = dayNumber;
//                    firstCalendarRowElement.appendChild(td);
//        }
//
//        tableElement.appendChild(firstCalendarRowElement);
//    
//}


//
////Compute Total Calendar Rows
//function getTotalRows(fullRows, lastRowDays){
//    var minimumRows = fullRows + 1;
//    if(lastRowDays){
//        
//        var totalRows = minimumRows + 1;
//        
//       }else{
//           
//           totalRows = minimumRows;
//           
//       }
//    
//    return totalRows;
//}

////Compute Last Row Days 
//function getLastRowDays(firstRowDays, totalDaysInMonth){
//    return (totalDaysInMonth - firstRowDays) % 7;
//}
//    
////Get Full Calendar Rows
//function getFullRows(firstRowDays, totalDaysInMonth){
//    return Math.floor((totalDaysInMonth - firstRowDays) / 7);
//}

////Get Total Days in Month
//function getDaysInMonth(){
//    //Get New Date Object
//    var newDate     = getNewDateObject();
//    //Get Month Index
//    var monthIndex  = newDate.getMonth();
//    var numDaysInMonth = daysInMonth[monthIndex];
//    if(isLeapYear() && monthIndex == 1){
//        
//        numDaysInMonth = numDaysInMonth + 1;
//        
//       }
//    
//    return numDaysInMonth;
//}

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

//        //Display First Calendar Row
//        function displayFirstRow1(){
//                //Display First Row
//                var firstCalendarRowElement = document.createElement("tr");
//                firstCalendarRowElement.setAttribute("class", "first-row");
//
//                    for(var i = 0; i < firstRowDays; i++){
//                        var count = 1;
//                        while(count <= emptyCells){
//                                var td = document.createElement("td");
//                                td.setAttribute("class", "day");
//                                tr.appendChild(td);
//                                count++;
//                              }
//                                var td = document.createElement("td");
//                                td.setAttribute("class", "day");
//                                var dayNumber = i + 1;
//                                td.innerHTML = dayNumber;
//                                firstCalendarRowElement.appendChild(td);
//                    }
//
//                    tableElement.appendChild(firstCalendarRowElement);
//        }


////Display Calendar Head
//function displayCalendarHead(){
//    
//    var calenderHeadElement = document.createElement("tr");
//    calenderHeadElement.setAttribute("class", "calendar-head");
//    
//    for(var i = 0; i < day.length; i++){
//        var th = createCalendarHeadDataElement(i);
//        calenderHeadElement.appendChild(th);
//    }
//    
//    tableElement.appendChild(calenderHeadElement);
//}

////Create Calendar Head Data Element
//function createCalendarHeadDataElement(dayIndex){
//    var th = document.createElement("th");
//    th.setAttribute("class", "dayLabel");
//    th.innerHTML = day[dayIndex];
//    return th;
//}

//Get Previous Calendar Month
function previousCalendarMonth(){
    console.log("Returning Previous Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentMonth();

    //Get IndexOf Current Month
    var monthIndex      = getArrayIndexFromMonthName(currentMonth);
    
    //Get Current Year
    var currentYear     = Calendar.get.currentYear();
    
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
    Calendar.reset();
    Calendar.display.new();
}

//Get Next Calendar Month
function nextCalendarMonth(){
    console.log("Returning Next Month...");
    
    //Get Current Month
    var currentMonth    = Calendar.get.currentMonth();

    //Get IndexOf Current Month
    var monthIndex      = getArrayIndexFromMonthName(currentMonth);
    
    //Get Current Year
    var currentYear     = Calendar.get.currentYear();
    
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
    Calendar.reset();
    Calendar.display.new();
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