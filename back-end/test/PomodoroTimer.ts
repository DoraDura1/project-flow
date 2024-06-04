export class PomodoroTimer {
    private intervalId: NodeJS.Timeout | null;
    private secondsLeft: number;
    public isRunning: boolean;
  
    constructor() {
      this.intervalId = null;
      this.secondsLeft = 0;
      this.isRunning = false;
    }
  
    start(minutes: number) {
      this.secondsLeft = minutes * 60;
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.secondsLeft--;
        if (this.secondsLeft === 0) {
          this.pause();
        }
      }, 1000);
    }
  
    pause() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = null;
      this.isRunning = false;
    }
  
    resume() {
      if (!this.isRunning && this.secondsLeft > 0) {
        this.intervalId = setInterval(() => {
          this.secondsLeft--;
          if (this.secondsLeft === 0) {
            this.pause();
          }
        }, 1000);
        this.isRunning = true;
      }
    }
  
    reset() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = null;
      this.secondsLeft = 0;
      this.isRunning = false;
    }
  
    getTimeLeft() {
      return this.secondsLeft;
    }
  }
  