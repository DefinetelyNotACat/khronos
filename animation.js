let time = document.getElementById("timer")
let clock = document.getElementsByClassName("clock");
let myclock = clock[0];
function gettime()
{

    myclock.style.visibility = "visible"
    let date = new Date();
    time.innerHTML = date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    
}

setInterval(gettime, 1000); 