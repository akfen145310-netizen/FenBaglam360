// TYMM (Türkiye Yüzyılı Maarif Modeli) & Ayvacı ve Yamaçlı (2023) Master Prompt Kural ve Standartları

export const MASTER_PROMPT_DOC = {
  title: 'FEN BİLİMLERİ BAĞLAM TEMELLİ SORU ÜRETİMİ: BİRLEŞİK MASTER PROMPT',
  version: 'TYMM Kılavuz (Mart 2026) & Ayvacı ve Yamaçlı (2023)',
  hierarchy: [
    '1. MEB TYMM Bağlam Temelli Çoktan Seçmeli Soru Yazım Kılavuzu (Mart 2026)',
    '2. Ayvacı ve Yamaçlı (2023) Makalesi (Tamamlayıcı)',
    '3. İlgili Sınıf Fen Bilimleri Öğretim Programı',
    '4. [EK] Mesleki Kalite Kuralları'
  ],
  bannedQuestionTypes: [
    {
      name: 'Kamuflajlı Soru (YASAK)',
      desc: 'Günlük hayat nesneleriyle yazılmış fakat bağlam çıkarılınca formüle sayı yerleştirmeye veya salt ezbere dönüşen idealleştirilmiş soru.'
    },
    {
      name: 'Soyutlamalı Soru (YASAK)',
      desc: "Öğrencinin yaşantısına, kültürüne, coğrafyasına uzak bağlam (ör. Türkiye'de yetişmeyen meyve, yapılmayan yabancı spor)."
    },
    {
      name: 'Sözel Yük (YASAK)',
      desc: 'Çözüme katkısı olmayan gereksiz uzun hikâye, tarih, isim, diyalog ve dolgu bilgi.'
    },
    {
      name: 'Dekoratif Görsel (YASAK)',
      desc: 'Soru metninde anlatılanları süslemek için konmuş, soru çözümüne veri veya kanıt sunmayan jenerik görsel/şema (örn. Sensör Telemetrisi).'
    },
    {
      name: 'Yapay Tekrar Döngüsü (YASAK)',
      desc: 'Birkaç senaryoyu veya şablonu kopyalayıp "Örnek Çalışma #1, #2, #3" şeklinde tekrar ettiren sahte soru üretimi.'
    }
  ],
  tests: [
    { id: 'T1', name: 'Bağlam Bağımsızlık', rule: 'Bağlam çıkarılınca soru geleneksel bilgi sorusuna dönüşüyor mu? (HAYIR olmalı)' },
    { id: 'T2', name: 'İşlevsellik [K]', rule: 'Öğrenci bağlamı incelemeden genel kültürle veya seçeneklerden giderek çözebilir mi? (HAYIR olmalı)' },
    { id: 'T3', name: 'Problem Durumu', rule: 'Çözülmesi gereken gerçek bir bilimsel durum veya kontrollü deney var mı? (EVET olmalı)' },
    { id: 'T4', name: 'Düşünme / Akıl Yürütme', rule: 'Ezber bilgiyle veya tek adımda formüle sayı yerleştirerek çözülüyor mu? (HAYIR olmalı)' },
    { id: 'T5', name: 'Kamuflaj / Soyutlama', rule: 'Soru kamuflajlı veya kültüre yabancı soyutlamalı mı? (HAYIR olmalı)' },
    { id: 'T6', name: 'Gereksizlik (Sözel Yük)', rule: 'Çözümü etkilemeyen gereksiz bilgi, isim, diyalog var mı? (TEMİZLENMİŞ olmalı)' },
    { id: 'T7', name: 'Görsel / Veri İşlevselliği', rule: 'Görsel/tablo dekoratif değil, çözüm için zorunlu ve konuyla birebir ilgili mi? (EVET olmalı)' },
    { id: 'T8', name: 'Tek Doğru Cevap', rule: 'Kesinlikle tek ve bilimsel olarak çelişkisiz doğru cevap var mı? (EVET olmalı)' },
    { id: 'T9', name: 'Cevabı Ele Verme', rule: 'Doğru cevap bağlamda veya görselde doğrudan verilmiş mi? (HAYIR olmalı)' },
    { id: 'T10', name: 'Bilimsel Doğruluk', rule: 'Bağlam, veriler, ölçümler ve fen kavramları bilimsel olarak kusursuz mu? (EVET olmalı)' },
    { id: 'T11', name: 'Kazanım ve Düzey Uyumu', rule: 'Sınıf düzeyi ve ünite kazanımlarıyla birebir örtüşüyor mu? (EVET olmalı)' },
    { id: 'T12', name: 'Açıklık ve Kök Uyumu', rule: 'Soru kökünde ne istendiği açık ve süreç bileşeniyle tam uyumlu mu? (EVET olmalı)' }
  ],
  skills: {
    'KB3.2': {
      name: 'Problem Çözme',
      components: {
        'SB1': 'Problemi yapılandırmak',
        'SB2': 'Problemi özetlemek / bilgileri ayıklamak',
        'SB3': 'Gözleme veya veriye dayalı bilimsel tahmin yapmak',
        'SB4': 'Önermeler üzerinden akıl yürütmek',
        'SB5': 'Yansıtma ve değerlendirme yapmak'
      }
    },
    'KB2.8': {
      name: 'Sorgulama',
      components: {
        'SB1': 'Merak edilen konuyu / olguyu tanımlamak',
        'SB2': 'Bilimsel soru sormak',
        'SB3': 'Veri ve bilgi toplamak',
        'SB4': 'Bilginin doğruluğunu değerlendirmek',
        'SB5': 'Çıkarım yapmak'
      }
    },
    'FBAB': {
      name: 'Fen Alan Becerileri',
      components: {
        'FBAB1': 'Bilimsel Gözlem ve Veri Kaydı',
        'FBAB2': 'Deney Tasarımı ve Kontrollü Değişken Belirleme',
        'FBAB3': 'Verileri Tablo ve Grafiğe Dönüştürme / Yorumlama',
        'FBAB4': 'Modelleme ve Bilimsel Çıkarım'
      }
    }
  }
};

