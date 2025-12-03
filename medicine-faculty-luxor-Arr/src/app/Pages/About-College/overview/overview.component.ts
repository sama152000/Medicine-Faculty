import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  template: `
    <h2>نبذة عن الكلية</h2>
    <ul>
      <li><a routerLink="/overview/history">تاريخ الكلية</a></li>
      <li><a routerLink="/overview/objectives">الأهداف الاستراتيجية</a></li>
      <li><a routerLink="/overview/structure">الهيكل التنظيمي</a></li>
      <li><a routerLink="/overview/vision-mission">الرؤية والرسالة</a></li>
    </ul>
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
      font-size: 1.8rem;
    }
    ul {
      list-style-type: none;
      padding-right: 0;
      margin: 0;
    }
    li {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    li::before {
      content: "•";
      color: #B71C1C;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
    a {
      text-decoration: none;
      color: #5D4037;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #C62828;
      text-decoration: underline;
    }
  `]
})
export class OverviewComponent {}