import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesListItemComponent} from './courses-list-item/courses-list-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule {
}
