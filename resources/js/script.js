//Create New Date Object
    var Today           = new Date();

//Select Month and Year Calendar Label Elements
    var monthLabel      = document.getElementById("month");
    var yearLabel       = document.getElementById("year");

//Set Default Calendar Label to the Current Month and Year
    setDefaultLabelValues();

//Display Initial Date Stamp in the Console
    displayDateStamp();

//Select Previous Month and Next Month Controls
    var previousMonth   = document.getElementById("previous");
    var nextMonth       = document.getElementById("next");

//Add Event Listeners to Previous and Next Controls

//When Previous Month Control is Clicked, the Previous Month will be displayed in the Calendar Label
previousMonth.addEventListener("click", displayPreviousMonth);

//When Next Month Control is Clicked, the Next Month will be displayed in the Calendar Label
nextMonth.addEventListener("click", displayNextMonth);



//Build Calendar Body
//Create Table Element
var tableElement            = document.createElement("table");

//Set Table Class to .calendar-body
tableElement.setAttribute("class", "calendar-body");

//Create Calendar Head
var tableHeaderRowElement   = document.createElement("tr");

//Set Table Header Row Class to .calendar-head
tableHeaderRowElement.setAttribute("class", "calendar-head");

//Loop through days of the week and INSERT <th> data for Table Header Row
for(var i = 0; i < day.length; i++){
    
    var tableHeaderDataElement  = document.createElement("th");
    tableHeaderDataElement.setAttribute("class", "dayLabel");
    var headerText              = day[i];
    var tableHeaderText         = document.createTextNode(headerText);
    tableHeaderDataElement.appendChild(tableHeaderText);
    tableHeaderRowElement.appendChild(tableHeaderDataElement);
    
}

var tableElementDOM = document.getElementsByTagName("table")[0];
var tableBody = document.getElementsByTagName("tbody")[0];

tableElementDOM.appendChild(tableHeaderRowElement);



