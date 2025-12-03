import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Statistic } from '../../../../Models/sectors';



@Component({
  selector: 'app-sector-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class SectorStatisticsComponent implements OnInit {
  @Input() stats !: Statistic[];
 
  displayedCounts: number[] = [];
  private animationStarted = false;

  constructor() { }

  ngOnInit(): void {
    // Initialize displayed counts to 0
    this.displayedCounts = this.stats.map(() => 0);
    
    // Start animation after component loads
    setTimeout(() => {
      this.startCountAnimation();
    }, 500);
  }

  private startCountAnimation(): void {
    if (this.animationStarted) return;
    this.animationStarted = true;

    this.stats.forEach((stat, index) => {
      setTimeout(() => {
        this.animateCount(index, stat.Count);
      }, (index + 1) * 100);
    });
  }

  private animateCount(index: number, targetCount: number): void {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let currentCount = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      currentCount = Math.min(Math.floor(increment * step), targetCount);
      this.displayedCounts[index] = currentCount;

      if (currentCount >= targetCount) {
        clearInterval(timer);
        this.displayedCounts[index] = targetCount;
      }
    }, duration / steps);
  }

  // Format number with commas
  formatNumber(num: number): string {
    return num.toLocaleString();
  }

  // Check if element is in viewport for scroll animations
  onElementVisible(index: number): void {
    if (!this.animationStarted) {
      this.startCountAnimation();
    }
  }
}
