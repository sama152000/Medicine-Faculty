import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  standalone: true,
  template: `
    <h2>قطاع الدراسات العليا والبحث</h2>
    <p>محتوى لقطاع الدراسات العليا والبحث.</p>
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
export class ResearchComponent {}
