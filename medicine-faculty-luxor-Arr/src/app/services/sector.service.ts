import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AboutSector, AddSectorAttachmentDto, AddSectorDetailDto, AddSectorDto, AddSectorStatDto, Department, EditSectorAttachmentDto, EditSectorDetailDto, EditSectorStatDto, NavTab, News, Sector, SectorBasicInfo, SectorDirector, SectorDto, SectorGoal, SectorImage, SectorMission, SectorServices, SectorVision, Statistic } from '../Models/sectors';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'api/sectors';

  constructor(private http: HttpClient) {}

  AddSector(dto: AddSectorDto): Observable<string> {
    return of('تمت الإضافة (Mock)').pipe(delay(500));
  }

  geAlltSectors(): Observable<SectorDto[]> {
    return of([]).pipe(delay(500));
  }

  UpdateSector(dto: AddSectorDto): Observable<string> {
    return of('تم التحديث (Mock)').pipe(delay(500));
  }

  deleteSector(id: string): Observable<string> {
    return of('تم الحذف (Mock)').pipe(delay(500));
  }

  getById(id: string): Observable<AddSectorDto | undefined> {
    const mockSectors: { [key: string]: AddSectorDto } = {
      '1': {
        name: 'قطاع شؤون التعليم والطلاب',
        subTitle: 'مسؤول عن إدارة شؤون الطلاب والعملية التعليمية بكلية الطب.'
      },
      '2': {
        name: 'قطاع الدراسات العليا والبحوث',
        subTitle: 'يشرف على برامج الماجستير والدكتوراه والأبحاث الطبية بالكلية.'
      },
      '3': {
        name: 'قطاع خدمة المجتمع وتنمية البيئة',
        subTitle: 'يساهم في تقديم الخدمات الطبية للمجتمع والتوعية الصحية.'
      },
      '4': {
        name: 'قطاع الأمانة العامة',
        subTitle: 'مسؤول عن الشؤون الإدارية والمالية والقانونية للكلية.'
      }
    };
    return of(mockSectors[id]).pipe(delay(300));
  }

  AddSectorService(dto: SectorServices): Observable<string> {
    return of('تمت إضافة الخدمة (Mock)').pipe(delay(500));
  }

  UpdateSectorService(dto: SectorServices): Observable<string> {
    return of('تم تحديث الخدمة (Mock)').pipe(delay(500));
  }

  DeleteSectorService(id: string): Observable<string> {
    return of('تم حذف الخدمة (Mock)').pipe(delay(500));
  }

  getSectorImage(sectorId: number): Observable<SectorImage> {
    const mockImages: { [key: number]: SectorImage } = {
      1: { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId: '1' },
      2: { Id: 2, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' },
      3: { Id: 3, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' },
      4: { Id: 4, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' },
    };
    return of(mockImages[sectorId]);
  }

  getSectorStats(sectorId: string): Observable<Statistic[]> {
    const mockStats: { [key: string]: Statistic[] } = {
      1: [
        { Id: 1, Title: "عدد الأقسام الطبية", Count: 18 },
        { Id: 2, Title: "عدد الطلاب", Count: 3200 },
        { Id: 3, Title: "عدد أعضاء هيئة التدريس", Count: 420 }
      ],
      2: [
        { Id: 1, Title: "برامج الماجستير", Count: 32 },
        { Id: 2, Title: "برامج الدكتوراه", Count: 18 },
        { Id: 3, Title: "المشاريع البحثية النشطة", Count: 210 }
      ],
      3: [
        { Id: 1, Title: "الحملات التوعوية", Count: 65 },
        { Id: 2, Title: "القوافل الطبية", Count: 28 },
        { Id: 3, Title: "الشراكات المجتمعية", Count: 42 }
      ],
      4: [
        { Id: 1, Title: "عدد الموظفين الإداريين", Count: 380 },
        { Id: 2, Title: "عدد الوحدات الإدارية", Count: 24 },
        { Id: 3, Title: "الإجراءات الإدارية السنوية", Count: 12000 }
      ]
    };
    return of(mockStats[sectorId]);
  }

  getAllSectorServices(): Observable<SectorServices[]> {
    const mockServices: SectorServices[] = [
      {
        id: '1',
        name: 'إصدار شهادة قيد طبية',
        details: 'خدمة إصدار شهادات القيد الرسمية لطلاب كلية الطب.',
        duration: 'يومان عمل',
        isOnline: true,
        category: 'شهادات',
        fees: 50,
        sectorId: '1',
        applicationUrl: '',
        downloadUrl: '',
        contactPerson: 'إدارة شؤون الطلاب',
        contactPhone: '01000000000'
      },
      {
        id: '2',
        name: 'حجز تدريب سريري',
        details: 'خدمة حجز مواعيد التدريب السريري في المستشفيات الجامعية.',
        duration: 'خلال 72 ساعة',
        isOnline: true,
        category: 'تدريب',
        sectorId: '1',
        contactPerson: 'منسق التدريب السريري',
        contactPhone: '01000000001'
      }
    ];
    return of(mockServices).pipe(delay(300));
  }

  getSectorNews(sectorId: string): Observable<News[]> {
    const mockNews: News[] = [
      { id: 1, title: 'بدء التسجيل في البرامج الطبية الجديدة', summary: 'فتح باب التسجيل في برامج الماجستير الطبي الجديدة لعام 2025-2026.', image: 'assets/slider2.jpg', date: '2025-01-15', category: 'أكاديمي', readTime: '4 دقائق', author: 'عمادة الكلية' },
      { id: 2, title: 'إطلاق قافلة طبية شاملة', summary: 'تنطلق غدًا القافلة الطبية الشاملة لخدمة أهالي المحافظة.', image: 'assets/slider3.jpg', date: '2025-01-10', category: 'خدمة مجتمعية', readTime: '3 دقائق', author: 'قطاع خدمة المجتمع' }
    ];
    return of(sectorId === '1' ? mockNews : []).pipe(delay(200));
  }

  updateSectorBasicInfo(sectorId: string, info: SectorBasicInfo): Observable<SectorBasicInfo> {
    return of(info).pipe(delay(500));
  }

  getSectorAttachments(sectorId: string): Observable<SectorImage[]> {
    const mockAttachments: { [key: string]: SectorImage[] } = {
      1: [
        { Id: 1, Field: "main", UrlPath: "assets/student.jpeg", SectorId: '1' },
        { Id: 2, Field: "gallery", UrlPath: "assets/building.jpg", SectorId: '1' }
      ],
      2: [{ Id: 3, Field: "main", UrlPath: "assets/staff.jpg", SectorId: '2' }],
      3: [{ Id: 4, Field: "main", UrlPath: "assets/LAND.png", SectorId: '3' }],
      4: [{ Id: 5, Field: "main", UrlPath: "assets/building.jpg", SectorId: '4' }]
    };
    return of(mockAttachments[sectorId] || []);
  }

  addSectorAttachment(dto: AddSectorAttachmentDto): Observable<SectorImage> {
    const newAttachment: SectorImage = {
      Id: Math.floor(Math.random() * 1000),
      UrlPath: 'assets/' + dto.FilePath.name,
      SectorId: dto.SectorId
    };
    return of(newAttachment).pipe(delay(500));
  }

  editSectorAttachment(dto: EditSectorAttachmentDto): Observable<SectorImage> {
    const updated: SectorImage = {
      Id: dto.Id,
      UrlPath: dto.FilePath ? 'assets/' + dto.FilePath.name : 'assets/default.jpg',
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorAttachment(id: number): Observable<void> {
    return of(void 0).pipe(delay(500));
  }

  addSectorDetail(dto: AddSectorDetailDto): Observable<AboutSector> {
    const newDetail: AboutSector = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(newDetail).pipe(delay(500));
  }

  editSectorDetail(dto: EditSectorDetailDto): Observable<AboutSector> {
    const updated: AboutSector = {
      Id: dto.Id,
      Title: dto.Title,
      About: dto.About,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorDetail(id: number): Observable<void> {
    return of(void 0).pipe(delay(500));
  }

  addSectorStat(dto: AddSectorStatDto): Observable<Statistic> {
    const newStat: Statistic = {
      Id: Math.floor(Math.random() * 1000),
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(newStat).pipe(delay(500));
  }

  editSectorStat(dto: EditSectorStatDto): Observable<Statistic> {
    const updated: Statistic = {
      Id: dto.Id,
      Title: dto.Title,
      Count: dto.Count,
      SectorId: dto.SectorId
    };
    return of(updated).pipe(delay(500));
  }

  deleteSectorStat(id: number): Observable<void> {
    return of(void 0).pipe(delay(500));
  }

  getSectorById(sectorId: string): Observable<Sector> {
    return of(this.getMockSector(sectorId));
  }

  getAboutSector(sectorId: string): Observable<AboutSector> {
    return this.http.get<AboutSector>(`${this.apiUrl}/${sectorId}/about`);
  }

  getSectorImages(sectorId: string): Observable<SectorImage[]> {
    return this.http.get<SectorImage[]>(`${this.apiUrl}/${sectorId}/images`);
  }

  getStatistics(sectorId: string): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(`${this.apiUrl}/${sectorId}/statistics`);
  }

  getDirector(sectorId: string): Observable<SectorDirector> {
    return this.http.get<SectorDirector>(`${this.apiUrl}/${sectorId}/director`);
  }

  getVision(sectorId: string): Observable<SectorVision> {
    return this.http.get<SectorVision>(`${this.apiUrl}/${sectorId}/vision`);
  }

  getMission(sectorId: string): Observable<SectorMission> {
    return this.http.get<SectorMission>(`${this.apiUrl}/${sectorId}/mission`);
  }

  getGoals(sectorId: string): Observable<SectorGoal[]> {
    return this.http.get<SectorGoal[]>(`${this.apiUrl}/${sectorId}/goals`);
  }

  private getMockSector(id: string): Sector {
    switch (id) {
      case '1':
        return {
          Id: '1',
          Name: 'قطاع شؤون التعليم والطلاب',
          AboutSector: {
            Id: 1,
            Title: 'عن القطاع',
            About: 'يُعد قطاع شؤون التعليم والطلاب أحد أهم القطاعات بكلية الطب، حيث يركز على تطوير العملية التعليمية وتحسين مستوى الخدمات المقدمة للطلاب. يعمل القطاع على تحقيق التميز الأكاديمي من خلال برامج تعليمية متقدمة تواكب أحدث المعايير العالمية في التعليم الطبي.',
            SectorId: '1'
          },
          SectorImages: [
            { Id: 1, Field: 'MainImage', UrlPath: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', SectorId: '1' }
          ],
          Statistics: [
            { Id: 1, Title: 'عدد الطلاب', Count: 3200, SectorId: '1' },
            { Id: 2, Title: 'أعضاء هيئة التدريس', Count: 420, SectorId: '1' },
            { Id: 3, Title: 'البرامج الأكاديمية', Count: 18, SectorId: '1' }
          ],
          Director: {
            Id: 1,
            Name: 'أ.د. عادل عامر محمد',
            Title: 'مدير قطاع شؤون التعليم والطلاب',
            Message: 'يسعدني أن أرحب بكم في قطاع شؤون التعليم والطلاب بكلية الطب. نعمل بجد لتوفير بيئة تعليمية متميزة تساعد طلابنا على تحقيق أهدافهم الأكاديمية والمهنية. نؤمن بأهمية التطوير المستمر والابتكار في العملية التعليمية لإعداد أطباء متميزين قادرين على خدمة المجتمع.',
            ImageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
            SectorId: '1'
          },
          Vision: {
            Id: 1,
            Vision: 'أن نكون قطاعًا رائدًا في التعليم الطبي على المستويين الإقليمي والدولي، وأن نساهم في تخريج أطباء متميزين قادرين على خدمة المجتمع وتطوير المنظومة الصحية.',
            SectorId: '1'
          },
          Mission: {
            Id: 1,
            Mission: 'توفير تعليم طبي عالي الجودة يعتمد على أحدث المعايير العالمية، وتوفير بيئة داعمة للطلاب، وتطوير قدراتهم العلمية والعملية والإنسانية لإعداد كوادر طبية متميزة.',
            SectorId: '1'
          },
          Goals: [
            { Id: 1, Goal: 'تطوير البرامج الأكاديمية بما يتوافق مع المعايير الدولية للتعليم الطبي', OrderIndex: 1, SectorId: '1' },
            { Id: 2, Goal: 'تحسين جودة التدريس والتدريب السريري من خلال استخدام أحدث الطرق التعليمية', OrderIndex: 2, SectorId: '1' },
            { Id: 3, Goal: 'دعم الطلاب أكاديميًا ونفسيًا واجتماعيًا لضمان تفوقهم العلمي', OrderIndex: 3, SectorId: '1' },
            { Id: 4, Goal: 'تعزيز البحث العلمي والابتكار في مختلف المجالات الطبية', OrderIndex: 4, SectorId: '1' },
            { Id: 5, Goal: 'بناء شراكات محلية ودولية مع مؤسسات تعليمية وصحية مرموقة', OrderIndex: 5, SectorId: '1' }
          ]
        };

      case '2':
        return {
          Id: '2',
          Name: 'قطاع الدراسات العليا والبحوث',
          AboutSector: {
            Id: 2,
            Title: 'عن القطاع',
            About: 'يشرف قطاع الدراسات العليا والبحوث على برامج الماجستير والدكتوراه والمشاريع البحثية بكلية الطب. يعزز البحث العلمي ويوفر فرص تدريب متقدمة لطلاب الدراسات العليا للمساهمة في تطوير المعرفة الطبية والابتكار.',
            SectorId: '2'
          },
          SectorImages: [
            { Id: 2, Field: 'MainImage', UrlPath: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800', SectorId: '2' }
          ],
          Statistics: [
            { Id: 5, Title: 'برامج الماجستير', Count: 32, SectorId: '2' },
            { Id: 6, Title: 'برامج الدكتوراه', Count: 18, SectorId: '2' },
            { Id: 7, Title: 'المشاريع البحثية', Count: 210, SectorId: '2' },
            { Id: 8, Title: 'الأبحاث المنشورة', Count: 450, SectorId: '2' }
          ],
          Director: {
            Id: 2,
            Name: 'أ.د. فاطمة حسن الزهراء',
            Title: 'مدير قطاع الدراسات العليا والبحوث',
            Message: 'مرحبًا بكم في قطاع الدراسات العليا والبحوث. نحن ملتزمون بتعزيز ثقافة التميز البحثي وتوفير الأدوات والموارد اللازمة لطلاب الدراسات العليا لدفع العلم الطبي إلى الأمام وتحسين نتائج الرعاية الصحية.',
            ImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            SectorId: '2'
          },
          Vision: {
            Id: 2,
            Vision: 'أن نكون مركز تميز في التعليم الطبي العالي والبحث العلمي، وننتج باحثين مبتكرين وقادة في مجال الرعاية الصحية.',
            SectorId: '2'
          },
          Mission: {
            Id: 2,
            Mission: 'توفير تعليم شامل للدراسات العليا، ودعم البحث المتقدم، وتسهيل نشر المعرفة لتطوير الممارسة الطبية والصحة العامة.',
            SectorId: '2'
          },
          Goals: [
            { Id: 6, Goal: 'توسيع برامج الدراسات العليا لتلبية الطلب المتزايد', OrderIndex: 1, SectorId: '2' },
            { Id: 7, Goal: 'زيادة التمويل البحثي والشراكات', OrderIndex: 2, SectorId: '2' },
            { Id: 8, Goal: 'رفع جودة وكمية النشر العلمي', OrderIndex: 3, SectorId: '2' },
            { Id: 9, Goal: 'تطوير معامل ومرافق بحثية متقدمة', OrderIndex: 4, SectorId: '2' },
            { Id: 10, Goal: 'تعزيز المبادرات البحثية متعددة التخصصات', OrderIndex: 5, SectorId: '2' }
          ]
        };

      case '3':
        return {
          Id: '3',
          Name: 'قطاع خدمة المجتمع وتنمية البيئة',
          AboutSector: {
            Id: 3,
            Title: 'عن القطاع',
            About: 'يساهم قطاع خدمة المجتمع وتنمية البيئة في تقديم الخدمات الطبية للمجتمع المحلي والتنمية المستدامة. ينظم برامج توعوية، قوافل طبية، وشراكات مع الجهات المجتمعية لتعزيز الوعي الصحي والمسؤولية البيئية.',
            SectorId: '3'
          },
          SectorImages: [
            { Id: 3, Field: 'MainImage', UrlPath: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800', SectorId: '3' }
          ],
          Statistics: [
            { Id: 9, Title: 'القوافل الطبية', Count: 28, SectorId: '3' },
            { Id: 10, Title: 'الحملات التوعوية', Count: 65, SectorId: '3' },
            { Id: 11, Title: 'المتطوعون', Count: 1200, SectorId: '3' },
            { Id: 12, Title: 'الشراكات المجتمعية', Count: 42, SectorId: '3' }
          ],
          Director: {
            Id: 3,
            Name: 'أ.د. أحمد محمود الرشيد',
            Title: 'مدير قطاع خدمة المجتمع وتنمية البيئة',
            Message: 'قطاعنا مكرس لربط الأكاديمية بالمجتمع. من خلال برامجنا ومبادراتنا المتنوعة، نسعى لإحداث تأثير إيجابي على الصحة العامة والاستدامة البيئية في مجتمعاتنا المحلية والإقليمية.',
            ImageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            SectorId: '3'
          },
          Vision: {
            Id: 3,
            Vision: 'أن نكون نموذجًا للانخراط المجتمعي في التعليم الطبي، ونعزز التنمية المستدامة ونحسن النتائج الصحية للمجتمع.',
            SectorId: '3'
          },
          Mission: {
            Id: 3,
            Mission: 'إشراك المجتمع من خلال التوعية التعليمية، والإشراف البيئي، والشراكات التعاونية التي تعزز الصحة العامة وتدعم الممارسات المستدامة.',
            SectorId: '3'
          },
          Goals: [
            { Id: 11, Goal: 'زيادة برامج التوعية الصحية والخدمة المجتمعية', OrderIndex: 1, SectorId: '3' },
            { Id: 12, Goal: 'تطوير مبادرات بيئية مستدامة', OrderIndex: 2, SectorId: '3' },
            { Id: 13, Goal: 'تعزيز الشراكات مع المنظمات المحلية', OrderIndex: 3, SectorId: '3' },
            { Id: 14, Goal: 'تشجيع التطوع والمشاركة المجتمعية بين الطلاب', OrderIndex: 4, SectorId: '3' },
            { Id: 15, Goal: 'قياس وتقييم الأثر المجتمعي لبرامجنا', OrderIndex: 5, SectorId: '3' }
          ]
        };

      case '4':
        return {
          Id: '4',
          Name: 'قطاع الأمانة العامة',
          AboutSector: {
            Id: 4,
            Title: 'عن القطاع',
            About: 'يتولى قطاع الأمانة العامة مسؤولية الشؤون الإدارية والمالية للكلية. يدير السياسات الجامعية، والشؤون القانونية، والموارد البشرية، ويضمن الالتزام بالمتطلبات التنظيمية.',
            SectorId: '4'
          },
          SectorImages: [
            { Id: 4, Field: 'MainImage', UrlPath: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', SectorId: '4' }
          ],
          Statistics: [
            { Id: 13, Title: 'الموظفون الإداريون', Count: 380, SectorId: '4' },
            { Id: 14, Title: 'الوحدات الإدارية', Count: 24, SectorId: '4' },
            { Id: 15, Title: 'السياسات المطبقة', Count: 180, SectorId: '4' },
            { Id: 16, Title: 'عمليات التدقيق', Count: 16, SectorId: '4' }
          ],
          Director: {
            Id: 4,
            Name: 'أ.د. سارة عبدالله الفايد',
            Title: 'أمين الكلية',
            Message: 'كعمود فقري إداري للكلية، نضمن سلاسة العمليات والالتزام بجميع المعايير التنظيمية. يعمل فريقنا المتفاني بلا كلل لدعم التميز الأكاديمي والحفاظ على أعلى معايير الحوكمة.',
            ImageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
            SectorId: '4'
          },
          Vision: {
            Id: 4,
            Vision: 'أن نكون قطاعًا إداريًا نموذجيًا يدعم التميز الأكاديمي من خلال الحوكمة الفعالة والممارسات الإدارية المبتكرة.',
            SectorId: '4'
          },
          Mission: {
            Id: 4,
            Mission: 'توفير دعم إداري شامل، وضمان الالتزام التنظيمي، وتحسين عمليات الكلية لتسهيل الأنشطة الأكاديمية والبحثية.',
            SectorId: '4'
          },
          Goals: [
            { Id: 16, Goal: 'تبسيط الإجراءات والعمليات الإدارية', OrderIndex: 1, SectorId: '4' },
            { Id: 17, Goal: 'ضمان الالتزام بالمعايير الوطنية والدولية', OrderIndex: 2, SectorId: '4' },
            { Id: 18, Goal: 'تطوير برامج التطوير المهني للموظفين', OrderIndex: 3, SectorId: '4' },
            { Id: 19, Goal: 'تنفيذ مبادرات التحول الرقمي', OrderIndex: 4, SectorId: '4' },
            { Id: 20, Goal: 'تعزيز التواصل مع جميع الأطراف المعنية', OrderIndex: 5, SectorId: '4' }
          ]
        };

      default:
        return this.getMockSector('1');
    }
  }
}