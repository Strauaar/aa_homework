document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById('mycanvas');
  canvas.style.height = "500px";
  canvas.style.width = "500px";
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'yellow';
  ctx.fillRect(10, 10, 500, 500);
  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 6.44, true);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
});
