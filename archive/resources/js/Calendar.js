//Calendar Object Literal
var Calendar = {
    "day": day, //Array of Days of the Week
    "month": month, // Array of Months of the Year
    "initialize": function(){
        console.log(this.today());
        console.log("Welcome WhollyCoder...");
        this.setDefault();
        this.monthLabel().innerHTML = this.defaultMonth;
        this.yearLabel().innerHTML  = this.defaultYear;
        this.build();
    },
    "today": function(){
        return new Date();
    },
    "monthLabel": function(){
        return document.getElementById("month");
    },
    "yearLabel": function(){
        return document.getElementById("year");
    },
    "previousMonthElement": function(){
        return document.getElementById("previous");
    },
    "nextMonthElement": function(){
        return document.getElementById("next");
    },
    "defaultMonth": "",
    "defaultYear": 0,
    "setDefault": function(){
//        var Today               = new Date();
        var monthIndex          = this.today().getMonth();
        Calendar.defaultMonth   = this.month[monthIndex];
        Calendar.defaultYear    = this.today().getFullYear();
    },
    "currentMonth": function(){
        return this.monthLabel().innerHTML;
    },
    "currentYear": function(){
        return this.yearLabel().innerHTML
    },
    "currentDay": function(){
        return this.today().getDate();
    },
    "thisMonth": function(){
            var monthIndex = this.today().getMonth();
            return this.month[monthIndex];
        },
    "thisYear": function(){
            return this.today().getFullYear();
        },
    "setCurrentMonth": function(month){
        this.currentMonth = month;    
    },
    "setCurrentYear": function(year){
        this.currentYear = year; 
    },
    "getMonth": function(){
        return this.monthLabel().innerHTML;
    },
    "getYear": function(){
        return this.yearLabel().innerHTML;
    },
    "generateWidgetHeader": function(){
        console.log("Generating Widget Header...");
    },
    "generateWidgetBody": function(){
        console.log("Generating Widget Body...");
    },
    "build": function(){
        console.log("Building Calendar...");
   
        
        
        
        
        
        
        
        
    },
    "firstRow": function(){
        console.log("Building First Row of Calendar...");
    },
    "previousMonth": function(){
        console.log("Showing Previous Month...");
        //***** Establish variables and Retrieve Current Month from Calendar Label
        var previousMonthIndex, previousYear;
        var currentMonthLabel   = document.getElementById("month");
        var currentMonth        = currentMonthLabel.innerHTML;
//        alert("Current Month is: "+currentMonth);
        
        //***** Retrieve Current Year from Calendar Label
        var currentYearLabel    = document.getElementById("year");
        var currentYear         = parseInt(currentYearLabel.innerHTML);
//        alert("Current Year is: "+currentYear);
        
        //***** Find Index for Current Month
        var monthIndex          = month.indexOf(currentMonth);
//        alert("Current Month Index is: "+monthIndex);
        
        //***** If Current Month Index is Equal to ZERO, Previous Month Index is Equal to [11] December AND Previous Year is Equal to ( Current Year - 1 )
        if(monthIndex == 0){
            previousMonthIndex  = 11;
            previousYear        = currentYear - 1;
           }else{

            previousMonthIndex  = monthIndex - 1;
            previousYear        = currentYear;

           }
        
        //***** Using Month Index and Month Array, Set Current Month for Calendar Object
            currentMonth        = month[previousMonthIndex];
            currentYear         = previousYear;
        
        //***** Set Month and Year for Calendar Object
        Calendar.month          = currentMonth;
        Calendar.year           = currentYear;

        //***** Set Month and Year for Calendar Label
        monthLabel.innerHTML    = Calendar.month;
        yearLabel.innerHTML     = Calendar.year;
        
    },
    "nextMonth": function(){
        console.log("Showing Next Month...");
        //***** Establish variables and Retrieve Current Month from Calendar Label
        var nextMonthIndex, nextYear;
        var currentMonthLabel   = document.getElementById("month");
        var currentMonth        = currentMonthLabel.innerHTML;
//        alert("Current Month is: "+currentMonth);
        
        //***** Retrieve Current Year from Calendar Label
        var currentYearLabel    = document.getElementById("year");
        var currentYear         = parseInt(currentYearLabel.innerHTML);
//        alert("Current Year is: "+currentYear);
        
        //***** Find Index for Current Month
        var monthIndex          = month.indexOf(currentMonth);
//        alert("Current Month Index is: "+monthIndex);
        
        //***** If Current Month Index is Equal to ELEVEN, Next Month Index is Equal to [0] January AND Next Year is Equal to ( Current Year + 1 )
        if(monthIndex == 11){
            nextMonthIndex  = 0;
            nextYear        = currentYear + 1;
           }else{

            nextMonthIndex  = monthIndex + 1;
            nextYear        = currentYear;

           }
        
        //***** Using Month Index and Month Array, Set Current Month for Calendar Object
            currentMonth        = month[nextMonthIndex];
            currentYear         = nextYear;
        
        //***** Set Month and Year for Calendar Object
        Calendar.month          = currentMonth;
        Calendar.year           = currentYear;

        //***** Set Month and Year for Calendar Label
        monthLabel.innerHTML    = Calendar.month;
        yearLabel.innerHTML     = Calendar.year;
    }
};

Calendar.setDefault();
Calendar.build();


