//TODO display actual hour and print on calendar
function displayHour() {
    hourUpdate = setInterval(() => {
        time = new Date();
        hour = time.getHours();
        minute = pad(time.getMinutes())
        seconds = pad(time.getSeconds());
        houtMin= `${hour}:${minute}:${seconds}`
        fisrsRow= document.querySelector("#calendarprueba")
        fisrsRow.textContent=houtMin
        remiderTimer()
    }, 1000);
}

//TODO add 0 before min and seconds when < 10
function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
displayHour()
