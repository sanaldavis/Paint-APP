
var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');


reset=document.getElementById('reset');
line=document.getElementById('line');
rect=document.getElementById('rect');
circle=document.getElementById('circle');
pencile=document.getElementById('pencil');
fill=document.getElementById('fill');
stroke=document.getElementById('stroke');
width=document.getElementById('width');
erase=document.getElementById('erase');
var draw=0;

//function which set the color when we click the color_button
function color(value)
{
	context.fillStyle=value;
	context.strokeStyle=value;
}

//function for reseting
reset.onclick= function (e) 
{
	
	context.clearRect(0, 0, canvas.width, canvas.height);
};


//To draw a line
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


//Draw the rectangle
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
			if(f==1)
				{
				context.fillRect(start_x,start_y,end_x,end_y);
				}
			}	
		}
	}
}


//Draw the circle
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
			if(f==1)
				{
				context.fill();
				}
                        }
                }
	}
}


//Draw using pencil
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


//Erase after drawing
erase.onclick= function (e)
{

        draw=5;
        if(draw==5)
        {
		canvas.onmousedown= function (e)
                        {drag=true;}
                canvas.onmouseup= function (e)
                        {drag=false;}
                
                canvas.onmousemove= function(e)
                {
			if(drag)
			{
                        //x=width.value;
                        context.clearRect(e.x, e.y, 20, 20);
                        }
                }
        }
}


fill.onclick= function (e)
{
	f=1;

}

stroke.onclick= function (e)
{
	f=0;

}
