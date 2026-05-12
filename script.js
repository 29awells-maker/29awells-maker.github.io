const c = document.getElementById("canvas");
const ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#FF0000";
ctx.fill();