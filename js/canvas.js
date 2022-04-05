var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

// Part 3 //
function setWidth (value) {
 var value = document.getElementById("setwidth").value;
  if(isNumeric(value)){
    paintcanvas.width=value;
  }
}
// END OF PART 3 ABOVE //
// Part 4 //
function setHeight (value) {
 var value = document.getElementById("setheight").value;
  if(isNumeric(value)){
    paintcanvas.height=value;
  }
}
  // END OF PART 4 ABOVE//
 // PART 5 & 6 //
function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x,y){
  if(isPainting == true){
    paintCircle(event.offsetX,event.offsetY);
  }
}

// END OF PART 5 & 6 ABOVE 

// PART 7 // 

function changeColor(newColor){
  color = newColor;
}

// PART 7 END ABOVE //

// PART 8 & 9 //

function resizeBrush(newSize){
  radius = newSize;
  sizeOutput = document.getElementById("sizeOutput");
  sizeOutput.value= newSize;
}

// PART 8 & 9 END ABOVE //

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}


// Download Button //

 canvas = document.getElementById("canvas1");
var download = document.getElementById("download");

download.addEventListener('click', function (e) {
console.log(canvas.toDataURL());
var link = document.createElement('a');
link.download = "download.png"  
link.href = canvas.toDataURL();
link.click();
link.delete;
});
