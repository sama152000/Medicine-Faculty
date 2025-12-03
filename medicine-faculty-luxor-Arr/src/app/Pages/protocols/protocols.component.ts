import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedHeroSectionComponent } from "./hero-section/hero-section.component";

interface Protocol {
  id: number;
  partnerInstitution: string;
  typeOfCooperation: string;
  objective: string;
}

@Component({
  selector: 'app-protocols',
  imports: [CommonModule, SharedHeroSectionComponent],
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {

  protocols: Protocol[] = [];
  filteredProtocols: Protocol[] = [];
  searchTerm: string = '';
  selectedType: string = 'الكل';
  cooperationTypes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadProtocols();
    this.extractCooperationTypes();
  }

  loadProtocols(): void {
    this.protocols = [
      {
        id: 1,
        partnerInstitution: 'هيئة الرعاية الصحية المصرية – مستشفى الكرنك الدولي',
        typeOfCooperation: 'تدريب طلابي مؤقت',
        objective: 'دعم التدريب الإكلينيكي وتحسين الخدمات الصحية'
      },
      {
        id: 2,
        partnerInstitution: 'هيئة الرعاية الصحية – مستشفى الحمى',
        typeOfCooperation: 'تبادل أكاديمي وتدريب طلابي',
        objective: 'تحسين خدمات المستشفى والمشاركة في برامج التأمين الصحي'
      },
      {
        id: 3,
        partnerInstitution: 'جامعة شاندونغ العادية (الصين)',
        typeOfCooperation: 'تبادل أكاديمي وثقافي',
        objective: 'برامج طلابية مشتركة وتعاون بحثي'
      },
      {
        id: 4,
        partnerInstitution: 'جامعة طيبة التكنولوجية',
        typeOfCooperation: 'الابتكار التعليمي والاجتماعي',
        objective: 'دعم الدمج والأنشطة العلمية'
      },
      {
        id: 5,
        partnerInstitution: 'أميد إيست + وزارة التعليم العالي',
        typeOfCooperation: 'دعم الأشخاص ذوي الإعاقة',
        objective: 'تأسيس مراكز دعم في الجامعات الحكومية'
      },
      {
        id: 6,
        partnerInstitution: 'المركز القومي للبحوث',
        typeOfCooperation: 'البحث والتطوير',
        objective: 'مبادرات بحثية مشتركة وتعاون أكاديمي'
      }
    ];
    this.filteredProtocols = this.protocols;
  }

  extractCooperationTypes(): void {
    const types = [...new Set(this.protocols.map(p => p.typeOfCooperation))];
    this.cooperationTypes = types.sort();
  }

  filterByType(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProtocols = this.protocols.filter(protocol => {
      const typeMatch = this.selectedType === 'All' || protocol.typeOfCooperation === this.selectedType;
      const searchMatch = this.searchTerm === '' ||
        protocol.partnerInstitution.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        protocol.typeOfCooperation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        protocol.objective.toLowerCase().includes(this.searchTerm.toLowerCase());
      return typeMatch && searchMatch;
    });
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  getCooperationTypeClass(type: string): string {
    const typeClasses: { [key: string]: string } = {
      'تدريب طلابي مؤقت': 'type-training',
      'تبادل أكاديمي وتدريب طلابي': 'type-exchange',
      'تبادل أكاديمي وثقافي': 'type-cultural',
      'الابتكار التعليمي والاجتماعي': 'type-innovation',
      'دعم الأشخاص ذوي الإعاقة': 'type-support',
      'البحث والتطوير': 'type-research'
    };
    return typeClasses[type] || 'type-default';
  }
}
