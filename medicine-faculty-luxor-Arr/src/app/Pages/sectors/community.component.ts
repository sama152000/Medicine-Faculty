import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  standalone: true,
  template: `
    <h2>قطاع خدمة المجتمع والشؤون البيئية</h2>
    <p>محتوى لقطاع خدمة المجتمع والشؤون البيئية.</p>
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
export class CommunityComponent {}
