import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseItem: Course;
  @Output() public edited = new EventEmitter<number>();
  @Output() public deleted = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit() {
  }

  edit() {
    this.edited.emit(this.courseItem.id);
  }

  delete() {
    this.deleted.emit(this.courseItem.id);
  }
}
