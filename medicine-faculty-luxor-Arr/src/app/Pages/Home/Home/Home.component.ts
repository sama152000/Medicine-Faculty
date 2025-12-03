import { Component, OnInit } from "@angular/core";
import { DepartmentsComponent } from "../medicine-departments/departments.component";
import { MedicineHeroSectionComponent } from "../medicine-hero-section/medicine-hero-section.component";
import { ServicesComponent } from "../medicine-services/services.component";
import { MedicalDeanSpeechComponent } from "../dean-speech/dean-speech.component";
import { MedicineNewsComponent } from "../medicine-news/medicine-news.component";
import { MedicineUpcomingConferenceComponent } from "../medicine-upcoming-conference/medicine-upcoming-conference.component";

@Component({
  selector: 'app-Home',
   imports: [
    DepartmentsComponent,
    MedicineHeroSectionComponent,
    MedicineNewsComponent,
    ServicesComponent,
    MedicalDeanSpeechComponent,
    MedicineUpcomingConferenceComponent
],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
