var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');
reset=document.getElementById('reset');
line=document.getElementById('line');
rect=document.getElementById('rect');
circle=document.getElementById('circle');
pencile=document.getElementById('pencil');
width=document.getElementById('width');
var draw=0;

reset.onclick= function (e) 
{
	
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
			context.lineWidth=width.value;
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
			end_y=e.y-start_y;
			context.lineWidth=width.value;
			context.strokeRect(start_x, start_y, end_x, end_y);
			}
   		}	
	}
}


circle.onclick= function(e)
{
	draw=3;
	if(draw==3)
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
                        context.beginPath();
		      	end_x=e.x;
		        end_y=e.y;
		        dx=Math.abs(end_x-start_x);
		        dy=Math.abs(end_y-start_y);
		        midx=(start_x+end_x)/2;
		        midy=(start_y+end_y)/2;
		        radius=Math.sqrt(dx*dx + dy*dy)/2;      
			context.lineWidth=width.value;
		        context.arc(midx, midy, radius, 0, Math.PI*2, false);
		        context.stroke();
                        }
                }
	}
}



pencile.onclick= function (e)
{
        draw=4;
        if (draw==4)
        {
                canvas.onmousedown=function (e)
                {
                //img=context.getImageData(0,0,canvas.width,canvas.height);
                start_x=e.x;
                start_y=e.y;
                drag=true;
                }
                canvas.onmousemove= function(e)
                {
                        if(drag)
                        {
                        //context.putImageData(img,0,0);
                        end_x=e.x;
                        end_y=e.y;
			context.lineWidth=width.value;
                        context.beginPath();
			context.moveTo(start_x, start_y);
                        context.lineTo(end_x, end_y);
                        context.stroke();
                        context.closePath();
			start_x=end_x;
			start_y=end_y;
                }       }
                canvas.onmouseup= function(e)
                {
                drag=false;
                }
        }
}

