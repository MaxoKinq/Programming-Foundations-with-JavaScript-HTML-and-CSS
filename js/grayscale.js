var image;
var imgcanvas2;

function upload(){
  var imgcanvas = document.getElementById("canv");
  imgcanvas2 = document.getElementById("canv2");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
   image.drawTo(imgcanvas2);
}

function makeGray(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imgcanvas2 = document.getElementById("canv2")
  image.drawTo(imgcanvas2);
}

// Download Button //

var canvas = document.getElementById("canv2");
var download = document.getElementById("download");
download.addEventListener('click', function (e) {
console.log(canvas.toDataURL());
var link = document.createElement('a');
link.download = "download.png"  
link.href = canvas.toDataURL();
link.click();
link.delete;
});
