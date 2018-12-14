export class SimTime {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.timenow = 0;
  }
  get() {
    return this.time;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(time) {
    let newTime = this.time + (time-this.timenow) * this.speed;
    this.time = newTime;
    this.timenow = time;
    return newTime;
  }
}
