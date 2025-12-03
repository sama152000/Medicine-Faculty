
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-grid.component.html',
  styleUrl: './news-grid.component.css'
})
export class NewsGridComponent {
  page: number = 1;
  pageSize: number = 6;

  get pagedNews() {
    const start = (this.page - 1) * this.pageSize;
    return this.newsData.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.newsData.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
  newsData = [
  {
    id: 1,
    title: 'افتتاح مركز التميز في البحث العلمي',
    summary: 'تم افتتاح مركز التميز في البحث العلمي بجامعة الأقصر، بهدف تعزيز البحث العلمي والابتكار في مختلف المجالات العلمية.',
    image: 'assets/slider2.jpg',
    date: '2024-08-13',
    category: 'أخبار أكاديمية',
    readTime: '3 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 2,
    title: 'توقيع اتفاقية تعاون مع جامعة ألمانية',
    summary: 'وقّعت جامعة الأقصر اتفاقية تعاون مع الجامعة التقنية في ميونخ بألمانيا لتعزيز التبادل الطلابي والأكاديمي بين الجامعتين.',
    image: 'assets/slider3.jpg',
    date: '2024-08-10',
    category: 'التعاون الدولي',
    readTime: '4 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 3,
    title: 'إطلاق برنامج ماجستير في الذكاء الاصطناعي',
    summary: 'أعلنت جامعة الأقصر عن إطلاق برنامج ماجستير في الذكاء الاصطناعي وتعلم الآلة لمواكبة التطورات التكنولوجية الحديثة.',
    image: 'assets/slider3.jpg',
    date: '2024-08-08',
    category: 'البرامج الأكاديمية',
    readTime: '5 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 4,
    title: 'فوز فريق الجامعة بمسابقة الروبوتات',
    summary: 'حصل فريق جامعة الأقصر على المركز الأول في المسابقة الإقليمية للروبوتات، في إنجاز يعكس التميز في الهندسة والتكنولوجيا.',
    image: 'assets/slider2.jpg',
    date: '2024-08-05',
    category: 'إنجازات طلابية',
    readTime: '3 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 5,
    title: 'المؤتمر الدولي للتنمية المستدامة',
    summary: 'استضافت جامعة الأقصر مؤتمرًا دوليًا حول التنمية المستدامة بمشاركة خبراء من دول مختلفة حول العالم.',
    image: 'assets/slider3.jpg',
    date: '2024-08-01',
    category: 'مؤتمرات',
    readTime: '6 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 6,
    title: 'تطوير البنية التحتية للجامعة',
    summary: 'تم الانتهاء من تطوير البنية التحتية للجامعة، بما في ذلك تحديث المعامل والمكتبة الرقمية.',
    image: 'assets/slider2.jpg',
    date: '2024-07-28',
    category: 'تطوير البنية التحتية',
    readTime: '4 دقائق',
    author: 'إدارة الجامعة'
  },
  {
    id: 7,
    title: 'تطوير البنية التحتية للجامعة',
    summary: 'تم الانتهاء من تطوير البنية التحتية للجامعة، بما في ذلك تحديث المعامل والمكتبة الرقمية.',
    image: 'assets/slider2.jpg',
    date: '2024-07-28',
    category: 'تطوير البنية التحتية',
    readTime: '4 دقائق',
    author: 'إدارة الجامعة'
  }
];


  constructor(private router: Router) {}

  goToNewsDetail(newsId: number): void {
    this.router.navigate(['/news/detail', newsId]);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





