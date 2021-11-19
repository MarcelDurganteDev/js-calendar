//! create events and save on Local Storage

let eventBook;

//TODO create object to organize on local storage
function eventData(
    title,
    startDate,
    endDate = 0,
    reminder = 0,
    description = '',
    eventType
) {
    return {
        title: title,
        startDate: startDate,
        endDate: endDate,
        reminder: reminder,
        description: description,
        eventType: eventType,
        eventId: Date.now().toString()
    };
}

//TODO load Local storage in eventBook
function loadEventBook() {
    if (localStorage.getItem('eventBook') == null) {
        return [];
    }
    return JSON.parse(localStorage.getItem('eventBook'));
}

//TODO convert to object
function convertToObj(arrayName) {
    // DUVIDA, DID NOT UNDERSTAND THE LOGIC
    let obj;
    if (arrayName.length > 6) {
        obj = eventData(
            arrayName[0],
            arrayName[1],
            arrayName[2],
            arrayName[3],
            arrayName[4],
            arrayName[5]
        );
    } else {
        obj = eventData(
            arrayName[0],
            arrayName[1],
            arrayName[1],
            arrayName[3],
            arrayName[4],
            arrayName[2] // WHY 2 HERE
        );
    }
    return obj;
}

//TODO create event, save and load on eventBook
function createEvent() {
    let arrayData = [];
    const formClass = document.getElementsByClassName('formInputs');
    limit()
    for (num in formClass) {
        arrayData.push(formClass[num].value);
        //console.log(formClass[num].value)
    }

    eventBook.push(convertToObj(arrayData));

    localStorage.setItem('eventBook', JSON.stringify(eventBook));
    closeModal();
}

//TODO delete event
function deleteEvent() {
    // NOT CLEAR TO ME
    const formClass = document.getElementsByClassName('formInputs');
    arrayDel = [];
    strDel = '';
    for (num in formClass) {
        arrayDel.push(formClass[num].value);
    }
    obj = convertToObj(arrayDel);
    strDel =
        obj.title +
        obj.startDate +
        obj.endDate +
        obj.reminder +
        obj.description +
        obj.eventType;
    removeEvent(strDel);
}

function removeEvent(eventToRemove) {
    // NOT CLEAR TO ME
    eventBook = eventBook.filter(event => {
        return !(
            event.title +
                event.startDate +
                event.endDate +
                event.reminder +
                event.description +
                event.eventType ==
            eventToRemove
        );
    });
    localStorage.setItem('eventBook', JSON.stringify(eventBook));
    eventBook = loadEventBook();
}

// function editEvent(){

// }
functionTime = '';
function remiderTimer() {
    //const reminder= document.getElementById('reminder')
    //timeFix= 'Thu Nov 18 2021 17:14:00 GMT+0100 (Hora padrão da Europa Central)'
    //time = new Date(timeFix)
    console.log(time)
    time = new Date()
    eventBook.forEach(element => {
        if (element.reminder != 0) {
            var eventAlert = addMinutes(time, element.reminder)
                .toISOString()
                .slice(0, 16); // DUVIDAS HOW THESE PARAMETERS WORK
            var eventDateTime = new Date(element.startDate)
                .toISOString()
                .slice(0, 16);
            if (eventAlert == eventDateTime) {
                if (functionTime != eventDateTime) {
                    functionTime = eventDateTime;
                    createmsg(
                        element.title,
                        element.description,
                        element.eventType,
                        element.reminder
                    );
                    openModal();
                }
            }
        }
    });
}

function addMinutes(date, minutes) {
    // DUVIDAS HOW THESE PARAMETERS WORK
    return new Date(date.getTime() + minutes * 60000);
}

function getDataFromCalendar (num1) {
    //COGER LOS EVENTOS DEL DIA
    filter= eventBook.filter(element=>{
        // console.log(new Date(fecha).getFullYear(), new Date(element.startDate).getFullYear())
        if (
            new Date(fecha).getFullYear() ==
            new Date(element.startDate).getFullYear()
        ) {
            if (
                new Date(fecha).getMonth() ==
                new Date(element.startDate).getMonth()
            ) {
                // console.log(new Date(fecha).getDate(), new Date(element.startDate).getDate())
                if (
                    new Date(fecha).getDate() ==
                    new Date(element.startDate).getDate()
                ) {
                    return true;
                }
            }
        } 
        return false
    })
    
    
    filter.forEach(event => {
        eventDay = new Date(event.startDate).getDate()
        eventMonth = new Date(event.startDate).getMonth()
        eventYear =  new Date(event.startDate).getFullYear()
        id = event.eventId
        finalDate= new Date(event.endDate).getDate()
        finalMonth= new Date(event.endDate).getMonth()
        finalYear=new Date(event.endDate).getFullYear()
//         console.log(id)
//         console.log(eventDay)
//         console.log(eventMonth +1)
//         console.log(eventYear)
//         console.log(event.title)
// console.log(filter)  
        let eventOnCalendar = document.createElement('button')
        let eventText = document.createElement('button')
        eventText.setAttribute("class", 'btn btn-primary displayEvent ')
        eventText.setAttribute("id",id)
        //eventText.setAttribute("class", 'displayEvent')
        eventText.setAttribute("onclick",  ' openForm('+ id +')')
        eventText.innerHTML = event.title
        num1.appendChild(eventText)
    /*     if (element.startDate == fecha){
        } */
    });
}

// function pruebaMia(num1){
//     if(num1)
// }
// eventBook.forEach(element => {
//     prueba=element.title
//     console.log(prueba)
// });
   // crear otra funcion donde dev criar um div e ponder este div con este titotlo y esta data. e ponder este dive dentro del dia del calendario 




function limit(description)
{
    var description = document.getElementById('description')
    console.log(description)
    if (description){
    description.setAttribute('maxlength', 500)
    }
  /*   if(description.value.length > max_chars) {
        /* description.value = description.value.substr(0, max_chars); 
        alert('Description must have less than 500 characters')
    } */
}
