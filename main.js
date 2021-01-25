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
    if (output=="say cheese") {
        speak()
        Webcam.attach("#camera")
    }
}
function speak() {
    speech=window.speechSynthesis;
    speakdata="Taking selfei in 5 seconds"
    saythis=new SpeechSynthesisUtterance(speakdata);
    speech.speak(saythis);
    setTimeout(function () {
        takesnapshot();
        save()        
    },5000)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: `png`,
    png_quality: 90
});
function takesnapshot() {
    Webcam.snap(function (pic){
        document.getElementById("selfie").innerHTML=`<img src=${pic} id="pic_id">`
    })
}
function save() {
    a=document.getElementById("link")
    img=document.getElementById("pic_id").src;
    a.href=img
    a.click()       
}