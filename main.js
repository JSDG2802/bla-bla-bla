var x = 0
var y = 0
draw_circle = ""
draw_square = ""
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function setup() 
{
    canvas = createCanvas(900, 600);
}
function draw() 
{
    background("gray");
    if(draw_circle == "set")
    {
      circle(x,y,25)
      document.getElementById("status").innerHTML = "dibujamos un circulo";
      drawCircle ="";
    }
    if(draw_square == "set")
    {
      rect(x,y,25,25)
      document.getElementById("status").innerHTML = "dibujamos un cuadrado";
    }
}
function start() 
{
    document.getElementById("status").innerHTML = "Comienza a hablar";
    recognition.start();
}
recognition.onResult = function (event) 
{
    console.log(event);
    var contenido = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "se reconocio: "+contenido;
    if (contenido == "circulo")
    {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    draw_circle = "set";
    document.getElementById().innerHTML = "Estoy dibujando un circulo";
    }
    if (contenido == "cuadrado")
    {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    draw_square = "set";
    document.getElementById().innerHTML = "Estoy dibujando un cuadrado";
    }
}