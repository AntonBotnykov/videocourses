import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(durationInMinutes: number): string {
    return durationInMinutes < 60
      ? `${durationInMinutes % 60}min`
      : `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}min`;
  }
}
