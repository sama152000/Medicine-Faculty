// services.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface ServiceItem {
  id?: string;
  type: string;
  category: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
  readMoreUrl?: string;
}

@Component({
  selector: 'ck-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None // هذا مهم جداً!
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: '1',
      type: 'طلاب',
      category: 'تعليمي',
      title: 'المحاكاة الطبية',
      description: 'برنامج محاكاة سريرية لتدريب الطلبة على الحالات السريرية باستخدام بيئات تدريب آمنة.',
      iconPath: 'images/icons_box/icon_4/icon-5.png',
      iconAlt: 'أيقونة المحاكاة الطبية',
      readMoreUrl: '#'
    },
    {
      id: '2',
      type: 'طبية',
      category: 'جراحة',
      title: 'جراحة القلب والصدر', 
      description: 'خدمات جراحية متقدمة لقسم القلب والصدر تشمل عمليات فتح الصدر والجراحات التداخلية.',
      iconPath: 'images/icons_box/icon_4/icon-4.png',
      iconAlt: 'أيقونة جراحة القلب والصدر',
      readMoreUrl: '#'
    },
    {
      id: '3',
      type: 'طبية',
      category: 'فحص صحي',
      title: 'الفحص الصحي الشامل',
      description: 'فحوصات طبية دورية لتقييم الحالة الصحية والوقاية من الأمراض.',
      iconPath: 'images/icons_box/icon_4/icon-3.png',
      iconAlt: 'أيقونة الفحص الصحي الشامل',
      readMoreUrl: '#'
    },
    {
      id: '4',
      type: 'للعاملين',
      category: 'تدريب',
      title: 'دورات تدريبية',
      description: 'دورات تطوير مهني وورش عمل موجهة للعاملين في الرعاية الصحية لتعزيز المهارات.',
      iconPath: 'images/icons_box/icon_4/icon-2.png',
      iconAlt: 'أيقونة التدريب',
      readMoreUrl: '#'
    },
    {
      id: '5', 
      type: 'طبية',
      category: 'علاج',
      title: 'علاج الالتهاب الرئوي',
      description: 'خدمات علاجية متخصصة لحالات الالتهاب الرئوي بما في ذلك العلاج الدوائي والدعم التنفسي.',
      iconPath: 'images/icons_box/icon_4/icon-1.png',
      iconAlt: 'أيقونة علاج الالتهاب الرئوي',
      readMoreUrl: '#'
    },
    {
      id: '6',
      type: 'طبية',
      category: 'علاج',
      title: 'علاج التهاب الجلد', 
      description: 'خدمات علاجية للحالات الجلدية تشمل التشخيص ووصف العلاجات الموضعية والنظامية.',
      iconPath: 'images/icons_box/icon_4/icon.png',
      iconAlt: 'أيقونة علاج التهاب الجلد',
      readMoreUrl: '#'
    }
  ];


  @Input() sectionTitle: string = 'خدمات الكلية';
  @Input() showTitle: boolean = true;
  @Input() showAllServicesButton: boolean = true; 
  @Input() allServicesUrl: string = '/services';
  @Input() allServicesText: string = 'كل الخدمات +';

  @Output() serviceClick = new EventEmitter<ServiceItem>();
  @Output() readMoreClick = new EventEmitter<ServiceItem>();
  @Output() allServicesClick = new EventEmitter<void>();

  constructor() { }

  onServiceClick(service: ServiceItem): void {
    this.serviceClick.emit(service);
  }

  onReadMoreClick(service: ServiceItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.readMoreClick.emit(service);
  }

  onAllServicesClick(): void {
    this.allServicesClick.emit();
  }

  trackByFn(index: number, item: ServiceItem): string {
    return item.id || item.title;
  }
}