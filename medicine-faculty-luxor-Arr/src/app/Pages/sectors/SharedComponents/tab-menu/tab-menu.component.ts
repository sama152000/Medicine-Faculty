import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url.split('/').pop() || '';
  }
 
  // جاي من الـ service
  @Input() tabs: { title: string, link: string }[] = [];
  @Input() currentRoute: string = '';

  @Output() tabSelected = new EventEmitter<string>();

  onTabClick(route: string) {
    this.currentRoute = route; // تحديث الـ active
    this.tabSelected.emit(route); 
  this.router.navigate([route], { relativeTo: this.route }); 
  }

}
