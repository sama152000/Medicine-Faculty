import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class ServicesHeroSectionComponent {
  heroData = {
    title: 'خدمات كلية الطب',
    subtitle: 'استكشف الخدمات المتنوعة المقدمة للطلاب والموظفين الإداريين والمعيدين وأعضاء هيئة التدريس.',

  };
}




