import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class NewsHeroSectionComponent {
  heroData = {
    title: 'أخبار كلية الطب',
    subtitle: 'تابع أحدث الأخبار والتطورات في كلية الطب',
    backgroundImage: 'assets/slider1.png',
    searchPlaceholder: 'ابحث عن خبر محدد...'
  };

}





