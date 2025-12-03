import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorGoal, SectorMission, SectorVision } from '../../../../Models/sectors';

@Component({
  selector: 'app-vision-mission-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission-goals.component.html',
  styleUrls: ['./vision-mission-goals.component.css']
})
export class VisionMissionGoalsComponent {
  @Input() vision?: SectorVision;
  @Input() mission?: SectorMission;
  @Input() goals?: SectorGoal[];
  @Input() showVision: boolean = false;
  @Input() showMission: boolean = false;
  @Input() showGoals: boolean = false;

  get sortedGoals(): SectorGoal[] {
    if (!this.goals) return [];
    return [...this.goals].sort((a, b) => {
      const orderA = a.OrderIndex ?? 999;
      const orderB = b.OrderIndex ?? 999;
      return orderA - orderB;
    });
  }
}
