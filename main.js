//Create a reference for canvas 
canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=10;
greencar_y=10;

function add() {
	//upload car, and background images on the canvas.
	bg_image=new Image();
	bg_image.onload=uploadBackground;
	bg_image.src=background_image;

	gc_image=new Image();
	gc_image.onload=uploadgreencar;
	gc_image.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_image,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(gc_image,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=0)
	{
		greencar_y=greencar_y-10;
		console.log("When up arrow is pressed, x="+ greencar_x+"| y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y<=500)
	{
		greencar_y=greencar_y+10;
		console.log("When up arrow is pressed, x="+ greencar_x+"| y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}

}

function left()
{
	//Define function to move the car left side
	if(greencar_x>=0)
	{
		greencar_x=greencar_x-10;
		console.log("When up arrow is pressed, x="+ greencar_x+"| y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}

}

function right()
{
	//Define function to move the car right side
	if(greencar_x<=700)
	{
		greencar_x=greencar_x+10;
		console.log("When up arrow is pressed, x="+ greencar_x+"| y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}

}
