//! create events and save on Local Storage

let eventBook;

//TODO create object to organize on local storage
function eventData(title, startDate, endDate = 0, reminder = 0, description = '', eventType, id = Date.now()) {
    return {
        title: title,
        startDate: startDate,
        endDate: endDate,
        reminder: reminder,
        description: description,
        eventType: eventType,
        eventId: id
    }
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
    let obj

    if (arrayName.length > 7) {
        if(arrayName[6]== ''){
            arrayName[6]= undefined
        }
        obj = eventData(arrayName[0], arrayName[1], arrayName[2], arrayName[3], arrayName[4], arrayName[5], arrayName[6])

    } else {
        obj = eventData(arrayName[0], arrayName[1], arrayName[1], arrayName[3], arrayName[4], arrayName[2])
    }
    return obj;
}

//TODO create event, save and load on eventBook
function createEvent() {
    let arrayData = resortInputs()
    eventBook.push(convertToObj(arrayData))
    localStorage.setItem('eventBook', JSON.stringify(eventBook))
    closeModal()
}

//TODO delete event
function deleteEvent(id) {
    eventBook = eventBook.filter(element => {
        return (element.eventId != id)
    })
    localStorage.setItem('eventBook', JSON.stringify(eventBook))
    eventBook = loadEventBook()
}


//TODO reminder event
functionTime = '';
function remiderTimer() {
    time = new Date()
    eventBook.forEach(element => {
        if (element.reminder != 0) {
            var eventAlert = addMinutes(time, element.reminder).toISOString().slice(0, 16)
            var eventDateTime = new Date(element.startDate).toISOString().slice(0, 16)
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

//TODO add min to actual  hour
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000)
}

//TODO search the events and  and print in calendar
function getDataFromCalendar(num1) {
    // //TODO COGER LOS EVENTOS DEL DIA
    filter = eventBook.filter(element => {
        if ((new Date(fecha).getFullYear() <= new Date(element.startDate).getFullYear()) || (new Date(fecha).getFullYear() <= new Date(element.endDate).getFullYear())) {
            if ((new Date(fecha).getMonth() <= new Date(element.startDate).getMonth()) || (new Date(fecha).getMonth() <= new Date(element.endDate).getMonth())) {
                if ((new Date(fecha).getDate() >= new Date(element.startDate).getDate()) != (new Date(fecha).getDate() > new Date(element.endDate).getDate())) {
                    return true
                }
            }
        }
        return false
    })

    //TODO when find day print the button
    filter.forEach(event => {

        eventDay = new Date(event.startDate).getDate()
        eventMonth = new Date(event.startDate).getMonth()
        eventYear = new Date(event.startDate).getFullYear()
        id = event.eventId
        finalDate = new Date(event.endDate).getDate()
        finalMonth = new Date(event.endDate).getMonth()
        finalYear = new Date(event.endDate).getFullYear()
        let eventText = document.createElement('button')
        
        if (event.eventType == "personal") {
            eventText.setAttribute("class", 'btn btn-primary displayEvent ')
        } else if (event.eventType == "Meeting") {
            eventText.setAttribute("class", 'btn btn-success displayEvent ')
        } else if (event.eventType == "Study") {
            eventText.setAttribute("class", 'btn btn-danger displayEvent ')
        } else if (event.eventType == "other") {
            eventText.setAttribute("class", 'btn btn-dark displayEvent ')
        } else {
            eventText.setAttribute("class", 'btn btn-primary displayEvent ')
        }
        // eventText.setAttribute("class", 'btn btn-primary displayEvent ')
        eventText.setAttribute("id", id)
        eventText.setAttribute("onclick", ' openForm(' + id + ')')
        eventText.innerHTML = event.title
        num1.appendChild(eventText)
    });
}

//TODO modify a event by ID
function modifyForm(id) {
    //TODO simple validation if event exist or not
    if (document.getElementById("eventId").value == '') {
        content = "<span class='close'>&times;</span>"
        content += ` <div class='modal-content msg-content'><h1> This event does not exist yet </h1>`
        modalContent.innerHTML = content
        const span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', closeModal)
        openModal()
    }

    //TODO modify By ID delte the first and create new one with the same id
    eventBook.forEach(element => {
        if (element.eventId === id) {
            arrayMod = resortInputs()
            deleteEvent(id)
            eventBook.push(convertToObj(arrayMod))
            return {
                eventBook
            }
        }
    })

    //TODO save and Load in local storage
    localStorage.setItem('eventBook', JSON.stringify(eventBook))
    eventBook = loadEventBook()
}


//TODO resort all inputs form and save in a array
function resortInputs() {
    const formClass = document.getElementsByClassName('formInputs')
    arrayForm = []

    for (num in formClass) {
        arrayForm.push(formClass[num].value)
    }
    return arrayForm;
}



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
