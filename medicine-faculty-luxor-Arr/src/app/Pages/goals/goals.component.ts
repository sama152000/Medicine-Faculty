import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  goalsData = {
    subtitle: 'أهدافنا',
    title: 'أهداف كلية الطب - جامعة الأقصر',
    description: 'نسعى لتحقيق مجموعة من الأهداف الاستراتيجية لضمان التفوق في التعليم الطبي، وتقديم الخدمات الصحية، والبحث العلمي.',
    goals: [
      {
        icon: 'pi pi-graduation-cap',
        title: 'إعداد خريجين مؤهلين',
        description: 'تعليم وتدريب خريجين أكفاء علميًا ومهنيًا، قادرين على المنافسة في أسواق الرعاية الصحية المحلية والإقليمية والعالمية، مزودين بمهارات نظرية وعملية قوية.'
      },
      {
        icon: 'pi pi-search',
        title: 'تعزيز البحث العلمي',
        description: 'الارتقاء بالبحث الطبي والابتكار من خلال دعم المشروعات البحثية المتميزة، وتشجيع الاكتشافات الطبية، وتعزيز التعاون البحثي الدولي.'
      },
      {
        icon: 'pi pi-globe',
        title: 'خدمة المجتمع والتنمية المستدامة',
        description: 'المساهمة في الرعاية الصحية المستدامة وتنمية المجتمع من خلال مواجهة التحديات الصحية العامة، وتوفير الحلول الطبية، وتعزيز الشراكات مع القطاع الصحي.'
      },
      {
        icon: 'pi pi-star',
        title: 'التميز الأكاديمي والإكلينيكي',
        description: 'تحقيق التميز في البرامج الأكاديمية والإكلينيكية من خلال التطوير المستمر للمناهج الدراسية، وتبني أحدث طرق التعليم، وضمان جودة عالية في التعليم الطبي.'
      }
    ]
  };
}