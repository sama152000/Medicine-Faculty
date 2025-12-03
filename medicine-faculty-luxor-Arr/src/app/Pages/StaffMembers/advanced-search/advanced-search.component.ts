import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class StaffAdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    name: '',
    college: '',
    department: '',
    academicRank: ''
  };

  colleges = [
  'كلية الطب'
];

departments = [
  'قسم الجراحة',
  'قسم الباطنة',
  'قسم طب الأطفال',
  'قسم النساء والتوليد',
  'قسم الأشعة',
  'قسم الباثولوجيا'
];

academicRanks = [
  'أستاذ',
  'أستاذ مساعد',
  'مدرس'
];

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  clearSearch(): void {
    this.searchData = {
      name: '',
      college: '',
      department: '',
      academicRank: ''
    };
    this.searchEvent.emit(this.searchData);
  }
}
