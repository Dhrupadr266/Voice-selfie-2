var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
                console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speak();
    }

}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Piturce will be clicked in 5 seconds";
    var uttr_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttr_this);
    Webcam.attach(camera);
}
Webcam.set({
    width:350,
    hieght:250,
    image_format:'png',
    png_quality:90

});
var camera = document.getElementById("camera");