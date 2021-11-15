function displayCalendar() {


    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;


    var dateNow = new Date();
    console.log('datenow', dateNow)
    var month = dateNow.getMonth();
    console.log('mounth', month)
    var day = dateNow.getDate();
    console.log('day', day)
    var year = dateNow.getFullYear();
    console.log('year', year)

    var nextMonth = month + 1;
    console.log('next Mounth', nextMonth)
    var prevMonth = month - 1;
    console.log(prevMonth)


    //Determing if February (28,or 29)
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }


    // names of months and week days.
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var dayNamesMovil = ["SUN", "MON", "TUE", "WED", "THRU", "FRI", "SAT"];
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


    // days in previous month and next one , and day of week.
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    console.log('next date', nextDate)
    var weekdays = nextDate.getDay();
    console.log('weekdays', weekdays)
    var weekdays2 = weekdays;
    console.log('weekdauys2', weekdays2)
    var numOfDays = dayPerMonth[month];
    console.log('numOfDays', numOfDays)


    // this leave a white space for days of pervious month.
    while (weekdays > 0) {
        console.log('while weekdays', weekdays)
        htmlContent += "<li class='monthPre'></li  >";
        console.log('html Content', htmlContent)

        weekdays--;
    }

    // loop to build the calendar body.
    while (counter <= numOfDays) {
        console.log(counter, numOfDays)
        // When to start new line.
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</ul><ul>";
            console.log('html Content', htmlContent)
        }



        // if counter is current day.
        // highlight current day using the CSS defined in header.
        if (counter == day) {
            htmlContent += "<li class='dayNow'  onMouseOver='this.style.background=\"#FFFF00\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>" + counter + "</li>";
        } else {
            htmlContent += "<li class='monthNow' onMouseOver='this.style.background=\"#FFFF00\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'>" + counter + "</li>";

        }

        weekdays2++;
        console.log('weekdays2', weekdays2)
        counter++;
        console.log('counter++', counter)
    }



    // building the calendar html body.
    var calendarBody = "<div class='calendar' id='calendarId'> <ul class='monthNow'><li colspan='7'>"
        + monthNames[month] + " " + year + "</li></ul>";
    calendarBody += "<ul class='dayNames'>  <li>Sun</li>  <li>Mon</li> <li>Tues</li>" +
        "<li>Wed</li> <li>Thurs</li> <li>Fri</li> <li>Sat</li> </ul>";
    calendarBody += "<ul>";
    calendarBody += htmlContent;
    calendarBody += "</ul></div>";
    // set the content of div .
    document.getElementById("calendar").innerHTML = calendarBody;

}
