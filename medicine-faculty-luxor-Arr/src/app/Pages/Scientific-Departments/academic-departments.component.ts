import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-academic-departments',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="academic-departments-container">
      <h2>الأقسام الأكاديمية</h2>
      <ul>
        <li><a routerLink="/departments/academic/anatomy">القسم: علم التشريح</a></li>
        <li><a routerLink="/departments/academic/physiology">القسم: علم وظائف الأعضاء</a></li>
        <li><a routerLink="/departments/academic/biochemistry">القسم: الكيمياء الحيوية</a></li>
        <li><a routerLink="/departments/academic/pathology">القسم: علم الأمراض</a></li>
        <li><a routerLink="/departments/academic/pharmacology">القسم: علم الأدوية</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .academic-departments-container {
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
export class AcademicDepartmentsComponent {}
