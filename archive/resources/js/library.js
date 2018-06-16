//Calendar Widget JS

//Create Function to Display Date Stamp
function displayDateStamp(){
    console.log(Calendar.today());
}

//Create Function To Set Default Label Values for the Calendar
function setDefaultLabelValues(){
    
//    Get Today's Date
//    Extract Current Month and Current Year
//    Set Default Month and Year
    monthLabel.innerHTML    = monthOfYear();
    yearLabel.innerHTML     = currentYear();
}

//Create Function to Convert Day Index into the Actual Day of the Week
function dayOfWeek(){
    var dayIndex = Today.getDay();
    return day[dayIndex];
}

        //Create Function to Convert Month Index into the Actual Month of the Year
        function monthOfYear(){
            var monthIndex = Calendar.today().getMonth();
            return month[monthIndex];
        }

        //Create Function to Retreive Current Year
        function currentYear(){
            return Calendar.today().getFullYear();
        }

//Create Function to Display Previous Month
function displayPreviousMonth(){
    var previousMonthIndex, previousYear;
//    Retrieve Current Month from Calendar Label
    var currentMonthLabel   = document.getElementById("month");
    var currentMonth        = currentMonthLabel.innerHTML;
    
//    Retrieve Current Year from Calendar Label
    var currentYearLabel    = document.getElementById("year");
    var currentYear         = parseInt(currentYearLabel.innerHTML);
    
//    Find Index for Current Month
    var monthIndex          = month.indexOf(currentMonth);
    
//    If Current Month Index is Equal to ZERO, Previous Month Index is Equal to [11] December AND Previous Year is Equal to ( Current Year - 1 )
    if(monthIndex == 0){
        previousMonthIndex  = 11;
        previousYear        = currentYear - 1;
       }else{
               
        previousMonthIndex  = monthIndex - 1;
        previousYear        = currentYear;
           
       }

//    Using Month Index and Month Array, Set Current Month for Calendar Object
    currentMonth            = month[previousMonthIndex];
    currentYear             = previousYear;
    
//    Set Month and Year for Calendar Object
    Calendar.month          = currentMonth;
    Calendar.year           = currentYear;
    
//    Set Month and Year for Calendar Label
    monthLabel.innerHTML    = Calendar.month;
    yearLabel.innerHTML     = Calendar.year;
}

//Create Function to Display Next Month
function displayNextMonth(){
    var nextMonthIndex, nextYear;
//    Retrieve Current Month from Calendar Label
    var currentMonthLabel   = document.getElementById("month");
    var currentMonth        = currentMonthLabel.innerHTML;
    
//    Retrieve Current Year from Calendar Label
    var currentYearLabel    = document.getElementById("year");
    var currentYear         = parseInt(currentYearLabel.innerHTML);
    
//    Find Index for Current Month
    var monthIndex          = month.indexOf(currentMonth);
    
//    If Current Month Index is Equal to ELEVEN, Next Month Index is Equal to [0] January AND Next Year is Equal to ( Current Year + 1 )
    if(monthIndex == 11){
        nextMonthIndex  = 0;
        nextYear        = currentYear + 1;
       }else{
               
        nextMonthIndex  = monthIndex + 1;
        nextYear        = currentYear;
           
       }

//    Using Month Index and Month Array, Set Current Month for Calendar Object
    currentMonth            = month[nextMonthIndex];
    currentYear             = nextYear;
    
//    Set Month and Year for Calendar Object
    Calendar.month          = currentMonth;
    Calendar.year           = currentYear;
    
//    Set Month and Year for Calendar Label
    monthLabel.innerHTML    = Calendar.month;
    yearLabel.innerHTML     = Calendar.year;
}

//Create Function to Return Current Month in Calendar Label
function getMonthLabelValue(){
    return monthLabel.innerHTML;
}

//Create Function to Return Current Year in Calendar Label
function getYearLabelValue(){
    return parseInt(yearLabel.innerHTML);
}

//Create Function to generate Empty Cells in the First Week of a given month
function generateEmptyCells(emptyCells){
    for(var i = 0; i < emptyCells; i++){
        var tableDataElement = document.createElement("td");
        tableDataElement.setAttribute("class", "day");
        firstCalendarRowElement.appendChild(tableDataElement);
    }
}

