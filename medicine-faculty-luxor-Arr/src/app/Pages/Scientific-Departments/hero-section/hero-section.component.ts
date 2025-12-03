import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departments-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class DepartmentsHeroSectionComponent {
  heroData = {
    title: 'أقسام الكلية',
    subtitle: 'تعرف على أقسام كلية الطب بجامعة الأقصر'
  };
}
