import { UnitData, SectionContent } from '../../types';

// 1. Ünite: Güneş Sistemi ve Tutulmalar
import { grade6Unit1Section1 } from './unit1_section1';
import { grade6Unit1Section2 } from './unit1_section2';
import { grade6Unit1Review } from './unit1_review';

// 2. Ünite: Vücudumuzdaki Sistemler
import { grade6Unit2Section1 } from './unit2_section1';
import { grade6Unit2Section2 } from './unit2_section2';
import { grade6Unit2Review } from './unit2_review';

// 3. Ünite: Kuvvet ve Hareket
import { grade6Unit3Section1 } from './unit3_section1';
import { grade6Unit3Section2 } from './unit3_section2';
import { grade6Unit3Review } from './unit3_review';

// 4. Ünite: Madde ve Isı
import { grade6Unit4Section1 } from './unit4_section1';
import { grade6Unit4Section2 } from './unit4_section2';
import { grade6Unit4Section3 } from './unit4_section3';
import { grade6Unit4Review } from './unit4_review';

// 5. Ünite: Ses ve Özellikleri
import { grade6Unit5Section1 } from './unit5_section1';
import { grade6Unit5Section2 } from './unit5_section2';
import { grade6Unit5Review } from './unit5_review';

// 6. Ünite: Vücudumuzdaki Sistemler ve Sağlığı
import { grade6Unit6Section1 } from './unit6_section1';
import { grade6Unit6Section2 } from './unit6_section2';
import { grade6Unit6Review } from './unit6_review';

// 7. Ünite: Elektriğin İletimi
import { grade6Unit7Section1 } from './unit7_section1';
import { grade6Unit7Section2 } from './unit7_section2';
import { grade6Unit7Review } from './unit7_review';

export const grade6Units: UnitData[] = [
  {
    id: "g6-unit-1",
    unitNumber: 1,
    title: "1. Ünite: Güneş Sistemi ve Tutulmalar",
    description: "Güneş sistemindeki gezegenler, iç ve dış gezegenler, asteroitler, meteorlar ve gök taşları; Güneş ve Ay tutulmaları; İslam ve Türk astronomi mirası.",
    color: "amber",
    sections: [
      grade6Unit1Section1,
      grade6Unit1Section2,
      grade6Unit1Review
    ]
  },
  {
    id: "g6-unit-2",
    unitNumber: 2,
    title: "2. Ünite: Vücudumuzdaki Sistemler",
    description: "Destek ve hareket sistemi (kemik, kıkırdak, eklem, kaslar); sindirim sistemi (kimyasal-mekanik sindirim, enzimler, karaciğer, pankreas); dolaşım sistemi (kalp, damarlar, kan grupları ve bağış); solunum ve boşaltım sistemleri (böbrekler, nefron, diyaliz).",
    color: "rose",
    sections: [
      grade6Unit2Section1,
      grade6Unit2Section2,
      grade6Unit2Review
    ]
  },
  {
    id: "g6-unit-3",
    unitNumber: 3,
    title: "3. Ünite: Kuvvet ve Hareket",
    description: "Bileşke kuvvet (net kuvvet), aynı ve zıt yönlü kuvvetler, dengelenmiş ve dengelenmemiş kuvvetler; sabit süratli hareket, yol-zaman ve sürat-zaman grafikleri; Bîrûnî ve Cezerî'nin mekanik mirası.",
    color: "indigo",
    sections: [
      grade6Unit3Section1,
      grade6Unit3Section2,
      grade6Unit3Review
    ]
  },
  {
    id: "g6-unit-4",
    unitNumber: 4,
    title: "4. Ünite: Madde ve Isı",
    description: "Maddenin tanecikli, boşluklu ve hareketli yapısı; katı, sıvı ve gaz tanecik hareketleri; yoğunluk (d = m / V) ve suyun +4°C anomalisi; ısı iletkenliği, ısı yalıtımı ve yalıtım malzemeleri; fosil ve yenilenebilir yakıtlar, soba zehirlenmelerine karşı önlemler; Câbir bin Hayyân ve Hâzinî.",
    color: "emerald",
    sections: [
      grade6Unit4Section1,
      grade6Unit4Section2,
      grade6Unit4Section3,
      grade6Unit4Review
    ]
  },
  {
    id: "g6-unit-5",
    unitNumber: 5,
    title: "5. Ünite: Ses ve Özellikleri",
    description: "Sesin katı, sıvı ve gaz ortamlarda yayılması; sesin boşlukta yayılmaması; farklı ortamlarda farklı ses duyulması; sesin sürati ve ışık hızıyla karşılaştırılması; sesin yansıması, yankı ve sonar/ultrason teknolojileri; sesin soğrulması ve akustik yalıtım; Fârâbî ve Mimar Sinan'ın akustik dehası.",
    color: "purple",
    sections: [
      grade6Unit5Section1,
      grade6Unit5Section2,
      grade6Unit5Review
    ]
  },
  {
    id: "g6-unit-6",
    unitNumber: 6,
    title: "6. Ünite: Vücudumuzdaki Sistemler ve Sağlığı",
    description: "Denetleyici ve düzenleyici sistemler: Sinir sistemi (beyin, beyincik, omurilik soğanı, omurilik), refleksler (kalıtsal ve şartlı); iç salgı bezleri (hipofiz, tiroit, pankreas, böbrek üstü, eşeysel bezler); beş duyu organı (göz, kulak, burun, dil, deri) ve kusurları (miyop, hipermetrop, astigmat); koku ve tat etkileşimi; organ bağışının önemi; İbn-i Sînâ ve İbnü'l-Heysem.",
    color: "teal",
    sections: [
      grade6Unit6Section1,
      grade6Unit6Section2,
      grade6Unit6Review
    ]
  },
  {
    id: "g6-unit-7",
    unitNumber: 7,
    title: "7. Ünite: Elektriğin İletimi",
    description: "Katı ve sıvı iletkenler ve yalıtkanlar; gazların yüksek voltajda iletkenleşmesi (yıldırım, neon lambalar); elektrik güvenliği ve topraklama; elektriksel direnç (R, Ohm - Ω) ve bağlı olduğu faktörler (uzunluk, kesit alanı, cins); ampul parlaklığı ve reosta (ayarlı direnç); akkor flamanlı ampul ve tungsten tel teknolojisi.",
    color: "sky",
    sections: [
      grade6Unit7Section1,
      grade6Unit7Section2,
      grade6Unit7Review
    ]
  }
];

export function findGrade6SectionByCode(code: string): SectionContent | undefined {
  for (const unit of grade6Units) {
    const found = unit.sections.find(s => s.code === code);
    if (found) return found;
  }
  return grade6Units[0].sections[0];
}
