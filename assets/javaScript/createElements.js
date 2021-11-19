function beginModal(){
   
    //console.log(eventBook)
    content = "<span class='close'>&times;</span>"
    content +=" <div ><form class='eventForm modal-content '><div><label for='title'>Title</label> <input type='text' class='formInputs' name='title' id='title' placeholder='My Event' required> </div>"

    content += "<div><label for='begindate'> Initial date</label><input type='datetime-local' name='begindate' class='formInputs' id='begindateId' value='' required></div> "

    content += "<div id='checkboxEndDate'><label for='endDateCheck'>End Date </label><input type='checkbox' name='End Date' id='endDateCheck'> </div>"

    content += "<div class='hideform'>"

    content += "</div><div> <label for='typeEvent'> Event Type</label><select name='eventType'class='formInputs' id='eventType'><option value='personal'> Personal</option><option value='Meeting'> Meeting</option><option value='Study'> Study</option> <option value='other'> Other</option></select> </div>"

    content += "<div> <button class='btn btn-primary btn-lg' id='delete'> Delete Event </button> <button class='btn btn-primary btn-lg' id='create'> Create Event </button> </div></form> </div>"

    modalContent.innerHTML= content
    if (!fecha){
        fecha = undefined
    } else{
    document.getElementById("begindateId").value=fecha;

    }


    //TODO Dom modal
    const endDateCheck= document.getElementById('endDateCheck')
    hideForm= document.getElementsByClassName('hideform')
    const deleteButton= document.getElementById('delete')
    const createButton= document.getElementById('create')
    const span = document.getElementsByClassName("close")[0];

    //TODO event Listener
    endDateCheck.addEventListener('click', displayForm)
    deleteButton.addEventListener('click', deleteEvent)
    createButton.addEventListener('click', createEvent)
    span.addEventListener('click', closeModal)
}


function createHideElements(){
    content="<div><label for='endDate'>End Date</label><input type='datetime-local' name='End Date'  class='formInputs' id='endDate'> </div>"

    content+="<div id='checkboxRemind'><label for='reminder'> Remind me when event Start</label><input type='checkbox' name='reminder' id='reminder'> </div>"

    content+="<div id='divReminder'></div>"

    content+="<div><label for='description'>Description</label> <textarea name='description' class='formInputs' id='description' cols='20' rows='5'></textarea></div>"

    hideForm[0].innerHTML= content

    const reminder= document.getElementById('reminder')
    reminder.addEventListener('click', displayReminder)
}

function createReminder(){
    const divReminder= document.getElementById('divReminder')

    content= "<label for='remindTimer'> Time reminder </label> <select name='remindTimer' class='formInputs' id='remindTimer'> <option value='5'> 5 Minutes</option> <option value='10'> 10 Minutes</option> <option value='15'> 15 Minutes</option> <option value='30'> 30 Minutes</option> <option value='60'> 1 hour</option> </select> "

    divReminder.innerHTML= content
}

function createmsg(title, description = 'Have a Beatifull Day', type, time ){
    content = "<span class='close'>&times;</span>"
    content += ` <div class='modal-content msg-content'><h1> ${title} </h1>`
    content += `<h2> Reminder you have a Event in ${time} min</h2>`
    content+= `<h3> Event Type:  ${type}</h3>`
    content += `<h4>Description:  ${description}</h4></div>`

    modalContent.innerHTML= content

    const span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', closeModal)
}
// function openDayEvent(id) {
//     eventclick = document.getElementsByClassName("displayEvent")
//     eventclick.addEventListener("click", openForm)
//     dayEvent= document.getElementById(id)

// }
function openForm(id) {
    if( eventBook.eventId == id ) 
    openBook = eventBook 
    console.log(openBook)
}
