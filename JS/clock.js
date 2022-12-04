const clock = document.querySelector("#clock");
const dateHTML = document.querySelector("#date");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const years = String(date.getFullYear());
  const months = String(date.getMonth()+1).padStart(2, '0');
  const days = String(date.getDate()).padStart(2, '0');
  clock.innerHTML = `${hours} : ${minutes}`;
  dateHTML.innerHTML = `${years} - ${months} - ${days}`;
}

getClock(); 
setInterval(getClock, 1000); 