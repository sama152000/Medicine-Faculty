import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class ServicesAdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    title: '',
    category: '',
    type: ''
  };

  categories = [
    { value: 'Students', label: 'الطلاب' },
    { value: 'Administrative Staff', label: 'الموظفين الإداريين' },
    { value: 'Teaching Assistants', label: 'المعيدين' },
    { value: 'Faculty Members', label: 'أعضاء هيئة التدريس' }
  ];

  types: { value: string, label: string }[] = [];

  serviceTypes = {
    'Students': [
      { value: 'Lectures', label: 'المحاضرات' },
      { value: 'Sections', label: 'الأقسام' },
      { value: 'Clinical Training', label: 'التدريب السريري' },
      { value: 'Specialized Labs', label: 'المختبرات المتخصصة' },
      { value: 'Medical Simulation', label: 'المحاكاة الطبية' },
      { value: 'Graduation Projects Support', label: 'دعم مشاريع التخرج' },
      { value: 'Scientific Research Workshops', label: 'ورش العمل البحثية العلمية' },
      { value: 'Conference Participation', label: 'المشاركة في المؤتمرات' },
      { value: 'Central Library', label: 'المكتبة المركزية' },
      { value: 'Electronic Resources', label: 'الموارد الإلكترونية' },
      { value: 'Medical Databases', label: 'قواعد البيانات الطبية' },
      { value: 'Student Clinic', label: 'عيادة الطلاب' },
      { value: 'Primary Healthcare', label: 'الرعاية الصحية الأولية' },
      { value: 'Psychological Support', label: 'الدعم النفسي' },
      { value: 'Student Unions', label: 'اتحادات الطلاب' },
      { value: 'Cultural Trips', label: 'الرحلات الثقافية' },
      { value: 'Competitions', label: 'المسابقات' },
      { value: 'Certificate Issuance', label: 'إصدار الشهادات' },
      { value: 'Electronic Registration', label: 'التسجيل الإلكتروني' },
      { value: 'Transfers', label: 'التحويلات' }
    ],
    'Administrative Staff': [
      { value: 'Attendance Systems', label: 'أنظمة الحضور' },
      { value: 'HR Services', label: 'خدمات الموارد البشرية' },
      { value: 'Financial Affairs', label: 'الشؤون المالية' },
      { value: 'Training Courses', label: 'دورات التدريب' },
      { value: 'Medical Insurance', label: 'التأمين الطبي' },
      { value: 'Comprehensive Healthcare', label: 'الرعاية الصحية الشاملة' },
      { value: 'Psychological Support', label: 'الدعم النفسي' }
    ],
    'Teaching Assistants': [
      { value: 'Master\'s Programs Enrollment', label: 'التسجيل في برامج الماجستير' },
      { value: 'PhD Programs Enrollment', label: 'التسجيل في برامج الدكتوراه' },
      { value: 'Supervision', label: 'الإشراف' },
      { value: 'Research Grants', label: 'منح البحث' },
      { value: 'Scientific Journals Access', label: 'الوصول إلى المجلات العلمية' },
      { value: 'Publishing Workshops', label: 'ورش النشر' },
      { value: 'Academic Writing Workshops', label: 'ورش الكتابة الأكاديمية' },
      { value: 'Training Workshops', label: 'ورش التدريب' },
      { value: 'Internal Scholarships', label: 'المنح الداخلية' },
      { value: 'External Scholarships', label: 'المنح الخارجية' },
      { value: 'Conference Funding', label: 'تمويل المؤتمرات' }
    ],
    'Faculty Members': [
      { value: 'E-learning Platforms', label: 'منصات التعلم الإلكتروني' },
      { value: 'Course Preparation Support', label: 'دعم إعداد المقررات' },
      { value: 'Academic Performance Evaluation', label: 'تقييم الأداء الأكاديمي' },
      { value: 'Project Funding', label: 'تمويل المشاريع' },
      { value: 'Research Teams', label: 'فرق البحث' },
      { value: 'International Cooperation', label: 'التعاون الدولي' },
      { value: 'Medical Convoys Participation', label: 'المشاركة في القوافل الطبية' },
      { value: 'Awareness Seminars', label: 'ندوات التوعية' },
      { value: 'Health Supervision', label: 'الإشراف الصحي' },
      { value: 'Administrative Facilitation', label: 'التسهيلات الإدارية' },
      { value: 'Leave Systems', label: 'أنظمة الإجازات' },
      { value: 'Academic Promotion Support', label: 'دعم الترقية الأكاديمية' }
    ]
  };

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  onCategoryChange(): void {
    this.searchData.type = '';
    this.types = this.serviceTypes[this.searchData.category as keyof typeof this.serviceTypes] || [];
  }

  clearSearch(): void {
    this.searchData = {
      title: '',
      category: '',
      type: ''
    };
    this.types = [];
    this.searchEvent.emit(this.searchData);
  }
}
