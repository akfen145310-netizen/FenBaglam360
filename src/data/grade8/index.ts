import { UnitData, SectionContent } from '../../types';
import {
  g8_8_1_1,
  g8_8_1_2,
  g8_8_2_1,
  g8_8_2_2,
  g8_8_2_3,
  g8_8_3_1,
  g8_8_3_2,
  g8_8_3_3,
  g8_8_4_1,
  g8_8_4_2,
  g8_8_4_3,
  g8_8_5_1,
  g8_8_5_2,
  g8_8_6_1,
  g8_8_6_2,
  g8_8_7_1,
  g8_8_7_2
} from './grade8Sections';

export const grade8Units: UnitData[] = [
  {
    id: "g8-unit-1",
    unitNumber: 1,
    title: "1. Ünite: Mevsimler ve İklim",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "violet",
    sections: [g8_8_1_1, g8_8_1_2]
  },
  {
    id: "g8-unit-2",
    unitNumber: 2,
    title: "2. Ünite: DNA ve Genetik Kod",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "emerald",
    sections: [g8_8_2_1, g8_8_2_2, g8_8_2_3]
  },
  {
    id: "g8-unit-3",
    unitNumber: 3,
    title: "3. Ünite: Basınç",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "sky",
    sections: [g8_8_3_1, g8_8_3_2, g8_8_3_3]
  },
  {
    id: "g8-unit-4",
    unitNumber: 4,
    title: "4. Ünite: Madde ve Endüstri",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "amber",
    sections: [g8_8_4_1, g8_8_4_2, g8_8_4_3]
  },
  {
    id: "g8-unit-5",
    unitNumber: 5,
    title: "5. Ünite: Basit Makineler",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "indigo",
    sections: [g8_8_5_1, g8_8_5_2]
  },
  {
    id: "g8-unit-6",
    unitNumber: 6,
    title: "6. Ünite: Enerji Dönüşümleri ve Çevre Bilimi",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "teal",
    sections: [g8_8_6_1, g8_8_6_2]
  },
  {
    id: "g8-unit-7",
    unitNumber: 7,
    title: "7. Ünite: Elektrik Yükleri ve Elektrik Enerjisi",
    description: "LGS Maarif Modeli • Kavram Yanılgıları ve Beceri Temelli Sorular",
    color: "rose",
    sections: [g8_8_7_1, g8_8_7_2]
  }
];

export function findGrade8SectionByCode(code: string): SectionContent | undefined {
  for (const unit of grade8Units) {
    const found = unit.sections.find(s => s.code === code);
    if (found) return found;
  }
  return grade8Units[0].sections[0];
}
