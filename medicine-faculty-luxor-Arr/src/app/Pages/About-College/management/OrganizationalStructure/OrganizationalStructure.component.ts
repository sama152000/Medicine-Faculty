import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Position {
  title: string;
  name: string;
  icon: string;
  color: string;
  image?: string | null;
}

interface Department {
  title: string;
  head: string;
  icon: string;
  color: string;
}

interface ExpandedNodes {
  [key: string]: boolean;
}

@Component({
  selector: 'app-OrganizationalStructure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './OrganizationalStructure.component.html',
  styleUrls: ['./OrganizationalStructure.component.css']
})

export class OrganizationalStructureComponent implements OnInit {

  expandedNodes: ExpandedNodes = {
    departments: false,
    offices: false
  };

  offices: Position[] = [
    {
      title: 'مدير عام الكلية',
      name: 'أ. محمد حسين علي',
      icon: 'fa-briefcase',
      color: '#5D4037',
      image: null
    },
    {
      title: 'مدير شئون الطلاب',
      name: 'أ. أحمد سعيد محمود',
      icon: 'fa-users',
      color: '#FF8F00',
      image: null
    },
    {
      title: 'مدير الشئون الإدارية',
      name: 'أ. عبدالرحمن طارق',
      icon: 'fa-file-alt',
      color: '#00796B',
      image: null
    }
  ];

  president: Position = {
    title: 'أمين الكلية',
    name: 'أ. صبرين عبدالجليل',
    icon: 'fa-building',
    color: '#8B0000',
    image: 'assets/manager.png'
  };

  dean: Position = {
    title: 'عميد كلية الطب البشري',
    name: 'أ.د. محمد شحات بدوي',
    icon: 'fa-graduation-cap',
    color: '#8B0000',
    image: 'assets/dean.png'
  };

  viceDeans: Position[] = [
    {
      title: 'وكيل الكلية لشئون التعليم والطلاب',
      name: 'أ.د. سارة محمد حسن',
      icon: 'fa-book-open',
      color: '#1565C0',
      image: 'assets/slider2.jpg'
    },
    {
      title: 'وكيل الكلية للدراسات العليا والبحوث',
      name: 'أ.د. خالد أحمد إبراهيم',
      icon: 'fa-microscope',
      color: '#388E3C',
      image: 'assets/slider2.jpg'
    },
    {
      title: 'وكيل الكلية لخدمة المجتمع وتنمية البيئة',
      name: 'أ.د. فاطمة علي محمود',
      icon: 'fa-heart',
      color: '#00796B',
      image: 'assets/slider2.jpg'
    }
  ];

  departments: Department[] = [
    {
      title: 'قسم التشريح البشري والأجنة',
      head: 'أ.د. محمد عبدالله',
      icon: 'fa-user-md',
      color: '#B71C1C'
    },
    {
      title: 'قسم الفسيولوجيا الطبية',
      head: 'أ.د. أحمد حسن',
      icon: 'fa-user-md',
      color: '#1565C0'
    },
    {
      title: 'قسم الباثولوجيا',
      head: 'أ.د. سامي محمود',
      icon: 'fa-user-md',
      color: '#388E3C'
    },
    {
      title: 'قسم الباطنة العامة',
      head: 'أ.د. ياسر عبدالعزيز',
      icon: 'fa-user-md',
      color: '#00796B'
    },
    {
      title: 'قسم الجراحة العامة',
      head: 'أ.د. عمر السيد',
      icon: 'fa-user-md',
      color: '#FF8F00'
    },
    {
      title: 'قسم النساء والتوليد',
      head: 'أ.د. منى أحمد',
      icon: 'fa-user-md',
      color: '#5D4037'
    },
    {
      title: 'قسم طب الأطفال',
      head: 'أ.د. نور الدين محمد',
      icon: 'fa-user-md',
      color: '#B71C1C'
    },
    {
      title: 'قسم أمراض الصدر',
      head: 'أ.د. كريم عبدالله',
      icon: 'fa-user-md',
      color: '#1565C0'
    }
  ];

  toggleNode(nodeId: string): void {
    this.expandedNodes[nodeId] = !this.expandedNodes[nodeId];
  }

  isExpanded(nodeId: string): boolean {
    return this.expandedNodes[nodeId] || false;
  }

  constructor() { }

  ngOnInit() { }
}