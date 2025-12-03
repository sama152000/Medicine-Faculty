import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-college',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="about-college-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .about-college-container {
      padding: 20px;
      background-color: #f5f5f5;
    }
  `]
})
export class AboutCollegeComponent {

}
