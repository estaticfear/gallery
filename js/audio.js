var audio;
export function play() {
  if (!audio) {
    audio = new Audio("/music/darling.mp3");
    audio.loop = true;
  }
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
