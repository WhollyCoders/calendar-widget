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





