import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Department, AboutDepartment, DepartmentVision, DepartmentMission, DepartmentGoal, DepartmentImage } from '../Models/departments';

@Injectable({
  providedIn: 'root'
})
export class ScientificDepartmentsService {

  constructor() { }

  getById(id: string): Observable<Department | undefined> {
    // Mock data for scientific departments
    const mockDepartments: { [key: string]: Department } = {
      '1': {
        Id: '1',
  Name: 'قسم التشريح',
  description: 'دراسة بنية جسم الإنسان.',
  manager: 'د. أحمد علي',
        email: 'anatomy@faculty.edu',
        phone: '+20 123 456 789',
        sectorId: '1',
        employeesCount: 15,
        location: 'Building A, Floor 2',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
        AboutDepartment: {
          Id: 1,
          About: 'يقدم قسم التشريح تعليمًا شاملاً حول بنية جسم الإنسان، مع مختبرات حديثة ومرافق للتشريح.',
          Title: 'عن قسم التشريح',
          DepartmentId: '1'
        } as AboutDepartment,
        Vision: {
          Id: 1,
          Vision: 'أن نكون قسمًا رائدًا في العلوم التشريحية، مع تقدم المعرفة من خلال البحث والتعليم.',
          DepartmentId: '1'
        } as DepartmentVision,
        Mission: {
          Id: 1,
          Mission: 'تأهيل الطلاب في علم التشريح، وإجراء أبحاث متقدمة، وخدمة المجتمع بخبرة تشريحية.',
          DepartmentId: '1'
        } as DepartmentMission,
        Goals: [
          { Id: 1, Goal: 'تقديم تعليم تشريحي متميز', OrderIndex: 1, DepartmentId: '1' } as DepartmentGoal,
          { Id: 2, Goal: 'إجراء أبحاث مبتكرة في التشريح', OrderIndex: 2, DepartmentId: '1' } as DepartmentGoal,
          { Id: 3, Goal: 'تعزيز التعاون مع المختصين الطبيين', OrderIndex: 3, DepartmentId: '1' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 1,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
            DepartmentId: '1'
          } as DepartmentImage
        ]
      },
      '2': {
        Id: '2',
  Name: 'قسم الفسيولوجيا',
  description: 'دراسة وظائف جسم الإنسان.',
  manager: 'د. فاطمة حسن',
        email: 'physiology@faculty.edu',
        phone: '+20 123 456 790',
        sectorId: '1',
        employeesCount: 12,
        location: 'Building B, Floor 1',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
        AboutDepartment: {
          Id: 2,
          About: 'يركز قسم الفسيولوجيا على فهم وظائف الجسم على مستوى الخلايا والأعضاء والأنظمة.',
          Title: 'عن قسم الفسيولوجيا',
          DepartmentId: '2'
        } as AboutDepartment,
        Vision: {
          Id: 2,
          Vision: 'التفوق في البحث والتعليم الفسيولوجي والمساهمة في التقدم الطبي.',
          DepartmentId: '2'
        } as DepartmentVision,
        Mission: {
          Id: 2,
          Mission: 'تدريس مبادئ الفسيولوجيا وإجراء أبحاث حول وظائف الجسم وتأهيل الطلاب للمهن الطبية.',
          DepartmentId: '2'
        } as DepartmentMission,
        Goals: [
          { Id: 4, Goal: 'تطوير المعرفة الفسيولوجية عبر البحث', OrderIndex: 1, DepartmentId: '2' } as DepartmentGoal,
          { Id: 5, Goal: 'تقديم تعليم فسيولوجي شامل', OrderIndex: 2, DepartmentId: '2' } as DepartmentGoal,
          { Id: 6, Goal: 'دمج الفسيولوجيا مع الممارسة السريرية', OrderIndex: 3, DepartmentId: '2' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 2,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
            DepartmentId: '2'
          } as DepartmentImage
        ]
      },
      '3': {
        Id: '3',
  Name: 'قسم الكيمياء الحيوية',
  description: 'دراسة العمليات الكيميائية في الكائنات الحية.',
  manager: 'د. محمد صلاح',
        email: 'biochemistry@faculty.edu',
        phone: '+20 123 456 791',
        sectorId: '1',
        employeesCount: 10,
        location: 'Building C, Floor 3',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400',
        AboutDepartment: {
          Id: 3,
          About: 'يستكشف قسم الكيمياء الحيوية الآليات الجزيئية الأساسية للعمليات الحيوية.',
          Title: 'عن قسم الكيمياء الحيوية',
          DepartmentId: '3'
        } as AboutDepartment,
        Vision: {
          Id: 3,
          Vision: 'أن نكون في طليعة البحث والتعليم في الكيمياء الحيوية.',
          DepartmentId: '3'
        } as DepartmentVision,
        Mission: {
          Id: 3,
          Mission: 'تقديم معرفة متعمقة في الكيمياء الحيوية، وإجراء أبحاث مبتكرة، وتدريب العلماء المستقبليين.',
          DepartmentId: '3'
        } as DepartmentMission,
        Goals: [
          { Id: 7, Goal: 'إجراء أبحاث كيميائية حيوية رائدة', OrderIndex: 1, DepartmentId: '3' } as DepartmentGoal,
          { Id: 8, Goal: 'تقديم تعليم عالي الجودة في الكيمياء الحيوية', OrderIndex: 2, DepartmentId: '3' } as DepartmentGoal,
          { Id: 9, Goal: 'تعزيز التعاون متعدد التخصصات', OrderIndex: 3, DepartmentId: '3' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 3,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
            DepartmentId: '3'
          } as DepartmentImage
        ]
      },
      '4': {
        Id: '4',
  Name: 'قسم الأمراض',
  description: 'دراسة أسباب وتأثيرات الأمراض.',
  manager: 'د. سارة أحمد',
        email: 'pathology@faculty.edu',
        phone: '+20 123 456 792',
        sectorId: '1',
        employeesCount: 18,
        location: 'Building D, Floor 4',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
        AboutDepartment: {
          Id: 4,
          About: 'يتخصص قسم الأمراض في تشخيص الأمراض من خلال التحليل المختبري للأنسجة والسوائل.',
          Title: 'عن قسم الأمراض',
          DepartmentId: '4'
        } as AboutDepartment,
        Vision: {
          Id: 4,
          Vision: 'الريادة في علم الأمراض التشخيصي والمساهمة في فهم الأمراض من خلال البحث.',
          DepartmentId: '4'
        } as DepartmentVision,
        Mission: {
          Id: 4,
          Mission: 'تدريب أطباء الأمراض، وتطوير تقنيات التشخيص، ودعم اتخاذ القرار السريري.',
          DepartmentId: '4'
        } as DepartmentMission,
        Goals: [
          { Id: 10, Goal: 'تحسين دقة التشخيص', OrderIndex: 1, DepartmentId: '4' } as DepartmentGoal,
          { Id: 11, Goal: 'إجراء أبحاث في علم الأمراض', OrderIndex: 2, DepartmentId: '4' } as DepartmentGoal,
          { Id: 12, Goal: 'التعاون مع الأقسام السريرية', OrderIndex: 3, DepartmentId: '4' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 4,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
            DepartmentId: '4'
          } as DepartmentImage
        ]
      },
      '5': {
        Id: '5',
  Name: 'قسم علم الأدوية',
  description: 'دراسة الأدوية وتأثيراتها على الكائنات الحية.',
  manager: 'د. عمر خالد',
        email: 'pharmacology@faculty.edu',
        phone: '+20 123 456 793',
        sectorId: '1',
        employeesCount: 14,
        location: 'Building E, Floor 1',
        image: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=400',
        AboutDepartment: {
          Id: 5,
          About: 'يبحث قسم علم الأدوية في آليات عمل الأدوية وتفاعلاتها واستخداماتها العلاجية.',
          Title: 'عن قسم علم الأدوية',
          DepartmentId: '5'
        } as AboutDepartment,
        Vision: {
          Id: 5,
          Vision: 'الريادة في البحث والتعليم الدوائي لتطوير علاجات أفضل.',
          DepartmentId: '5'
        } as DepartmentVision,
        Mission: {
          Id: 5,
          Mission: 'تقديم التعليم في علم الأدوية، والبحث في تطوير الأدوية، وتعزيز الاستخدام الرشيد للأدوية.',
          DepartmentId: '5'
        } as DepartmentMission,
        Goals: [
          { Id: 13, Goal: 'تطوير البحث الدوائي', OrderIndex: 1, DepartmentId: '5' } as DepartmentGoal,
          { Id: 14, Goal: 'تدريب صيادلة وأطباء', OrderIndex: 2, DepartmentId: '5' } as DepartmentGoal,
          { Id: 15, Goal: 'ضمان ممارسات آمنة للدواء', OrderIndex: 3, DepartmentId: '5' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 5,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=800',
            DepartmentId: '5'
          } as DepartmentImage
        ]
      },
      '6': {
        Id: '6',
  Name: 'قسم الباطنة',
  description: 'تشخيص وعلاج الأمراض لدى البالغين.',
  manager: 'د. ليلى إبراهيم',
        email: 'internal-medicine@faculty.edu',
        phone: '+20 123 456 794',
        sectorId: '2',
        employeesCount: 25,
        location: 'Clinical Building, Floor 3',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400',
        AboutDepartment: {
          Id: 6,
          About: 'يتولى قسم الباطنة تقديم رعاية شاملة للمرضى البالغين من مختلف الحالات الطبية.',
          Title: 'عن قسم الباطنة',
          DepartmentId: '6'
        } as AboutDepartment,
        Vision: {
          Id: 6,
          Vision: 'تقديم رعاية وتدريب متميز في الباطنة.',
          DepartmentId: '6'
        } as DepartmentVision,
        Mission: {
          Id: 6,
          Mission: 'تشخيص وعلاج الأمراض الداخلية، وتدريب المقيمين، وإجراء بحوث سريرية.',
          DepartmentId: '6'
        } as DepartmentMission,
        Goals: [
          { Id: 16, Goal: 'تقديم رعاية عالية الجودة للمرضى', OrderIndex: 1, DepartmentId: '6' } as DepartmentGoal,
          { Id: 17, Goal: 'تدريب أخصائيي الباطنة', OrderIndex: 2, DepartmentId: '6' } as DepartmentGoal,
          { Id: 18, Goal: 'تطوير أبحاث الباطنة', OrderIndex: 3, DepartmentId: '6' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 6,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800',
            DepartmentId: '6'
          } as DepartmentImage
        ]
      },
      '7': {
        Id: '7',
  Name: 'قسم الجراحة',
  description: 'العلاج الجراحي للأمراض والإصابات.',
  manager: 'د. حسن محمود',
        email: 'surgery@faculty.edu',
        phone: '+20 123 456 795',
        sectorId: '2',
        employeesCount: 30,
        location: 'Surgical Wing, Floor 2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
        AboutDepartment: {
          Id: 7,
          About: 'ينفذ قسم الجراحة مجموعة واسعة من الإجراءات الجراحية باستخدام تقنيات متقدمة.',
          Title: 'عن قسم الجراحة',
          DepartmentId: '7'
        } as AboutDepartment,
        Vision: {
          Id: 7,
          Vision: 'أن نكون مركزًا متميزًا في الرعاية الجراحية والابتكار.',
          DepartmentId: '7'
        } as DepartmentVision,
        Mission: {
          Id: 7,
          Mission: 'تقديم خبرة جراحية، وتدريب الجراحين، وتحسين نتائج العمليات.',
          DepartmentId: '7'
        } as DepartmentMission,
        Goals: [
          { Id: 19, Goal: 'إجراء جراحات آمنة وفعالة', OrderIndex: 1, DepartmentId: '7' } as DepartmentGoal,
          { Id: 20, Goal: 'تطوير التعليم الجراحي', OrderIndex: 2, DepartmentId: '7' } as DepartmentGoal,
          { Id: 21, Goal: 'ابتكار تقنيات جراحية', OrderIndex: 3, DepartmentId: '7' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 7,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
            DepartmentId: '7'
          } as DepartmentImage
        ]
      },
      '8': {
        Id: '8',
  Name: 'قسم الأطفال',
  description: 'الرعاية الطبية للرضع والأطفال والمراهقين.',
  manager: 'د. نور الدين',
        email: 'pediatrics@faculty.edu',
        phone: '+20 123 456 796',
        sectorId: '2',
        employeesCount: 22,
        location: 'Pediatric Wing, Floor 1',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
        AboutDepartment: {
          Id: 8,
          About: 'يتخصص قسم الأطفال في صحة الطفل والنمو والتطور.',
          Title: 'عن قسم الأطفال',
          DepartmentId: '8'
        } as AboutDepartment,
        Vision: {
          Id: 8,
          Vision: 'تعزيز صحة ورفاهية الطفل من خلال التميز في طب الأطفال.',
          DepartmentId: '8'
        } as DepartmentVision,
        Mission: {
          Id: 8,
          Mission: 'تقديم رعاية أطفال، والتثقيف حول صحة الطفل، وإجراء أبحاث في طب الأطفال.',
          DepartmentId: '8'
        } as DepartmentMission,
        Goals: [
          { Id: 22, Goal: 'ضمان صحة مثالية للأطفال', OrderIndex: 1, DepartmentId: '8' } as DepartmentGoal,
          { Id: 23, Goal: 'تدريب متخصصي طب الأطفال', OrderIndex: 2, DepartmentId: '8' } as DepartmentGoal,
          { Id: 24, Goal: 'تطوير طب الأطفال', OrderIndex: 3, DepartmentId: '8' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 8,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
            DepartmentId: '8'
          } as DepartmentImage
        ]
      },
      '9': {
        Id: '9',
  Name: 'قسم الأشعة',
  description: 'تفسير إجراءات وتقنيات التصوير الطبي.',
  manager: 'د. كريم عبد',
        email: 'radiology@faculty.edu',
        phone: '+20 123 456 797',
        sectorId: '2',
        employeesCount: 20,
        location: 'Imaging Center, Ground Floor',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
        AboutDepartment: {
          Id: 9,
          About: 'يستخدم قسم الأشعة تقنيات تصوير متقدمة للتشخيص والعلاج.',
          Title: 'عن قسم الأشعة',
          DepartmentId: '9'
        } as AboutDepartment,
        Vision: {
          Id: 9,
          Vision: 'الريادة في التصوير الإشعاعي والإجراءات التداخلية.',
          DepartmentId: '9'
        } as DepartmentVision,
        Mission: {
          Id: 9,
          Mission: 'تقديم خدمات تصوير دقيقة، وتدريب أخصائيي الأشعة، والابتكار في مجال الأشعة.',
          DepartmentId: '9'
        } as DepartmentMission,
        Goals: [
          { Id: 25, Goal: 'توفير تصوير تشخيصي دقيق', OrderIndex: 1, DepartmentId: '9' } as DepartmentGoal,
          { Id: 26, Goal: 'تدريب مهنيي الأشعة', OrderIndex: 2, DepartmentId: '9' } as DepartmentGoal,
          { Id: 27, Goal: 'تطوير تقنيات تصوير متقدمة', OrderIndex: 3, DepartmentId: '9' } as DepartmentGoal
        ],
        DepartmentImages: [
          {
            Id: 9,
            Field: 'MainImage',
            UrlPath: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
            DepartmentId: '9'
          } as DepartmentImage
        ]
      }
    };
    return of(mockDepartments[id]).pipe(delay(300));
  }

