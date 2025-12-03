import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-grid',
  standalone: true,
  imports: [CommonModule], // ضروري لعمل *ngIf و*ngFor في القالب
  templateUrl: './staff-grid.component.html',
  styleUrl: './staff-grid.component.css'
})
export class StaffGridComponent {
  // رقم الصفحة الحالية
  page: number = 1;
  // عدد الكروت في كل صفحة
  pageSize: number = 6;
  // العضو المحدد لعرض تفاصيله في المودال
  selectedStaff: any = null;
  // حالة ظهور المودال
  showModal: boolean = false;

  // إرجاع أعضاء الصفحة الحالية فقط
  get pagedStaff() {
    const start = (this.page - 1) * this.pageSize;
    return this.staffData.slice(start, start + this.pageSize);
  }

  // حساب عدد الصفحات الكلي
  get totalPages() {
    return Math.ceil(this.staffData.length / this.pageSize);
  }

  // تغيير الصفحة
  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }

  // فتح نافذة التفاصيل
  openModal(staff: any): void {
    this.selectedStaff = staff;
    this.showModal = true;
  }

  // إغلاق نافذة التفاصيل
  closeModal(): void {
    this.showModal = false;
    this.selectedStaff = null;
  }

  // Staff members data (example, translated)
  staffData = [
  {
    id: 1,
    name: 'د. أحمد محمد علي',
    academicRank: 'أستاذ',
    college: 'كلية الطب',
    department: 'قسم الجراحة',
    email: 'ahmed.mohamed@medicine.luxor.edu.eg',
    phone: '+20 123 456 7890',
    researchInterests: 'الجراحة العامة، الجراحة بالمنظار، الأورام',
    personalPage: 'https://luxor.edu.eg/staff/ahmed-mohamed',
    cvLink: 'https://luxor.edu.eg/cv/ahmed-mohamed.pdf',
    profileImage: 'assets/event1.jpg'
  },
  {
    id: 2,
    name: 'د. فاطمة حسن عبد الله',
    academicRank: 'أستاذ مساعد',
    college: 'كلية الطب',
    department: 'قسم الباطنة',
    email: 'fatima.hassan@medicine.luxor.edu.eg',
    phone: '+20 123 456 7891',
    researchInterests: 'الباطنة، أمراض القلب، ارتفاع ضغط الدم',
    personalPage: 'https://luxor.edu.eg/staff/fatima-hassan',
    cvLink: 'https://luxor.edu.eg/cv/fatima-hassan.pdf',
    profileImage: 'assets/event1.jpg'
  },
  {
    id: 3,
    name: 'د. محمد أحمد سالم',
    academicRank: 'مدرس',
    college: 'كلية الطب',
    department: 'قسم طب الأطفال',
    email: 'mohamed.ahmed@medicine.luxor.edu.eg',
    phone: '+20 123 456 7892',
    researchInterests: 'طب الأطفال، حديثي الولادة، نمو الطفل',
    personalPage: 'https://luxor.edu.eg/staff/mohamed-ahmed',
    cvLink: 'https://luxor.edu.eg/cv/mohamed-ahmed.pdf',
    profileImage: 'assets/event2.jpg'
  },
  {
    id: 4,
    name: 'د. سارة محمود إبراهيم',
    academicRank: 'أستاذ',
    college: 'كلية الطب',
    department: 'قسم النساء والتوليد',
    email: 'sara.mahmoud@medicine.luxor.edu.eg',
    phone: '+20 123 456 7893',
    researchInterests: 'أمراض النساء، التوليد، الصحة الإنجابية',
    personalPage: 'https://luxor.edu.eg/staff/sara-mahmoud',
    cvLink: 'https://luxor.edu.eg/cv/sara-mahmoud.pdf',
    profileImage: 'assets/event3.jpg'
  },
  {
    id: 5,
    name: 'د. علي حسن محمد',
    academicRank: 'أستاذ مساعد',
    college: 'كلية الطب',
    department: 'قسم الأشعة',
    email: 'ali.hassan@medicine.luxor.edu.eg',
    phone: '+20 123 456 7894',
    researchInterests: 'الأشعة، التصوير التشخيصي، تقنيات الرنين المغناطيسي',
    personalPage: 'https://luxor.edu.eg/staff/ali-hassan',
    cvLink: 'https://luxor.edu.eg/cv/ali-hassan.pdf',
    profileImage: 'assets/event2.jpg'
  },
  {
    id: 6,
    name: 'د. ليلى أحمد محمود',
    academicRank: 'مدرس',
    college: 'كلية الطب',
    department: 'قسم الباثولوجيا',
    email: 'layla.ahmed@medicine.luxor.edu.eg',
    phone: '+20 123 456 7895',
    researchInterests: 'الباثولوجيا، علم الأمراض النسيجي، الباثولوجيا الجزيئية',
    personalPage: 'https://luxor.edu.eg/staff/layla-ahmed',
    cvLink: 'https://luxor.edu.eg/cv/layla-ahmed.pdf',
    profileImage: 'assets/event3.jpg'
  }
];

}
