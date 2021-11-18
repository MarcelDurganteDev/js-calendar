const modal = document.getElementById('myModal');

const modalContentor = document.getElementsByClassName('modal-content');
var modalContent = modalContentor[0];
//TODO Display modal Start
function modalStart() {
    beginModal();
    fecha = undefined;
    openModal();
}

//TODO modal open
function openModal() {
    modal.style.display = 'block';
}

//TODO modal close
function closeModal() {
    modal.style.display = 'none';
    // cleanModal()
}

//TODO clean modal
function cleanModal() {
    while (modalContent.firstChild) {
        modalContent.removeChild(modalContent.lastChild);
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        cleanModal();
    }
};

function displayForm() {
    endDateCheck.checked == true ? createHideElements() : cleanHideElements();
}

function displayReminder() {
    reminder.checked == true ? createReminder() : cleanReminder();
}

function createHideElements() {
    content =
        "<div><label for='endDate'>End Date</label><input type='datetime-local' name='End Date'  class='formInputs' id='endDate'> </div>";

    content +=
        "<div id='checkboxRemind'><label for='reminder'> Remind me when event Start</label><input type='checkbox' name='reminder' id='reminder'> </div>";

    content += "<div id='divReminder'></div>";

    content +=
        "<div><label for='description'>Description</label> <textarea name='description' class='formInputs' id='description' cols='20' rows='5'></textarea></div>";

    hideForm[0].innerHTML = content;

    const reminder = document.getElementById('reminder');
    reminder.addEventListener('click', displayReminder);
}

function createReminder() {
    const divReminder = document.getElementById('divReminder');

    content =
        "<label for='remindTimer'> Time reminder </label> <select name='remindTimer' class='formInputs' id='remindTimer'> <option value='5'> 5 Minutes</option> <option value='10'> 10 Minutes</option> <option value='15'> 15 Minutes</option> <option value='30'> 30 Minutes</option> <option value='60'> 1 hour</option> </select> ";

    divReminder.innerHTML = content;
}

function cleanHideElements() {
    while (hideForm[0].firstChild) {
        hideForm[0].removeChild(hideForm[0].lastChild);
    }
}

function cleanReminder() {
    cont = 0;
    divElements = divReminder.childElementCount + 1;
    while (divElements > cont) {
        console.log(divElements, cont);
        divReminder.removeChild(divReminder.firstChild);
        cont++;
    }
}

window.onkeydown = key => {
    escape(key);
};

function escape(key) {
    if (key.code == 'Escape') {
        closeModal();
    }
}
