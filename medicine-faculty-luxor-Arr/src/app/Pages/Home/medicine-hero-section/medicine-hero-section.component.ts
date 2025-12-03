// medicine-hero-section.component.ts
import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface HeroSlideDto {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ck-medicine-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-hero-section.component.html',
  styleUrls: ['./medicine-hero-section.component.css'],
  encapsulation: ViewEncapsulation.None // This allows global CSS variables to work
})
export class MedicineHeroSectionComponent implements OnInit, OnDestroy {
slides: HeroSlideDto[] = [
    {
      id: 1,
      imageUrl: 'assets/sliderr1.jpg',
      title: 'رعاية طبية متقدمة',
      subtitle: 'نقدم حلول رعاية صحية متطورة لتحقيق أفضل نتائج للمرضى'
    },
    {
      id: 2,
      imageUrl: 'assets/slider2.jpg',
      title: 'فريق طبي متخصص',
      subtitle: 'أطباؤنا ذوو الخبرة والمتخصصون هنا لمساعدتك'
    },
    {
      id: 3,
      imageUrl: 'assets/slider3.jpg',
      title: 'مرافق حديثة ومتطورة',
      subtitle: 'معدات عصرية وبيئة مريحة لرعايتك'
    }
  ];


  @Input() buttonText: string = 'عن الكلية';
  @Input() buttonRoute: string = '/structure';
  @Input() autoPlayInterval: number = 5000;
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;

  currentSlideIndex = 0;
  isHovered = false;
  private autoPlayTimer?: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  get currentSlide(): HeroSlideDto | null {
    return this.slides[this.currentSlideIndex] || null;
  }

  nextSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }

  prevSlide() {
    if (this.slides.length > 0) {
      this.currentSlideIndex = this.currentSlideIndex === 0
        ? this.slides.length - 1
        : this.currentSlideIndex - 1;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentSlideIndex = index;
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopAutoPlay();
  }

  onMouseLeave() {
    this.isHovered = false;
    this.startAutoPlay();
  }

  private startAutoPlay() {
    if (this.slides.length > 1) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }
}