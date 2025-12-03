import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorService } from '../../../../../services/sector.service';

@Component({
  selector: 'app-sector-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class SectorNewsDetailComponent implements OnInit {
  newsId: number = 0;
  newsData: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: SectorService
  ) {}

  ngOnInit(): void {
  this.route.parent?.params.subscribe(parentParams => {
    const sectorId = +parentParams['id'];
    this.newsData = {
      id: 1,
      title: 'خبر هام عن القطاع',
      summary: 'هذا ملخص الخبر الهام الذي يتعلق بالقطاع.',
      image: 'assets/event1.jpg',
      date: '2024-06-01',
      category: 'أخبار عامة',
      readTime: '5 دقائق'
    };
  });
}



  goBack(): void {
  const sectorId = this.route.snapshot.paramMap.get('id');
  this.router.navigate(['sector', sectorId, 'sector-news']);
}


  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}





