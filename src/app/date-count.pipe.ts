import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: Date): number {

    const today: number = Date.now();
    const dateCreated =  value.getTime();
    const timePassed = today - dateCreated;
    const daysPassed =Math.floor(timePassed / 86400 )

    return daysPassed; }

}
