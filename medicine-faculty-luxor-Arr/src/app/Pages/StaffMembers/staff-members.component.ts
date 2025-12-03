import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffHeroSectionComponent } from './hero-section/hero-section.component';
import { StaffAdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { StaffGridComponent } from './staff-grid/staff-grid.component';

@Component({
  selector: 'app-staff-members',
  standalone: true,
  imports: [
    CommonModule,
    StaffHeroSectionComponent,
    StaffAdvancedSearchComponent,
    StaffGridComponent
  ],
  templateUrl: './staff-members.component.html',
  styleUrl: './staff-members.component.css'
})
export class StaffMembersComponent {
  onSearch(searchData: any): void {
    // Handle search logic
    console.log('Search data:', searchData);
  }
}
