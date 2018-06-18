//Select Previous Month Control Element
var previousMonth   = Calendar.get.control.previousMonth();

//Select Next Month Control Element
var nextMonth       = Calendar.get.control.nextMonth();

//Add Event Listeners to Previous and Next Month Controls
previousMonth.addEventListener("click", function(){
    Calendar.get.previous();
});
nextMonth.addEventListener("click", function(){
    Calendar.get.next();
});

//Select Table Root Element
var tableElement = document.getElementById("calendar-body");

//Get Month Index
var monthIndex      = Calendar.data.today().getMonth();

//Get Month Name
var monthName       = Calendar.get.currentMonth();

//Get Day of Month
var dayOfMonth      = Calendar.data.today().getDay();

//Get Selected Year
var selectedYear    = Calendar.data.today().getFullYear();

Calendar.initialize();