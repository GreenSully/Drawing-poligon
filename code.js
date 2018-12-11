

var NumVertici=Math.floor(Math.random()*27)+3;
var animate = /*window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||*/
function(callback) { window.setTimeout(callback, 1000/NumVertici) };
var canvas=document.createElement ("canvas");
var ctx;
ctx=canvas.getContext("2d");


var width=1000;
var height=800;
canvas.width=width;
canvas.height=height;



var lunghezza=Math.floor(Math.random()*100)+200;
var Xcoord=[];
var Ycoord=[];
var Flag=[];
var rad=Math.floor(Math.random()*360);
calcolaX();
calcolaY();
var index=0;
var incremento=1;

var grd = ctx.createRadialGradient(width/2, height/2, lunghezza/3, width/2, height/2,lunghezza);
grd.addColorStop(0, randomColor());
grd.addColorStop(1,randomColor());
ctx.strokeStyle=grd;
ctx.fillRect(0,0,width,height);
ctx.lineWidth=2;
var step = function(){
	draw(index,incremento);
	index++;
	if(index>NumVertici){
		index=0;
		incremento++;
	}
	
	if(incremento>=NumVertici/2){
		return;
	}
	animate(step);
};


function calcolaX(){
	
	var incremento=360/NumVertici;
	var i;
	for(i=0;i<NumVertici;i++){
		Xcoord[i]=Math.cos(Math.PI*rad/180)*lunghezza+width/2;
		rad+=incremento;
	}
	
}

function calcolaY(){
	
	var incremento=360/NumVertici;
	var i;
	for(i=0;i<NumVertici;i++){
		Ycoord[i]=Math.sin(Math.PI*rad/180)*lunghezza+height/2;
		rad+=incremento;
	}
	
}

function draw(index,incremento){
	
	
		ctx.beginPath();
		ctx.moveTo(Xcoord[index],Ycoord[index]);
		index=(index+incremento)%NumVertici;
		ctx.lineTo(Xcoord[index],Ycoord[index]);
		ctx.stroke();
	
	
	
}

function randomColor(){
	var color;
	switch(Math.floor(Math.random()*7)){
		case 0:color="#ffffff";break;
		case 1:color="#ff0000";break;
		case 2:color="#00ff00";break;
		case 3:color="#0000ff";break;
		case 4:color="#ffff00";break;
		case 5:color="#ff00ff";break;
		case 6:color="#00ffff";break;
		default:color="#00ff00";break;
	}
	return color;
}

canvas.addEventListener("click",function(event){location.reload()});

window.onload=function(){
document.body.appendChild(canvas);
animate(step);
};
