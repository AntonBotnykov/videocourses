import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesListComponent} from './courses-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    spyOn(console, 'log');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.searchValue = 'qqq';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch', () => {
    component.onSearch();
    expect(console.log).toHaveBeenCalledWith('Search: qqq');
  });

  it('onAdd', () => {
    component.onAdd();
    expect(console.log).toHaveBeenCalledWith('Add new course');
  });

  it('onLoadMore', () => {
    component.onLoadMore();
    expect(console.log).toHaveBeenCalledWith('Load more');
  });

  it('onEditCourse', () => {
    component.onEditCourse(777);
    expect(console.log).toHaveBeenCalledWith('edit course id=777');
  });

  it('onDeleteCourse', () => {
    component.onDeleteCourse(777);
    expect(console.log).toHaveBeenCalledWith('delete course id=777');
  });
});
