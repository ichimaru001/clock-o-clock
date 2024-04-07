const today = dayjs().format('dddd, D MMM, YYYY');

document.querySelector('.js-date').innerHTML = today;

function changeTime() {
  let hour = dayjs().hour();
  let min = dayjs().minute();
  let sec = dayjs().second();

  let paddedSec = sec.toString().padStart(2, "0");
  let paddedMin = min.toString().padStart(2, "0");
  let paddedHour = hour.toString().padStart(2, "0");

  document.querySelector('.js-time').innerHTML = `
    ${paddedHour}:${paddedMin}:${paddedSec}
  `;
}

setInterval(changeTime, 1000);

