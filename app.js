const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function () {
    console.log("Voice is Activated, You can microphoneee");
};

recognition.onresult = function (event) {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//  Add Listener to the button

btn.addEventListener('click', function () {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
