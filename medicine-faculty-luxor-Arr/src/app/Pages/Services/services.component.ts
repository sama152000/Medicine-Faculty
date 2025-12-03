import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from './services-grid/services-grid.component';
import { ServicesHeroSectionComponent } from './hero-section/hero-section.component';
import { ServicesAdvancedSearchComponent } from './advanced-search/advanced-search.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroSectionComponent,
    ServicesAdvancedSearchComponent,
    ServicesGridComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  searchData: { title: string; category: string; type: string } = { title: '', category: '', type: '' };

  onSearch(searchData: { title: string; category: string; type: string }): void {
    this.searchData = searchData;
  }
}
