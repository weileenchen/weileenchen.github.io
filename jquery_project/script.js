/*var h;
var m;
var s;*/
//https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_clock_start

$(document).ready(function() {
  var interface = "digital";
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.90
  /*if (interface === "digital") {
    setInterval(updateClock, 1000);
  } else {
    setInterval(drawClock, 1000);
  }*/

  setInterval(updateClock, 1000);
  setInterval(drawClock, 1000);

  //https://www.sitepoint.com/create-jquery-digital-clock-jquery4u/
  function updateClock() {
 	  var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

   	$("#clock").html(currentTimeString);	
  }

  function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }

  function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = '#c9d6ff';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, 'white');
    grad.addColorStop(0.25, '#c9d6ff');
    grad.addColorStop(1, '#c9d6ff');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.03, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.font = radius*0.1 + 'px "Open Sans"';
    ctx.fillText("EST", 0, 0);
    ctx.fill();
  } 

  function drawNumbers(ctx, radius) {
    ctx.font = radius*0.075 + 'px "Open Sans"';
    var ang;
    var num;
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }

  function drawTime(ctx, radius){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      drawHand(ctx, hour, radius*0.65, radius*0.015);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      drawHand(ctx, minute, radius*0.75, radius*0.015);
      // second
      second=(second*Math.PI/30);
      drawHand(ctx, second, radius*0.8, radius*0.01);
  }

  function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
})