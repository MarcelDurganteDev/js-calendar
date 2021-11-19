const modal = document.getElementById("myModal");

const modalContentor = document.getElementsByClassName('modal-content')
var modalContent = modalContentor[0]
//TODO Display modal Start
function modalStart() {
    beginModal()
    fecha = undefined;
    openModal()
}

//TODO modal open
function openModal() {
    modal.style.display = "block";
}

//TODO modal close
function closeModal() {
    modal.style.display = "none";
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
        modal.style.display = "none";
        cleanModal()
    }
}

function displayForm() {
    (endDateCheck.checked == true) ? createHideElements() : cleanHideElements();
}

function displayReminder(){
    (reminder.checked == true) ? createReminder() : cleanReminder();
}


function cleanHideElements(){
    while (hideForm[0].firstChild) {
        hideForm[0].removeChild(hideForm[0].lastChild);
    }
}

function cleanReminder(){
    cont= 0
    divElements= divReminder.childElementCount + 1;
    while(divElements > cont ){
        console.log(divElements, cont)
        divReminder.removeChild(divReminder.firstChild)
        cont++
    }
}

window.onkeydown = (key)=>{
    escape(key)
}

function escape (key){
    if (key.code == 'Escape'){
        closeModal()
    }
}
