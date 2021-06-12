objects=[];
status="";

function preload() {
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start() {
    if(objects=input){
        input=document.getElementById("object_select").value;
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById('status').innerHTML="Status: Detecting Objects";
        document.getElementById('found').innerHTML=input+" found";
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error,results) {
    if(error){
        console.log(error);
    }else{
        console.log(results);
        objects=results;
    }
}

function draw(){
    image(video,0,0,480,380);
}