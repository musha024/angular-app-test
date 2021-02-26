export class Weather {
  day: string;
  temperature: string;
  windspeed: string;
  event: string;
  [key: string]: any;

  constructor(day: string, temperature: string, windspeed: string, event: string) {
    this.day = day;
    this.temperature = temperature;
    this.windspeed = windspeed;
    this.event = event;
  }

}
