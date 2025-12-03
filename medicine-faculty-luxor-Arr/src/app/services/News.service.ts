import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsArticle, RelatedNewsItem } from '../Models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNewsData: NewsArticle[] = [
    {
      id: '1',
      title: 'افتتاح مركز التميز للبحث العلمي',
      summary: 'تم افتتاح مركز التميز للبحث العلمي بجامعة الأقصر، بهدف دعم البحث والابتكار في مجالات علمية متعددة.',
      content: 'تفاصيل عن الافتتاح... تفاصيل عن الافتتاح... تفاصيل عن الافتتاح...',
      publishDate: new Date('2024-08-13'),
      publishTime: '10:00',
      tags: ['أخبار أكاديمية', 'بحث'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'إدارة الجامعة',
      category: 'أخبار أكاديمية'
    },
    {
      id: '2',
      title: 'توقيع اتفاقية تعاون مع جامعة ألمانية',
      summary: 'وقعت جامعة الأقصر اتفاقية تعاون مع الجامعة التقنية في ميونيخ لتعزيز تبادل الطلاب والأكاديميين.',
      content: 'تفاصيل عن الاتفاقية...',
      publishDate: new Date('2024-08-10'),
      publishTime: '11:00',
      tags: ['تعاون دولي', 'تبادل'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'إدارة الجامعة',
      category: 'تعاون دولي'
    },
    {
      id: '3',
      title: 'إطلاق برنامج ماجستير في الذكاء الاصطناعي',
      summary: 'أعلنت جامعة الأقصر عن إطلاق برنامج ماجستير في الذكاء الاصطناعي وتعلم الآلة لمواكبة التطورات التكنولوجية.',
      content: 'تفاصيل عن البرنامج...',
      publishDate: new Date('2024-08-08'),
      publishTime: '12:00',
      tags: ['برامج أكاديمية', 'ذكاء اصطناعي', 'بحث'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'إدارة الجامعة',
      category: 'برامج أكاديمية'
    },
    {
      id: '4',
      title: 'فريق الجامعة يفوز بمسابقة الروبوتات',
      summary: 'فاز فريق جامعة الأقصر بالمركز الأول في مسابقة إقليمية للروبوتات، مما يعكس التميز في الهندسة والتكنولوجيا.',
      content: 'تفاصيل عن الفوز...',
      publishDate: new Date('2024-08-05'),
      publishTime: '13:00',
      tags: ['إنجازات طلابية', 'روبوتات', 'ذكاء اصطناعي'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'إدارة الجامعة',
      category: 'إنجازات طلابية'
    },
    {
      id: '5',
      title: 'المؤتمر الدولي للتنمية المستدامة',
      summary: 'استضافت جامعة الأقصر مؤتمرًا دوليًا حول التنمية المستدامة بمشاركة خبراء من دول متعددة.',
      content: 'تفاصيل عن المؤتمر...',
      publishDate: new Date('2024-08-01'),
      publishTime: '14:00',
      tags: ['مؤتمرات', 'تنمية مستدامة', 'بحث'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider3.jpg',
      author: 'إدارة الجامعة',
      category: 'مؤتمرات'
    },
    {
      id: '6',
      title: 'تطوير بنية الجامعة التحتية',
      summary: 'اكتمل تطوير البنية التحتية للجامعة، بما في ذلك تحديث المختبرات والمكتبة الرقمية.',
      content: 'تفاصيل عن التطوير...',
      publishDate: new Date('2024-07-28'),
      publishTime: '15:00',
      tags: ['تطوير البنية التحتية', 'تحديث'],
      images: [{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'},{ url: 'assets/slider2.jpg', caption: 'منشآت جديدة'}],
      thumbnailImage: 'assets/slider2.jpg',
      author: 'إدارة الجامعة',
      category: 'تطوير البنية التحتية'
    }
  ];

  constructor() {}

  getAllNews(): Observable<NewsArticle[]> {
    return of(this.mockNewsData);
  }

  getNewsById(id: string): Observable<NewsArticle | undefined> {
    const news = this.mockNewsData.find(n => n.id === id);
    return of(news);
  }

  getRelatedNews(tags: string[], excludeId: string): Observable<RelatedNewsItem[]> {
    const related = this.mockNewsData
      .filter(n => n.id !== excludeId && n.tags.some(tag => tags.includes(tag)))
      .slice(0, 3) // Limit to 3 related news
      .map(n => ({
        id: n.id,
        title: n.title,
        summary: n.summary,
        thumbnailImage: n.thumbnailImage,
        publishDate: n.publishDate,
        tags: n.tags
      }));
    return of(related);
  }

  getRelatedItems(id: string, type: string, limit: number = 5): Observable<NewsArticle[]> {
    const current = this.mockNewsData.find(n => n.id === id);
    if (!current) return of([]);
    const related = this.mockNewsData
      .filter(n => n.id !== id && n.tags.some(tag => current.tags.includes(tag)))
      .slice(0, limit);
    return of(related);
  }

  getNextItem(id: string): Observable<NewsArticle | null> {
    const sorted = this.mockNewsData.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
    const index = sorted.findIndex(n => n.id === id);
    if (index > 0) return of(sorted[index - 1]);
    return of(null);
  }

  getPreviousItem(id: string): Observable<NewsArticle | null> {
    const sorted = this.mockNewsData.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
    const index = sorted.findIndex(n => n.id === id);
    if (index < sorted.length - 1) return of(sorted[index + 1]);
    return of(null);
  }
}
