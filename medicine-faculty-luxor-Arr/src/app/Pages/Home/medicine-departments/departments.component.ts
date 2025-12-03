import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface DepartmentItem {
  id?: string;
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

@Component({
  selector: 'ck-departments',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  encapsulation: ViewEncapsulation.None // This ensures CSS variables and styles are applied globally
})
export class DepartmentsComponent {

   @Input() showAllServicesButton: boolean = true; 
  @Input() allServicesUrl: string = '/departments';
  @Input() allServicesText: string = 'كل الأقسام +';
  @Input() departments: DepartmentItem[] = [
    {
      id: '1',
      title: 'قسم أمراض القلب',
      description: 'القسم المتخصص في تشخيص وعلاج أمراض القلب والأوعية الدموية وتقديم الخدمات التعليمية والبحثية.',
      iconPath: 'assets/cardiology.png',
      iconAlt: 'Cardiology Icon'
    },
    {
      id: '2',
      title: 'قسم المخ والأعصاب',
      description: 'القسم المعني بتشخيص وعلاج الأمراض العصبية وإجراء البحوث المتعلقة بالجهاز العصبي.',
            iconPath: 'assets/Neurology.png',

      iconAlt: 'Neurology Icon'
    },
    {
      id: '3',
      title: 'قسم جراحة العظام',
      description: 'قسم يهتم بتشخيص وعلاج الإصابات والأمراض المتعلقة بالجهاز العظمي والمفاصل.',
            iconPath: 'assets/Orthopedics.png',

      iconAlt: 'Orthopedics Icon'
    },
    {
      id: '4',
      title: 'قسم الأورام',
      description: 'القسم المتخصص في تقديم خدمات تشخيص وعلاج مرضى السرطان بالإضافة إلى البرامج البحثية والتعليمية.',
            iconPath: 'assets/cancer department.png',

      iconAlt: 'Cancer Department Icon'
    },
    {
      id: '5',
      title: 'قسم العيون',
      description: 'القسم المعني بتشخيص وعلاج اضطرابات العيون وإجراء العمليات الجراحية المتخصصة.',
            iconPath: 'assets/Ophthalmology.png',

      iconAlt: 'Ophthalmology Icon'
    },
    {
      id: '6',
      title: 'قسم الجهاز التنفسي',
      description: 'القسم المتخصص في تشخيص وعلاج أمراض الجهاز التنفسي وتقديم الرعاية والخدمات السريرية.',
            iconPath: 'assets/Respiratory.png',

      iconAlt: 'Respiratory Icon'
    }
  ];

  @Input() sectionTitle: string = 'أقسام الكلية';
  // @Input() showTitle: boolean = true;

  constructor() { }

  onDepartmentClick(department: DepartmentItem): void {
    // Emit event or handle click as needed
    console.log('Department clicked:', department);
  }

  trackByFn(index: number, item: DepartmentItem): string {
    return item.id || item.title;
  }
}