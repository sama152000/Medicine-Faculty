import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class StaffHeroSectionComponent {
heroData = {
  title: 'أعضاء هيئة التدريس',
  subtitle: 'تعرّف على أعضاء هيئة التدريس بجامعة الأقصر',
  backgroundImage: 'assets/staff.jpg',
  searchPlaceholder: 'ابحث عن عضو هيئة تدريس...'
};

}
