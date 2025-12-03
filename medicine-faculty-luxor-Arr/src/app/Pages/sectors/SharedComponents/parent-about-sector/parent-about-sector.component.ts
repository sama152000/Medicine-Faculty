import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SectorHeaderComponent } from '../sector-header/sector-header.component';
import { VisionMissionGoalsComponent } from '../vision-mission-goals/vision-mission-goals.component';
import { Sector } from '../../../../Models/sectors';
import { SectorService } from '../../../../services/sector.service';
import { SectorStatisticsComponent } from '../statistics/statistics.component';
import { DirectorMessageComponent } from '../director-message/director-message.component';

@Component({
  selector: 'app-sector-page',
  standalone: true,
  imports: [
    CommonModule,
    SectorHeaderComponent,
    SectorStatisticsComponent,
    DirectorMessageComponent,
    VisionMissionGoalsComponent
  ],
  templateUrl: './parent-about-sector.component.html',
  styleUrls: ['./parent-about-sector.component.css']
})
export class ParentAboutSectorComponent implements OnInit {
  sector?: Sector;
  sectorId!: string;
  activeTab: string = 'about';

  constructor(
    private route: ActivatedRoute,
    private sectorService: SectorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sectorId = params['id'];
      this.loadSectorData();
    });
  }

  loadSectorData(): void {
    this.sectorService.getSectorById(this.sectorId).subscribe({
      next: (data) => {
        this.sector = data;
      },
      error: (error) => {
        console.error('Error loading sector data:', error);
      }
    });
  }

  get mainImage() {
    return this.sector?.SectorImages?.find(img => img.Field === 'MainImage') || this.sector?.SectorImages?.[0];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
