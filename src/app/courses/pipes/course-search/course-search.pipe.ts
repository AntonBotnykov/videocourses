import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseSearch',
  pure: false
})
export class CourseSearchPipe implements PipeTransform {

  transform(courses: object[], search: string): object[] {
    return courses.filter(course => ~course['title'].toLowerCase().indexOf(search.toLowerCase()));
  }
}
