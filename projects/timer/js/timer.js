
let inputs, clock, alarm, hours, minutes, seconds, repeater;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarm = new Audio('sound/Alarm-ringtone.mp3');
});

function startTimer() {
    // 1) Leer los inputs
    parseTime();
    // 2) Actualizar la vista
    setTimer();
    // 3) Arrancar el timer
    countdown();
}

function parseTime() { // Se encarga del paso numero 1
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function setTimer() {
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span>
                       <p class="number">${minutes > 9 ? minutes : ('0' + hours)}</p><span>hs</span>
                       <p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>hs</span>
                      ` 
    document.title =  `${hours > 9 ? hours : ('0' + hours)}:
                       ${minutes > 9 ? minutes : ('0' + hours)}:
                       ${seconds > 9 ? seconds : ('0' + seconds)}
                      `; 
}

function countdown() {
    repeater = setInterval(runner, 1000);
}

function runner() {
    /* Si tengo mas de 0 segundos, resta segundos
       Si tengo 0 segundos pero tengo mas de 0 minutos, coloca a seugndos en 59 y restale 1 a minutos
       Si tengo 0 segundos, 0 minutos, pero tengo mas de 0 horas, coloca segundos en 59, minutos en 59, y restale 1 a horas
       Sino arranca la alarma
    */

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }

    setTimer();
}

function stopTimer() {
    clearInterval(repeater); // Limpia el intervalo de la variable repeater
    location.reload(); // Recargar la pagina
}