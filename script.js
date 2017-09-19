function playAudioOnKeyDown(elt) {
    let soundToPlay = document.querySelector(`audio[data-key="${elt.keyCode}"]`);
    let keyToAnimate = document.querySelector(`div[data-key="${elt.keyCode}"]`);
    keyToAnimate.classList.add('playing');
    soundToPlay.currentTime = 0;
    soundToPlay.play();

    keyToAnimate.addEventListener('transitionend', function(element){
        if(element.target.classList.contains('playing')) {
            element.target.classList.remove('playing');
        }
    });
}
window.addEventListener('keydown', playAudioOnKeyDown);