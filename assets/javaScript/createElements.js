
//TODO charge the first part of Modal
function beginModal() {
    content = "<span class='close'>&times;</span>"
    content += " <div ><form class='eventForm modal-content '><div><label for='title'>Title</label> <input type='text' class='formInputs' name='title' id='title' placeholder='My Event' required> </div>"

    content += `<div><label for='begindate'> Initial date</label><input type='datetime-local' value='' name='begindate' class='formInputs' id='begindateId' required></div> `

    content += "<div id='checkboxEndDate'><label for='endDateCheck'>End Date </label><input type='checkbox' name='End Date' id='endDateCheck'> </div>"

    content += "<div class='hideform'>"

    content += "</div><div> <label for='typeEvent'> Event Type</label><select name='eventType'class='formInputs' id='eventType'><option value='personal'> Personal</option><option value='Meeting'> Meeting</option><option value='Study'> Study</option> <option value='other'> Other</option></select> </div>"

    content += "<div> <button class='btn btn-primary btn-lg' id='delete'> Delete Event </button><button class=' btn btn-secondary btn-lg' id='modifyForm'> Modify Event </button> <button class='btn btn-primary btn-lg' id='create'> Create Event </button> </div></form> </div>"

    content += "<div ><input type='text' class='formInputs' name='eventId' id='eventId'></div>"

    modalContent.innerHTML = content
    if (!fecha) {
        fecha = undefined
    } else {
        document.getElementById("begindateId").value = fecha;

    }


    //TODO Dom modal
    const endDateCheck = document.getElementById('endDateCheck')
    hideForm = document.getElementsByClassName('hideform')
    const deleteButton = document.getElementById('delete')
    const modifyButton = document.getElementById('modifyForm')
    const createButton = document.getElementById('create')
    const span = document.getElementsByClassName("close")[0];
    idValue = document.getElementById('eventId').value


    //TODO event Listener
    endDateCheck.addEventListener('input', displayForm)
    deleteButton.addEventListener('click', function () {
        idValue = document.getElementById('eventId').value
        deleteEvent(idValue)
    })
    modifyButton.addEventListener('click', function () {
        idValue = document.getElementById('eventId').value
        modifyForm(idValue)
    })
    createButton.addEventListener('click', createEvent)
    span.addEventListener('click', closeModal)
}

//TODO create end Date when checked
function createHideElements() {
    content = "<div><label for='endDate'>End Date</label><input type='datetime-local' name='End Date'  class='formInputs' id='endDate'> </div>"

    content += "<div id='checkboxRemind'><label for='reminder'> Remind me when event Start</label><input type='checkbox' name='reminder' id='reminder'> </div>"

    content += "<div id='divReminder'></div>"

    content += "<div><label for='description'>Description</label> <textarea name='description' class='formInputs' id='description' cols='20' rows='5'></textarea></div>"

    hideForm[0].innerHTML = content

    //TODO Dom end date
    document.getElementById("endDate").value = document.getElementById("begindateId").value;
    const reminder = document.getElementById('reminder')
    reminder.addEventListener('input', displayReminder)
}

//TODO create reminder when checked
function createReminder() {
    const divReminder = document.getElementById('divReminder')

    content = "<label for='remindTimer'> Time reminder </label> <select name='remindTimer' class='formInputs' id='remindTimer'> <option value='5'> 5 Minutes</option> <option value='10'> 10 Minutes</option> <option value='15'> 15 Minutes</option> <option value='30'> 30 Minutes</option> <option value='60'> 1 hour</option> </select> "

    divReminder.innerHTML = content
}

//TODO create a Mensage to reminder
function createmsg(title, description = 'Have a Beatifull Day', type, time) {
    content = "<span class='close'>&times;</span>"
    content += ` <div class='modal-content msg-content'><h1> ${title} </h1>`
    content += `<h2> Reminder you have a Event in ${time} min</h2>`
    content += `<h3> Event Type:  ${type}</h3>`
    content += `<h4>Description:  ${description}</h4></div>`

    modalContent.innerHTML = content

    const span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', closeModal)
}

//TODO open the form with all values
function openForm(id) {
    openBook = eventBook.filter(event => {
        if (event.eventId == id) {
            return true
        }
        return false
    })

    //TODO open modal and run the values
    setTimeout(() => {
        beginModal()
        createHideElements()

        document.getElementById("title").value = openBook[0].title
        document.getElementById("begindateId").value = openBook[0].startDate
        document.getElementById("endDateCheck").checked = true
        document.getElementById("reminder").checked = true
        displayReminder()
        reminderDefault = 0
        if (document.getElementById("remindTimer").value = openBook[0].reminder == 0) {
            document.getElementById("remindTimer").value = reminderDefault
        } else {
            document.getElementById("remindTimer").value = openBook[0].reminder
        }
        document.getElementById("endDate").value = openBook[0].endDate
        endDate = openBook[0].endDate
        document.getElementById("description").value = openBook[0].description
        valueDefaultPersonal = 'personal'
        if (document.getElementById("eventType").value = openBook[0].eventType == undefined) {
            document.getElementById("eventType").value = valueDefaultPersonal
        } else {
            document.getElementById("eventType").value = openBook[0].eventType
        }
        document.getElementById("eventId").value = openBook[0].eventId
    }, 00);
}
