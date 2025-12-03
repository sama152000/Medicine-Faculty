import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-news-grid',
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
      title: 'افتتاح مركز التميز للبحث العلمي الطبي',
      summary: 'تم افتتاح مركز التميز للبحث العلمي الطبي بكلية الطب، بهدف تعزيز البحث العلمي والابتكار في مختلف التخصصات الطبية.',
      image: 'assets/slider2.jpg',
      date: '2025-01-20',
      category: 'أخبار أكاديمية',
      readTime: '٤ دقائق',
      author: 'عمادة الكلية'
    },
    {
      id: 2,
      title: 'توقيع بروتوكول تعاون مع جامعة هارفارد الطبية',
      summary: 'وقّعت كلية الطب اتفاقية تعاون مع كلية الطب بجامعة هارفارد لتبادل الخبرات وتدريب الطلاب والباحثين في مجالات الطب المتقدمة.',
      image: 'assets/slider3.jpg',
      date: '2025-01-15',
      category: 'تعاون دولي',
      readTime: '٥ دقائق',
      author: 'إدارة الكلية'
    },
    {
      id: 3,
      title: 'إطلاق برنامج ماجستير الطب الدقيق والجينوم',
      summary: 'أعلنت الكلية عن بدء الدراسة في برنامج الماجستير الجديد في الطب الدقيق والعلاج الجيني لمواكبة أحدث التطورات العالمية.',
      image: 'assets/slider3.jpg',
      date: '2025-01-10',
      category: 'برامج دراسية',
      readTime: '٦ دقائق',
      author: 'قطاع الدراسات العليا'
    },
    {
      id: 4,
      title: 'فريق الكلية يفوز بالمركز الأول في مسابقة الجراحة الروبوتية',
      summary: 'حصل فريق طلاب كلية الطب على المركز الأول على مستوى الجمهورية في مسابقة الجراحة بمساعدة الروبوت، مما يعكس تميز التدريب العملي.',
      image: 'assets/slider2.jpg',
      date: '2025-01-05',
      category: 'إنجازات الطلاب',
      readTime: '٣ دقائق',
      author: 'شؤون الطلاب'
    },
    {
      id: 5,
      title: 'المؤتمر الدولي لأمراض القلب والأوعية الدموية',
      summary: 'استضافت الكلية المؤتمر الدولي الحادي عشر لأمراض القلب بمشاركة نخبة من الأطباء والباحثين من ٢٥ دولة حول العالم.',
      image: 'assets/slider3.jpg',
      date: '2024-12-28',
      category: 'مؤتمرات',
      readTime: '٧ دقائق',
      author: 'قسم أمراض القلب'
    },
    {
      id: 6,
      title: 'تدشين وحدة العناية المركزة الجديدة بالمستشفى الجامعي',
      summary: 'تم افتتاح وحدة عناية مركزة حديثة مجهزة بأحدث الأجهزة الطبية في الشرق الأوسط، لخدمة الحالات الحرجة والتدريب السريري.',
      image: 'assets/slider2.jpg',
      date: '2024-12-20',
      category: 'تطوير البنية التحتية',
      readTime: '٥ دقائق',
      author: 'إدارة المستشفيات الجامعية'
    },
    {
      id: 7,
      title: 'حملة تبرع بالدم تنظمها الكلية للعام الخامس على التوالي',
      summary: 'نظمت الكلية بالتعاون مع بنك الدم القومي حملة للتبرع بالدم شارك فيها أكثر من ٨٠٠ طالب وطبيب، وحققت رقمًا قياسيًا جديدًا.',
      image: 'assets/slider3.jpg',
      date: '2024-12-15',
      category: 'خدمة مجتمعية',
      readTime: '٤ دقائق',
      author: 'قطاع خدمة المجتمع'
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