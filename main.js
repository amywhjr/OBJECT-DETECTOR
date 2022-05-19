img="";
status="";
function preload()
{
    img=loadImage("dog_cat.jpg")
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='status:Detecting objects';
}
function modelLoaded()
{
    console.log("model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if (error) 
    {
      console.error(error);  
    }
    console.log(results)
}


function draw() {
   image(img,0,0,640,420);
   fill("red");
   text("Dog",160,55);
   
   noFill();
   stroke("red");
  
   rect(60,60,300,350);
   fill("cyan")
   text("cat",400,120);

   noFill();
   stroke("cyan")

   rect(300,50,265,350);
   
  }
  