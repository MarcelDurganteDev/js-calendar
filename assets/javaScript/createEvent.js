//TODO create events and save on Local Storage
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
        eventType: eventType
    };
}

function loadEventBook() {
    if (localStorage.getItem('eventBook') == null) {
        return [];
    }
    return JSON.parse(localStorage.getItem('eventBook'));
}
//TODO convert to object
function convertToObj(arrayName) {
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
            arrayName[2]
        );
    }
    return obj;
}
let eventBook;

function createEvent() {
    let arrayData = [];
    const formClass = document.getElementsByClassName('formInputs');
    for (num in formClass) {
        arrayData.push(formClass[num].value);
        //console.log(formClass[num].value)
    }
    //console.log(eventBook)
    eventBook.push(convertToObj(arrayData));
    localStorage.setItem('eventBook', JSON.stringify(eventBook));
    closeModal();
}

function deleteEvent() {
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

function getDataFromCalendar(num1) {
    //COGER LOS EVENTOS DEL DIA
    filter = eventBook.filter(element => {
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
        return false;
    });

    filter.forEach(event => {
        eventDay = new Date(event.startDate).getDate();
        eventMonth = new Date(event.startDate).getMonth();
        eventYear = new Date(event.startDate).getFullYear();
        let eventText = document.createElement('h3');
        eventText.innerHTML = event.title;
        num1.appendChild(eventText);
        
    });
}

