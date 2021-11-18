//! create events and save on Local Storage

let eventBook

//TODO create object to organize on local storage
function eventData(title, startDate, endDate = 0, reminder = 0,  description = '', eventType ) {
    return {
        title: title,
        startDate : startDate,
        endDate : endDate,
        reminder : reminder,
        description: description,
        eventType : eventType,
        eventId: Date.now().toString()
    }
}

//TODO load Local storage in eventBook
function loadEventBook(){
    if(localStorage.getItem('eventBook') == null){
        return [];
    }
    return JSON.parse(localStorage.getItem('eventBook'))
}


//TODO convert to object
function convertToObj(arrayName){
    let obj
    if( arrayName.length > 6){
        obj= eventData(arrayName[0], arrayName[1], arrayName[2], arrayName[3], arrayName[4], arrayName[5])
    } else{
        obj= eventData(arrayName[0], arrayName[1], arrayName[1] , arrayName[3], arrayName[4], arrayName[2])
    }
    return obj
}

//TODO create event, save and load on eventBook
function createEvent() {
    let arrayData=[]
    const formClass = document.getElementsByClassName('formInputs')
    console.log(formClass)
    for (num in formClass){
        arrayData.push(formClass[num].value)
        //console.log(formClass[num].value)
    }

    eventBook.push(convertToObj(arrayData))

    localStorage.setItem('eventBook', JSON.stringify(eventBook))
    closeModal()
}

//TODO delete event
function deleteEvent(){
    const formClass = document.getElementsByClassName('formInputs')
    arrayDel=[]
    strDel=''
    for (num in formClass){
        arrayDel.push(formClass[num].value)
    }

    obj = convertToObj(arrayDel)
    strDel = obj.title + obj.startDate + obj.endDate + obj.reminder + obj.description + obj.eventType;

    removeEvent(strDel)
}

//TODO filter and return and load only diferents
function removeEvent(eventToRemove){
    eventBook = eventBook.filter(event => {
        return !(event.title + event.startDate + event.endDate + event.reminder + event.description + event.eventType == eventToRemove)
    })

    localStorage.setItem('eventBook', JSON.stringify(eventBook))
    eventBook =  loadEventBook()
}

// function editEvent(){

// }
functionTime='';
function remiderTimer() {
    //const reminder= document.getElementById('reminder')
    //timeFix= 'Thu Nov 18 2021 15:12:00 GMT+0100 (Hora padrão da Europa Central)'
    time = new Date()
    eventBook.forEach(element => {
        if (element.reminder != 0) {
            var eventAlert= addMinutes( time, element.reminder).toISOString().slice(0, 16)
            var eventDateTime= new Date( element.startDate).toISOString().slice(0, 16)
            if (eventAlert == eventDateTime ){
                if(functionTime != eventDateTime){
                    functionTime = eventDateTime;
                    createmsg(element.title, element.description, element.eventType, element.reminder)
                    openModal()
                }
            }
        }
    });
}

function addMinutes(date, minutes) {
    return new Date( date.getTime() + minutes * 60000)
}