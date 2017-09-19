/**
 * Takes a keyCode and choses the related audio file to play and the key div to add transition. 
 * After finding the related audio file, it plays the file and add the related transition-effect CSS class to key div.
 * Later, after playing the audio, an event listener removes the transition class from key div.
 * 
 * @param {number} keyCode - The code of the key pressed (like 62, 72 etc)
 */
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

/**
 * Gets called using addEventListener, whenever a key is pressed.
 * Then, it find the keyCode (a numeric number associated with key) and calls @playAudio to play the 
 * audio associated with that key.
 * 
 * @param {object} event - Key down event object
 */
function playAudioOnKeyDown(event) {
    playAudio(event.keyCode);
}

/**
 * Gets called by the HTML key div using 'onclick()' and it calls the @playAudio function to play the related audio.
 * 
 * @param {number} keyCode - A unique number associated with a unique key, provided by the HTML key div tag
 */
function playAudioOnClick(keyCode) {
    playAudio(keyCode);
}

window.addEventListener('keydown', playAudioOnKeyDown);