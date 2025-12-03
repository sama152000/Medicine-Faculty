import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.css'
})
export class AdvancedSearchComponent {
  @Output() searchEvent = new EventEmitter<any>();

  searchData = {
    title: '',
    year: '',
    month: ''
  };

  

  years = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020'
  ];

  months = [
    { value: '01', label: 'يناير' },
    { value: '02', label: 'فبراير' },
    { value: '03', label: 'مارس' },
    { value: '04', label: 'أبريل' },
    { value: '05', label: 'مايو' },
    { value: '06', label: 'يونيو' },
    { value: '07', label: 'يوليو' },
    { value: '08', label: 'أغسطس' },
    { value: '09', label: 'سبتمبر' },
    { value: '10', label: 'أكتوبر' },
    { value: '11', label: 'نوفمبر' },
    { value: '12', label: 'ديسمبر' }
  ];

  performSearch(): void {
    this.searchEvent.emit(this.searchData);
  }

  clearSearch(): void {
    this.searchData = {
      title: '',
      year: '',
      month: ''
    };
    this.searchEvent.emit(this.searchData);
  }
}
