import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PrimeIcons } from 'primeng/api';

interface EstablishmentData {
  pageTitle: string;
  heroIcon: string;
  mainCard: {
    headerIcon: string;
    firstSection: {
      icon: string;
      text: string;
      highlightedDate: string;
      highlightedDateIcon: string;
    };
    secondSection: {
      icon: string;
      text: string;
      highlightedDecree: string;
      highlightedDecreeIcon: string;
    };
  };
  footer: {
    establishmentDate: string;
    separationDecree: string;
    separationYear: string;
  };
  sideCards: Array<{
    icon: string;
    title: string;
    text: string;
    gradient: string;
  }>;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, CardModule, DividerModule],
  template: `
    <div class="establishment-container">
      <!-- Hero Header -->
      <div class="establishment-hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-icon">
            <i [class]="establishmentData.heroIcon"></i>
          </div>
          <h1 class="hero-title">{{ establishmentData.pageTitle }}</h1>
          <div class="hero-underline"></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="establishment-content container">
        <div class="content-wrapper">
          <!-- Main Card -->
          <p-card class="establishment-card">
            <ng-template pTemplate="header">
              <div class="card-header-custom">
                <div class="header-decoration">
                  <div class="deco-circle"></div>
                  <div class="deco-line"></div>
                </div>
                <div class="header-icon-wrapper">
                  <i [class]="establishmentData.mainCard.headerIcon + ' header-icon'"></i>
                </div>
              </div>
            </ng-template>

            <div class="card-body-custom">
              <!-- First Paragraph -->
              <div class="content-section">
                <div class="section-marker">
                  <i [class]="establishmentData.mainCard.firstSection.icon"></i>
                </div>
                <p class="establishment-text">
                  {{ establishmentData.mainCard.firstSection.text }}
                  <span class="highlight-date">
                    <i [class]="establishmentData.mainCard.firstSection.highlightedDateIcon"></i>
                    {{ establishmentData.mainCard.firstSection.highlightedDate }}
                  </span>
                </p>
              </div>

              <!-- <p-divider></p-divider> -->

              <!-- Second Paragraph -->
              <div class="content-section">
                <div class="section-marker">
                  <i [class]="establishmentData.mainCard.secondSection.icon"></i>
                </div>
                <p class="establishment-text">
                  {{ establishmentData.mainCard.secondSection.text }}
                  <span class="highlight-decree">
                    <i [class]="establishmentData.mainCard.secondSection.highlightedDecreeIcon"></i>
                    {{ establishmentData.mainCard.secondSection.highlightedDecree }}
                  </span>
                </p>
              </div>
            </div>

            <ng-template pTemplate="footer">
              <div class="card-footer-custom">
                <div class="footer-stats">
                  <ng-container *ngFor="let stat of footerStats; let i = index">
                    <div class="stat-item">
                      <i [class]="stat.icon"></i>
                      <div class="stat-content">
                        <span class="stat-label">{{ stat.label }}</span>
                        <span class="stat-value">{{ stat.value }}</span>
                      </div>
                    </div>
                    <div class="stat-divider" *ngIf="i < footerStats.length - 1"></div>
                  </ng-container>
                </div>
              </div>
            </ng-template>
          </p-card>

          <!-- Side Info Cards -->
          <div class="side-info-cards">
            <div class="info-card" *ngFor="let card of establishmentData.sideCards">
              <div class="info-icon" [style.background]="card.gradient">
                <i [class]="card.icon"></i>
              </div>
              <h3 class="info-title">{{ card.title }}</h3>
              <p class="info-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
/* ===============================================
   🏥 College Establishment Component Styles
   =============================================== */

.establishment-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 50%, #F5F5F5 100%);
}

/* ===============================================
   🎨 Hero Section
   =============================================== */
.establishment-hero {
  position: relative;
  padding: 5rem 2rem 4rem;
  background: linear-gradient(135deg, #B71C1C 0%, #5D4037 50%, #FF8F00 100%);
  overflow: hidden;
}

.establishment-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  background-position: bottom;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255, 143, 0, 0.2), transparent 50%),
              radial-gradient(circle at bottom left, rgba(183, 28, 28, 0.2), transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}



.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-underline {
  width: 120px;
  height: 4px;
  background: white;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.5);
}

/* ===============================================
   📄 Main Content
   =============================================== */
.establishment-content {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

/* ===============================================
   🎴 Main Card
   =============================================== */
.establishment-card {
  border: none;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  background: white;
  transition: all 0.4s ease;
}

.establishment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(183, 28, 28, 0.15);
}

/* Card Header */
.card-header-custom {
  background: linear-gradient(135deg, #B71C1C 0%, #5D4037 100%);
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}

.card-header-custom::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 143, 0, 0.3), transparent);
  border-radius: 50%;
}

.header-decoration {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.deco-circle {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: relative;
}

.deco-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: rgba(255, 143, 0, 0.5);
  border-radius: 50%;
}

.deco-line {
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5), transparent);
}

.header-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.header-icon {
  font-size: 4rem;
  color: white;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Card Body */
.card-body-custom {
  padding: 3rem;
}

.content-section {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.section-marker {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #FF8F00, #FFA000);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 143, 0, 0.3);
}

.establishment-text {
  font-size: 1.2rem;
  line-height: 2;
  color: #424242;
  text-align: justify;
  margin: 0;
}

.highlight-date,
.highlight-decree {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  margin: 0 0.25rem;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.highlight-date {
  background: linear-gradient(135deg, rgba(183, 28, 28, 0.1), rgba(255, 143, 0, 0.1));
  color: #B71C1C;
  border: 2px solid rgba(183, 28, 28, 0.2);
}

.highlight-decree {
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.1), rgba(25, 118, 210, 0.1));
  color: #1565C0;
  border: 2px solid rgba(21, 101, 192, 0.2);
}

.highlight-date:hover,
.highlight-decree:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.highlight-date i,
.highlight-decree i {
  font-size: 1rem;
}

/* PrimeNG Divider Override */
::ng-deep .p-divider {
  margin: 2rem 0;
}

::ng-deep .p-divider::before {
  border-top: 2px solid #E9ECEF;
}

/* Card Footer */
.card-footer-custom {
  background: linear-gradient(135deg, #FAFAFA, #F5F5F5);
  padding: 2rem;
  border-top: 3px solid #FF8F00;
}

.footer-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-item i {
  font-size: 2.5rem;
  color: #B71C1C;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(183, 28, 28, 0.2);
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.9rem;
  color: #424242;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.3rem;
  color: #5D4037;
  font-weight: 700;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background: linear-gradient(180deg, transparent, #E9ECEF, transparent);
}

/* ===============================================
   📌 Side Info Cards
   =============================================== */
.side-info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: #FF8F00;
}

.info-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.info-icon i {
  font-size: 2.5rem;
  color: white;
}

.info-title {
  font-size: 1.3rem;
  color: #5D4037;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.info-text {
  font-size: 1.1rem;
  color: #424242;
  font-weight: 500;
  margin: 0;
}

/* ===============================================
   📱 Responsive Design
   =============================================== */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .establishment-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .card-body-custom {
    padding: 2rem;
  }

  .footer-stats {
    flex-direction: column;
    align-items: stretch;
  }

  .stat-divider {
    width: 100%;
    height: 2px;
  }
}

@media (max-width: 768px) {
  .establishment-hero {
    padding: 3rem 1rem 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-icon {
    width: 80px;
    height: 80px;
  }

  .hero-icon i {
    font-size: 2.5rem;
  }

  .card-body-custom {
    padding: 1.5rem;
  }

  .content-section {
    flex-direction: column;
    gap: 1rem;
  }

  .establishment-text {
    font-size: 1rem;
    text-align: left;
  }

  .highlight-date,
  .highlight-decree {
    display: inline-flex;
    padding: 0.4rem 0.8rem;
    font-size: 0.95rem;
  }

  .side-info-cards {
    grid-template-columns: 1fr;
  }

  .header-decoration {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .establishment-content {
    padding: 2rem 1rem;
  }

  .card-header-custom {
    padding: 2rem 1rem;
  }

  .header-icon {
    font-size: 3rem;
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
  }

  .section-marker {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

/* ===============================================
   ✨ Animation Utilities
   =============================================== */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.content-section:nth-child(1) {
  animation: slideInLeft 0.6s ease-out;
}

.content-section:nth-child(3) {
  animation: slideInRight 0.6s ease-out;
}

.info-card:nth-child(1) {
  animation: slideInUp 0.6s ease-out 0.1s both;
}

.info-card:nth-child(2) {
  animation: slideInUp 0.6s ease-out 0.2s both;
}

.info-card:nth-child(3) {
  animation: slideInUp 0.6s ease-out 0.3s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  `]
})
export class HistoryComponent {
  PrimeIcons = PrimeIcons;
  establishmentData: EstablishmentData = {
    pageTitle: 'تأسيس كلية الطب',
    heroIcon: 'pi pi-building',
    mainCard: {
      headerIcon: '',
      firstSection: {
        icon: 'pi pi-flag',
        text: 'تم إنشاء كلية الطب بالأقصر بموجب صدور قرار إنشاء الكلية بتاريخ',
        highlightedDate: '07 فبراير 2018',
        highlightedDateIcon: 'pi pi-calendar-plus'
      },
      secondSection: {
        icon: 'pi pi-star',
        text: 'وهي إحدى كليات جامعة الأقصر بصعيد مصر، بعد أن كانت كلياتها تابعة سابقًا كفرع لجامعة جنوب الوادي. تم فصل جامعة الأقصر رسميًا واستقلالها عن جامعة جنوب الوادي بموجب',
        highlightedDecree: 'قرار رئيس مجلس الوزراء رقم 1481 لسنة 2019',
        highlightedDecreeIcon: 'pi pi-file'
      }
    },
    footer: {
      establishmentDate: '07/02/2018',
      separationDecree: '1481',
      separationYear: '2019'
    },
    sideCards: [
      {
        icon: 'pi pi-map-marker',
        title: 'الموقع',
        text: 'الأقصر - صعيد مصر',
        gradient: 'linear-gradient(135deg, #B71C1C, #C62828)'
      },
      {
        icon: 'pi pi-sitemap',
        title: 'الجامعة الأم',
        text: 'جامعة الأقصر',
        gradient: 'linear-gradient(135deg, #FF8F00, #FFA000)'
      },
      {
        icon: 'pi pi-history',
        title: 'الانتساب السابق',
        text: 'فرع جامعة جنوب الوادي',
        gradient: 'linear-gradient(135deg, #1565C0, #1976D2)'
      }
    ]
  };

  footerStats = [
    {
      icon: 'pi pi-calendar-plus',
      label: 'تاريخ التأسيس',
      value: this.establishmentData.footer.establishmentDate
    },
    {
      icon: 'pi pi-verified',
      label: 'قرار الاستقلال',
      value: `رقم ${this.establishmentData.footer.separationDecree}`
    },
    {
      icon: 'pi pi-star',
      label: 'سنة الفصل الرسمي',
      value: this.establishmentData.footer.separationYear
    }
  ];
}