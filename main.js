x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

draw_apple = "";

var number_converter = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  number_converter = Number(content);
  if(Number.isInteger(number_converter)){
    document.getElementsByName("status").innerHTML = "draw apple wait pls";
    draw_apple = "set";
  }
  else{
    document.getElementsByName("status").innerHTML = "Plz give integer and try again =)"
  }
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(screen_width, screen_height - 200);
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; i<= number_converter; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = number_converter + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