  getAllDepartments(): Observable<Department[]> {
    return of([
      {
        Id: '1',
        Name: 'Anatomy Department',
        description: 'Study of the structure of the human body.',
        manager: 'Dr. Ahmed Ali',
        email: 'anatomy@faculty.edu',
        phone: '+20 123 456 789',
        sectorId: '1',
        employeesCount: 15,
        location: 'Building A, Floor 2',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
      },
      {
        Id: '2',
        Name: 'Physiology Department',
        description: 'Study of the functions of the human body.',
        manager: 'Dr. Fatima Hassan',
        email: 'physiology@faculty.edu',
        phone: '+20 123 456 790',
        sectorId: '1',
        employeesCount: 12,
        location: 'Building B, Floor 1',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400'
      },
      {
        Id: '3',
        Name: 'Biochemistry Department',
        description: 'Study of chemical processes in living organisms.',
        manager: 'Dr. Mohamed Salah',
        email: 'biochemistry@faculty.edu',
        phone: '+20 123 456 791',
        sectorId: '1',
        employeesCount: 10,
        location: 'Building C, Floor 3',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400'
      },
      {
        Id: '4',
        Name: 'Pathology Department',
        description: 'Study of the causes and effects of diseases.',
        manager: 'Dr. Sara Ahmed',
        email: 'pathology@faculty.edu',
        phone: '+20 123 456 792',
        sectorId: '1',
        employeesCount: 18,
        location: 'Building D, Floor 4',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400'
      },
      {
        Id: '5',
        Name: 'Pharmacology Department',
        description: 'Study of drugs and their effects on living organisms.',
        manager: 'Dr. Omar Khaled',
        email: 'pharmacology@faculty.edu',
        phone: '+20 123 456 793',
        sectorId: '1',
        employeesCount: 14,
        location: 'Building E, Floor 1',
        image: 'https://images.unsplash.com/photo-1585399829334-8b7f5c8d7a3e?w=400'
      },
      {
        Id: '6',
        Name: 'Internal Medicine Department',
        description: 'Diagnosis and treatment of adult diseases.',
        manager: 'Dr. Layla Ibrahim',
        email: 'internal-medicine@faculty.edu',
        phone: '+20 123 456 794',
        sectorId: '2',
        employeesCount: 25,
        location: 'Clinical Building, Floor 3',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400'
      },
      {
        Id: '7',
        Name: 'Surgery Department',
        description: 'Surgical treatment of diseases and injuries.',
        manager: 'Dr. Hassan Mahmoud',
        email: 'surgery@faculty.edu',
        phone: '+20 123 456 795',
        sectorId: '2',
        employeesCount: 30,
        location: 'Surgical Wing, Floor 2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
      },
      {
        Id: '8',
        Name: 'Pediatrics Department',
        description: 'Medical care for infants, children, and adolescents.',
        manager: 'Dr. Nour El-Din',
        email: 'pediatrics@faculty.edu',
        phone: '+20 123 456 796',
        sectorId: '2',
        employeesCount: 22,
        location: 'Pediatric Wing, Floor 1',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
      },
      {
        Id: '9',
        Name: 'Radiology Department',
        description: 'Medical imaging interpretation and procedures.',
        manager: 'Dr. Karim Abdel',
        email: 'radiology@faculty.edu',
        phone: '+20 123 456 797',
        sectorId: '2',
        employeesCount: 20,
        location: 'Imaging Center, Ground Floor',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
      }
    ]).pipe(delay(300));
  }
}
