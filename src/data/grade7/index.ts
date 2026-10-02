import { UnitData, SectionContent } from '../../types';
import { unit1Section1 } from './unit1_section1';
import { unit1Section2 } from './unit1_section2';
import { unit2Section1 } from './unit2_section1';
import { unit2Section2 } from './unit2_section2';
import { unit2Section3 } from './unit2_section3';
import { unit3Section1 } from './unit3_section1';
import { unit3Section2 } from './unit3_section2';
import { unit3Section3 } from './unit3_section3';
import { unit4Section1 } from './unit4_section1';
import { unit4Section2 } from './unit4_section2';
import { unit4Review } from './unit4_review';
import { unit5Section1 } from './unit5_section1';
import { unit5Section2 } from './unit5_section2';
import { unit5Section3 } from './unit5_section3';
import { unit5Review } from './unit5_review';
import { unit6Section1 } from './unit6_section1';
import { unit6Section2 } from './unit6_section2';
import { unit6Review } from './unit6_review';
import { unit7Section1 } from './unit7_section1';
import { unit7Section2 } from './unit7_section2';
import { unit7Review } from './unit7_review';

export const grade7Units: UnitData[] = [
  {
    id: "g7-unit-1",
    unitNumber: 1,
    title: "1. Ünite: Güneş Sistemi ve Ötesi",
    description: "Uzay araştırmaları, roketler, uydular, uzay kirliliği, teleskop türleri ve optik teleskop yapımı ile gök cisimleri, yıldızların yaşam döngüsü, kara delikler ve galaksiler.",
    color: "indigo",
    bookNumber: 1,
    sections: [unit1Section1, unit1Section2]
  },
  {
    id: "g7-unit-2",
    unitNumber: 2,
    title: "2. Ünite: Hücre ve Bölünmeler",
    description: "Hücre zarı, sitoplazma ve organeller, bitki ve hayvan hücresi farkları, hücreden organizmaya hiyerarşi; mitoz bölünme evreleri ve onarım; mayoz bölünme, krossing-over, genetik çeşitlilik ve tür içi kromozom sabitliği.",
    color: "emerald",
    bookNumber: 1,
    sections: [unit2Section1, unit2Section2, unit2Section3]
  },
  {
    id: "g7-unit-3",
    unitNumber: 3,
    title: "3. Ünite: Kuvvet ve Enerji",
    description: "Kütle ve ağırlık ilişkisi, yer çekimi ivmesi ve farklı gök cisimleri; fiziksel anlamda iş ve şartları; kinetik enerji, çekim ve esneklik potansiyel enerjisi, mekanik enerjinin korunumu ve sürtünme kuvveti (hava ve su direnci).",
    color: "amber",
    bookNumber: 1,
    sections: [unit3Section1, unit3Section2, unit3Section3]
  },
  {
    id: "g7-unit-4",
    unitNumber: 4,
    title: "4. Ünite: Işığın Maddeyle Etkileşimi (2. Kitap)",
    description: "Işığın soğurulması, renklerin oluşumu, güneş enerjisi ve radyometre; düzlem, çukur ve tümsek aynalarda görüntü özellikleri; ışığın kırılması, sınır açısı, tam yansıma, ince ve kalın kenarlı mercekler.",
    color: "purple",
    bookNumber: 2,
    sections: [unit4Section1, unit4Section2, unit4Review]
  },
  {
    id: "g7-unit-5",
    unitNumber: 5,
    title: "5. Ünite: Maddenin Yapısı ve Karışımlar (2. Kitap)",
    description: "Maddenin tanecikli yapısı, proton, nötron, elektron, geçmişten günümüze atom modelleri; saf maddeler (elementler ve sembolleri, bileşikler ve formülleri); homojen ve heterojen karışımlar, çözünme hızı ve karışımların ayrılması yöntemleri.",
    color: "teal",
    bookNumber: 2,
    sections: [unit5Section1, unit5Section2, unit5Section3, unit5Review]
  },
  {
    id: "g7-unit-6",
    unitNumber: 6,
    title: "6. Ünite: Canlılarda Üreme, Büyüme ve Gelişme (2. Kitap)",
    description: "İnsanda üremeyi sağlayan organ ve yapılar, sperm, yumurta, döllenme, zigot, embriyo ve fetüs gelişimi, anne adayının dikkat etmesi gereken hususlar; eşeysiz üreme (vejetatif, bölünme, tomurcuklanma, rejenerasyon), eşeyli üreme, bitkilerde tozlaşma ve döllenme, tohumun çimlenmesi (SOS) ve başkalaşım (kurbağa, kelebek).",
    color: "rose",
    bookNumber: 2,
    sections: [unit6Section1, unit6Section2, unit6Review]
  },
  {
    id: "g7-unit-7",
    unitNumber: 7,
    title: "7. Ünite: Elektrik Devreleri (2. Kitap)",
    description: "Seri ve paralel bağlama, devre şemaları, ampul parlaklıklarının karşılaştırılması, bir ampulün sönmesinin diğerlerine etkisi; elektrik akımı (I) ve ampermetre (seri), gerilim (V) ve voltmetre (paralel), Ohm Kanunu (V = I · R), gerilim-akım grafiğinin eğimi ve direnç hesaplamaları.",
    color: "amber",
    bookNumber: 2,
    sections: [unit7Section1, unit7Section2, unit7Review]
  }
];

export function findGrade7SectionByCode(code: string): SectionContent | undefined {
  for (const unit of grade7Units) {
    const found = unit.sections.find(s => s.code === code);
    if (found) return found;
  }
  return grade7Units[0].sections[0];
}
