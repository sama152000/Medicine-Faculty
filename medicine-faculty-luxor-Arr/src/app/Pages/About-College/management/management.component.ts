import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  standalone: true,
  template: `
    <h2>إدارة الكلية</h2>
    <p>محتوى صفحة إدارة الكلية.</p>
  `,
  styles: [`
    :host {
      direction: rtl;
      text-align: right;
    }
    h2 {
      color: #B71C1C;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    p {
      color: #5D4037;
      font-size: 1.1rem;
      line-height: 1.8;
    }
  `]
})
export class ManagementComponent {}