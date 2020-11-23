var twelveHours = false;
function getdate(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes(); 
    var s = today.getSeconds();
    if (twelveHours) {
        if (h > 12) {
            h = h - 12;
        } 
    }
     if(s<10){
         s = "0" + s;
     }
     if (m < 10) {
        m = "0" + m;
     }

    $("h1").text(h+" : "+m+" : "+s);
     setTimeout(function(){getdate()}, 500);
    };


(function($){

$.fn.time = function(options) {
    
    var defaults = {};
    var options = $.extend(defaults, options);
    
   
    return this.each(function() {
    var obj = $(this); 
    obj.html('<canvas id="canvas"> </canvas>');
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var size = 400;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
    canvas.width = size * scale;
    canvas.height = size * scale;
    ctx.scale(scale, scale);
    var radius = canvas.height / 4;
    ctx.translate(radius, radius);
    radius = radius * 0.90  
    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }
    
    function drawFace(ctx, radius) {
        var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI);
        ctx.fillStyle = '#EC0868';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = radius*0.02;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius*0.03, 0, 2*Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    } 

    function drawNumbers(ctx, radius) {
        ctx.font = radius*0.075 + 'px "Open Sans"';
        var ang;
        var num;
        var div;
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        var hours;
        if (twelveHours) {
            hours = 13;
            div = 6;
        } else {
            hours = 25;
            div = 12;
        }
        for(num = 1; num < hours; num++) {
          ang = num * Math.PI / div;
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
        if (twelveHours) {
            hour=(hour%12)*(Math.PI/6);
        } else {
            hour=(hour%12)*(Math.PI/12);
        }
        hour=hour+
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
    setInterval(function(){drawClock()}, 1000);
       
});   
 
   
 
};  
})(jQuery);

let interfaceButton = document.querySelector("#interface");
var interface = "DIGITAL";

let hoursButton = document.querySelector("#hours");

$(document).ready(function(){
 getdate();
 $('#clock').time();

$( "#interface" ).click(function() {
    if (interface === "DIGITAL") {
        interface = "ANALOG";
    } else {
        interface = "DIGITAL";
    }
    interfaceButton.textContent = interface;
 $( ".toggle" ).toggle();
  $(this).toggleText('Before', 'After');;
});

$( "#hours" ).click(function() {
    if (twelveHours) {
        twelveHours = false;
        hoursButton.textContent = "12 HOURS";
    } else {
        twelveHours = true;
        hoursButton.textContent = "24 HOURS";
    }
    getdate();
    $('#clock').time();
});

});
