import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface MenuTab {
  id?: string;
  title: string;
  target: string;
  order: number;
  menuTypeId: string;
  parentId?: string | null;
  childs?: MenuTab[];
  fragment?: string;
  icon?: string;
  isActive?: boolean;
  type?: "menu" | "columns";
}

@Component({
  selector: 'ck-medicine-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './medicine-menu-bar.component.html',
  styleUrls: ['./medicine-menu-bar.component.css']
})
export class MedicineMenuBarComponent {
  @Input() menuTabs: MenuTab[] = [
    {
      id: '1',
      title: 'الرئيسية',
      target: '',
      order: 1,
      menuTypeId: 'main',
    },
  {
    id: '2',
    title: 'عن الكلية',
    target: '/about-college',
    order: 2,
    menuTypeId: 'main',
    type: "columns",
    childs: [
      {
        title: 'نظرة عامة',
        target: '/overview',
        order: 1,
        menuTypeId: 'sub',
    type: "menu",

        childs: [
                    { title: 'كلمة العميد', target: '/dean-word', order: 1, menuTypeId: 'subsub' },
          { title: 'التاريخ', target: '/history', order: 2, menuTypeId: 'subsub' },
          { title: 'الأهداف', target: '/objectives', order: 3, menuTypeId: 'subsub' },
          { title: 'الرؤية والرسالة', target: '/vision-mission', order: 4, menuTypeId: 'subsub' }
        ]
      },
      {
        title: 'الإدارة',
        target: '/management',
        order: 2,
        menuTypeId: 'sub',
    type: "menu",

        childs: [
          { title: 'الهيكل التنظيمي', target: '/structure', order: 1, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Education)', target: '/vice-dean-education', order: 2, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Research)', target: '/vice-dean-research', order: 3, menuTypeId: 'subsub' },
          // { title: 'Vice Dean (Community)', target: '/vice-dean-community', order: 4, menuTypeId: 'subsub' },
          // { title: 'Secretary', target: '/secretary', order: 5, menuTypeId: 'subsub' }
        ]
      }
    ]
  },
    {
      id: '3',
      title: 'القطاعات',
      target: '/sector',
      order: 3,
      menuTypeId: 'main',
    type: "menu",

      childs: [
        { id: '1', title: 'قطاع التعليم وشئون الطلاب', target: '/sector/1', order: 1, menuTypeId: 'sub' },
        { id: '2', title: 'قطاع الدراسات العليا والبحث العلمي', target: '/sector/2', order: 2, menuTypeId: 'sub' },
        { id: '3', title: 'قطاع خدمة المجتمع وشئون البيئة', target: '/sector/3', order: 3, menuTypeId: 'sub' }
      ]
    },
    {
      id: '4',
      title: 'الأقسام العلمية',
      target: '/departments',
      order: 4,
      menuTypeId: 'main',
    type: "columns",

      childs: [
        {
          title: 'الأقسام الأكاديمية',
          target: '/scientific-departments/academic-departments',
          order: 1,
          menuTypeId: 'sub',
          childs: [
            { title: 'علم التشريح', target: '/scientific-departments/1', order: 1, menuTypeId: 'subsub' },
            { title: 'علم وظائف الأعضاء', target: '/scientific-departments/2', order: 2, menuTypeId: 'subsub' },
            { title: 'علم الكيمياء الحيوية', target: '/scientific-departments/3', order: 3, menuTypeId: 'subsub' },
            { title: 'علم الأمراض', target: '/scientific-departments/4', order: 4, menuTypeId: 'subsub' },
            { title: 'علم الأدوية', target: '/scientific-departments/5', order: 5, menuTypeId: 'subsub' }
          ]
        },
        {
          title: 'الأقسام الإكلينيكية',
          target: '/scientific-departments/clinical-departments',
          order: 2,
          menuTypeId: 'sub',
          childs: [
            { title: 'الباطنة', target: '/scientific-departments/6', order: 1, menuTypeId: 'subsub' },
            { title: 'الجراحة', target: '/scientific-departments/7', order: 2, menuTypeId: 'subsub' },
            { title: 'طب الأطفال', target: '/scientific-departments/8', order: 3, menuTypeId: 'subsub' },
            { title: 'الأشعة', target: '/scientific-departments/9', order: 5, menuTypeId: 'subsub' }
          ]
        }
      ]
    },
    {
      id: '5',
      title: 'المراكز والوحدات',
      target: '/units-centers',
      order: 5,
      menuTypeId: 'main',
      type: "menu",
      childs: [
        { title: 'مركز البحث الطبي', target: '/units-centers/1', order: 1, menuTypeId: 'sub' },
        { title: 'وحدة التدريب الإكلينيكي', target: '/units-centers/2', order: 2, menuTypeId: 'sub' },
        { title: 'وحدة الصحة العامة', target: '/units-centers/3', order: 3, menuTypeId: 'sub' },
        { title: 'مركز التكنولوجيا الحيوية', target: '/units-centers/4', order: 4, menuTypeId: 'sub' },
        { title: 'وحدة تعليم التمريض', target: '/units-centers/5', order: 5, menuTypeId: 'sub' },
        { title: 'وحدة ممارسة الصيدلة', target: '/units-centers/6', order: 6, menuTypeId: 'sub' },
        { title: 'مركز التصوير الطبي', target: '/units-centers/7', order: 7, menuTypeId: 'sub' },
        { title: 'وحدة معلوماتية صحية', target: '/units-centers/8', order: 8, menuTypeId: 'sub' },
        { title: 'وحدة الطوارئ', target: '/units-centers/9', order: 9, menuTypeId: 'sub' },
        { title: 'مركز الصحة النفسية', target: '/units-centers/10', order: 10, menuTypeId: 'sub' }
      ]
    },
    {
      id: '6',
      title: 'مجلة الكلية',
      target: '/journal',
      order: 6,
      menuTypeId: 'main'

    },
    {
      id: '7',
      title: 'أعضاء الهيئة التدريسية',
      target: '/staff-members',
      order: 7,
      menuTypeId: 'main'
    }
    ,
    {
      id: '8',
      title: 'البروتوكولات',
      target: '/protocols',
      order: 8,
      menuTypeId: 'main'
    },
    {
      id: '9',
      title: 'الأخبار',
      target: '/news',
      order: 9,
      menuTypeId: 'main'
    }
  ];

  @Input() isCollapsed = false;
  @Output() tabSelected = new EventEmitter<MenuTab>();
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 991;
    if (this.isMobile) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  onTabClick(tab: MenuTab, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    // Handle dropdown toggle
    if (tab.childs && tab.childs.length > 0) {
      this.activeDropdown = this.activeDropdown === tab.id ? null : tab.id!;
      return;
    }

    // Handle regular tab selection
    this.selectTab(tab);
  }

  selectTab(tab: MenuTab): void {
    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    tab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(tab);
  }

  onSubTabClick(subTab: MenuTab, parentTab: MenuTab, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    // Update active states
    this.menuTabs.forEach(t => {
      t.isActive = false;
      if (t.childs) {
        t.childs.forEach(child => child.isActive = false);
      }
    });

    subTab.isActive = true;
    parentTab.isActive = true;
    this.activeDropdown = null;

    // Emit selection event
    this.tabSelected.emit(subTab);
  }

  toggleMobileMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  trackByFn(index: number, item: MenuTab): string {
    return item.id || item.title;
  }
}
