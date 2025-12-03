import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedHeroSectionComponent } from "./hero-section/hero-section.component";

interface Article {
  id: number;
  title: string;
  images: string[];
  content: string;
}
@Component({
  selector: 'app-magazine-page',
  imports: [CommonModule, SharedHeroSectionComponent],
  templateUrl: './magazine-page.component.html',
  styleUrls: ['./magazine-page.component.css']
})
export class MagazinePageComponent implements OnInit {

  articles: Article[] = [];
  currentSlides: { [key: number]: number } = {};

  constructor() {}

  ngOnInit(): void {
    this.loadArticles();
    this.initializeSlides();
  }

  loadArticles(): void {
    this.articles = [
    
      {
        id: 3,
        title: 'الفائزون في الأولمبياد الطبي',
        images: [
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
        ],
        content: "نفخر بالإعلان أن أربعة من طلابنا حققوا مراكز متقدمة في الأولمبياد الوطني لطلاب الطب، مما يعكس مستوى تعليمنا والتزام هيئتنا التدريسية بتوجيه الجيل القادم من المتخصصين في الرعاية الصحية. أظهر هؤلاء الطلاب مهارات معرفية واستدلالية متميزة وقدرات على حل المشكلات. تعكس نجاحاتهم سنوات من التدريب المكثف والالتزام بالتميز. تنافس طلابنا مع مشاركين من أرقى كليات الطب في مصر. إن فوزهم هو دليل على جودة مناهجنا وخبرة أعضاء هيئة التدريس. هذه الإنجازات تلهمنا وتدفعنا لمواصلة رفع معايير التعليم الطبي في مؤسستنا."
      },
      {
        id: 4,
        title: 'الباحثون المتميزون',
        images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "يمثل أعضاء هيئة التدريس لدينا أرقى العقول الطبية في مصر والمنطقة. بخبرة واسعة في الممارسة الإكلينيكية والبحث والتعليم، يجلبون ثروة من المعرفة لكل فصل دراسي ومختبر. يلتزم كل عضو من أعضاء هيئة التدريس بتطوير العلم الطبي مع رعاية الجيل القادم من المحترفين الصحيين. نشر أساتذتنا الكبار العديد من الأبحاث في مجلات معترف بها دولياً وحصلوا على جوائز عدة لمساهماتهم في الطب. يحافظون على تعاون نشط مع مراكز طبية رائدة حول العالم، مما يضمن استفادة طلابنا من أحدث التطورات في العلم والممارسة الطبية. يخلق تفاني الهيئة التدريسية في التعليم والبحث بيئة من التميز الأكاديمي التي تحفز الطلاب لتحقيق أقصى إمكاناتهم."
      },
      {
        id: 5,
        title: 'حملة الفحص',
       images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "يعكس التزام هيئة التدريس المستمر بصحة المجتمع في حملات الفحص الصحي المجانية التي نقوم بها بانتظام في المناطق الريفية في الأقصر. نظمنا هذا الشهر معسكرات فحص صحي شاملة استهدفت أكثر من 500 فرد من المجتمع، مقدمة التربية الصحية والخدمات الأساسية. عمل طلابنا والمتطوعون من الهيئة التدريسية معاً لتقديم فحوص للأمراض المزمنة والإرشاد الصحي وإحالات للحالات التي تحتاج رعاية متخصصة. تعكس هذه المبادرات التزامنا بخدمة المجتمع المحلي وتحسين نتائج الصحة العامة. يشجعنا الاستقبال الإيجابي من المجتمع على توسيع هذه البرامج في الأشهر القادمة."
      },
      {
        id: 6,
        title: 'المؤتمر الطبي 2024',
         images: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
        ],
        content: "انضموا إلينا في مؤتمرنا الطبي الدولي السنوي والذي يتضمن كلمات افتتاحية من أبرز المتخصصين الطبيين حول العالم. يجمع هذا الحدث الباحثين والأطباء والمعلمين لتبادل الابتكارات وأفضل الممارسات في الطب الحديث. سيتضمن المؤتمر عدة جلسات تغطي أحدث التطورات في تخصصات طبية متنوعة مثل أمراض القلب والأورام وطب الأعصاب والأمراض المعدية. سيشارك متحدثون دوليون من مؤسسات طبية مرموقة خبراتهم ونتائج أبحاثهم. سيحصل المشاركون على فرص للتواصل مع محترفين صحيين من مختلف أنحاء العالم والمشاركة في نقاشات هادفة حول مستقبل الرعاية الصحية. التسجيل الآن مفتوح لهذا الحدث المهم الذي يعد بأن يكون ذا قيمة عالية وملهم لجميع الحضور."
      }
    ];
  }

  initializeSlides(): void {
    this.articles.forEach(article => {
      this.currentSlides[article.id] = 0;
    });
  }

  nextSlide(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      const currentIndex = this.currentSlides[articleId] || 0;
      this.currentSlides[articleId] = (currentIndex + 1) % article.images.length;
    }
  }

  prevSlide(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      const currentIndex = this.currentSlides[articleId] || 0;
      this.currentSlides[articleId] = (currentIndex - 1 + article.images.length) % article.images.length;
    }
  }

  goToSlide(articleId: number, index: number): void {
    this.currentSlides[articleId] = index;
  }

  getCurrentImage(article: Article): string {
    const index = this.currentSlides[article.id] || 0;
    return article.images[index];
  }

  getCurrentImageIndex(articleId: number): number {
    return this.currentSlides[articleId] || 0;
  }
}
