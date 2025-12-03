import { Component, OnInit } from '@angular/core';
import { SectorService } from '../../../services/sector.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SharedHeroSectionComponent } from '../SharedComponents/hero-section/hero-section.component';
import { TabMenuComponent } from '../SharedComponents/tab-menu/tab-menu.component';
import { AddSectorDto, SectorDto } from '../../../Models/sectors';

@Component({
  selector: 'app-Sector-Page',
  standalone: true,  
  imports: [SharedHeroSectionComponent, TabMenuComponent, RouterOutlet],
  templateUrl: './Sector-Page.component.html',
  styleUrls: ['./Sector-Page.component.css']
})
export class SectorPageComponent implements OnInit {

  sectorId!: string;
  sectors:AddSectorDto={} as AddSectorDto;
  tabs: any[] = [];
  currentRoute: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,        
    private sectorService: SectorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sectorId = params.get('id') || '1'; // default to 1
      this.loadSectorData();
    });
  }

  loadSectorData() {
    this.sectorService.getById(this.sectorId).subscribe({
      next: (response) => {
        if (response) {
          this.sectors = response;
        }
      }
    });

    // Mock tabs data
    this.tabs = [
      { title: 'عن القطاع', link: 'about-sector' },
      { title: 'الاقسام', link: 'sector-departments' },
      { title: 'الخدمات', link: 'sector-services' },
      { title: 'الأخبار', link: 'sector-news' }
    ];
    this.currentRoute = 'about-sector'; // default to about-sector
  }

  onTabSelected(route: string) {
    this.currentRoute = route;
    this.router.navigate([route], { relativeTo: this.route });
  }

  onSectorChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newSectorId = selectElement.value;
    this.sectorId = newSectorId;
    this.router.navigate(['/sectors', newSectorId]);
  }
}