//Create Function to generate Days in the First Row of a given month
function generateDays(numberOfDays){
    if(numberOfDays > 1){
        for(var i = 0; i < numberOfDays; i++){
//            Set Day Number
            var dayNumber           = i + 1;
//            Create Table Data Element
            var tdElement = document.createElement("td");
//            Set Table Data Element Attribute
            tdElement.setAttribute("class", "day");
//            Assign and Set Table Data Element Text
            var tdata       = dayNumber;
            var tDataText   = document.createTextNode(tableDataText);
            tdElement.appendChild(tDataText);
//            Add Table Data Element to First Table Row
            firstCalendarRowElement.appendChild(tableDataElement);
        }
   }else{
//            Create Table Data Element
            var tableDataElement = document.createElement("td");
//            Set Table Data Element Attribute
            tableDataElement.setAttribute("class", "day");
//            Assign and Set Table Data Element Text
            var tableDataText       = 1;
            var tableDataElement    = document.createTextNode(tableDataText);
//            Add Table Data Element to First Table Row
            firstCalendarRowElement.appendChild(tableDataElement);
       
   }
}

//Create Function to generate First Row of Days in the given month
function generateFirstRow(emptyCells){
    
    //Create Calendar First Table Row
    var firstCalendarRowElement = document.createElement("tr");
    var numberOfDays            = 7 - emptyCells;
    
    //Generate Empty Cells
        for(var i = 0; i < emptyCells; i++){
            
            var tableDataElement = document.createElement("td");
            tableDataElement.setAttribute("class", "day");
            firstCalendarRowElement.appendChild(tableDataElement);
        }    
    
    //Generate Days
    if(numberOfDays > 1){
        for(var i = 0; i < numberOfDays; i++){
//            Set Day Number
            var dayNumber           = i + 1;
//            Create Table Data Element
            var tdElement = document.createElement("td");
//            Set Table Data Element Attribute
            tdElement.setAttribute("class", "day");
//            Assign and Set Table Data Element Text
            var tdata       = dayNumber;
            var tDataText   = document.createTextNode(tableDataText);
            tdElement.appendChild(tDataText);
//            Add Table Data Element to First Table Row
            firstCalendarRowElement.appendChild(tableDataElement);
        }
   }else{
//            Create Table Data Element
            var tableDataElement = document.createElement("td");
//            Set Table Data Element Attribute
            tableDataElement.setAttribute("class", "day");
//            Assign and Set Table Data Element Text
            var tableDataText       = 1;
            var tableDataElement    = document.createTextNode(tableDataText);
//            Add Table Data Element to First Table Row
            firstCalendarRowElement.appendChild(tableDataElement);
       
   }
    
}


function isLeapYear(){
        var year = Calendar.currentYear;
        if(year){
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }
    }

//***** Dynamically Generate Calendar Main Rows  *****

function getMonthIndex(currentMonth){
    return month.indexOf(currentMonth);
}

function getNumDaysInMonth(month){
    var monthIndex = getMonthIndex(month);
    if(monthIndex == 1 && isLeapYear()){
        
        var numDays = 1 + daysInMonth[monthIndex];
        return numDays;
        
       }else{
           
           var numDays = daysInMonth[monthIndex];
           return numDays;
           
       }

}

function displayCalendarHead(){
    //Create Table Element and Set Table Class to .calendar-body
    var tableElement                = document.createElement("table");
    tableElement.setAttribute("class", tableClass);
    
    //Create Calendar Head and Set Table Header Row Class to .calendar-head
    var tableHeaderRowElement       = document.createElement("tr");
    tableHeaderRowElement.setAttribute("class", "calendar-head");
    
    //Loop through days of the week and INSERT <th> data for Table Header Row
    for(var i = 0; i < day.length; i++){
        
        //Create Table Header Data
        var tableHeaderDataElement          = document.createElement("th");
        tableHeaderDataElement.setAttribute("class", "dayLabel");
        tableHeaderDataElement.innerHTML    = day[i];
        tableHeaderRowElement.appendChild(tableHeaderDataElement);

    }

    var tableElementDOM = document.getElementsByTagName("table")[0];
    tableElementDOM.appendChild(tableHeaderRowElement);
    
}

function getRowStartDay(row, rowTwoStart){
    if(row >= 2){
       var startDay = 7 * (row - 2) + rowTwoStart;
       return startDay;
       }
       
       return false;
}

//function buildCalendar(){
//    displayCalendarHead();
//    displayCalendarBody();
//}