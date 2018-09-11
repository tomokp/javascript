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
    ctx.strokeStyle="rgba(0, 0, 0, 255";
    ctx.beginPath();
    ctx.moveTo(270, 250);
    ctx.lineTo(290, 245);
    ctx.lineTo(275, 230);
    ctx.lineTo(296, 238);
    ctx.lineTo(300, 215);
    ctx.lineTo(305, 238);
    ctx.lineTo(320, 230);
    ctx.lineTo(308, 245);
    ctx.lineTo(330, 248);
    ctx.lineTo(308, 252);
    ctx.lineTo(318, 265);
    ctx.lineTo(302, 258);
    ctx.lineTo(300, 273);
    ctx.lineTo(294, 258);
    ctx.lineTo(282, 267);
    ctx.lineTo(290, 255);
    ctx.lineTo(270, 250);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
    ctx.stroke();
    
    
}

drawNLines(12, 40, 40, 40);

function drawNLines(N, centreX, centreY, radius) {
  for (i = 0; i < N; i++) {
    angle = 360 / N;
    x2 = centreX + radius * Math.cos(Math.PI * angle * i / 180);
    y2 = centreY + radius * Math.sin(Math.PI * angle * i / 180);
    DrawLine(centreX, centreY, x2, y2);
  }
}