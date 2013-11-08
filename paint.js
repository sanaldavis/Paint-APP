var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');
reset=document.getElementById('reset');
line=document.getElementById('line');

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

function Gradient() {
	gradient = context.createLinearGradient(0, 0, canvas.width, 0);
	gradient.addColorStop(0, 'blue');
	gradient.addColorStop(0.25, 'white');
	gradient.addColorStop(0.5, 'purple');
	gradient.addColorStop(0.75, 'red');
	gradient.addColorStop(1, 'yellow');
	context.fillStyle = gradient;
	context.rect(0, 0, canvas.width, canvas.height);
}

function stroke_Rect() {
	context.beginPath();
	context.rect(450, 150, 150,100);
	context.stroke();
	context.fill();
}

make_Text();
make_Rect();
make_Line();
stroke_Rect();
//Gradient();

reset.onclick= function (e) {
	context.clearRect(0, 0, canvas.width, canvas.height);
};

line.onclick= function (e) {
	//alert("hai");
	context.canvas.onmousedown = function(e) 
	{
	 start_x=e.x;
	 start_y=e.y;
	}
	//alert(start_x,start_y);
	context.canvas.onmouseup = function(e)
        {
         end_x=e.x;
         end_y=e.y;
	context.beginPath();
	context.moveTo(start_x, start_y);
        context.lineTo(end_x, end_y);
	context.stroke();
	}
};
