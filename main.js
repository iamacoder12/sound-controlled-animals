
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bKhoVspY7/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = (Math.random() * 225) + 1;
        random_number_g = (Math.random() * 225) + 1;
        random_number_b = (Math.random() * 225) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";

        img  = document.getElementById('ear');

        if (results[0].label == "Birds") {
            img.src = 'birds.gif';
        } else if (results[0].label == "Cats") {
            img.src = 'cat.gif';
        } else if (results[0].label == "Dogs") {
            img.src = 'dog.gif';
        }
    }
}