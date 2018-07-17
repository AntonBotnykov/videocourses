import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

const oneDay = 3600 * 24 * 1000;
const colorGreen = 'green';
const colorBlue = 'blue';

@Directive({
  selector: '[appCourseStatus]'
})
export class CourseStatusDirective implements OnInit {
  @Input('appCourseStatus') startData: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    const courseStartData = new Date(this.startData);
    const currentData = new Date();
    const deltaTime = (+currentData - +courseStartData) / oneDay;

    if (deltaTime > 0 && deltaTime < 15) {
      this.bordered(colorGreen);
    }

    if (deltaTime < 0) {
      this.bordered(colorBlue);
    }
  }

  private bordered(color: string): void {
    const elementBorderStyle = `1px solid ${color}`;
    this.renderer.setStyle(this.el.nativeElement, 'outline', elementBorderStyle);
  }

}
