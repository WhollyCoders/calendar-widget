//Calendar Widget JS

//Create Function to Display Date Stamp
function displayDateStamp(){
    console.log(Today);
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
    var monthIndex = Today.getMonth();
    return month[monthIndex];
}

//Create Function to Retreive Current Year
function currentYear(){
    return Today.getFullYear();
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
