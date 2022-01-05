var c = document.getElementById("Frame");
var ctx = c.getContext("2d");
var radius = 100;
var x = 400;
var y = 300;
var i = 0;
var turn = 1;

var stop = 0;

ctx.beginPath();
ctx.arc(x, y, 25, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

setInterval(drawCircle, 1);

function clockwise(){
	stop += 1;
	stop %= 2;
	turn = 0;
}

function counterclockwise(){
	stop += 1;
	stop %= 2;
	turn = 1;
}

function init(){
	ctx.beginPath();
	x = 100;
	y = 100;
	ctx.arc(x, y, 25, 0, 2 * Math.PI);
}

function drawCircle(){
	if(stop == 1){
		if(turn == 0){
			ctx.clearRect(0, 0, 600, 600);
			ctx.beginPath();
			x = (300 + radius * Math.cos(i * (2 * Math.PI / 60)));
			y = (300 + radius * Math.sin(i * (2 * Math.PI / 60)));
			ctx.arc(x, y, 25, 0, 2 * Math.PI);
			ctx.fill();
			i += 1;
		}
        else{
			ctx.clearRect(0, 0, 600, 600);
			ctx.beginPath();
			x = (300 + radius * Math.cos(i * (2 * Math.PI / 60)));
			y = (300 + radius * Math.sin(i * (2 * Math.PI / 60)));
			ctx.arc(x, y, 25, 0, 2 * Math.PI);
			ctx.fill();
			i -= 1;
		}
	}
}