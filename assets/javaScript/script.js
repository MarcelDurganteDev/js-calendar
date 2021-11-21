//TODO variables
var htmlContent = '';
var FebNumberOfDays = '';
var counter = 1;

//TODO dates variables
var dateNow = new Date();
var month = dateNow.getMonth();
var day = dateNow.getDate();
var year = dateNow.getFullYear();
var nextMonth = month + 1;
var prevMonth = month -1;

//TODO create calendar
function displayCalendar() {
    //TODO load eventBook
    eventBook = loadEventBook()
    dateNow.setDate(1)
    calendario = document.getElementById("calendar")
    calendario.innerHTML = null

    //TODO Determing if February (28, or 29)
    if (month == 1) {
        if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }

    //TODO names of months and week days.
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    var dayPerMonth = ['31', '' + FebNumberOfDays + '', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

    //TODO  days in previous month and next one , and day of week.
    
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay(); 
    var weekdays2 = weekdays;
    var numOfDays = dayPerMonth[month];
    

    // this leave a white space for days of pervious month.
    while (weekdays > 0) {                                                // DUVIDA PORQUE MAIOR QUE ZERO?
        htmlContent += "<li class='monthPre'></li  >";
        weekdays--;
    }

    // loop to build the calendar body.
    while (counter <= numOfDays) {
        // When to start new line.
        if (weekdays2 > 6) {
            weekdays2 = 0;                      // DUVIDA, PORQUE IGUAL A ZERO
            htmlContent += '</ul><ul> ';
        }

        // if counter is current day.
        // highlight current day using the CSS defined in header.
        if (counter == day) {
            htmlContent += "<li class='dayNow gridCalendar' id='color1'  onMouseOver='this.style.background=\"#a1c4fd\"; this.style.color=\"#FFFFFF\"' " +
            "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#000000\"'>" + counter + "</li>";
        } else {
            htmlContent += "<li class='monthNow gridCalendar' onMouseOver='this.style.background=\"#a1c4fd\"; this.style.color=\"#FFFFFF\"' " +
                " onMouseOut='this.style.background=\"#FFFFFF\";this.style.color=\"#000000\"'>" + counter + "</li>";
            }

        weekdays2++;
        counter++;
    }

    //TODO building the calendar html body.
    var calendarBody = '<div><input type="button" value="button Test" onclick="openModal()" class="desaparecer"></div>';
    calendarBody += "<div class='calendar'> <div class='monthNow' id='calendarP'><button class='btn btn-primary' id='firstModal'>ADD EVENT</button> <i class='fas fa-chevron-left' id='leftMonth'> </i> <span> " + monthNames[month] + ' ' + year + " </span>  <i class='fas fa-chevron-right' id='rightMonth1'> </i><div id='calendarprueba'></div></div>";
    // calendarBody += "<button class='modal-btn id='openModal'>ADD EVENT</button>";
    calendarBody += "<ul class='dayNames'>  <li>Sun</li>  <li>Mon</li> <li>Tues</li>" +
        "<li>Wed</li> <li>Thu</li> <li>Fri</li> <li>Sat</li> </ul>";
    calendarBody += "<ul>";
    calendarBody += htmlContent;
    calendarBody += "</ul></div>";
    calendarBody += '<button class="btn btn-primary btn-lg" onclick="remiderTimer()"> Test Button </button>'

    //todo The Modal
    document.getElementById("calendar").innerHTML = calendarBody;  

    //TODO set the content of div .
    // document.getElementById('calendar').innerHTML = calendarBody;      
    //Date num
    
    //TODO
    const monthNow= document.querySelectorAll(".gridCalendar")
    // beginModal()
    
    fecha = undefined;
    monthNow.forEach(num=> {
        num.addEventListener("click", () => {
            pepe(num)
            modalStart()
        })
    })

    monthNow.forEach(num1=>{
        numero=num1.textContent
        monthF=month
        if (monthF<10)
        monthF="0" + monthF
        if (numero < 10)
        numero="0"+numero
        time = new Date();
        hour = time.getHours();
        minute = pad(time.getMinutes())
        seconds = pad(time.getSeconds());
        houtMin= `${hour}:${minute}`
        fecha= `${year}-${monthF + 1}-${numero}T${houtMin}`
        // console.log(fecha)
        // console.log(fecha)
        getDataFromCalendar(num1)
        // pruebaMia(num1)
    })
    //first modal
    const firstModal = document.getElementById("firstModal")
    firstModal.addEventListener("click", modalStart)
    //NEXT MONTH
    const rightMonth1 = document.getElementById("rightMonth1")
    rightMonth1.addEventListener("click", sumMonth)
    //Previous Month
    const leftMonth = document.getElementById("leftMonth")
    leftMonth.addEventListener("click", restMonth)
}
function pepe(num){
        // console.log(pruebaotravez)
        numero= num.textContent
        monthF=month
        if (monthF<10)
        monthF="0" + monthF
        if (numero < 10)
        numero="0"+numero
        time = new Date();
        hour = time.getHours();
        minute = pad(time.getMinutes())                 //  DUVIDA WHY PAD()
        seconds = pad(time.getSeconds());
        houtMin= `${hour}:${minute}`
        fecha= `${year}-${monthF + 1}-${numero}T${houtMin}`
        //console.log(fecha)
        // console.log(fecha)
        // console.log(fecha)
        // modalStart() 
}

//TODO
function sumMonth() {
    calendario.innerHTML = null
    htmlContent = '';
    FebNumberOfDays = '';
    counter = 1;
    month = dateNow.setMonth(dateNow.getMonth() + 1)
    day = dateNow.getDate();
    month = dateNow.getMonth();
    year = dateNow.getFullYear();
    nextMonth = month + 1;
    displayCalendar()
}

//TODO
function restMonth() {
    calendario.innerHTML = null
    htmlContent = '';
    FebNumberOfDays = '';
    counter = 1;
    console.log(dateNow.getMonth())
    month = dateNow.setMonth(dateNow.getMonth() - 1)
    day = dateNow.getDate();
    month = dateNow.getMonth();
    // day = dateNow.getDate();
    year = dateNow.getFullYear();
    nextMonth = month + 1;
    displayCalendar()
}

