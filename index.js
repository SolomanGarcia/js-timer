// Event listener to watch for a click on 'start button
// Draw a full border around the timer
// Start counting down the timer
// Each time the timer counts down, update the border
// Each time the timer counts down, update the text
// If we counted down and timer reaches 0
// Reset the border
// Reset the internal timer to get ready for another run

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start = () => {
    this.tick();
    setInterval(this.tick, 1000);
  };

  tick = () => {};
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
