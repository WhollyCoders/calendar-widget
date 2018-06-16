//Select Month and Year Calendar Label Elements
    var monthLabel      = Calendar.monthLabel();
    var yearLabel       = Calendar.yearLabel();

//Set Default Calendar Label to the Current Month and Year
    Calendar.initialize();

//Select Previous Month and Next Month Controls
    var previousMonth   = Calendar.previousMonthElement();
    var nextMonth       = Calendar.nextMonthElement();

//Add Event Listeners to Previous and Next Controls

    previousMonth.addEventListener("click", function(){
        Calendar.previousMonth();
    });

    nextMonth.addEventListener("click", function(){
        Calendar.nextMonth();
    });


//
////Build Calendar Body
////Dynamically Generate Calendar Head Element
//
////Create Table Element and Set Table Class to .calendar-body
//    var tableElement            = document.createElement("table");
//    tableElement.setAttribute("class", "calendar-body");
//
////Create Calendar Head and Set Table Header Row Class to .calendar-head
//    var tableHeaderRowElement   = document.createElement("tr");
//    tableHeaderRowElement.setAttribute("class", "calendar-head");
//
////Loop through days of the week and INSERT <th> data for Table Header Row
//    for(var i = 0; i < day.length; i++){
//
//        var tableHeaderDataElement  = document.createElement("th");
//        tableHeaderDataElement.setAttribute("class", "dayLabel");
//        var headerText              = day[i];
//        var tableHeaderText         = document.createTextNode(headerText);
//        tableHeaderDataElement.appendChild(tableHeaderText);
//        tableHeaderRowElement.appendChild(tableHeaderDataElement);
//
//    }
//
//    var tableElementDOM = document.getElementsByTagName("table")[0];
//    var tableBody       = document.getElementsByTagName("tbody")[0];
//
//    tableElementDOM.appendChild(tableHeaderRowElement);


////***** Dynamically Generate First Row Calendar Element *****
//
////Select Current Month and Current Year values from the Calendar Label
//var currentMonth    = Calendar.getMonth();
//var currentYear     = Calendar.getYear();
//var calString       = currentMonth+" "+currentYear;
//
////Using the Current Month and Current Year, CREATE A NEW DATE OBJECT in order to find out the INDEX OF the FIRST DAY of the SELECTED MONTH
//var newCalendar     = new Date(calString);
//var firstIndex      = newCalendar.getDay();
//
////Compute Number of Empty Cells AND Number of Days in the First Row... The sum of the two should equal 7
//var emptyCells      = firstIndex;
//
////Create Function to generate First Row of Days in the given month
//    //Create Calendar First Table Row
//    var firstCalendarRowElement = document.createElement("tr");
//    var numberOfDays            = 7 - emptyCells;
//    
//    //Generate Empty Cells
//        for(var i = 0; i < emptyCells; i++){
////            Create Table Data Element
//            var tdElement = document.createElement("td");
//            tdElement.setAttribute("class", "day");
//            firstCalendarRowElement.appendChild(tdElement);
//        }    
//    
//    //Generate Days
//    if(numberOfDays > 1){
//        for(var i = 0; i < numberOfDays; i++){
////            Set Day Number
//            var dayNumber           = i + 1;
//            
////            Create Table Data Element
//            var tdElement = document.createElement("td");
//            
////            Set Table Data Element Attribute
//            tdElement.setAttribute("class", "day");
//            
////            Assign and Set Table Data Element Text
//            tdElement.innerHTML = dayNumber;
//
////            Add Table Data Element to First Table Row
//            firstCalendarRowElement.appendChild(tdElement);
//        }
//   }else{
////            Create Table Data Element
//            var tableDataElement = document.createElement("td");
////            Set Table Data Element Attribute
//            tableDataElement.setAttribute("class", "day");
//       
////            Assign and Set Table Data Element Text
//            tableDataElement.innerHTML = 1;
//
////            Add Table Data Element to First Table Row
//            firstCalendarRowElement.appendChild(tableDataElement);
//       
//   }
//
//tableElementDOM.appendChild(firstCalendarRowElement);


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



