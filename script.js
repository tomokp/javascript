let i = 1;
setInterval(function(draw) {
  func(i);
}, 100);

function draw()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle="rgba(0, 0, 0, 0";
    ctx.beginPath();
    ctx.moveTo(500, 550);
    ctx.lineTo(250, 250);
    ctx.lineTo(750, 250);
    ctx.fillStyle = "rgb(0, 196, 224)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(500, 550);
    ctx.lineTo(625, 250);
    ctx.lineTo(375, 250);
    ctx.lineTo(500, 550);
    ctx.fillStyle = "rgb(160, 243, 255)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(375, 250);
    ctx.lineTo(375, 175);
    ctx.lineTo(250, 250);
    ctx.lineTo(375, 250);
    ctx.fillStyle = "rgb(234, 252, 255)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(750, 250);
    ctx.lineTo(625, 175);
    ctx.lineTo(625, 250);
    ctx.fillStyle = "rgb(234, 252, 255)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(500, 175);
    ctx.lineTo(375, 250);
    ctx.lineTo(375, 175);
    ctx.lineTo(500, 175);
    ctx.fillStyle = "rgb(0, 199, 255)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(625, 175);
    ctx.lineTo(625, 250);
    ctx.lineTo(500, 175);
    ctx.fillStyle = "rgb(0, 199, 255)";
    ctx.fill();
    ctx.beginPath();
    ctx.lineTo(375, 250);
    ctx.lineTo(625, 250);
    ctx.lineTo(500, 175);
    ctx.fillStyle = "rgb(0, 167, 214)";
    ctx.fill();

    ctx.stroke();
    
    
}