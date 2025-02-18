const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
    const hourdeg = (h % 12) * 30 + (m / 60) * 30; 
    const mindeg = (m / 60) * 360; 
    const secdeg = (s / 60) * 360; 
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
    minEl.style.transform = `rotate(${mindeg}deg)`;
    secEl.style.transform = `rotate(${secdeg}deg)`;
    setTimeout(updateClock, 1000);
}
updateClock();
