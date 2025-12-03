import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clinical-departments',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="clinical-departments-container">
      <h2>الأقسام الإكلينيكية</h2>
      <ul>
        <li><a routerLink="/departments/clinical/internal-medicine">القسم: الباطنة</a></li>
        <li><a routerLink="/departments/clinical/surgery">القسم: الجراحة</a></li>
        <li><a routerLink="/departments/clinical/pediatrics">القسم: طب الأطفال</a></li>
        <li><a routerLink="/departments/clinical/obgyn">القسم: التوليد وأمراض النساء</a></li>
        <li><a routerLink="/departments/clinical/radiology">القسم: الأشعة</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .clinical-departments-container {
      padding: 20px;
    }
    h2 {
      color: #B71C1C;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      color: #5D4037;
    }
    a:hover {
      color: #C62828;
    }
  `]
})
export class ClinicalDepartmentsComponent {}
