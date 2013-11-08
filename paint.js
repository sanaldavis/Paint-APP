var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');

function make_Rect() {
	context.strokeRect(10,10,100,100);
	context.fillStyle= 'rgba(0,0,255,0.5)';
	context.fillRect(120,120,300,300);
}

function make_Text() {
	context.font= "24px Helvetica"
	context.fillText("Click anywhere to erase",120,150);
}

function make_Line() {
	context.lineWidth= 1;
	context.beginPath();
	context.moveTo(50,10);
	context.lineTo(450,10);
	context.stroke();
	context.beginPath();
	context.moveTo(50.50,50.50);
	context.lineTo(450.50,50.50);
	context.stroke();
}

make_Text();
make_Rect();
make_Line();

context.canvas.onmousedown = function(e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
};

