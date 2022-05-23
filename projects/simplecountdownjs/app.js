
const countdown = () => {
    const countDate = new Date('July 13, 2022 17:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //  Calculate from the gap (Difference)
const textDay = Math.floor(gap / day);
console.log(textDay);
const textHour = Math.floor((gap % day) / hour);
console.log(textHour);
const textMinute = Math.floor((gap % hour) / minute);
console.log(textMinute);
const textSecond = Math.floor((gap % minute) / second);
console.log(textSecond);

document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;

//console.log(gap);
/* if (gap < 10000) {
    launchTheBullShitXD();
} */

};

setInterval(countdown, 1000);
