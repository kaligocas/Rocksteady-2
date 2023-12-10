document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audioPlayer');
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.textContent = 'Stop';
    } else {
      audioPlayer.pause();
      playButton.textContent = 'Play';
    }
  });
});

/*document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('audioPlayer');
  audio.play();
});*/