/**
 * MEB TYMM ve Ayvacı & Yamaçlı (2023) Kılavuzlarına Tam Uyumlu Master Prompt Metni
 * Bu prompt doğrudan bir LLM'e (Gemini 2.0 Flash / Pro) verilerek 20 adet kusursuz soru üretilebilir.
 */
export function buildMasterPromptForSection(section, grade = 8) {
  const kazanimlarText = section.kazanimlar?.join('\n- ') || `${section.code} - ${section.title}`;
  const summaryText = section.summary || section.title;

  return `### ROL VE UZMANLIK ALANI
Sen, Millî Eğitim Bakanlığı (MEB) Ölçme, Değerlendirme ve Sınav Hizmetleri Genel Müdürlüğü ile Türkiye Yüzyılı Maarif Modeli (TYMM - Mart 2026) Fen Bilimleri Soru Yazım Komisyonu Başkanı ve Baş Soru Yazarı bir Fen Eğitimi Profesörüsün (Ayvacı ve Yamaçlı, 2023 standartlarına tam hâkim).

### GÖREV
Aşağıda bilgileri verilen Fen Bilimleri konusu için **LGS DÜZEYİNDE, TAM 20 ADET ÖZGÜN, BİRBİRİNDEN TAMAMEN FARKLI, YÜKSEK DÜZEY BİLİŞSEL BECERİ GEREKTİREN BAĞLAM TEMELLİ ÇOKTAN SEÇMELİ SORU** yazacaksın.

### KONU KÜNYESİ
- Sınıf Düzeyi: ${grade}. Sınıf
- Konu Kodu ve Başlığı: ${section.code} - ${section.title}
- Ünite: ${section.unitTitle || section.unitCode || 'Fen Bilimleri'}
- Konu Özeti ve Bilimsel Çerçeve: ${summaryText}
- Öğrenme Çıktıları (Kazanımlar):
- ${kazanimlarText}

---

### KESİN VE TAVİZSİZ YASAKLAR (SIFIR TOLERANS)
1. **ASLA YAPAY TEKRAR DÖNGÜSÜ KULLANILMAYACAKTIR:**
   - Sorular arasında "(Örnek Çalışma #1)", "(Örnek Çalışma #2)" gibi kalıp döngüler KESİNLİKLE YASAKTIR.
   - 3-5 tane şablon oluşturup bunları sırayla 20 kere döndürmek KESİNLİKLE YASAKTIR.
   - 20 sorunun 20'si de BİRBİRİNDEN TAMAMEN FARKLI bir gerçek yaşam olayına, kontrollü deneye, tabloya, bilimsel ikileme veya mühendislik problemine dayanmalıdır.

2. **ASLA İLGİSİZ VEYA DEKORATİF GÖRSEL/ŞEMA KULLANILMAYACAKTIR:**
   - Konuyla ilgisi olmayan "Sensör Telemetrisi", rastgele dalga formları veya sadece süs amaçlı kutular KESİNLİKLE YASAKTIR.
   - Bir soru görsele atıfta bulunuyorsa bu görsel doğrudan konuyla ilgili olmalıdır:
     * Mevsimler ve Eksen Eğikliği için: Dünya'nın Güneş etrafındaki 4 yörünge konumu (21 Haziran, 23 Eylül, 21 Aralık, 21 Mart) ve 23° 27' eksen eğikliği; 90° dik açı vs 30° eğik açı ışık deneyi; öğle vakti çubuk gölge boyu ölçüm tablosu.
     * İklim ve Hava Hareketleri için: Yüksek ve Alçak basınç merkezleri, sıcak ve soğuk hava hareketleri, rüzgâr yönü (YB → AB).
     * DNA ve Genetik Kod için: DNA çift sarmal modeli, nükleotid dizilimleri (A-T, G-S), replikasyon çatalı.
     * Basınç için: Katı basıncında ağırlık/yüzey alanı, sıvı basıncında derinlik/yoğunluk U borusu veya Pascal hidrolik sistemi.
     * Basit Makineler için: Sabit makara, hareketli makara, palangalar ve kaldıraç sistemleri.

3. **ASLA KAMUFLAJLI SORU YAZILMAYACAKTIR:**
   - Salt formüle sayı yerleştirmeyi veya ezber tanımı gizlemek için cümlenin başına "Ali markete gitti" gibi sahte bağlam eklemek YASAKTIR. Bağlam metni çıkarıldığında soru çözülemez olmalıdır.

4. **ASLA SÖZEL YÜK (DOLGU METİN) EKLENMEYECEKTİR:**
   - Çözüme hiçbir katkısı olmayan gereksiz tarih, coğrafi masal veya kahraman diyalogları YASAKTIR. Her kelime bilimsel probleme hizmet etmelidir.

---

### AYVACI VE YAMAÇLI (2023) & MEB TYMM 12 KALİTE DENETİM TESTİ (T1-T12)
Her soru şu 12 testi başarıyla geçmek ZORUNDADIR:
- **T1 (Bağlam Bağımsızlık):** Bağlam metni çıkarıldığında soru geleneksel bilgi sorusuna dönüşmemeli; bağlamsız çözülemez olmalıdır.
- **T2 (İşlevsellik):** Öğrenci sadece genel kültürle veya şıklardan eleyerek çözememeli; bağlamdaki ölçüm verisini kullanmalıdır.
- **T3 (Problem Durumu):** Çözülmesi gereken somut bir bilimsel araştırma veya kontrollü deney bulunmalıdır.
- **T4 (Düşünme Becerisi):** Salt ezber bilgi yetersiz olmalı; veri yorumlama, hipotez test etme, neden-sonuç kurma gerektirmelidir.
- **T5 (Kamuflaj / Soyutlama Yokluğu):** Bağlam öğrencinin algı dünyasına uygun, yapaylıktan uzak olmalıdır.
- **T6 (Sözel Yük Temizliği):** Çözümü ilgilendirmeyen lüzumsuz süslemeler arındırılmış olmalıdır.
- **T7 (Görsel / Veri İşlevselliği):** Görsel veya sayısal tablo soru için zorunlu kanıt kaynağı olmalıdır.
- **T8 (Tek Doğru Cevap):** Bilimsel olarak tartışmasız ve çelişkisiz tek doğru cevap bulunmalıdır.
- **T9 (Cevabı Ele Vermeme):** Doğru seçenek metin içinde kopyala-yapıştır şekilde doğrudan verilmemelidir.
- **T10 (Bilimsel Kusursuzluk):** Kullanılan kavramlar, birimler (°C, cm², N, Bar, saat) ve fen kanunları %100 doğru olmalıdır.
- **T11 (Kazanım Uyumu):** Soru ilgili sınıf düzeyini ve hedef kazanımı tam karşılamalıdır.
- **T12 (Kök Açıklığı):** Soru kökünde ne istendiği açıkça belirtilmeli, koyu renk vurgulanmalıdır.

---

### 20 SORU İÇİN ZORUNLU SENARYO ÇEŞİTLİLİĞİ
Üreteceğin 20 soru şu 20 farklı bilimsel perspektife dağıtılacaktır:
1. Soru: Kontrollü Laboratuvar Deneyi (Bağımsız, Bağımlı ve Kontrol Edilen Değişkenler)
2. Soru: Gerçek Şehir Ölçümleri (İki Farklı Coğrafi Konumun Karşılaştırılması)
3. Soru: Sayısal Veri Tablosu ve Trend Analizi (Ölçüm Tablosu Verisi)
4. Soru: Yaygın Bir Kavram Yanılgısını Çürütme (Bilimsel Kanıta Dayalı İtiraz)
5. Soru: "Ne Olurdu?" Hipotez Simülasyonu (Temel Bir Değişkenin Sıfırlanması veya Değiştirilmesi)
6. Soru: Gün Işığı / Süre ve Enlem İlişkisi
7. Soru: Mühendislik Tasarımı ve Verimlilik Optimizasyonu (Ar-Ge Uygulaması)
8. Soru: Zıt Mevsimler / Küresel Karşılaştırma
9. Soru: Ekinoks ve Gündönümü Tarihlerinde Eşzamanlı Gözlemler
10. Soru: Dönenceler ve Matematiksel Konum Analizi
11. Soru: Bakı Etkisi ve Doğal Çevre Gözlemi
12. Soru: Işınların Atmosferde Katettiği Yol ve Enerji Soğurulması
13. Soru: Zamana Bağlı 3 Aylık Değişim Süreci
14. Soru: Ekstrem Doğa Olayı (Örn. Gece Yarısı Güneşi / Kutup Çemberi)
15. Soru: Açı Değişimi Hipotez Testi (Eksen Eğikliğinin Artması/Azalması)
16. Soru: Öğle Vakti Gölge Yönü ve Dönence Dışı Kalma Kuralı
17. Soru: Sıcaklığı Belirleyen İki Temel Etkenin Birlikte İncelenmesi
18. Soru: Açı-Sıcaklık İlişkisi Ölçüm Grafiği
19. Soru: Mevsim Döngüsünün İki Temel Şartının Birlikteliği
20. Soru: Farklı Konumlardaki Çubuk Gölge Boylarının Sentezi

---

### ÇIKTI FORMATI
Çıktıyı SADECE geçerli bir JSON dizisi (Array of ExtendedContextQuestion) olarak üret. Markdown kod bloğu (\`\`\`json ... \`\`\`) içinde ver.

Her soru nesnesi şu şemaya tam uymalıdır:
{
  "id": "mcq-${section.code.replace(/\\./g, '-')}-1",
  "number": 1,
  "baglam": "Ayrıntılı, gerçek yaşam verilerini ve kontrollü deney şartlarını içeren bağlam metni...",
  "soruKoku": "Bağlama dayalı, açık ve süreç bileşenini işleten soru kökü?",
  "secenekler": {
    "A": "Seçenek metni...",
    "B": "Seçenek metni...",
    "C": "Seçenek metni...",
    "D": "Seçenek metni..."
  },
  "dogruCevap": "A",
  "cozum": "Adım adım bilimsel çözüm ve gerekçelendirme...",
  "olculenKazanim": "${section.code} Öğrenme Çıktısı",
  "olculenBeceri": "KB3.2 Problem Çözme • SB3 Veriye Dayalı Tahmin",
  "diagramType": "seasons-tilt veya sun-angle-shadow veya weather-pressure veya dna-replication-model veya solid-pressure",
  "diagramTitle": "Soruya Özgü Bilimsel Şema Başlığı",
  "difficulty": "Temel" | "Orta" | "İleri / LGS",
  "distractorAnalysis": [
    {"option": "A", "analysis": "Doğru seçeneğin bilimsel gerekçesi"},
    {"option": "B", "analysis": "Çeldirici B'nin hedeflediği kavram yanılgısı"},
    {"option": "C", "analysis": "Çeldirici C'nin hedeflediği mantık hatası"},
    {"option": "D", "analysis": "Çeldirici D'nin hedeflediği veri yorumlama yanılgısı"}
  ],
  "kaliteAudit": {
    "gercekYasamBaglami": true,
    "problemDurumu": true,
    "fenBilgisiBaglamaGomulu": true,
    "dusunmeGerektiriyor": true,
    "ezberdenUzak": true,
    "gorselVeriIslevsel": true,
    "soruKokuAcik": true,
    "tekDogruCevap": true,
    "bilimselDogruluk": true,
    "seviyeUygunlugu": true,
    "kalitePuani": 20
  }
}`;
}
