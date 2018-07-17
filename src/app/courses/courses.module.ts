import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesListItemComponent} from './courses-list-item/courses-list-item.component';
import {FormsModule} from '@angular/forms';
import {CourseStatusDirective} from './directives/course-status/course-status.directive';
import {CourseDurationPipe} from './pipes/course-duration/course-duration.pipe';
import {CourseSearchPipe} from './pipes/course-search/course-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CourseStatusDirective,
    CourseDurationPipe,
    CourseSearchPipe
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule {
}
