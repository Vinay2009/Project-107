
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jj7yD6vH8/model.json')
}

function modelReady(){
    classifier.classify(gotResults);
}