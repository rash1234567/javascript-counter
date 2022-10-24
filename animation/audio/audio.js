const AudioContext = window.AudioContext;
const audioCtx = new AudioContext();
const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');
const audioSource = audioCtx.createMediaElementSource(audioElement);

playBtn.addEventListener ('click', () => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    if (playBtn.getAttribute('class') === 'paused') {
         audioElement.play();
     
    playBtn.setAttribute ('class', 'playing');
         playBtn.textContent = 'pause'     
    }
    else if (playBtn.getAttribute ('class') === 'playing') {
        audioElement.pause();

    playBtn.setAttribute ('class', 'paused');
         playBtn.textContent = 'play';

    }
});

audioElement.addEventListener('ended', () => {
    playBtn.setAttribute ('class', 'paused');
    playBtn.textContent = 'play'
});


const gainNode = audioCtx.createGain ();
volumeSlider.addEventListener ('input', () => {
    gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);



