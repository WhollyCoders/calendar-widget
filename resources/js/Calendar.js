//Calendar Data Object

var data = {
    "day": ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    "month": ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    "daysInMonth": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};

// Calendar Object Literal
var Calendar        = {
    "data":{
        "day":data.day,
        "month": data.month,
        "daysInMonth": data.daysInMonth,
        "today": function(){
            var Today = new Date();
            return Today;
        },
        "firstRow":{
            "emptyCells": function(){
                return Calendar.get.emptyCells();
            },
            "days": function(){
                return Calendar.get.firstRowDays();
            }
        }
    },
    "initialize": function(){
        console.log(Calendar.data.today());
        Calendar.get.monthLabel().innerHTML = Calendar.display.defaultMonth();
        Calendar.get.yearLabel().innerHTML  = Calendar.display.defaultYear();
        Calendar.reset();
        Calendar.display.new();
        
    },
    "display":{
        "defaultMonth": function(){
            //Get Month Index
            var monthIndex  = Calendar.data.today().getMonth();
            //Get Month Name
            return Calendar.data.month[monthIndex];
        },
        "defaultYear": function(){
            
            return Calendar.data.today().getFullYear();
            
        },
        "calendarLabel": function(){
            
//        Calendar.get.monthLabel().innerHTML = Calendar.display.defaultMonth();
//        Calendar.get.yearLabel().innerHTML  = Calendar.display.defaultYear();
            
        },
        "calendarHeader": function(){},
        "calendarHead": function(){
            
            var calenderHeadElement = document.createElement("tr");
            calenderHeadElement.setAttribute("class", "calendar-head");

            for(var i = 0; i < Calendar.data.day.length; i++){
                
                var dayName = Calendar.data.day[i];
                var td = document.createElement("td");
                td.setAttribute("class", "dayLabel");
                td.innerHTML = dayName;
                calenderHeadElement.appendChild(td);
                
            }

            tableElement.appendChild(calenderHeadElement);
            
        },
        "calendarDays": function(){
            //Determine First Row Empty Cells
            //Compute First Row Days
            //Display First Row (empty cells + days)
            //Get Number of Days in Month
            //Compute Number of Full Rows
            //Compute Row Starting Value
            //Display Remaining Rows
        },
        "firstRow": function(){
            //Get First Row Data
            var firstRowData    = Calendar.get.firstRowData();
//            var currentDate     = Calendar.get.currentDate();
            //Create First Table Row Element and ADD First Row Class Attribute
            var firstRowElement = document.createElement("tr");
            firstRowElement.setAttribute("class", "first-row");
            
                //Display Empty Rows
                for(var eRow = 0; eRow < firstRowData[0]; eRow++){
                    var td = document.createElement("td");
                    td.setAttribute("class", "day");
                    firstRowElement.appendChild(td);
                }

                //Display First Row Days
                for(var fRow = 0; fRow < firstRowData[1]; fRow++){
                    var dayNumber   = fRow + 1;
                    var td          = document.createElement("td");
  
                            td.setAttribute("class", "day");
                            td.innerHTML    = dayNumber;
                            firstRowElement.appendChild(td);
                    
                }
            
            tableElement.appendChild(firstRowElement);
            
            
        },
        "fullRows": function(){
            //Get number of Full Rows
            var fullRows = Calendar.get.fullRows();
            var totalRows = fullRows + 1;
            var daysInMonth = Calendar.get.totalDaysInMonth();
            
            //Create Loop to Display Full Rows
            for(var uRow = 0; uRow < totalRows; uRow++){
                //Compute Row Starting Starting Day
                var startDay    = Calendar.get.firstStartingDay();
                var startingDay = startDay + (7 * uRow);
                var currentDate = Calendar.get.currentDate();
                //Create Table Row Element
                var rowElement = document.createElement("tr");
                rowElement.setAttribute("class", "full-row");
                
                    //Create Loop to Display Days in Full Weeks
                    for(var dRow = 0; dRow < Calendar.data.day.length; dRow++){
                        
                        //Compute Day Number
                        var dayNumber = startingDay + dRow;
                        if(dayNumber > daysInMonth){ break; }
                        //Create Table Data Element
                        var td = document.createElement("td");
                                               
                        td.setAttribute("class", "day");
                        td.innerHTML = dayNumber;
                        rowElement.appendChild(td);
                        
                    }
                
                //Display Last Row Days
//                var lastRowDays = Calendar.get.lastRowDays();
//                
//                if(lastRowDays){
//                    
//                    //Display Last Row Days
//                    var lastRowElement = document.createElement("tr");
//                    lastRowElement.setAttribute("class", "last-row");
//                    
//                    
//                   
//                   }
//                    
                tableElement.appendChild(rowElement);
                
            }
        },
        "lastRow": function(){
            
            
        },
        "previousMonth": function(){
            
            
            
        },
        "nextMonth": function(){
            
            
        },
        "new": function(){
            //Display Calendar Head
            Calendar.display.calendarHead();
            //Display Calendar Days
            Calendar.display.firstRow();
            Calendar.display.fullRows();
            Calendar.display.lastRow();
        }
    },
    "get":{
        "control":{
            "previousMonth": function(){
                
                return document.getElementById("previous-month");
                
            },
            "nextMonth": function(){
                
                return document.getElementById("next-month");
                
            },
        },
        "currentDate": function(){
            
            var newDate     = Calendar.get.newDate();
            var currentDate = newDate.getDate();
            
            return currentDate;
            
        },        
        "currentMonth": function(){
            
            return Calendar.get.monthLabel().innerHTML;
            
        },        
        "currentYear": function(){
            
            return parseInt(Calendar.get.yearLabel().innerHTML);
            
        },
        "emptyCells": function(){
            
            return Calendar.get.firstDayIndex();
            
        },
        "firstDayIndex": function(){
            
            var firstDayIndex   = Calendar.get.newDate().getDay();
            return firstDayIndex;
            
        },
        "firstRowData": function(){
            var emptyCells      = Calendar.get.emptyCells();
            var firstRowDays    = Calendar.get.firstRowDays();
            
            return [emptyCells, firstRowDays];
        },
        "firstRowDays": function(){
            
            var emptyCells = Calendar.get.emptyCells();
            var firstRowDays = 7 - emptyCells;
            
            return firstRowDays;
        },
        "firstStartingDay": function(){
            
            var firstRowDays        = Calendar.get.firstRowDays();
            var firstStartingDay    = firstRowDays + 1;
            
            return firstStartingDay;
            
        },
        "fullRows": function(){
            
            //Get Full Calendar Rows
            return Math.floor((Calendar.get.totalDaysInMonth() - Calendar.get.firstRowDays()) / 7);
            
        },
        "isLeapYear": function(){
            
            var year = Calendar.get.currentYear();
            if(year){
                return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
            }
        },
        "lastRowDays": function(){
            
            //Compute Last Row Days 
            return (Calendar.get.totalDaysInMonth() - Calendar.get.firstRowDays()) % 7;

        },
        "minimumRows": function(){
            
            return Calendar.get.fullRows() + 1;
            
        },
        "monthData":{
            
            "previous": function(){},
            "next": function(){}
            
        },
        "monthByIndex": function(monthIndex){
            
            return Calendar.data.month[monthIndex];
        },
        "monthIndex": function(){
            
            var currentMonth    = Calendar.get.currentMonth();
            var monthIndex      = Calendar.data.month.indexOf(currentMonth);
            
            return monthIndex;
        },
        "monthLabel": function(){
            
            return document.getElementById("month");
        },
        "newDate": function(){

            //Create New Date Object with newly created Month/Date String
                var newDate = new Date(Calendar.get.newDateString());

            return newDate;           
        },
        "newDateString": function(){

            return Calendar.get.currentMonth()+" "+Calendar.get.currentYear();
            
        },
        "next": function(){
            
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
        },
        "previous": function(){

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
        },
        "totalCalendarRows": function(){
            
            //Compute Total Calendar Rows
 
                if(Calendar.get.lastRowDays()){

                    return Calendar.get.minimumRows() + 1;

                   }else{

                       return Calendar.get.minimumRows();

                   }

        },
        "totalDaysInMonth": function(){
            
            //Get New Date Object
            var newDate         = Calendar.get.newDate();
            //Get Month Index
            var monthIndex      = newDate.getMonth();
            var numDaysInMonth  = data.daysInMonth[monthIndex];
            if(Calendar.get.isLeapYear() && monthIndex == 1){

                numDaysInMonth = numDaysInMonth + 1;
        
            }
    
            return numDaysInMonth;
            
        },
        "yearLabel": function(){
            
            return document.getElementById("year");
            
        }
    },
    "set":{
        
        "newCalendarMonth":function(month){
            Calendar.get.monthLabel().innerHTML = month;
        },
        "newCalendarYear": function(year){
            Calendar.get.yearLabel().innerHTML = year;
        },
        "label": function(month, year){
            Calendar.set.newCalendarMonth(month);
            Calendar.set.newCalendarYear(year);
            Calendar.reset();
            Calendar.display.new();
        }
    },
    "reset": function(){
        
        var tableElement = document.getElementById("calendar-body").innerHTML = "";
        
    }
};
