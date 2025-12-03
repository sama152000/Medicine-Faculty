import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SectorService } from '../../../../services/sector.service';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectorServices } from '../../../../Models/sectors';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-sector-services',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  templateUrl: './sector-services.component.html',
  styleUrls: ['./sector-services.component.css']
})
export class SectorServicesComponent implements OnInit {

  @Input() sectorId!: string;
  services: SectorServices[] = [];
  loading: boolean = false;
  selectedService: SectorServices | null = null;
  displayDetails: boolean = false;
  selectedCategory: string = 'all';
  categories: string[] = [];

  constructor(private servicesService: SectorService,private route:ActivatedRoute) {}

   ngOnInit() {
    this.route.parent?.params.subscribe(params => {
      this.sectorId = params['id'];   // هنا هتجيب الـ sectorId
      this.loadServices();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sectorId'] && !changes['sectorId'].firstChange) {
      this.loadServices();
    }
  }

  loadServices() {
    this.services = [
     {
  id: '1',
  name: 'خدمة تسجيل الطلاب الجدد والقدامى',
  details: 'خدمة إلكترونية لتسجيل الطلاب في البرامج الأكاديمية وتسجيل المقررات الدراسية خلال الفصل الدراسي.',
  duration: 'طوال فترة التسجيل (شهر واحد)',
  applicationUrl: 'https://example.com/apply-registration',
  downloadUrl: 'https://example.com/download-registration-guide',
  isOnline: true,
  category: 'خدمات تعليمية',
  fees: 0, // عادةً مجانية في الجامعات الحكومية
  contactPerson: 'أحمد محمد علي',
  contactPhone: '0123456789',
  sectorId: this.sectorId
},
{
  id: '2',
  name: 'خدمة الحجز المسبق للاستشارات الأكاديمية',
  details: 'حجز موعد استشارة مع المشرف الأكاديمي أو منسق البرنامج للطلاب وأعضاء هيئة التدريس.',
  duration: 'حجز فوري (خلال أسبوع عمل)',
  applicationUrl: 'https://example.com/book-consultation',
  downloadUrl: 'https://example.com/consultation-form',
  isOnline: true,
  category: 'خدمات استشارية',
  fees: 0,
  contactPerson: 'فاطمة علي حسن',
  contactPhone: '0987654321',
  sectorId: this.sectorId
},
{
  id: '3',
  name: 'إصدار شهادة حسن سيرة وسلوك',
  details: 'طلب إصدار شهادة رسمية تثبت حسن سيرة وسلوك الطالب خلال دراسته في الجامعة.',
  duration: '3 أيام عمل',
  applicationUrl: 'https://example.com/good-conduct',
  downloadUrl: 'https://example.com/good-conduct-form.pdf',
  isOnline: true,
  category: 'خدمات إدارية',
  fees: 50,
  contactPerson: 'محمد سيد أحمد',
  contactPhone: '01122334455',
  sectorId: this.sectorId
},


    ];
    this.extractCategories();
  }

  extractCategories() {
  const uniqueCategories = [
    ...new Set(this.services.map(service => service.category || 'Unclassified'))
  ];
  this.categories = ['all', ...uniqueCategories];
}


  showDetails(service: SectorServices) {
    this.selectedService = service;
    this.displayDetails = true;
  }

  hideDetails() {
    this.displayDetails = false;
    this.selectedService = null;
  }


  openApplicationLink(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  downloadForm(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
