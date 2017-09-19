function playAudio(keyCode) {
    let soundToPlay = document.querySelector(`audio[data-key="${keyCode}"]`);
    let keyToAnimate = document.querySelector(`div[data-key="${keyCode}"]`);
    keyToAnimate.classList.add('playing');
    soundToPlay.currentTime = 0;
    soundToPlay.play();

    keyToAnimate.addEventListener('transitionend', function(element){
        if(element.target.classList.contains('playing')) {
            element.target.classList.remove('playing');
        }
    });
}

function playAudioOnKeyDown(elt) {
    playAudio(elt.keyCode);
}

function playAudioOnClick(keyCode) {
    playAudio(keyCode);
}
window.addEventListener('keydown', playAudioOnKeyDown);