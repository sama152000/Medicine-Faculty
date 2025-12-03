import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedicineLogoBarComponent } from './medicine-logo-bar/medicine-logo-bar.component';
import { MedicineMenuBarComponent } from './medicine-menu-bar/medicine-menu-bar.component';
import { MedicineFooterComponent } from './medicine-footer/medicine-footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MedicineLogoBarComponent, MedicineMenuBarComponent, MedicineFooterComponent],
  template: `
    <ck-medicine-logo-bar></ck-medicine-logo-bar>
    <ck-medicine-menu-bar></ck-medicine-menu-bar>
    <router-outlet></router-outlet>
    <ck-medicine-footer></ck-medicine-footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    ck-medicine-logo-bar,
    ck-medicine-menu-bar,
    ck-medicine-footer {
      flex-shrink: 0;
    }
    router-outlet {
      flex-grow: 1;
      display: block;
    }
  `]
})
export class LayoutComponent {

}
