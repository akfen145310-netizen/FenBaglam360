import { UnitData, SectionContent } from '../types';
import { section5_1_1 } from './unit1_section1';
import { section5_1_2 } from './unit1_section2';
import { section5_1_3 } from './unit1_section3';
import { section5_1_4 } from './unit1_section4';
import { section5_2_1 } from './unit2_section1';
import { section5_2_2 } from './unit2_section2';
import { section5_3_1 } from './unit3_section1';
import { section5_3_2 } from './unit3_section2';
import { section5_3_3 } from './unit3_section3';
import { section5_4_1 } from './unit4_section1';
import { section5_4_2 } from './unit4_section2';
import { section5_4_3 } from './unit4_section3';
import { section5_5_1 } from './unit5_section1';
import { section5_5_2 } from './unit5_section2';
import { section5_5_3 } from './unit5_section3';
import { section5_5_4 } from './unit5_section4';
import { section5_6_1 } from './unit6_section1';
import { section5_6_2 } from './unit6_section2';
import { section5_7_1 } from './unit7_section1';
import { section5_7_2 } from './unit7_section2';

export const allUnits: UnitData[] = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "1. Ünite: Güneş, Dünya ve Ay",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş 4 alt konu: Güneş'in yapısı, Ay'ın yapısı, Ay'ın hareketleri/evreleri ile Güneş-Dünya-Ay'ın hareketleri ve büyüklük modelleri.",
    color: "amber",
    sections: [section5_1_1, section5_1_2, section5_1_3, section5_1_4]
  },
  {
    id: "unit-2",
    unitNumber: 2,
    title: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş alt konular: Kuvvetin büyüklüğünün ölçülmesi (dinamometre ve esneklik) ile sürtünme kuvveti, hava ve su direnci.",
    color: "emerald",
    sections: [section5_2_1, section5_2_2]
  },
  {
    id: "unit-3",
    unitNumber: 3,
    title: "3. Ünite: Canlıların Yapısına Yolculuk",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş alt konular: Hücrenin mikro sarayı ve organeller, hücreden organizmaya hiyerarşi ile mikroskobik canlılar ve mantarlar.",
    color: "sky",
    sections: [section5_3_1, section5_3_2, section5_3_3]
  },
  {
    id: "unit-4",
    unitNumber: 4,
    title: "4. Ünite: Işığın Dünyası (2. Kitap)",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş 3 alt konu: Işığın yayılması ve doğrusal yayılma modeli, Maddenin ışık geçirgenliği (saydam, yarı saydam, opak) ile Tam gölgenin oluşumu ve gölgeyi etkileyen değişkenler.",
    color: "indigo",
    sections: [section5_4_1, section5_4_2, section5_4_3]
  },
  {
    id: "unit-5",
    unitNumber: 5,
    title: "5. Ünite: Maddenin Doğası (2. Kitap)",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş 4 alt konu: Maddenin tanecikli ve boşluklu yapısı, Isı ve sıcaklık farkı ile ısı alışverişi, Maddenin hâl değişimi (erime, donma, buharlaşma, yoğuşma, kaynama, süblimleşme, kırağılaşma) ile Isı iletkenliği, yalıtımı ve Harran evleri.",
    color: "rose",
    sections: [section5_5_1, section5_5_2, section5_5_3, section5_5_4]
  },
  {
    id: "unit-6",
    unitNumber: 6,
    title: "6. Ünite: Canlılar Dünyasına Yolculuk (2. Kitap)",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş 2 alt konu: Biyoçeşitlilik, Türkiye'nin endemik türleri, nesli tükenen canlılar ile Canlılar ve yaşam alanları (habitat), çevre kirliliği türleri ve Sıfır Atık projesi.",
    color: "teal",
    sections: [section5_6_1, section5_6_2]
  },
  {
    id: "unit-7",
    unitNumber: 7,
    title: "7. Ünite: Elektrik Devre Elemanları (2. Kitap)",
    description: "Pekiştirme istasyonlarıyla bölümlenmiş 2 alt konu: Basit elektrik devresi elemanları ve sembolleri ile Devrede ampul parlaklığını etkileyen değişkenler (bağımsız, bağımlı, kontrol edilen) ve güvenli elektrik.",
    color: "violet",
    sections: [section5_7_1, section5_7_2]
  }
];

export function findSectionByCode(code: string): SectionContent | undefined {
  for (const unit of allUnits) {
    const found = unit.sections.find(s => s.code === code);
    if (found) return found;
  }
  return allUnits[0].sections[0];
}
