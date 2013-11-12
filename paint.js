var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');
reset=document.getElementById('reset');
line=document.getElementById('line');
rect=document.getElementById('rect');
circle=document.getElementById('circle');
var draw=0;

reset.onclick= function (e) 
{
	draw='';
	context.clearRect(0, 0, canvas.width, canvas.height);
};

line.onclick= function (e) 
{
	draw=1;
	if (draw==1) 
	{
		canvas.onmousedown=function (e) 
		{
		img=context.getImageData(0,0,canvas.width,canvas.height); 
		start_x=e.x;
		start_y=e.y;
		drag=true;
		}
		canvas.onmousemove= function(e)
		{
			if(drag)
			{
			context.putImageData(img,0,0);
         		end_x=e.x;
		        end_y=e.y;
			context.beginPath();
			context.moveTo(start_x, start_y);
        		context.lineTo(end_x, end_y);
			context.stroke();
			context.closePath();
		}	}
		canvas.onmouseup= function(e)
                {
                drag=false;
                }


   	}
}


rect.onclick= function (e) 
{
	
	draw=2;
	//alert(draw);	
	if(draw==2) 
	{
		canvas.onmousedown= function(e) 
		{
		img=context.getImageData(0, 0, canvas.width, canvas.height);
		drag=true;
        	start_x=e.x;
        	start_y=e.y
        	}
		canvas.onmouseup = function(e) 
  		{
		drag=false;
		}
		canvas.onmousemove= function(e)
		{
			if(drag)
			{
			context.putImageData(img, 0, 0);
			end_x=e.x-start_x;
			end_y=e.y-start_y
			context.strokeRect(start_x, start_y, end_x, end_y);
			}
   		}	
	}
}


circle.onclick= function(e)
{
	alert('hai');
}

