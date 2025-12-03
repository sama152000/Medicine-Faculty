import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Conference {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-medicine-upcoming-conference',
  standalone: true,
  imports: [CommonModule, RouterModule],
   templateUrl: './medicine-upcoming-conference.component.html',
  styleUrls: ['./medicine-upcoming-conference.component.css']
})
export class MedicineUpcomingConferenceComponent {
  conference: Conference = {
    id: '15',
    title: 'المؤتمر الطبي الدولي الخامس عشر',
    subtitle: 'الابتكار في الطب والصحة',
    date: '15 – 17 ديسمبر 2024',
    location: 'القاعة الرئيسية – كلية الطب',
    description: 'انضم إلينا في المؤتمر الطبي الدولي الخامس عشر حيث يجتمع نخبة من الخبراء والمتخصصين لمناقشة أحدث التطورات والابتكارات في الرعاية الصحية والبحث الطبي.',
    image: 'assets/event1.jpg',
  };

}
