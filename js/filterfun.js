var originalImage = null;
var grayImage = null;
var redImage = null;
var blurImage = null;
var rainbowImage = null;
var windowImage = null;

function upload(){
 var fileinput = document.getElementById("finput");
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  redImage = new SimpleImage(fileinput);
  blurImage = new SimpleImage(fileinput);
  rainbowImage = new SimpleImage(fileinput);
  windowImage = new SimpleImage(fileinput);
  originalImage.drawTo(canvas);
}

// Gray Filter //

function doGray() {
  if (imageIsLoaded(grayImage)) {
    makeGray();
    grayImage.drawTo(canvas);
  }
}

function makeGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

// RED Filter //

function doRed() {
  if (imageIsLoaded(redImage)) {
    makeRed();
    redImage.drawTo(canvas);
  }
}

function makeRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

// RAINBOW Filter //

function doRainbow() {
  if (imageIsLoaded(rainbowImage)) {
    makeRainbow();
    rainbowImage.drawTo(canvas);
  }
}

function makeRainbow() {
  for (var pixel of rainbowImage.values()){
    var pixelS = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(pixel.getY()<=rainbowImage.getHeight()/7){   
          if(pixelS>=128){ pixel.setRed(255);
                      pixel.setGreen(2*pixelS-255);
                      pixel.setBlue(2*pixelS-255);}
          else if(pixelS<128){ pixel.setRed(2*pixelS);
                      pixel.setGreen(0);
                      pixel.setBlue(0);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*2   
          && pixel.getY()>rainbowImage.getHeight()/7){
          if(pixelS>=128){ pixel.setRed(2*pixelS);
                      pixel.setGreen(0.8*pixelS);
                      pixel.setBlue(0);}
          else if(pixelS<128){ pixel.setRed(255);
                      pixel.setGreen(1.2*pixelS-51);
                      pixel.setBlue(2*pixelS-255);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*3    
          && pixel.getY()>rainbowImage.getHeight()/7*2){
          if(pixelS>=128){ pixel.setRed(255);
                      pixel.setGreen(255);
                      pixel.setBlue(2*pixelS-255);}
          else if(pixelS<128){ pixel.setRed(2*pixelS);
                      pixel.setGreen(2*pixelS);
                      pixel.setBlue(0);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*4     
          && pixel.getY()>rainbowImage.getHeight()/7*3){
          if(pixelS>=128){ pixel.setRed(2*pixelS-255);
                      pixel.setGreen(255);
                      pixel.setBlue(2*pixelS-255);}
          else if(pixelS<128){ pixel.setRed(0);
                      pixel.setGreen(2*pixelS);
                      pixel.setBlue(0);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*5     
          && pixel.getY()>rainbowImage.getHeight()/7*4){
          if(pixelS>=128){ pixel.setRed(2*pixelS-255);
                      pixel.setGreen(2*pixelS-255);
                      pixel.setBlue(255);}
          else if(pixelS<128){ pixel.setRed(0);
                      pixel.setGreen(0);
                      pixel.setBlue(2*pixelS);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*6   
          && pixel.getY()>rainbowImage.getHeight()/7*5){
          if(pixelS>=128){ pixel.setRed(0.8*pixelS);
                      pixel.setGreen(0);
                      pixel.setBlue(2*pixelS);}
          else if(pixelS<128){ pixel.setRed(1.2*pixelS-51);
                      pixel.setGreen(2*pixelS-255);
                      pixel.setBlue(255);}}
       if(pixel.getY()<=rainbowImage.getHeight()/7*7   
          && pixel.getY()>rainbowImage.getHeight()/7*6){
          if(pixelS>=128){ pixel.setRed(1.6*pixelS);
                      pixel.setGreen(0);
                      pixel.setBlue(1.6*pixelS);}
          else if(pixelS<128){ pixel.setRed(0.4*pixelS+153);
                      pixel.setGreen(2*pixelS-255);
                      pixel.setBlue(0.4*pixelS+153);}}
}}

// Blur Function //

function makeBlur() {
  for(var pixel of blurImage.values()) {
    var xpix = pixel.getX();
    var ypix = pixel.getY();
    randPixel = Math.random();
   if (randPixel < 0.5) {
     blurImage.setPixel(xpix,ypix,pixel);
   }
    else {
      nearByPixel(xpix,ypix);
  }
  }
}

// Blur Pixel Gather Function //

function nearByPixel(x,y) {
  var width = blurImage.getWidth();
  var height = blurImage.getHeight();
  var PixelX = x + Math.floor(10*randPixel);
  var PixelY = y + Math.floor(10*randPixel);
  if (PixelX >= width) {
    PixelX = width - Math.floor(10*randPixel)-1;
  }
  if (PixelY >=height) {
    PixelY = height - Math.floor(10*randPixel)-1;
  }
  var nearPixel = blurImage.getPixel(PixelX,PixelY);
  blurImage.setPixel(x,y,nearPixel);
   }


function doBlur() {
  if (imageIsLoaded(blurImage)) {
    makeBlur();
    blurImage.drawTo(canvas);
  }
     }

// Window Filter //

function makeWindow(){
  for (var pixel of windowImage.values()){
    var w = windowImage.getWidth();
    var h = windowImage.getHeight();
    var x = pixel.getX();
    var y= pixel.getY();
    if (y <= 10 || y >= (h-10) || x <= 10 || x >= (w-10) || y > (h/2) && y < (h/2 + 10) || x > (1/4 * w) && x < (1/4 * w + 10) || x > (1/2 * w - 5) && x < (1/2 * w + 5) || x > (3/4 * w - 10) && x < (3/4 * w)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
}

function doWindow() {
  if (imageIsLoaded(windowImage)) {
    makeWindow();
    windowImage.drawTo(canvas);
  }
     }

// Download Button //

var canvas = document.getElementById("canv");
var download = document.getElementById("download");
download.addEventListener('click', function (e) {
console.log(canvas.toDataURL());
var link = document.createElement('a');
link.download = "download.png"  
link.href = canvas.toDataURL();
link.click();
link.delete;
});

// Reset Image //

function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    blurredImage = new SimpleImage(originalImage);
  }
}

// Image is Loaded Alert //

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}