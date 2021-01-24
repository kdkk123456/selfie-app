var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function run(event) {
    console.log(event)
    var output=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=output;
    speak()
    Webcam.attach("#camera")
}
function speak() {
    speech=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    saythis=new SpeechSynthesisUtterance(speakdata);
    speech.speak(saythis);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: `png`,
    png_quality: 90
});
