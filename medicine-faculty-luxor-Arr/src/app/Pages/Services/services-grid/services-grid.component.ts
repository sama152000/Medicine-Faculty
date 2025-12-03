import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.css']
})
export class ServicesGridComponent implements OnInit, OnChanges {
  @Input() searchData: { title: string; category: string; type: string } = { title: '', category: '', type: '' };

  services: ServiceItem[] = [
    // Services Provided to Students
    { id: 1, type: 'Students', category: 'Educational Services',  title: 'Lectures', description: 'Comprehensive lectures covering all medical subjects.' },
    { id: 2, type: 'Students', category: 'Educational Services',  title: 'Sections', description: 'Interactive section sessions for deeper understanding.' },
    { id: 3, type: 'Students', category: 'Educational Services',  title: 'Clinical Training', description: 'Hands-on clinical training in hospitals.' },
    { id: 4, type: 'Students', category: 'Educational Services',  title: 'Specialized Labs', description: 'Access to advanced specialized laboratories.' },
    { id: 5, type: 'Students', category: 'Educational Services',  title: 'Medical Simulation', description: 'Simulation training for medical procedures.' },
    { id: 6, type: 'Students', category: 'Educational Services',  title: 'Graduation Projects Support', description: 'Guidance and resources for graduation projects.' },
    { id: 7, type: 'Students', category: 'Research Services',  title: 'Scientific Research Workshops', description: 'Workshops on conducting scientific research.' },
    { id: 8, type: 'Students', category: 'Research Services',  title: 'Conference Participation', description: 'Support for participating in conferences.' },
    { id: 9, type: 'Students', category: 'Library Services',  title: 'Central Library', description: 'Access to the central library resources.' },
    { id: 10, type: 'Students', category: 'Library Services',  title: 'Electronic Resources', description: 'Online electronic resources and databases.' },
    { id: 11, type: 'Students', category: 'Library Services',  title: 'Medical Databases', description: 'Specialized medical databases access.' },
    { id: 12, type: 'Students', category: 'Administrative Support', title: 'Student Clinic', description: 'On-campus student clinic services.' },
    { id: 13, type: 'Students', category: 'Administrative Support',  title: 'Primary Healthcare', description: 'Primary healthcare services for students.' },
    { id: 14, type: 'Students', category: 'Administrative Support',  title: 'Psychological Support', description: 'Psychological support and counseling.' },
    { id: 15, type: 'Students', category: 'Student Activities',  title: 'Student Unions', description: 'Support for student union activities.' },
    { id: 16, type: 'Students', category: 'Student Activities',  title: 'Cultural Trips', description: 'Organized cultural and scientific trips.' },
    { id: 17, type: 'Students', category: 'Student Activities',  title: 'Competitions', description: 'Participation in academic competitions.' },
    { id: 18, type: 'Students', category: 'Administrative Support',  title: 'Certificate Issuance', description: 'Issuance of academic certificates.' },
    { id: 19, type: 'Students', category: 'Administrative Support', title: 'Electronic Registration', description: 'Online registration systems.' },
    { id: 20, type: 'Students', category: 'Administrative Support', title: 'Transfers', description: 'Assistance with student transfers.' },

    // Services Provided to Administrative Staff
    { id: 21, type: 'Administrative Staff', category: 'Administrative Services',  title: 'Attendance Systems', description: 'Automated attendance tracking systems.' },
    { id: 22, type: 'Administrative Staff', category: 'Administrative Services',  title: 'HR Services', description: 'Human resources management services.' },
    { id: 23, type: 'Administrative Staff', category: 'Administrative Services',  title: 'Financial Affairs', description: 'Financial administration and support.' },

    // Services Provided to Teaching Assistants
    { id: 28, type: 'Teaching Assistants', category: 'Academic Support',  title: 'Master\'s Programs Enrollment', description: 'Enrollment support for Master\'s programs.' },
    { id: 29, type: 'Teaching Assistants', category: 'Academic Support',  title: 'PhD Programs Enrollment', description: 'Enrollment support for PhD programs.' },
    { id: 30, type: 'Teaching Assistants', category: 'Academic Support',  title: 'Supervision', description: 'Academic supervision and guidance.' },
    { id: 31, type: 'Teaching Assistants', category: 'Development Opportunities',  title: 'Research Grants', description: 'Support for obtaining research grants.' },
    { id: 32, type: 'Teaching Assistants', category: 'Knowledge Resources',  title: 'Scientific Journals Access', description: 'Access to scientific journals.' },


    // Services Provided to Faculty Members
    { id: 39, type: 'Faculty Members', category: 'Academic Services',  title: 'E-learning Platforms', description: 'Access to e-learning platforms.' },
    { id: 40, type: 'Faculty Members', category: 'Academic Services',  title: 'Course Preparation Support', description: 'Support for course preparation.' },
    { id: 41, type: 'Faculty Members', category: 'Academic Services',  title: 'Academic Performance Evaluation', description: 'Evaluation of academic performance.' },
    { id: 42, type: 'Faculty Members', category: 'Research Services',  title: 'Project Funding', description: 'Funding for research projects.' },
    { id: 43, type: 'Faculty Members', category: 'Research Services',  title: 'Research Teams', description: 'Formation of research teams.' },
    { id: 44, type: 'Faculty Members', category: 'Research Services',  title: 'International Cooperation', description: 'Support for international cooperation.' },

  ];

  
  filteredServices: ServiceItem[] = [];

  ngOnInit() {
    this.filteredServices = this.services;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchData']) {
      this.filterServices();
    }
  }

  filterServices() {
    let filtered = this.services;

    if (this.searchData.title) {
      const titleTerm = this.searchData.title.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(titleTerm) ||
        s.description.toLowerCase().includes(titleTerm)
      );
    }

    if (this.searchData.category) {
      filtered = filtered.filter(s => s.category.toLowerCase() === this.searchData.category.toLowerCase());
    }

    if (this.searchData.type) {
      filtered = filtered.filter(s => s.type.toLowerCase() === this.searchData.type.toLowerCase());
    }

    this.filteredServices = filtered;
  }

  page: number = 1;
  pageSize: number = 9;

  get pagedNews() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredServices.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredServices.length / this.pageSize);
  }

  setPage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
    }
  }
}
