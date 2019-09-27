import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {

    // 30 --> 00:00:30
    // 62 --> 00:01:02
    // 3662 --> 01:01:02

    let hours = Math.floor(value / 3600);
    let minutes = Math.floor((value - (hours * 3600)) / 60);
    let seconds = value - (hours * 3600) - (minutes * 60);

    return this.pad(hours, 2) + ':' + this.pad(minutes, 2) + ':' + this.pad(seconds, 2);
  }

  pad(number, size) {
    var s = String(number);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
  }
}
