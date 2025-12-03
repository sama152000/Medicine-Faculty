import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface FooterContactInfo {
  logoPath: string;
  logoAlt: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface FooterQuickLink {
  text: string;
  url: string;
  icon?: string;
}

export interface FooterPost {
  title: string;
  url: string;
  date: string;
}

export interface FooterSocialLink {
  icon: string;
  url: string;
  title: string;
}

export interface FooterCopyright {
  text: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

@Component({
  selector: 'ck-medicine-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-footer.component.html',
  styleUrls: ['./medicine-footer.component.css']
})
export class MedicineFooterComponent {
  @Input() contactInfo: FooterContactInfo = {
    logoPath: 'assets/logo.png',

    logoAlt: 'شعار كلية الطب',
    description: 'كلية الطب – جامعة الأقصر تصنع أطباء المستقبل بالعلم، والرحمة، والابتكار.',
    address: "الأقصر-  مدينة طيبة الجديدة – بجوار جهاز المدينة ",
    phone: '(094) 123 4567 - (094) 123 4568',
    email: 'www.luxor.edu.eg'
  };

  @Input() quickLinks: FooterQuickLink[] = [

    { text: 'الرئيسية', url: '/', icon: '+' },
    // { text: 'About the College', url: '/about-college', icon: '+' },
    // { text: 'Sectors', url: '/sector', icon: '+' },
    // { text: 'Scientific Departments', url: '/departments', icon: '+' },
    { text: 'المراكز والوحدات', url: '/centers-units', icon: '+' },
    { text: 'مجلة الكلية', url: '/journal', icon: '+' },
    { text: 'أعضاء هيئة التدريس', url: '/staff-members', icon: '+' },
    { text: 'الأخبار', url: '/news', icon: '+' }
  ];

  @Input() latestPosts: FooterPost[] = [
    {
      title: 'فتح مركز الامتياز في البحث العلمي',
      url: '/news/detail/1',
      date: '2024-08-13'
    },
    {
            title: 'تسجيل اتفاقية التعاون مع الجامعة الألمانية',

      url: '/news/detail/2',
      date: '2024-08-10'
    },
    {
            title: 'انطلاق برنامج الماجستير في الذكاء الاصطناعي',

      url: '/news/detail/3',
      date: '2024-08-08'
 
    }
  ];

 

  @Input() showNewsletter: boolean = false; // Newsletter section is not included

  @Output() linkClick = new EventEmitter<{type: string, item: any}>();
  @Output() socialClick = new EventEmitter<FooterSocialLink>();
  @Output() newsletterSubmit = new EventEmitter<string>();

  newsletterEmail: string = '';

  constructor() { }

  onLinkClick(type: string, item: any): void {
    this.linkClick.emit({ type, item });
  }

  onSocialClick(socialLink: FooterSocialLink): void {
    this.socialClick.emit(socialLink);
  }

  onNewsletterSubmit(): void {
    if (this.newsletterEmail.trim()) {
      this.newsletterSubmit.emit(this.newsletterEmail);
      this.newsletterEmail = '';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || item.title || item.text || index;
  }
}
