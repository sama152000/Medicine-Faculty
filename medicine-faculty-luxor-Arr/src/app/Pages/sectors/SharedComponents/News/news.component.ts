import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { News } from '../../../../Models/sectors';
import { ActivatedRoute } from '@angular/router';
import { SectorService } from '../../../../services/sector.service';
import { NewsGridComponent } from '../news-grid/news-grid.component';

@Component({
  selector: 'app-sector-news',
  standalone: true,
  imports: [
    CommonModule,
    AdvancedSearchComponent,
    NewsGridComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class SectorNewsComponent {
  sectorId!: number;       // معرف القطاع
  news: News[] = [];       // قائمة الأخبار الخاصة بالقطاع

  constructor(
    private route: ActivatedRoute,
    private newsService: SectorService
  ) {}

  ngOnInit(): void {
    // قراءة معرف القطاع من المسار (URL)
    this.route.parent?.params.subscribe(params => {
      this.sectorId = +params['id']; // تحويل النص إلى رقم
      this.loadNews();               // تحميل الأخبار الخاصة بهذا القطاع
    });
  }

  // دالة تحميل الأخبار (حاليًا بيانات وهمية - Mock Dataأخبار)
  loadNews(): void {
    this.news = [
      {
        id: 1,
        title: 'خبر هام حول القطاع',
        summary: 'هذا ملخص لخبر هام متعلق بالقطاع وتطوراته الأخيرة.',
        image: 'assets/event1.jpg',
        date: '2024-06-01',
        category: 'أخبار عامة',
        readTime: '٥ دقائق',
        author: 'إدارة الجامعة'
      },
      {
        id: 2,
        title: 'تحديث جديد في القطاع',
        summary: 'ملخص للتحديث الأخير الذي تم في القطاع وأنشطته.',
        image: 'assets/event2.jpg',
        date: '2024-05-20',
        category: 'تحديثات',
        readTime: '٣ دقائق',
        author: 'إدارة الجامعة'
      },
      {
        id: 3,
        title: 'القطاع يحقق إنجازًا جديدًا',
        summary: 'حقق القطاع إنجازًا جديدًا في مشاريعه وبرامجه المستمرة.',
        image: 'assets/event3.jpg',
        date: '2024-04-15',
        category: 'إنجازات',
        readTime: '٤ دقائق',
        author: 'فريق إعلام القطاع'
      },
      {
        id: 4,
        title: 'إعلان عن مؤتمر قادم',
        summary: 'سيُعقد مؤتمر قادم لمناقشة تطورات القطاع ومستجداته.',
        image: 'assets/slider1.jpeg',
        date: '2024-03-10',
        category: 'فعاليات',
        readTime: 'دقيقتان',
        author: 'لجنة المؤتمر'
      },
      {
        id: 5,
        title: 'القطاع يحصل على تكريم',
        summary: 'حصل القطاع على تكريم تقديرًا لأدائه المتميز والمستمر.',
        image: 'assets/slider2.jpg',
        date: '2024-02-28',
        category: 'جوائز',
        readTime: '٣ دقائق',
        author: 'إدارة الجامعة'
      }
    ];
  }

  // دالة تُستدعى عند تطبيق البحث المتقدم
  onSearch(filters: any): void {
    // هنا يمكننا فلترة قائمة this.news بناءً على الفلاتر المُرسلة
    console.log('فلاتر البحث المُطبقة: ', filters);

    // مثال بسيط للفلترة (يمكن تطويره لاحقًا):
    // this.news = this.originalNews.filter(...);
  }
}