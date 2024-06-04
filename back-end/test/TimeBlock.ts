class TimeBlock {
    private startTime: string;
    private endTime: string;
  
    constructor(startTime: string = '', endTime: string = '') {
      this.startTime = startTime;
      this.endTime = endTime;
    }
  
    setTimes(startTime: string, endTime: string) {
      this.startTime = startTime;
      this.endTime = endTime;
    }
  
    updateTimes(newStartTime: string, newEndTime: string) {
      this.startTime = newStartTime;
      this.endTime = newEndTime;
    }
  
    getStartTime() {
      return this.startTime;
    }
  
    getEndTime() {
      return this.endTime;
    }
  
    getDuration() {
      const start = new Date(`2000-01-01T${this.startTime}`);
      const end = new Date(`2000-01-01T${this.endTime}`);
      const duration = (end.getTime() - start.getTime()) / (1000 * 60); // Преобразование миллисекунд в минуты
      return duration;
    }
  
    overlapsWith(otherTimeBlock: TimeBlock) {
      const startA = new Date(`2000-01-01T${this.startTime}`).getTime();
      const endA = new Date(`2000-01-01T${this.endTime}`).getTime();
      const startB = new Date(`2000-01-01T${otherTimeBlock.startTime}`).getTime();
      const endB = new Date(`2000-01-01T${otherTimeBlock.endTime}`).getTime();
  
      return startA < endB && endA > startB;
    }
  }
  
  export { TimeBlock };
  