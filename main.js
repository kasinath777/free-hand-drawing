var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var colour="black" ;
var widthOfLine=1;

var mouseEvent="empty";
var lastX;
var lastY;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
colour= document.getElementById("color").value;
widthOfLine= document.getElementById("width").value;
mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=widthOfLine;
ctx.moveTo(lastX,lastY);
ctx.lineTo(currentX,currentY);
ctx.stroke();
}
lastX=currentX;
lastY=currentY;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}

function clear1(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
