import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Department } from '../../../../Models/sectors';
import { SectorService } from '../../../../services/sector.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sector-departments',
   imports: [
    CardModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './sector-departments.component.html',
  styleUrls: ['./sector-departments.component.css']
})
export class SectorDepartmentsComponent implements OnInit {

   @Input() sectorId!: number;
  
  departments: Department[] = [];
  loading: boolean = false;
  selectedDepartment: Department | null = null;
  displayDetails: boolean = false;

  constructor(private departmentService: SectorService, private route:ActivatedRoute) {}

    ngOnInit() {
    this.route.parent?.params.subscribe(params => {
      this.sectorId = +params['id'];   // هنا هتجيب الـ sectorId
      this.loadDepartments();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sectorId'] && !changes['sectorId'].firstChange) {
      this.loadDepartments();
    }
  }

  loadDepartments() {
    this.loading = true;
    // this.departmentService.getDepartmentsBySector(this.sectorId).subscribe({
    //   next: (data) => {
    //     this.departments = data;
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Error loading departments:', error);
    //     this.loading = false;
    //   }
    // });
    this.departments = [
     {
    id: '1',
    name: 'إدارة شؤون الطلاب والتسجيل',
    description: 'إدارة مسؤولة عن تسجيل الطلاب الجدد وتسجيل المواد والمتابعة الأكاديمية.',
    manager: 'أحمد محمد علي',
    email: 'ahmed@example.com',
    phone: '0123456789',
    sectorId: '1',
    image: 'assets/slider2.jpg'
  },
  {
    id: '2',
    name: 'إدارة الامتحانات والكنترول',
    description: 'إدارة مسؤولة عن تنظيم الامتحانات، إعداد الجداول، وإصدار النتائج.',
    manager: 'فاطمة علي حسن',
    email: 'fatima@example.com',
    phone: '0987654321',
    sectorId: '1',
    image: 'assets/slider3.jpg'
  },
  {
    id: '3',
    name: 'إدارة الدراسات العليا',
    description: 'مسؤولة عن برامج الماجستير والدكتوراه وقبول وتسجيل الطلاب فيها.',
    manager: 'د. محمد إبراهيم',
    email: 'm.ibrahim@example.com',
    phone: '01122334455',
    sectorId: '1',
    image: 'assets/dept-postgrad.jpg'
  },
 
];
    this.loading = false; // Set loading to false since we are using mock data
  }

  showDetails(department: Department) {
    this.selectedDepartment = department;
    this.displayDetails = true;
  }

  hideDetails() {
    this.displayDetails = false;
    this.selectedDepartment = null;
  }

}
