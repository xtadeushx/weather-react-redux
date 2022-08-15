export class CurrentDate {
  milliseconds: Date;
  constructor(milliseconds: Date) {
    this.milliseconds = milliseconds;
  }
  getDay() {
    let options: any = { weekday: 'long' };
    return this.milliseconds.toLocaleString('uk-UA', options);
  }
  getTime() {
    return this.milliseconds.getHours() + ':' + this.milliseconds.getMinutes();
  }
}
