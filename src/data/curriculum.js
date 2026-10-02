// Fen Bilimleri Müfredat Ağacı (5, 6, 7 ve 8. Sınıflar)
// fenbilim.net ve MEB Türkiye Yüzyılı Maarif Modeli (TYMM) tam uyumlu

export const GRADES = [
  { id: 5, name: '5. Sınıf', badge: '5. Sınıf Fen', color: '#0ea5e9', description: 'Gözlem, keşif ve temel doğa olayları' },
  { id: 6, name: '6. Sınıf', badge: '6. Sınıf Fen', color: '#10b981', description: 'Madde, kuvvet, enerji ve canlı sistemleri' },
  { id: 7, name: '7. Sınıf', badge: '7. Sınıf Fen', color: '#8b5cf6', description: 'Uzay, kuvvet-enerji, atom ve elektriklenme' },
  { id: 8, name: '8. Sınıf', badge: '8. Sınıf (LGS)', color: '#f59e0b', description: 'LGS hazırlık, iklim, DNA, basınç, madde ve basit makineler' }
];

export const CURRICULUM = {
  5: [
    {
      unitId: '5-1',
      unitNumber: 1,
      unitTitle: 'Gökyüzündeki Komşularımız ve Biz',
      icon: 'Sun',
      subtopics: [
        { id: '5-1-1', title: "Güneş'in Yapısı ve Özellikleri", code: 'F.5.1.1', questionTarget: 30 },
        { id: '5-1-2', title: "Ay'ın Yapısı ve Özellikleri", code: 'F.5.1.2', questionTarget: 30 },
        { id: '5-1-3', title: "Ay'ın Hareketleri ve Evreleri", code: 'F.5.1.3', questionTarget: 30 },
        { id: '5-1-4', title: "Güneş, Dünya ve Ay İlişkisi", code: 'F.5.1.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-2',
      unitNumber: 2,
      unitTitle: 'Kuvveti Tanıyalım',
      icon: 'Activity',
      subtopics: [
        { id: '5-2-1', title: 'Kuvvetin Ölçülmesi ve Dinamometre', code: 'F.5.2.1', questionTarget: 30 },
        { id: '5-2-2', title: 'Sürtünme Kuvveti ve Günlük Yaşam', code: 'F.5.2.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-3',
      unitNumber: 3,
      unitTitle: 'Canlıların Yapısına Yolculuk',
      icon: 'Sparkles',
      subtopics: [
        { id: '5-3-1', title: 'Mikroskobik Canlılar ve Çevre', code: 'F.5.3.1', questionTarget: 30 },
        { id: '5-3-2', title: 'Mantarlar ve Çeşitleri', code: 'F.5.3.2', questionTarget: 30 },
        { id: '5-3-3', title: 'Bitkiler Dünyası ve Sınıflandırma', code: 'F.5.3.3', questionTarget: 30 },
        { id: '5-3-4', title: 'Hayvanlar Âlemi ve Omurgalılar', code: 'F.5.3.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-4',
      unitNumber: 4,
      unitTitle: 'Işığın Dünyası',
      icon: 'Zap',
      subtopics: [
        { id: '5-4-1', title: 'Işığın Yayılması', code: 'F.5.4.1', questionTarget: 30 },
        { id: '5-4-2', title: 'Işığın Maddeyle Karşılaşması (Saydam, Yarı Saydam, Opak)', code: 'F.5.4.2', questionTarget: 30 },
        { id: '5-4-3', title: 'Tam Gölge Oluşumu ve Değişimi', code: 'F.5.4.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-5',
      unitNumber: 5,
      unitTitle: 'Maddenin Doğası',
      icon: 'Layers',
      subtopics: [
        { id: '5-5-1', title: 'Maddenin Hâl Değişimi (Erime, Donma, Buharlaşma)', code: 'F.5.5.1', questionTarget: 30 },
        { id: '5-5-2', title: 'Maddenin Ayırt Edici Özellikleri', code: 'F.5.5.2', questionTarget: 30 },
        { id: '5-5-3', title: 'Isı ve Sıcaklık Farkı', code: 'F.5.5.3', questionTarget: 30 },
        { id: '5-5-4', title: 'Isı Maddeleri Etkiler: Genleşme ve Büzülme', code: 'F.5.5.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-6',
      unitNumber: 6,
      unitTitle: 'Elektrik Devre Elemanları',
      icon: 'Cpu',
      subtopics: [
        { id: '5-6-1', title: 'Devre Elemanlarının Sembolleri ve Şemalar', code: 'F.5.6.1', questionTarget: 30 },
        { id: '5-6-2', title: 'Ampul Parlaklığını Etkileyen Değişkenler', code: 'F.5.6.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '5-7',
      unitNumber: 7,
      unitTitle: 'Sürdürülebilir Yaşam ve Geri Dönüşüm',
      icon: 'Leaf',
      subtopics: [
        { id: '5-7-1', title: 'İnsan ve Çevre İlişkisi / Çevre Sorunları', code: 'F.5.7.1', questionTarget: 30 },
        { id: '5-7-2', title: 'Evsel Atıklar ve Geri Dönüşümün Önemi', code: 'F.5.7.2', questionTarget: 30 }
      ]
    }
  ],

  6: [
    {
      unitId: '6-1',
      unitNumber: 1,
      unitTitle: 'Güneş Sistemi ve Tutulmalar',
      icon: 'Globe',
      subtopics: [
        { id: '6-1-1', title: 'Güneş Sistemi ve Gezegenlerin Özellikleri', code: 'F.6.1.1', questionTarget: 30 },
        { id: '6-1-2', title: 'Güneş ve Ay Tutulmaları', code: 'F.6.1.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-2',
      unitNumber: 2,
      unitTitle: 'Kuvvetin Etkisinde Hareket',
      icon: 'Move',
      subtopics: [
        { id: '6-2-1', title: 'Bileşke Kuvvet ve Dengelenmiş / Dengelenmemiş Kuvvetler', code: 'F.6.2.1', questionTarget: 30 },
        { id: '6-2-2', title: 'Sabit Süratli Hareket ve Yol-Zaman Grafiği', code: 'F.6.2.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-3',
      unitNumber: 3,
      unitTitle: 'Canlılarda Sistemler',
      icon: 'HeartPulse',
      subtopics: [
        { id: '6-3-1', title: 'Destek ve Hareket Sistemi (Kemik, Kas, Eklem)', code: 'F.6.3.1', questionTarget: 30 },
        { id: '6-3-2', title: 'Sindirim ve Dolaşım Sistemi', code: 'F.6.3.2', questionTarget: 30 },
        { id: '6-3-3', title: 'Solunum ve Boşaltım Sistemi', code: 'F.6.3.3', questionTarget: 30 },
        { id: '6-3-4', title: 'Denetleyici ve Düzenleyici Sistemler', code: 'F.6.3.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-4',
      unitNumber: 4,
      unitTitle: 'Işığın Yansıması ve Renkler',
      icon: 'Sun',
      subtopics: [
        { id: '6-4-1', title: 'Işığın Yansıması ve Yansıma Kanunları', code: 'F.6.4.1', questionTarget: 30 },
        { id: '6-4-2', title: 'Düzlem, Çukur ve Tümsek Aynalar', code: 'F.6.4.2', questionTarget: 30 },
        { id: '6-4-3', title: 'Işığın Soğurulması ve Beyaz Işığın Renkleri', code: 'F.6.4.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-5',
      unitNumber: 5,
      unitTitle: 'Maddenin Ayırt Edici Özellikleri',
      icon: 'Box',
      subtopics: [
        { id: '6-5-1', title: 'Maddenin Tanecikli ve Boşluklu Yapısı', code: 'F.6.5.1', questionTarget: 30 },
        { id: '6-5-2', title: 'Yoğunluk ve Sıvıların Birbirine Karışmaması', code: 'F.6.5.2', questionTarget: 30 },
        { id: '6-5-3', title: 'Madde ve Isı: Isı Yalıtımı ve Malzemeleri', code: 'F.6.5.3', questionTarget: 30 },
        { id: '6-5-4', title: 'Yakıtlar ve Çevre Kirliliği', code: 'F.6.5.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-6',
      unitNumber: 6,
      unitTitle: 'Elektriğin İletimi ve Direnç',
      icon: 'Zap',
      subtopics: [
        { id: '6-6-1', title: 'İletken ve Yalıtkan Maddeler', code: 'F.6.6.1', questionTarget: 30 },
        { id: '6-6-2', title: 'Elektriksel Direnç ve Bağlı Olduğu Faktörler', code: 'F.6.6.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '6-7',
      unitNumber: 7,
      unitTitle: 'Sürdürülebilir Yaşam ve Etkileşim',
      icon: 'Leaf',
      subtopics: [
        { id: '6-7-1', title: 'Biyoçeşitlilik ve Nesli Tükenen Canlılar', code: 'F.6.7.1', questionTarget: 30 },
        { id: '6-7-2', title: 'İnsan ve Çevre Etkileşimi / Doğal Kaynaklar', code: 'F.6.7.2', questionTarget: 30 }
      ]
    }
  ],

  7: [
    {
      unitId: '7-1',
      unitNumber: 1,
      unitTitle: 'Uzay Çağı',
      icon: 'Rocket',
      subtopics: [
        { id: '7-1-1', title: 'Türkiye ve Uzay Araştırmaları, Uydu Teknolojileri', code: 'F.7.1.1', questionTarget: 30 },
        { id: '7-1-2', title: 'Uzayda Neler Var? Yıldızlar, Galaksiler ve Kara Delikler', code: 'F.7.1.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-2',
      unitNumber: 2,
      unitTitle: 'Kuvvet ve Enerjiyi Keşfedelim',
      icon: 'Gauge',
      subtopics: [
        { id: '7-2-1', title: 'Kütle ve Ağırlık İlişkisi (Yer Çekimi İvmesi)', code: 'F.7.2.1', questionTarget: 30 },
        { id: '7-2-2', title: 'Kuvvet, Fiziksel Anlamda İş ve Enerji', code: 'F.7.2.2', questionTarget: 30 },
        { id: '7-2-3', title: 'Kinetik ve Potansiyel Enerji Dönüşümleri', code: 'F.7.2.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-3',
      unitNumber: 3,
      unitTitle: 'Vücudumuzdaki Sistemler ve Hücre',
      icon: 'Dna',
      subtopics: [
        { id: '7-3-1', title: 'Hücrenin Temel Kısımları ve Organeller', code: 'F.7.3.1', questionTarget: 30 },
        { id: '7-3-2', title: 'Mitoz Bölünme ve Aşamaları', code: 'F.7.3.2', questionTarget: 30 },
        { id: '7-3-3', title: 'Mayoz Bölünme ve Genetik Çeşitlilik', code: 'F.7.3.3', questionTarget: 30 },
        { id: '7-3-4', title: 'Canlılarda Üreme, Büyüme ve Gelişme', code: 'F.7.3.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-4',
      unitNumber: 4,
      unitTitle: 'Işığın Kırılması ve Mercekler',
      icon: 'Eye',
      subtopics: [
        { id: '7-4-1', title: 'Işığın Kırılması ve Ortam Yoğunluğu İlişkisi', code: 'F.7.4.1', questionTarget: 30 },
        { id: '7-4-2', title: 'İnce ve Kalın Kenarlı Mercekler, Göz Kusurları', code: 'F.7.4.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-5',
      unitNumber: 5,
      unitTitle: 'Maddenin Doğasına Yolculuk',
      icon: 'Atom',
      subtopics: [
        { id: '7-5-1', title: 'Maddenin Tanecikli Yapısı ve Atom Modelleri', code: 'F.7.5.1', questionTarget: 30 },
        { id: '7-5-2', title: 'Saf Maddeler: Elementler ve Bileşikler', code: 'F.7.5.2', questionTarget: 30 },
        { id: '7-5-3', title: 'Karışımlar: Homojen ve Heterojen Karışımlar', code: 'F.7.5.3', questionTarget: 30 },
        { id: '7-5-4', title: 'Karışımların Ayrılması Yöntemleri', code: 'F.7.5.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-6',
      unitNumber: 6,
      unitTitle: 'Elektriklenme',
      icon: 'Zap',
      subtopics: [
        { id: '7-6-1', title: 'Elektrik Yükleri ve Elektriklenme Yöntemleri', code: 'F.7.6.1', questionTarget: 30 },
        { id: '7-6-2', title: 'Elektroskop ve Doğadaki Elektriklenme Olayları', code: 'F.7.6.2', questionTarget: 30 },
        { id: '7-6-3', title: 'Seri ve Paralel Bağlı Devreler', code: 'F.7.6.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '7-7',
      unitNumber: 7,
      unitTitle: 'Sürdürülebilir Yaşam ve Enerji',
      icon: 'Leaf',
      subtopics: [
        { id: '7-7-1', title: 'Besin Zinciri ve Enerji Akışı Piramidi', code: 'F.7.7.1', questionTarget: 30 },
        { id: '7-7-2', title: 'Sürdürülebilir Yaşam ve Biyolojik Çeşitlilik', code: 'F.7.7.2', questionTarget: 30 }
      ]
    }
  ],

  8: [
    {
      unitId: '8-1',
      unitNumber: 1,
      unitTitle: 'Mevsimler ve İklim',
      icon: 'SunDim',
      subtopics: [
        { id: '8-1-1', title: 'Mevsimlerin Oluşumu (Eksen Eğikliği ve Dolanma)', code: 'F.8.1.1', questionTarget: 30 },
        { id: '8-1-2', title: 'İklim ve Hava Hareketleri (Rüzgâr, Basınç, Nem)', code: 'F.8.1.2', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-2',
      unitNumber: 2,
      unitTitle: 'DNA ve Genetik Kod',
      icon: 'Dna',
      subtopics: [
        { id: '8-2-1', title: 'DNA ve Genetik Kodun Yapısı, Eşlenme Süreci', code: 'F.8.2.1', questionTarget: 30 },
        { id: '8-2-2', title: 'Kalıtım ve Çaprazlamalar (Mendel Genetiği)', code: 'F.8.2.2', questionTarget: 30 },
        { id: '8-2-3', title: 'Mutasyon ve Modifikasyon Farkları', code: 'F.8.2.3', questionTarget: 30 },
        { id: '8-2-4', title: 'Adaptasyon (Doğal Seçilim ve Uyum)', code: 'F.8.2.4', questionTarget: 30 },
        { id: '8-2-5', title: 'Biyoteknoloji ve Genetik Mühendisliği', code: 'F.8.2.5', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-3',
      unitNumber: 3,
      unitTitle: 'Basınç',
      icon: 'Gauge',
      subtopics: [
        { id: '8-3-1', title: 'Katı Basıncı ve Yüzey Alanı İlişkisi', code: 'F.8.3.1', questionTarget: 30 },
        { id: '8-3-2', title: 'Sıvı Basıncı ve Pascal Prensibi', code: 'F.8.3.2', questionTarget: 30 },
        { id: '8-3-3', title: 'Gaz Basıncı ve Açık Hava Basıncı Deneyleri', code: 'F.8.3.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-4',
      unitNumber: 4,
      unitTitle: 'Madde ve Endüstri',
      icon: 'FlaskConical',
      subtopics: [
        { id: '8-4-1', title: 'Periyodik Sistem ve Elementlerin Sınıflandırılması', code: 'F.8.4.1', questionTarget: 30 },
        { id: '8-4-2', title: 'Fiziksel ve Kimyasal Değişimler', code: 'F.8.4.2', questionTarget: 30 },
        { id: '8-4-3', title: 'Kimyasal Tepkimeler ve Kütlenin Korunumu', code: 'F.8.4.3', questionTarget: 30 },
        { id: '8-4-4', title: 'Asitler ve Bazlar / pH Değeri', code: 'F.8.4.4', questionTarget: 30 },
        { id: '8-4-5', title: 'Maddenin Isı ile Etkileşimi (Öz Isı ve Grafikler)', code: 'F.8.4.5', questionTarget: 30 },
        { id: '8-4-6', title: "Türkiye'de Kimya Endüstrisi ve Meslekler", code: 'F.8.4.6', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-5',
      unitNumber: 5,
      unitTitle: 'Basit Makineler',
      icon: 'Cog',
      subtopics: [
        { id: '8-5-1', title: 'Makaralar (Sabit, Hareketli ve Palanga)', code: 'F.8.5.1', questionTarget: 30 },
        { id: '8-5-2', title: 'Kaldıraçlar ve Çeşitleri', code: 'F.8.5.2', questionTarget: 30 },
        { id: '8-5-3', title: 'Eğik Düzlem, Çıkrık, Dişli Çark ve Vida', code: 'F.8.5.3', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-6',
      unitNumber: 6,
      unitTitle: 'Enerji Dönüşümleri ve Çevre Bilimi',
      icon: 'Sun',
      subtopics: [
        { id: '8-6-1', title: 'Besin Zinciri ve Enerji Akışı', code: 'F.8.6.1', questionTarget: 30 },
        { id: '8-6-2', title: 'Fotosentez ve Hücresel Solunum İlişkisi', code: 'F.8.6.2', questionTarget: 30 },
        { id: '8-6-3', title: 'Madde Döngüleri ve Küresel İklim Değişikliği', code: 'F.8.6.3', questionTarget: 30 },
        { id: '8-6-4', title: 'Sürdürülebilir Kalkınma ve Ekolojik Ayak İzi', code: 'F.8.6.4', questionTarget: 30 }
      ]
    },
    {
      unitId: '8-7',
      unitNumber: 7,
      unitTitle: 'Elektrik Yükleri ve Elektrik Enerjisi',
      icon: 'Zap',
      subtopics: [
        { id: '8-7-1', title: 'Elektrik Yükleri ve Elektriklenme Prensipleri', code: 'F.8.7.1', questionTarget: 30 },
        { id: '8-7-2', title: 'Elektrik Yüklü Cisimler ve Elektroskop', code: 'F.8.7.2', questionTarget: 30 },
        { id: '8-7-3', title: 'Elektrik Enerjisinin Isı ve Işığa Dönüşümü, Güvenlik', code: 'F.8.7.3', questionTarget: 30 }
      ]
    }
  ]
};

// Toplam istatistikler hesaplayıcı
export function getCurriculumStats() {
  let totalUnits = 0;
  let totalSubtopics = 0;
  let totalTargetQuestions = 0;

  Object.values(CURRICULUM).forEach(gradeUnits => {
    totalUnits += gradeUnits.length;
    gradeUnits.forEach(u => {
      totalSubtopics += u.subtopics.length;
      u.subtopics.forEach(st => {
        totalTargetQuestions += st.questionTarget || 30;
      });
    });
  });

  return { totalUnits, totalSubtopics, totalTargetQuestions };
}
