import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesListItemComponent} from './courses-list-item.component';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;

    component.courseItem = {
      id: 1,
      title: 'Angular Intro',
      duration: '1h 30min',
      start_data: '03/07/2018',
      description: 'description'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method edit', () => {
    spyOn(component.edited, 'emit');
    component.edit();
    expect(component.edited.emit).toHaveBeenCalledWith(component.courseItem.id);
  });

  it('method delete', () => {
    spyOn(component.deleted, 'emit');
    component.delete();
    expect(component.deleted.emit).toHaveBeenCalledWith(component.courseItem.id);
  });
});
