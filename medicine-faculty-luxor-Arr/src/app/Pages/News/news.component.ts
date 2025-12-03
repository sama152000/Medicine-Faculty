import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHeroSectionComponent } from './hero-section/hero-section.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { NewsGridComponent } from './news-grid/news-grid.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    NewsHeroSectionComponent,
    AdvancedSearchComponent,
    NewsGridComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  onSearch(searchData: any): void {
    // هنا يمكن إضافة منطق البحث
    console.log('Search data:', searchData);
  }
}





