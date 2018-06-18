//Create Calendar Head Data Element
function createCalendarHeadDataElement(dayIndex){
    var th = document.createElement("th");
    th.setAttribute("class", "dayLabel");
    th.innerHTML = day[dayIndex];
    return th;
}

//Display Calendar Head
function displayCalendarHead(){
    
    var calenderHeadElement = document.createElement("tr");
    calenderHeadElement.setAttribute("class", "calendar-head");
    
    for(var i = 0; i < day.length; i++){
        var th = createCalendarHeadDataElement(i);
        calenderHeadElement.appendChild(th);
    }
    
    tableElement.appendChild(calenderHeadElement);
}

//Display First Row
function displayFirstRow(){
    
    //Create First Row Element
    var firstCalendarRowElement = document.createElement("tr");
    firstCalendarRowElement.setAttribute("class", "first-row");
    
        for(var i = 0; i < Calendar.get.firstRowDays(); i++){
            var count = 1;
            while(count <= Calendar.get.emptyCells()){
                console.log("Generating Empty Cells...");
                    var td = document.createElement("td");
                    td.setAttribute("class", "day");
                    firstCalendarRowElement.appendChild(td);
                    count++;
                  }
                    var td = document.createElement("td");
                    td.setAttribute("class", "day");
                    var dayNumber = i + 1;
                    td.innerHTML = dayNumber;
                    firstCalendarRowElement.appendChild(td);
        }

        tableElement.appendChild(firstCalendarRowElement);
    
}



        //Display First Calendar Row
        function displayFirstRow1(){
                //Display First Row
                var firstCalendarRowElement = document.createElement("tr");
                firstCalendarRowElement.setAttribute("class", "first-row");

                    for(var i = 0; i < firstRowDays; i++){
                        var count = 1;
                        while(count <= emptyCells){
                                var td = document.createElement("td");
                                td.setAttribute("class", "day");
                                tr.appendChild(td);
                                count++;
                              }
                                var td = document.createElement("td");
                                td.setAttribute("class", "day");
                                var dayNumber = i + 1;
                                td.innerHTML = dayNumber;
                                firstCalendarRowElement.appendChild(td);
                    }

                    tableElement.appendChild(firstCalendarRowElement);
        }