Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
    
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    
    console.log('ml5 version', ml5.version);
    
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json' ,modelLoaded)
    
    function modelLoaded(){
        console.log('model Loaded!');
    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        speak_data_2 = "The second prediction is " + prediction_2;
    varutterThis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth .speak(utterThis);
    }

    function check ()
{
    img = document.getElementById('captured_images');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }else{
    console.log(results);
    
    
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    
    prediction_1 = results[0].label;
    c
    speak();
    if(results[0].label == "happy")
    {
        document.getElementById("update_emoji").innerHTML = "&#128522;";
    
    }
    
    if(results[0].label == "sad")
    {
        document.getElementById("update_emoji").innerHTML = "&#128532;";
        
    }
    
    if(results[0].label == "angry")
    {
        document.getElementById("update_emoji").innerHTML = "&#128548;";
          
    }}}