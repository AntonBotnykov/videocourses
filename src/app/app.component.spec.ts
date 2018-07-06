import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BreadcrumbsComponent} from './core/breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {CoursesListComponent} from './courses/courses-list/courses-list.component';
import {FormsModule} from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        FooterComponent,
        CoursesListComponent
      ],
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
