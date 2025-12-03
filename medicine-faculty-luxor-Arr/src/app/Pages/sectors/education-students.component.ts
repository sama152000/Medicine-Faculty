import { Component } from '@angular/core';

@Component({
  selector: 'app-education-students',
  standalone: true,
  template: `
    <h2>قطاع التعليم وشؤون الطلاب</h2>
    <p>محتوى لقطاع التعليم وشؤون الطلاب.</p>
  `,
  styles: [`
    h2 {
      color: #B71C1C;
    }
    p {
      color: #5D4037;
    }
  `]
})
export class EducationStudentsComponent {}
