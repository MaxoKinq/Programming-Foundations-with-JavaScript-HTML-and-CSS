console.log('Hi all!');
var x = 10;
var y = 15;
var z = x * y;
console.log("Var x = " + x);
console.log("Var y = " + y);
console.log("x * y = z, z = " + z);

// Practice JS Web JS // 

function dochange() {
	alert('This is a button with an onclick alert with JS integration. In this case inside a Function');
}

function extrachallenge() {
	if (confirm("Press a button!")) {
		alert('Are you sure you want to press ok?');{
			txt = "You pressed OK!";
		}
	}
	else {
		alert('Are you sure you want to press cancel?');{
			txt = "You pressed cancel!";
		}
	}
	document.getElementById("extrap").innerHTML = txt;
}

// spanish() english()
// backgrounds() -> class: .deadpool & class: .greenlighter

function spanish(){
	var wworld = document.getElementById("world");
	var hhay = document.getElementById("hay");
	var cchangelanguage = document.getElementById("changelanguage");
	var eenglish = document.getElementById("english")	

	wworld.innerHTML = "Hola mundo !";
	hhay.innerHTML = "¿Cómo estas?"
	cchangelanguage.style.display = 'none';
	eenglish.style.display = 'inline';
}

function english(){
	var wworld = document.getElementById("world");
	var hhay = document.getElementById("hay");
	var cchangelanguage = document.getElementById("changelanguage");
	var eenglish = document.getElementById("english")	

	wworld.innerHTML = "Hello world !";
	hhay.innerHTML = "How are you?"
	eenglish.style.display = 'none';
	cchangelanguage.style.display = 'inline';
}


function backgrounds(){
	var wworld = document.getElementById("world");
	var hhay = document.getElementById("hay");
	var bbackgrounds = document.getElementById("backgrounds");
	var rbackgrounds = document.getElementById("rbackgrounds");

	wworld.className = "deadpool";
	hhay.className = "greenlighter";
	bbackgrounds.style.display = 'none';
	rbackgrounds.style.display = 'inline';

}

function rbackgrounds(){
	var wworld = document.getElementById("world");
	var hhay = document.getElementById("hay");
	var bbackgrounds = document.getElementById("backgrounds");
	var rbackgrounds = document.getElementById("rbackgrounds");

	wworld.className = "";
	hhay.className = "";
	rbackgrounds.style.display = 'none';
	bbackgrounds.style.display = 'inline';

}

//CANVAS SCRIPT START BELOW HERE //

function doRed() {
	var canv1 = document.getElementById("canv1");
	canv1.style.backgroundColor="red";
	var ctx1 = canv1.getContext("2d");
		ctx1.fillStyle="black";
		ctx1.fillRect(10,10,60,60);
		ctx1.fillRect(80,10,60,60);

		ctx1.fillStyle="white"
		ctx1.font="20px Arial";
		ctx1.fillText("Hello",17,45);

}

function doBlue() {
	var canv1 = document.getElementById("canv1");
	var ctx1 = canv1.getContext("2d");
		ctx1.clearRect(0,0,200,100);
	canv1.style.backgroundColor="blue"
}

function docolor() {
  var canv2 = document.getElementById("canv2");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  canv2.style.backgroundColor = color;
}

function docolor2() {
  var canv2 = document.getElementById("canv2");
  var colorinput = document.getElementById("clr2");
  var color = colorinput.value;
  canv2.style.backgroundColor = color;
}

function dosquare() {
	var canv2 = document.getElementById("canv2");
	var sizeinput = document.getElementById("sldr");
	var size = sizeinput.value;
	var ctx = canv2.getContext("2d");
	ctx.clearRect(0,0,200,110);
	ctx.fillStyle = "yellow";
	ctx.fillRect(10,10,size,size);
}
