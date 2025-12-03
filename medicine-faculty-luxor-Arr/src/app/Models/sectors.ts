
export interface AddSectorDto{
  name: string;
  subTitle: string;
}
export interface SectorPostDto {
  id?: string;
  sectorId: string;
  postId: string;
}

export interface SectorServices {
  id?: string;
  name: string;
  details: string; //description
  duration: string;
  applicationUrl?: string;
  downloadUrl?: string;
  isOnline: boolean;
  category: string;
  fees?: number;
  contactPerson?: string;
  contactPhone?: string;
    sectorId: string;
}


export interface SectorUnitDto {
  id?: string;
  unitNameAr?: string;
  unitDescriptionAr?: string;
  manager?: string;
  email?: string;
  employeesCount?: number;
  location?: string;
  unitPhone?: string;
  sectorId: string;
}

export interface SectorDetailDto {
  id?: string;
  about?: string;
  title?: string;
  sectorId: string;
}

export interface SectorServiceDto {
  id?: string;
  name?: string;
  details?: string;
  duration?: string;
  applicationUrl?: string;
  downloadUrl?: string;
  isOnline: boolean;
  category: string;
  fees?: number;
  contactPerson?: string;
  contactPhone?: string;
  sectorId: string;
}

export interface SectorProgramDto {
  id?: string;
  name?: string;
  sectorId: string;
}

export interface SectorAttachmentDto {
  id?: string;
  filePath?: string;
  sectorId: string;
}

export interface SectorDto {
  id?: string;
  name?: string;
  subTitle?: string;
  sectorAttachment?: SectorAttachmentDto[];
  sectorPrograms?: SectorProgramDto[];
  sectorServices?: SectorServiceDto[];
  sectorDetails?: SectorDetailDto[];
  sectorUnits?: SectorUnitDto[];
  sectorPosts?: SectorPostDto[];
}


////////////////////////////////////////////

export interface AboutSector {
  Id?: number;
  About: string;
  Title: string;
  SectorId?: string;
}

export interface SectorImage {
  Id?: number;
  Field?: string;
  UrlPath: string;
  SectorId?: string;
}

export interface Statistic {
  Id?: number;
  Title: string;
  Count: number;
  SectorId?: string;
}

export interface SectorDirector {
  Id?: number;
  Name: string;
  Title: string;
  Message: string;
  ImageUrl: string;
  SectorId?: string;
}

export interface SectorVision {
  Id?: number;
  Vision: string;
  SectorId?: string;
}

export interface SectorMission {
  Id?: number;
  Mission: string;
  SectorId?: string;
}

export interface SectorGoal {
  Id?: number;
  Goal: string;
  OrderIndex?: number;
  SectorId?: string;
}

export interface Sector {
  Id: string;
  Name: string;
  AboutSector?: AboutSector;
  SectorImages?: SectorImage[];
  Statistics?: Statistic[];
  Director?: SectorDirector;
  Vision?: SectorVision;
  Mission?: SectorMission;
  Goals?: SectorGoal[];
}

//////////////
export interface AboutSector{
    Id?: number;
    About: string;
    Title : string;
    SectorId?: string;
}

export interface SectorImage{
    Id?: number;
    Field?: string;
    UrlPath: string;
    SectorId?: string;
}

export interface Statistic {
  Id?: number;
  Title: string;
  Count: number;
  SectorId?: string;
}

// DTOs for CRUD operations
export interface AddSectorAttachmentDto {
  Id?: number;
  FilePath: File; // For Angular, use File instead of IFormFile
  SectorId: string;
}

export interface EditSectorAttachmentDto {
  Id?: number;
  FilePath?: File;
  SectorId: string;
}

export interface AddSectorDetailDto {
  Id?: number;
  About: string;
  Title: string;
  SectorId: string;
}

export interface EditSectorDetailDto {
  Id?: number;
  About: string;
  Title: string;
  SectorId: string;
}

export interface AddSectorStatDto {
  Id?: number;
  Title: string;
  Count: number;
  SectorId: string;
}

export interface EditSectorStatDto {
  Id?: number;
  Title: string;
  Count: number;
  SectorId: string;
}


export interface SectorBasicInfo {
  title: string;
  subtitle: string;
}

export interface NavTab {
  title: string;
  link: string;
}

export interface News {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author:string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  manager: string;
  email: string;
  phone: string;
  sectorId: string;
  employeesCount?: number;
  location?: string;
  image?: string;
}



