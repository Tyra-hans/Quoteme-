import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'

})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        return 'Just now';
      }
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter;
      // tslint:disable-next-line: forin
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        // tslint:disable-next-line: curly
        if (counter > 0)
        if (counter === 1) {
          return counter + ' ' + i + ' ago';
        } else {
          return counter + ' ' + i + 's ago';
        }

      }

      return value;
    }
  }
}
