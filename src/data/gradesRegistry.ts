import { UnitData, SectionContent } from '../types';
import { allUnits as grade5Units } from './index';
import { grade6Units } from './grade6';
import { grade7Units } from './grade7';
import { grade8Units } from './grade8';

export type GradeLevel = 5 | 6 | 7 | 8;

export interface GradeMeta {
  grade: GradeLevel;
  title: string;
  badge: string;
  units: UnitData[];
  description: string;
}

export const gradesMeta: Record<GradeLevel, GradeMeta> = {
  5: {
    grade: 5,
    title: "5. Sınıf Fen Bilimleri",
    badge: "1. ve 2. Kitap (7 Ünite • 20 Bölüm)",
    units: grade5Units,
    description: "Güneş, Dünya ve Ay; Kuvvet; Canlılar; Işık; Madde; Çevre; Elektrik Devreleri. 20 Pekiştirme İstasyonu, 200 Boşluk Doldurma, 400 Bağlam Temelli Soru."
  },
  6: {
    grade: 6,
    title: "6. Sınıf Fen Bilimleri",
    badge: "Maarif Modeli (Güneş Sistemi & Sistemler)",
    units: grade6Units,
    description: "Güneş Sistemi, Gezegenler, Tutulmalar, Vücudumuzdaki Sistemler, Kuvvet ve Hareket."
  },
  7: {
    grade: 7,
    title: "7. Sınıf Fen Bilimleri",
    badge: "1. ve 2. Kitap Tamamı (7 Ünite • 19 Bölüm & Sonuç Çalışmaları)",
    units: grade7Units,
    description: "1. Kitap (Güneş Sistemi, Hücre ve Bölünmeler, Kuvvet ve Enerji) ve 2. Kitap (Işığın Kırılması ve Aynalar, Maddenin Yapısı ve Karışımlar, Canlılarda Üreme, Büyüme ve Gelişme, Elektrik Devreleri & Ohm Kanunu). 19 Bölüm, Neler Öğrenildi Özetleri, Sonraki Konuya Geçiş ve Ünite Sonu Değerlendirmeleri."
  },
  8: {
    grade: 8,
    title: "8. Sınıf Fen Bilimleri (LGS)",
    badge: "LGS Tam MEBİ Müfredatı (7 Ünite • 17 Alt Konu • 340 Soru)",
    units: grade8Units,
    description: "MEBİ LGS resmi kaynakları ve '8. sınıf konular' analizinden üretilen; Mevsimler ve İklim, DNA ve Genetik Kod, Basınç, Madde ve Endüstri, Basit Makineler, Enerji Dönüşümleri, Elektrik Yükleri. 17 Alt Konu, Kavram Yanılgıları, MEB Çeldiricileri ve 340 Bağlam Temelli LGS Sorusu."
  }
};

export function getUnitsForGrade(grade: GradeLevel): UnitData[] {
  return gradesMeta[grade]?.units || grade5Units;
}

export function getFirstSectionForGrade(grade: GradeLevel): SectionContent {
  const units = getUnitsForGrade(grade);
  return units[0]?.sections[0] || grade5Units[0].sections[0];
}

export function findSectionAcrossGrades(code: string, preferredGrade?: GradeLevel): SectionContent | undefined {
  if (preferredGrade) {
    const units = getUnitsForGrade(preferredGrade);
    for (const u of units) {
      const found = u.sections.find(s => s.code === code);
      if (found) return found;
    }
  }

  // Fallback search across all grades
  const allGradelist: GradeLevel[] = [5, 7, 6, 8];
  for (const g of allGradelist) {
    const units = getUnitsForGrade(g);
    for (const u of units) {
      const found = u.sections.find(s => s.code === code);
      if (found) return found;
    }
  }

  return undefined;
}
