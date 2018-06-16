function displayCalendarBody(){
console.log("Creating Calendar Body...");  
//Get Current month
var currentMonth        = Calendar.currentMonth;
//Get Current Year
var currentYear         = Calendar.currentYear;
//Create New Date Object
var dateString          = currentMonth+" "+currentYear;
var newDate             = new Date(dateString);
//Find out Number of Days in the Current Month
var monthIndex          = newDate.getMonth();
var numDaysInMonth      = daysInMonth[monthIndex];
//Find out the (DAY INDEX) for FIRST DAY of the given month
var firstDayIndex       = newDate.getDay();
//Determine the number of EMPTY CELLS in FIRST WEEK by the First Day Index
var firstWeekEmptyCells = firstDayIndex
//Determine the number of days in the FIRST WEEK (7 - EMPTY CELLS)
var daysInFirstWeek     = 7 - firstWeekEmptyCells;
// Determine ROW TWO Start Day
var rowTwoStart         = daysInFirstWeek + 1;
// Determine the number of FULL WEEKS (numDaysInMonth - daysInFirstWeek) / 7
var numberOfFullWeeks   = (numDaysInMonth - daysInFirstWeek) / 7;
//Determine number of days in LAST WEEK
var daysInLastWeek      = (numDaysInMonth - daysInFirstWeek) % 7;
//Compute total number of Calendar Rows
var calendarRows        = function(numberOfFullWeeks, daysInLastWeek){
    
        if(daysInLastWeek){

            var rows = numberOfFullWeeks + 2;

           }else{

               var rows = numberOfFullWeeks + 1;
           }

        return rows;
    };
    
// Create loop to generate Calendar Rows
    for(var cRows = 0; cRows < calendarRows(numberOfFullWeeks, daysInLastWeek); cRows++){
        console.log("Building Row: "+(cRows + 1)+"...");
//        While building First Row, Check for Empty Cells
        if(cRows == 0){
            //***** Check to see if number of EMPTY CELLS is Greater than ZERO,
            if(firstWeekEmptyCells > 0){   
//              ***** Create Table Row Element *****
                var trElement = document.createElement("tr");
                trElement.setAttribute("class", "first-calendar-row");
                
//              ***** GENERATE EMPTY CELLS *****
                for(var eCells = 0; eCells < firstWeekEmptyCells; eCells++){
                    
    //              ***** Create Table Data Element *****
                    var tdElement = document.createElement("td");
                    tdElement.setAttribute("class", "day");
                    trElement.appendChild(tdElement);
                    
                }
                
//              ***** GENERATE First Row Days *****
                for(dCells = 0; dCells < daysInFirstWeek; dCells++){
                    
                    var dayNumber = dCells + 1;
    //              ***** Create Table Data Element *****
                    var tdElement = document.createElement("td");
                    tdElement.setAttribute("class", "day");
                    tdElement.innerHTML = dayNumber;
                    trElement.appendChild(tdElement);
                    
                }                
                
                var tableElementDOM = document.getElementsByTagName("table")[0];
                tableElementDOM.appendChild(trElement);
                
            }
         }else{
//              ***** Create Table Row Element *****
                var trElement = document.createElement("tr");
                trElement.setAttribute("class", "calendar-row");
             // ***** GENERATE Full Rows *****
                for(var fdCells = 0; fdCells < numDaysInMonth; fdCells++){
                    var row = cRows + 1;
                    var startDay = getRowStartDay(row, rowTwoStart);
                    for(var fd = 0; fd < day.length; fd++){
                        var data = startDay + fd; 
                        if(data > startDay + 6){
                            break;
                        }
    //              ***** Create Table Data Element *****
                    var tdElement = document.createElement("td");
                    tdElement.setAttribute("class", "day");
                    tdElement.innerHTML = data;
                    trElement.appendChild(tdElement);
                        
                    }

                    
                }                
                
                var tableElementDOM = document.getElementsByTagName("table")[0];
                tableElementDOM.appendChild(trElement);
             
         }
        
    } 
  
}

