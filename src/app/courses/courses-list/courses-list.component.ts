import {Component, OnInit} from '@angular/core';
import {COURSES} from '../mock-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses = COURSES;

  searchValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  onSearch(): void {
    console.log(`Search: ${this.searchValue}`);
  }

  onAdd(): void {
    console.log('Add new course');
  }

  onLoadMore(): void {
    console.log('Load more');
  }

  onEditCourse(id: number): void {
    console.log(`edit course id=${id}`);
  }

  onDeleteCourse(id: number): void {
    console.log(`delete course id=${id}`);
  }
}
