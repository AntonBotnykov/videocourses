import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CoursesListItemComponent} from './courses-list-item.component';
import {Component} from '@angular/core';
import {Course} from '../course';

@Component({
  template: `
    <app-courses-list-item
      [courseItem]="course"
      (edited)="onEditCourse($event)"
      (deleted)="onDeleteCourse($event)"
    ></app-courses-list-item>`
})
class TestHostComponent {
  public course: Course = {
    id: 1,
    title: 'Angular Intro',
    duration: '1h 30min',
    start_data: '03/07/2018',
    description: 'bla bla bla bla bla bla',
  };
  public editedCourseId: number;
  public deletedCourseId: number;

  public onEditCourse(id: number) {
    this.editedCourseId = id;
  }

  public onDeleteCourse(id: number) {
    this.deletedCourseId = id;
  }
}


describe('CoursesListItemComponent in TestHostComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent, TestHostComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('method edit', () => {
    fixture.detectChanges();
    const editButton = fixture.debugElement.query(By.css('.edit-button'));
    editButton.triggerEventHandler('click', null);

    expect(testHost.editedCourseId).toEqual(1);
  });

  it('method delete', () => {
    fixture.detectChanges();
    const editButton = fixture.debugElement.query(By.css('.delete-button'));
    editButton.triggerEventHandler('click', null);

    expect(testHost.deletedCourseId).toEqual(1);
  });
});
