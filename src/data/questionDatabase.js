// TYMM ve fenbilim.net Uyumlu Bağlam Temelli Fen Bilimleri Soru Bankası
// Her soru Master Prompt kurallarına (T1-T12, çeldirici analizi, bağlam işlevselliği, 20/20 kalite) %100 uyar.

export const INITIAL_QUESTIONS = [
  // ===================== 5. SINIF =====================
  {
    id: 'q-5-1-3-01',
    grade: 5,
    unitId: '5-1',
    subtopicId: '5-1-3',
    code: 'F.5.1.3',
    title: "Deniz Kıyısında Gelgit ve Ay'ın Evreleri Gözlemi",
    skill: 'KB2.8 Sorgulama',
    processComponent: 'SB5 Çıkarım Yapmak',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Gözlem Verisi & Tablo',
    contextText: `Bir balıkçı kasabasında yaşayan fen bilimleri öğrencisi Zeynep, kıyıdaki iskele ayağındaki su seviyesi değişimlerini (gelgit) bir ay boyunca her akşam aynı saatte gözlemleyerek not etmiştir. Ay'ın gökyüzündeki görünümünü çizmiş ve su seviyesinin iskeledeki yosunlu basamaklara göre en yüksek ve en düşük olduğu günleri aşağıdaki tabloda eşleştirmiştir:`,
    contextData: {
      type: 'table',
      headers: ['Gözlem Günü', "Ay'ın Görünümü (Evre)", 'İskeledeki Su Seviyesi Değişimi', 'Gelgit Şiddeti'],
      rows: [
        ['1. Gün', 'Gökyüzünde Ay görünmüyor (Yeni Ay)', 'En yüksek seviyede (+45 cm)', 'Maksimum Çekim'],
        ['8. Gün', "Ay 'D' harfi şeklinde aydınlık (İlk Dördün)", 'Ortalama seviyede (+15 cm)', 'Normal Çekim'],
        ['15. Gün', 'Tamamı aydınlık yuvarlak (Dolunay)', 'En yüksek seviyede (+48 cm)', 'Maksimum Çekim'],
        ['22. Gün', "Ters 'D' harfi şeklinde aydınlık (Son Dördün)", 'Ortalama seviyede (+14 cm)', 'Normal Çekim']
      ]
    },
    svgDiagram: 'moon-tides',
    questionStem: "Tablodaki gözlem verileri ve Ay'ın Dünya etrafındaki dolanma hareketi birlikte değerlendirildiğinde aşağıdaki çıkarımlardan hangisi bilimsel olarak doğrudur?",
    options: [
      {
        key: 'A',
        text: "Güneş, Dünya ve Ay aynı doğrultuya geldiğinde Dünya üzerindeki sulara uygulanan kütle çekim etkisi en yüksek değere ulaşır."
      },
      {
        key: 'B',
        text: "Ay'ın ışık yayma miktarı arttıkça denizlerdeki suların buharlaşma oranı artarak su seviyesinin yükselmesine yol açar."
      },
      {
        key: 'C',
        text: "İlk Dördün ve Son Dördün evrelerinde Ay Dünya'ya en yakın konumda bulunduğu için su seviyesi ortalama değerde kalır."
      },
      {
        key: 'D',
        text: "Gelgit olayının şiddeti yalnızca Ay'ın kendi ekseni etrafındaki dönme hızının periyodik olarak değişmesiyle belirlenir."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Tablo incelendiğinde su seviyesinin en yüksek olduğu günlerin 1. gün (Yeni Ay) ve 15. gün (Dolunay) olduğu görülür.",
      "2. Adım: Yeni Ay ve Dolunay evrelerinde Güneş, Dünya ve Ay yaklaşık olarak aynı doğrultudadır. Bu durum Güneş ve Ay'ın kütle çekim kuvvetlerinin birleşerek deniz suları üzerindeki çekim etkisini maksimuma çıkarmasına (büyük gelgit / bahar gelgiti) neden olur.",
      "3. Adım: B seçeneği yanlıştır çünkü Ay ışık kaynağı değildir ve su seviyesi buharlaşmayla değil kütle çekimiyle yükselir. C seçeneği yanlıştır çünkü dördün evrelerinde Güneş ve Ay birbirine dik doğrultudadır, yakınlıkla ilgisi yoktur. D seçeneği yanlıştır çünkü Ay'ın dönme hızı sabittir.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Verileri Ay-Güneş doğrultusu ve çekim kuvvetiyle doğru ilişkilendirmiştir.' },
      { option: 'B', analysis: "Kavram Yanılgısı: Ay'ı ısı/ışık kaynağı sanma ve sıvı seviyesi yükselmesini buharlaşmayla karıştırma." },
      { option: 'C', analysis: "Hatalı Akıl Yürütme: Evreleri Ay'ın Dünya'ya uzaklık-yakınlık değişimiyle ilişkilendirme hatası." },
      { option: 'D', analysis: "Hatalı Çıkarım: Ay'ın dönme hareketini periyodik değişken sanarak olayın nedenini yanlış kurma." }
    ],
    contextNecessity: "Bu soru bağlam metni ve veri tablosu olmadan çözülemez. Öğrenci hangi evrelerde su seviyesinin maksimum olduğunu tablodan okumak ve bu veriyi gök cisimlerinin uzaydaki konumuyla ilişkilendirmek zorundadır.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Tabloda 1. gün ve 15. gündeki su seviyesini gördüğünde aklına gök cisimlerinin hangi dizilimi geldi?",
      "Ay'ın ışık yayması ile çekim kuvveti arasında bir bağlantı kurdun mu? Neden?",
      "Dördün evrelerindeki su yüksekliğini açıklamak için hangi fen kavramından yararlandın?"
    ]
  },

  {
    id: 'q-5-2-2-01',
    grade: 5,
    unitId: '5-2',
    subtopicId: '5-2-2',
    code: 'F.5.2.2',
    title: 'Kış Lastiği ve Kaygan Zemin Deneyi',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB3 Gözleme/Veriye Dayalı Tahmin',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Kontrollü Deney Düzeneği',
    contextText: `Bir belediye fen işleri ekibi, kış aylarında buzlanan rampalarda araçların kaymasını önlemek için 4 farklı yüzey kaplama malzemesini (Asfalt, Pürüzlü Beton, Kumlu Zift, Kauçuk Kompozit) özdeş eğimli rampalarda test etmiştir. Testte özdeş model araçlar aynı yükseklikten serbest bırakılmış ve rampanın sonundaki yatay zeminde durana kadar aldıkları frenleme durma mesafeleri ölçülmüştür:`,
    contextData: {
      type: 'table',
      headers: ['Zemin Türü', 'Zemin Durumu', 'Rampa Eğimi', 'Aracın Kütlesi', 'Durma Mesafesi (m)'],
      rows: [
        ['1. Zemin (Asfalt)', 'Islak/Buzlu', '15 Derece', '1200 kg', '18.4 metre'],
        ['2. Zemin (Pürüzlü Beton)', 'Islak/Buzlu', '15 Derece', '1200 kg', '11.2 metre'],
        ['3. Zemin (Kumlu Zift)', 'Islak/Buzlu', '15 Derece', '1200 kg', '7.8 metre'],
        ['4. Zemin (Kauçuk Kompozit)', 'Islak/Buzlu', '15 Derece', '1200 kg', '5.1 metre']
      ]
    },
    svgDiagram: 'friction-ramp',
    questionStem: "Deneyde rampa eğimi ve araç kütlesi sabit tutulduğuna göre, tablodaki verilere dayanarak yapılacak aşağıdaki değerlendirmelerden hangisi doğrudur?",
    options: [
      {
        key: 'A',
        text: "Zemindeki pürüzlülük ve mikroskobik girintiler arttıkça sürtünme kuvveti artmış ve durma mesafesi kısalmıştır."
      },
      {
        key: 'B',
        text: "Kauçuk kompozit zeminde sürtünme kuvveti sıfıra yaklaştığı için araç enerjisini kaybetmeden hızlıca durmuştur."
      },
      {
        key: 'C',
        text: "Asfalt zeminde durma mesafesinin uzun olması, asfaltın araç lastiğine uyguladığı sürtünme kuvvetinin en büyük olduğunu gösterir."
      },
      {
        key: 'D',
        text: "Deneyde bağımsız değişken durma mesafesi iken, bağımlı değişken yüzey kaplama türüdür."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Deney düzeneğinde kontrol edilen (sabit) değişkenler rampa eğimi (15 derece) ve araç kütlesidir (1200 kg).",
      "2. Adım: Bağımsız değişken (araştırmacının değiştirdiği) yüzey kaplama malzemesidir. Bağımlı değişken ise ölçülen durma mesafesidir.",
      "3. Adım: Durma mesafesi en kısa olan zemin 4. Zemin (Kauçuk Kompozit - 5.1 m), en uzun olan ise 1. Zemin'dir (18.4 m). Durma mesafesinin kısalması sürtünme kuvvetinin büyüklüğü ile doğrudan ilişkilidir.",
      "4. Adım: B seçeneği hatalıdır (sürtünme sıfır olursa cisim durmaz). C seçeneği ters orantı kurmuştur. D seçeneği bağımlı ve bağımsız değişkenleri ters vermiştir.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Pürüzlülük, sürtünme kuvveti artışı ve durma mesafesi kısalmasını bilimsel olarak doğrular.' },
      { option: 'B', analysis: "Kavram Yanılgısı: Sürtünmenin cisimleri durduran bir kuvvet olduğunu unutarak 'sürtünmesiz ortamda durur' algısı." },
      { option: 'C', analysis: 'Ters Mantık Kurma: Durma mesafesinin uzun olmasını büyük sürtünme kuvvetiyle yanlış ilişkilendirme.' },
      { option: 'D', analysis: 'Değişken Karıştırma: Bağımlı (sonuç/ölçülen) ile bağımsız (farklılaştırılan) değişkenleri birbirinin yerine koyma.' }
    ],
    contextNecessity: "Öğrenci tablodaki sayısal durma mesafelerini ve kontrollü deney değişkenlerini incelemeden sürtünmenin büyüklük sırasını tespit edemez.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Tablodaki sayıları incelerken mesafenin kısalmasını kuvvetin büyümesiyle mi küçülmesiyle mi eşleştirdin?",
      "Deneyde her araç için eğim ve ağırlığın aynı verilmesi senin kararını nasıl etkiledi?",
      "Aracın durması için sürtünmenin gerekli olduğunu nasıl düşündün?"
    ]
  },

  // ===================== 6. SINIF =====================
  {
    id: 'q-6-2-1-01',
    grade: 6,
    unitId: '6-2',
    subtopicId: '6-2-1',
    code: 'F.6.2.1',
    title: 'Liman Römorkörlerinin Kargo Gemisini Yanaştırma Operasyonu',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB4 Önermeler Üzerinden Akıl Yürütmek',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Kuvvet Diyagramı ve Vektör Analizi',
    contextText: `İzmir Alsancak Limanı'na yanaşmakta olan 180 metre boyundaki bir konteyner gemisine, liman emniyeti gereği motorlarını kapattıktan sonra üç adet kılavuz römorkör (K, L ve M) halatlarla bağlanarak kuvvet uygulamaktadır. Geminin liman rıhtımına çarpmadan, sabit süratle ve doğrusal bir hat üzerinde doğu yönünde ilerlemesi hedeflenmektedir. Römorkörlerin uyguladığı yatay kuvvetlerin yön ve büyüklükleri şöyledir:`,
    contextData: {
      type: 'table',
      headers: ['Römorkör / Etki', 'Uygulanan Kuvvetin Yönü', 'Kuvvet Büyüklüğü (Newton)', 'Amacı'],
      rows: [
        ['K Römorkörü', 'Doğu', '45.000 N', 'İleriye çekme'],
        ['L Römorkörü', 'Batı', '15.000 N', 'Frenleme ve hız kontrolü'],
        ['M Römorkörü', 'Doğu', '10.000 N', 'Destek çekiş'],
        ['Deniz Suyu Direnci', 'Batı', '40.000 N', 'Harekete zıt sürtünme direnci']
      ]
    },
    svgDiagram: 'ship-tugboat-forces',
    questionStem: "Römorkörlerin ve deniz direncinin aynı doğrultuda (Doğu-Batı ekseninde) etki ettiği bu anda geminin hareket durumu ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
    options: [
      {
        key: 'A',
        text: "Gemiye etki eden bileşke kuvvet Doğu yönünde 55.000 N olduğu için gemi doğuya doğru hızlanan hareket yapar."
      },
      {
        key: 'B',
        text: "Doğu ve batı yönündeki kuvvetler birbirini dengelediği (Net Kuvvet = 0 N) için gemi sabit süratli hareketine devam eder."
      },
      {
        key: 'C',
        text: "Batı yönündeki kuvvetlerin toplamı daha büyük olduğu için gemi aniden geriye doğru sürüklenmeye başlar."
      },
      {
        key: 'D',
        text: "Geminin kütlesi çok büyük olduğu için uygulanan kuvvetler geminin hareket durumunu hiçbir şekilde etkileyemez."
      }
    ],
    correctAnswer: 'B',
    solutionSteps: [
      "1. Adım: Doğu yönündeki kuvvetler toplanır: K Römorkörü (45.000 N) + M Römorkörü (10.000 N) = 55.000 N (Doğu).",
      "2. Adım: Batı yönündeki kuvvetler toplanır: L Römorkörü (15.000 N) + Deniz Suyu Direnci (40.000 N) = 55.000 N (Batı).",
      "3. Adım: Aynı doğrultudaki zıt yönlü kuvvetlerin bileşkesi (Net Kuvvet) hesaplanır: R = 55.000 N (Doğu) - 55.000 N (Batı) = 0 Newton.",
      "4. Adım: Net kuvvetin sıfır olması (dengelenmiş kuvvetler) durumunda, hareket halindeki bir cisim mevcut süratini korur (sabit süratle hareket eder).",
      "Sonuç: Doğru cevap B seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: "Eksik Hesaplama: Zıt yöndeki kuvvetleri ve deniz direncini hesaba katmadan sadece doğu kuvvetlerini alarak hızlanır sonucuna varma." },
      { option: 'B', analysis: "Doğru Seçenek: Net kuvvetin sıfır olduğunu bularak dengelenmiş kuvvetler altında sabit süratli hareketi tespit etmiştir." },
      { option: 'C', analysis: "Hesaplama Hatası: Batı kuvvetlerini yanlış toplayıp geriye doğru hareket çıkarımı yapma." },
      { option: 'D', analysis: "Kavram Yanılgısı: Kütlesi büyük olan cisimlerin kuvvet prensiplerine uymadığı şeklindeki yanılgı." }
    ],
    contextNecessity: "Geminin yönü, römorkör kuvvetleri ve su direnci değerleri bağlamda tablo olarak sunulmuştur; ezberden çözülemez.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Doğu ve batı kuvvetlerini toplarken deniz suyu direncini hangi gruba dahil ettin?",
      "Bileşke kuvvetin sıfır çıkması geminin durduğu anlamına mı gelir yoksa hareketine nasıl yansır?",
      "Geminin rıhtıma güvenli yanaşması için dengelenmiş kuvvetlerin rolü nedir?"
    ]
  },

  {
    id: 'q-6-5-2-01',
    grade: 6,
    unitId: '6-5',
    subtopicId: '6-5-2',
    code: 'F.6.5.2',
    title: 'Gıda Laboratuvarında Sıvı Yoğunluk Kulesi ve Kalite Kontrol',
    skill: 'KB2.8 Sorgulama',
    processComponent: 'SB4 Bilginin Doğruluğunu Değerlendirmek',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Ölçüm Verisi ve Sıvı Tabakası Modeli',
    contextText: `Bir gıda kontrol laboratuvarında saf zeytinyağı, saf bal ve saf su örneklerinin yoğunlukları ölçülerek karışmadıkları bir dereceli silindirde üst üste dizilimleri gözlemlenmiştir. Laborant, kütle ve hacim ölçümlerini hassas terazide yaparak aşağıdaki tabloyu kaydetmiştir:`,
    contextData: {
      type: 'table',
      headers: ['Sıvı Örneği', 'Kütle (g)', 'Hacim (cm³)', 'Hesaplanan Yoğunluk (g/cm³)', 'Silindirdeki Konum'],
      rows: [
        ['Saf Bal', '284 g', '200 cm³', '1.42 g/cm³', 'En dipte (1. Tabaka)'],
        ['Saf Su', '200 g', '200 cm³', '1.00 g/cm³', 'Ortada (2. Tabaka)'],
        ['Saf Zeytinyağı', '182 g', '200 cm³', '0.91 g/cm³', 'En üstte (3. Tabaka)']
      ]
    },
    svgDiagram: 'density-tower',
    questionStem: "Laboranta şüpheli bir 'Organik Üzüm Pekmezi' numunesi getirilmiş ve 100 cm³'ünün kütlesi 125 g olarak ölçülmüştür. Bu pekmez numunesi yukarıdaki dereceli silindire yavaşça ilave edilirse sıvıların son denge durumuyla ilgili hangisi doğru olur?",
    options: [
      {
        key: 'A',
        text: "Pekmezin yoğunluğu 1.25 g/cm³ olduğundan balın üstünde, suyun ise altında ayrı bir tabaka oluşturur."
      },
      {
        key: 'B',
        text: "Pekmezin kütlesi 125 g olduğu için 182 g zeytinyağının üstünde yüzerek en tepeye yerleşir."
      },
      {
        key: 'C',
        text: "Pekmezin yoğunluğu baldan daha büyük olduğu için silindirin en dibine çökerek balı yukarı iter."
      },
      {
        key: 'D',
        text: "Pekmezin hacmi 100 cm³ olduğundan su ve zeytinyağı ile tamamen homojen karışarak tabakaları yok eder."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Pekmezin yoğunluğu d = m / V formülüyle hesaplanır: d = 125 g / 100 cm³ = 1.25 g/cm³.",
      "2. Adım: Tablodaki sıvıların yoğunlukları ile karşılaştırılır: Bal (1.42 g/cm³) > Pekmez (1.25 g/cm³) > Su (1.00 g/cm³) > Zeytinyağı (0.91 g/cm³).",
      "3. Adım: Birbiri içinde çözünmeyen sıvılarda yoğunluğu büyük olan altta, küçük olan üstte yer alır. Pekmez (1.25), baldan (1.42) küçük olduğu için balın üstünde kalır; sudan (1.00) büyük olduğu için suyun altına iner.",
      "4. Adım: B seçeneği kütle ile yoğunluğu karıştırmıştır. C seçeneği hatalı sayısal karşılaştırmadır.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: "Doğru Seçenek: Yoğunluğu 1.25 g/cm³ olarak doğru hesaplamış ve bal ile su arasındaki konumu tespit etmiştir." },
      { option: 'B', analysis: "Kavram Yanılgısı: Sıvıların batma-yüzme konumunu yoğunluk yerine salt kütle miktarına bağlama yanılgısı." },
      { option: 'C', analysis: "Hatalı Matematiksel Sıralama: 1.25 değerini 1.42 değerinden büyük sanma hatası." },
      { option: 'D', analysis: "Ezber/Yanıltıcı Çıkarım: Hacim büyüklüğünün karışabilirlik veya tabakalanma üzerinde tek belirleyici olduğu yanılgısı." }
    ],
    contextNecessity: "Öğrenci tablodaki kütle/hacim verilerini işleyip yeni verilen numunenin yoğunluğunu hesaplamadan soruya cevap veremez.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Pekmezin yerini belirlerken sadece kütlesine mi baktın yoksa kütle-hacim oranına mı?",
      "Pekmezin yoğunluğu 1.25 g/cm³ çıktığında bal ve suyun yoğunluklarıyla nasıl karşılaştırdın?",
      "Günlük hayatta bir sıvının diğerinin üstünde yüzmesinin temel sebebi nedir?"
    ]
  },

  // ===================== 7. SINIF =====================
  {
    id: 'q-7-2-3-01',
    grade: 7,
    unitId: '7-2',
    subtopicId: '7-2-3',
    code: 'F.7.2.3',
    title: 'Hız Treni (Roller Coaster) ve Mekanik Enerji Dönüşümü',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB4 Önermeler Üzerinden Akıl Yürütmek',
    difficulty: 'Zor',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Yükseklik ve Hız Sensör Ölçümleri Tablosu',
    contextText: `Bir tema parktaki hız treni ray hattı üzerine yerleştirilen elektronik sensörler, 500 kg kütleli tren vagonunun K, L, M ve N noktalarından geçerken sahip olduğu yükseklik ve anlık hız değerlerini ölçmüştür (Sürtünmeler nedeniyle bir miktar enerji ısıya dönüşmektedir):`,
    contextData: {
      type: 'table',
      headers: ['Nokta', 'Yerden Yükseklik (h)', 'Çekim Potansiyel Enerjisi', 'Anlık Sürat (v)', 'Kinetik Enerji Düzeyi'],
      rows: [
        ['K Noktası (Tepe)', '40 metre', 'Maksimum Düzeyde', '2 m/s (Neredeyse durgun)', 'Minimum'],
        ['L Noktası (Dip)', '2 metre', 'En Düşük Düzeyde', '24 m/s', 'Çok Yüksek'],
        ['M Noktası (Tepecik)', '25 metre', 'Orta Düzeyde', '14 m/s', 'Orta'],
        ['N Noktası (Bitiş)', '0 metre', 'Sıfır', '0 m/s (Frenle Durdu)', 'Sıfır (Tümü Isıya Dönüştü)']
      ]
    },
    svgDiagram: 'roller-coaster-energy',
    questionStem: "Sensör verileri ve mekanik enerji korunumu ilkeleri göz önüne alındığında aşağıdaki ifadelerden hangisi bilimsel bir gerçeği ifade eder?",
    options: [
      {
        key: 'A',
        text: "K noktasından L noktasına inerken kaybedilen çekim potansiyel enerjisinin büyük kısmı kinetik enerjiye dönüşmüştür."
      },
      {
        key: 'B',
        text: "M noktasındaki toplam mekanik enerji, K noktasındaki toplam mekanik enerjiden sürtünme olmasa bile her zaman daha küçüktür."
      },
      {
        key: 'C',
        text: "L noktasında vagonun tüm enerjisi yok olmuş, M noktasına çıkabilmek için raylardan vagona ek kütle aktarılmıştır."
      },
      {
        key: 'D',
        text: "N noktasında duran vagonun enerjisi evrenden tamamen silinmiş ve başka hiçbir enerji türüne dönüşmemiştir."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Vagon K noktasında (40 m) yüksek potansiyel enerjiye ve düşük sürate sahiptir.",
      "2. Adım: K'den L'ye (2 m) inerken yükseklik azalmış, sürat 2 m/s'den 24 m/s'ye fırlamıştır. Bu durum potansiyel enerjinin kinetik enerjiye dönüştüğünü gösterir.",
      "3. Adım: B seçeneği yanlıştır çünkü sürtünme olmasaydı mekanik enerji korunurdu. C seçeneği bilime aykırıdır (enerji yok olmaz, kütle aktarılmaz). D seçeneği enerjinin korunumu yasasını ihlal eder (enerji yok olmaz, fren balatalarında ısı enerjisine dönüşür).",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Potansiyel enerjinin kinetik enerjiye dönüşümünü tablo verileriyle kanıtlamıştır.' },
      { option: 'B', analysis: "Kavram Yanılgısı: İdeal sistemlerde mekanik enerjinin korunduğunu göz ardı etme." },
      { option: 'C', analysis: "Bilim Dışı Algı: Enerjinin yok olduğunu veya cisimlerin yokuş çıkarken kütle kazandığını sanma." },
      { option: 'D', analysis: "Kavram Yanılgısı: 'Durunca enerji kayboldu' yanılgısı; sürtünme ile ısıya dönüşümü reddetme." }
    ],
    contextNecessity: "Öğrenci K, L, M noktalarındaki yükseklik ve hız değerlerini tablodan karşılaştırmadan dönüşüm oranlarını yorumlayamaz.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Vagon tepe noktadan en alt noktaya inerken hızının artışını hangi enerji türünün azalmasıyla açıkladın?",
      "Fren yapıp durduğunda trenin hareket enerjisinin nereye gitmiş olabileceğini düşündün?",
      "M noktasındaki yükseklik ile hız arasındaki dengeyi nasıl kurdun?"
    ]
  },

  {
    id: 'q-7-6-1-01',
    grade: 7,
    unitId: '7-6',
    subtopicId: '7-6-1',
    code: 'F.7.6.1',
    title: 'Mikroçip Üretim Tesisinde Elektrostatik Yük Güvenliği (ESD)',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB3 Gözleme/Veriye Dayalı Tahmin',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Endüstriyel Süreç & Ölçüm Tablosu',
    contextText: `Hassas mikroçip üreten bir teknoloji fabrikasında çalışan mühendisler, personelin giydiği farklı kumaş türlerinin sürtünmeyle oluşturduğu elektrostatik yük miktarını ölçmüştür. Kıvılcım sıçraması mikroçipleri bozduğu için yüzey yükünün nötre en yakın kalması gerekmektedir. Yalıtkan plastik zemin üzerinde yürüyen personelden alınan elektroskop ve voltaj ölçüm sonuçları şöyledir:`,
    contextData: {
      type: 'table',
      headers: ['Kumaş Türü', 'Sürtünme Sonrası Yük Cinsi', 'Yük Miktarı (Elektroskop Yaprak Açısı)', 'Topraklama Bilekliği Takıldığında'],
      rows: [
        ['Yün Kumaş', 'Pozitif (+) Yük Fazlalığı', '42 Derece (Geniş Açık)', 'Yapraklar Tamamen Kapandı (Nötr)'],
        ['Sentetik Polyester', 'Negatif (-) Yük Fazlalığı', '55 Derece (Çok Geniş Açık)', 'Yapraklar Tamamen Kapandı (Nötr)'],
        ['İletken İplikli Antistatik Pamuk', 'Nötre Yakın Denge', '2 Derece (Hemen Hemen Kapalı)', 'Yapraklar Tamamen Kapalı (Nötr)']
      ]
    },
    svgDiagram: 'electroscope-esd',
    questionStem: "Mühendislerin elde ettiği bu verilere göre, tesisteki statik elektrik riskini yönetmek için yapılacak aşağıdaki yorumlardan hangisi bilimsel olarak doğrudur?",
    options: [
      {
        key: 'A',
        text: "Topraklama bilekliği, vücutta biriken fazla yüklerin iletken hat üzerinden toprağa aktarılarak nötrleşmesini sağlamıştır."
      },
      {
        key: 'B',
        text: "Sentetik polyester kumaş pozitif proton kazandığı için elektroskop yaprakları en fazla açılmıştır."
      },
      {
        key: 'C',
        text: "Yün kumaş giyen personelin vücudundaki tüm elektronlar yok olmuş ve madde kütlesi yarıya inmiştir."
      },
      {
        key: 'D',
        text: "Antistatik kumaşın yaprak açısının küçük olması, bu kumaşın elektriği asla iletmeyen süper bir yalıtkan olduğunu gösterir."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Topraklama yapıldığında her iki kumaş türünde de elektroskop yapraklarının tamamen kapandığı (nötrleştiği) görülmektedir.",
      "2. Adım: Topraklama ilkesine göre, negatif yüklü cisimlerde fazla elektronlar toprağa akar; pozitif yüklü cisimlerde ise topraktan cisme elektron gelerek cisim nötrlenir. Bu sayede kıvılcım riski önlenir.",
      "3. Adım: B seçeneği yanlıştır çünkü protonlar çekirdekte bulunur ve sürtünmeyle hareket etmez; hareket eden parçacık elektrondur. C seçeneği saçmadır (madde yok olmaz). D seçeneği yanlıştır çünkü antistatik kumaş yük birikmesini iletken tellerle dağıtarak önler.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Topraklamanın fazla yükleri ileterek nötrleme işlevini tam olarak açıklar.' },
      { option: 'B', analysis: "Kavram Yanılgısı: Sürtünme ile elektriklenmede protonların hareket ettiği yanılgısı." },
      { option: 'C', analysis: "Aşırı Yanılgı: Elektriklenmenin kütle kaybına veya elektronların tamamen yok olmasına neden olacağını sanma." },
      { option: 'D', analysis: "Ters Çıkarım: Antistatik kumaşın mikro iletken liflerini yalıtkanlıkla karıştırma hatası." }
    ],
    contextNecessity: "Öğrenci endüstriyel bağlamdaki elektroskop açılarını ve topraklama sütununu okumadan mikroçip koruma mekanizmasını açıklayamaz.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Topraklama bilekliği takıldığında yaprakların kapanmasını yüklerin hareketiyle nasıl açıkladın?",
      "Pozitif yüklenen bir kumaşın proton mu aldığını yoksa elektron mu kaybettiğini düşündün?",
      "Mikroçip fabrikasında neden iletken lifli kumaş tercih edilir?"
    ]
  },

  // ===================== 8. SINIF =====================
  {
    id: 'q-8-1-1-01',
    grade: 8,
    unitId: '8-1',
    subtopicId: '8-1-1',
    code: 'F.8.1.1',
    title: 'Güneş Enerjisi Santralinde Panel Açısı ve Mevsimsel Verim',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB3 Gözleme/Veriye Dayalı Tahmin',
    difficulty: 'Zor',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Sensör Ölçüm Tablosu ve Güneş Açı Grafiği',
    contextText: `Konya Kapapınar Güneş Enerjisi Santrali'nde (38° Kuzey Paraleli) bulunan sabit açılı fotovoltaik paneller ile güneşi takip eden hareketli panellerin 21 Haziran ve 21 Aralık tarihlerinde öğle saat 12.00'de ölçülen ışık geliş açısı, aydınlanan birim alan ve elektrik üretim verileri kaydedilmiştir:`,
    contextData: {
      type: 'table',
      headers: ['Tarih / Ölçüm Günü', 'Güneş Işınlarının Geliş Açısı', 'Birim Alana Düşen Enerji Yoğunluğu', 'Panel Sıcaklığı', 'Günlük Elektrik Üretimi'],
      rows: [
        ['21 Haziran (Öğle 12.00)', '75.5 Derece (Dike çok yakın)', '980 W/m² (Çok Yüksek)', '38 °C', '28.400 kWh'],
        ['21 Aralık (Öğle 12.00)', '28.5 Derece (Oldukça eğik)', '410 W/m² (Düşük)', '4 °C', '9.800 kWh'],
        ['21 Mart (Öğle 12.00)', '52.0 Derece (Orta eğim)', '720 W/m² (Orta)', '18 °C', '19.200 kWh']
      ]
    },
    svgDiagram: 'sun-angles-seasons',
    questionStem: "Santraldeki ölçüm sonuçları ve Dünya'nın eksen eğikliği ile Güneş etrafındaki dolanımı birlikte ele alındığında aşağıdaki çıkarımlardan hangisi doğrudur?",
    options: [
      {
        key: 'A',
        text: "21 Haziran'da ışınlar daha dik açıyla geldiği için birim alana düşen enerji yoğunluğu artmış ve elektrik üretimi zirveye ulaşmıştır."
      },
      {
        key: 'B',
        text: "21 Aralık'ta üretimin düşmesinin tek sebebi Dünya'nın Güneş'e olan yörünge mesafesinin en uzak noktaya ulaşmasıdır."
      },
      {
        key: 'C',
        text: "Güneş ışınlarının gelme açısı azaldıkça aydınlanan yüzey alanı daralır ve birim alana düşen ısı enerjisi artar."
      },
      {
        key: 'D',
        text: "21 Mart tarihinde panelde üretilen enerjinin fazla olması Türkiye'nin o tarihte Güney Yarım Küre'ye geçmiş olmasından kaynaklanır."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Tablo incelendiğinde 21 Haziran'da geliş açısı 75.5 derece iken birim alana düşen enerji 980 W/m² ve üretim 28.400 kWh'dir.",
      "2. Adım: Işık ışınları dike yakın açıyla geldiğinde daha dar bir alana odaklanır ve birim alana aktarılan enerji miktarı artar. Bu durum yaz mevsiminin yaşanmasının ve yüksek verimin temel nedenidir.",
      "3. Adım: B seçeneği yaygın bir kavram yanılgısıdır; mevsimlerin sebebi mesafe değil eksen eğikliğidir (kaldı ki 21 Aralık'a yakın olan 3 Ocak'ta Dünya Güneş'e en yakındır).",
      "4. Adım: C seçeneği ters ilişki kurmuştur (açı azaldıkça alan genişler, enerji yoğunluğu düşer). D seçeneği coğrafi ve bilimsel olarak imkansızdır.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Geliş açısı, birim alan enerjisi ve elektrik üretimi arasındaki sebep-sonuç ilişkisini kusursuz açıklar.' },
      { option: 'B', analysis: "Kök Salmış Kavram Yanılgısı: Mevsimleri Dünya'nın Güneş'e olan mesafesiyle açıklama yanılgısı." },
      { option: 'C', analysis: "Ters Orantı Yanılgısı: Işık açısı küçüldüğünde aydınlanan alanın daraldığını sanma." },
      { option: 'D', analysis: 'Bilim Dışı İfade: Yarım kürelerin mevsimsel olarak yer değiştireceğini öne süren absürt çeldirici.' }
    ],
    contextNecessity: "Öğrenci santraldeki açı ve watt/saat üretim tablosunu analiz etmeden güneş açısının verime etkisini somutlaştıramaz.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "21 Haziran'da açının 75.5 derece olması ile birim alana düşen enerjinin büyüklüğünü nasıl bağladın?",
      "Kış mevsiminde soğuk olmasının Dünya'nın güneşe uzaklığıyla ilgili olmadığını hangi bilgiyle hatırladın?",
      "Güneş panellerinin dik açıyla daha çok elektrik üretmesi doğadaki hangi olayla benzerdir?"
    ]
  },

  {
    id: 'q-8-3-2-01',
    grade: 8,
    unitId: '8-3',
    subtopicId: '8-3-2',
    code: 'F.8.3.2',
    title: 'Şehir Su Dağıtım Şebekesinde Su Deposu Yüksekliği ve Basınç Sorunu',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB1 Problemi Yapılandırmak',
    difficulty: 'Orta',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Şehir Altyapı Şeması ve Manometre Ölçümleri',
    contextText: `Tepedeki bir ana su deposundan (rakım: 120 m) yerçekimi etkisiyle beslenen bir yerleşim bölgesinde, farklı katlarda ve farklı rakımlarda oturan bina sakinlerinin musluklarından akan suyun debisi ve borulardaki manometre (sıvı basınç ölçer) değerleri belediye ekiplerince incelenmiştir:`,
    contextData: {
      type: 'table',
      headers: ['Nokta / Konum', 'Deponun Tabanına Göre Derinlik (h)', 'Kullanılan Sıvı Türü', 'Manometre Basınç Değeri (P)'],
      rows: [
        ['1. Bölge (Vadi içi zemin kat ev)', '40 metre derinlik', 'Şebeke Suyu (Yoğunluk: d)', '4.0 Bar (Çok Güçlü Akış)'],
        ['2. Bölge (Yamaçtaki 2. kat ev)', '20 metre derinlik', 'Şebeke Suyu (Yoğunluk: d)', '2.0 Bar (Yeterli Akış)'],
        ['3. Bölge (Tepeye yakın 5. kat çatı)', '3 metre derinlik', 'Şebeke Suyu (Yoğunluk: d)', '0.3 Bar (İp Gibi Cılız Akış)']
      ]
    },
    svgDiagram: 'water-pressure-network',
    questionStem: "Mühendislerin su basıncını artırmak için 3. Bölgeye hidrofor (pompa) yerleştirmeyi planladığı bu sistemle ilgili aşağıdaki çıkarımlardan hangisi sıvı basıncı ilkeleriyle tam uyumludur?",
    options: [
      {
        key: 'A',
        text: "Sıvı basıncı açık sıvı yüzeyinden itibaren olan derinlikle doğru orantılı olduğu için derinliği en az olan 3. Bölgede basınç en düşüktür."
      },
      {
        key: 'B',
        text: "1. Bölgedeki basıncın yüksek olmasının sebebi o bölgedeki boruların daha dar olması ve sıvıyı sıkıştırarak yoğunluğunu artırmasıdır."
      },
      {
        key: 'C',
        text: "Depodaki suyun toplam kütlesi yarıya inerse derinlikler değişmese bile tüm manometreler anında sıfır bar değerini gösterir."
      },
      {
        key: 'D',
        text: "Sıvılar basıncı iletmediği için sadece deponun tabanındaki tek bir noktada basınç oluşur, borularda basınç oluşmaz."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Sıvı basıncı formülü P = h . d . g'dir (Derinlik x Sıvı Yoğunluğu x Yerçekimi İvmesi).",
      "2. Adım: Şebekedeki suyun yoğunluğu (d) ve yerçekimi ivmesi (g) her üç bölge için de aynıdır.",
      "3. Adım: Basıncı belirleyen temel değişken serbest su yüzeyine olan derinlik (h) farkıdır. 1. Bölgede derinlik 40 m (P = 4 Bar), 3. Bölgede derinlik sadece 3 m'dir (P = 0.3 Bar). Bu yüzden 3. Bölgede musluktan su cılız akar.",
      "4. Adım: B seçeneği yanlıştır çünkü sıvılar sıkıştırılamaz ve yoğunlukları değişmez. C seçeneği yanlıştır çünkü sıvı basıncı toplam kütleye değil derinliğe bağlıdır. D seçeneği Pascal prensibine tamamen aykırıdır.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Sıvı basıncının serbest yüzeyden olan derinlikle doğru orantılı olduğunu kanıtlar.' },
      { option: 'B', analysis: "Kavram Yanılgısı: Sıvıların sıkıştırılabileceğini ve boru darlığının yoğunluğu artıracağını sanma." },
      { option: 'C', analysis: "Kavram Yanılgısı: Sıvı basıncını derinlik yerine toplam su hacmi veya kabın şekliyle açıklama hatası." },
      { option: 'D', analysis: "Bilim Dışı Algı: Sıvıların basıncı iletmediği şeklindeki yanlış düşünce." }
    ],
    contextNecessity: "Öğrenci su deposu ve üç bölgedeki manometre rakım verilerini analiz etmeden hidrofor ihtiyacının bilimsel gerekçesini kuramaz.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Vadi tabanındaki evde suyun fışkırarak akmasını deponun seviyesine göre nasıl açıkladın?",
      "Borunun içindeki suyun sıkışarak yoğunluğunun değişebileceğini düşündün mü?",
      "Yüksek katlara su çıkabilmesi için itfaiyelerin veya belediyelerin kullandığı hidrofor hangi fen prensibiyle çalışır?"
    ]
  },

  {
    id: 'q-8-5-1-01',
    grade: 8,
    unitId: '8-5',
    subtopicId: '8-5-1',
    code: 'F.8.5.1',
    title: 'Tarihi Taş Köprü Restorasyonunda Palanga Sistemi ile Blok Kaldırma',
    skill: 'KB3.2 Problem Çözme',
    processComponent: 'SB4 Önermeler Üzerinden Akıl Yürütmek',
    difficulty: 'Zor',
    source: 'MEB TYMM Kılavuz (Mart 2026) & fenbilim.net',
    contextType: 'Mühendislik Deneyi ve Dinamometre Ölçümleri',
    contextText: `Mimar Sinan'ın tarihi bir taş köprüsünün kemer restorasyonunda 6000 Newton ağırlığındaki kesme taş blokları 4 metre yukarı kaldırmak için şantiye mühendisleri iki farklı makara sistemi (Sistem 1: Yalnızca sabit makara; Sistem 2: İki hareketli, iki sabit makaradan oluşan palanga) kurarak uygulanan kuvveti ve çekilen ip boyunu ölçmüştür (Sürtünmeler ve makara ağırlıkları ihmal edilmiştir):`,
    contextData: {
      type: 'table',
      headers: ['Makara Düzeneği', 'Yük Ağırlığı (G)', 'Uygulanan Giriş Kuvveti (F)', 'Yükün Yükselme Miktarı (h)', 'Çekilen İp Uzunluğu (x)', 'Yapılan İş'],
      rows: [
        ['Sistem 1 (1 Sabit Makara)', '6.000 N', '6.000 N', '4 metre', '4 metre', '24.000 Joule'],
        ['Sistem 2 (4 Makaralı Palanga)', '6.000 N', '1.500 N', '4 metre', '16 metre', '24.000 Joule']
      ]
    },
    svgDiagram: 'pulley-systems',
    questionStem: "Şantiye mühendislerinin elde ettiği tablo verileri incelendiğinde basit makinelerdeki kuvvet, yol ve iş ilişkisine dair aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?",
    options: [
      {
        key: 'A',
        text: "Sistem 2'de kuvvetten 4 kat kazanç sağlanırken aynı oranda yoldan kayıp yaşanmış, ancak her iki sistemde de yapılan iş değişmemiştir."
      },
      {
        key: 'B',
        text: "Sistem 2'de uygulanan kuvvet 1.500 N'a düştüğü için harcanan toplam enerji ve yapılan iş de 4 kat azalmıştır."
      },
      {
        key: 'C',
        text: "Sistem 1'deki sabit makara işten kazanç sağlamış, bu sayede işçilerin yorulmasını tamamen engellemiştir."
      },
      {
        key: 'D',
        text: "Palanga sisteminde ipi 16 metre çekmek yerine 4 metre çekilseydi yük yine aynı şekilde 4 metre yukarı çıkardı."
      }
    ],
    correctAnswer: 'A',
    solutionSteps: [
      "1. Adım: Sistem 1'de kuvvet kazancı yoktur (F = G = 6000 N). İp 4 m çekildiğinde yük 4 m yükselir. Yapılan iş = 6000 N x 4 m = 24.000 J.",
      "2. Adım: Sistem 2'de yükü taşıyan 4 ip kolu olduğu için uygulanan kuvvet F = 6000 N / 4 = 1500 N'dur. Kuvvetten 4 kat kazanç vardır.",
      "3. Adım: Basit makinelerde enerjiden veya işten kazanç sağlanamaz (İş prensibi). Kuvvetten 4 kat kazanıldığında yoldan 4 kat kaybedilir; yükü 4 metre yukarı çıkarmak için ip 4 x 4 = 16 metre çekilmelidir. Yapılan iş = 1500 N x 16 m = 24.000 Joule'dür.",
      "4. Adım: B seçeneği işten kazanç yanılgısıdır. C seçeneği sabit makaranın işten kazanç sağladığı yalanıdır (yalnızca kuvvetin yönünü değiştirir). D seçeneği fizik kurallarına aykırıdır.",
      "Sonuç: Doğru cevap A seçeneğidir."
    ],
    distractorAnalysis: [
      { option: 'A', analysis: 'Doğru Seçenek: Kuvvet kazancı, yoldan kayıp ve işin korunduğu ilkesini eksiksiz doğrular.' },
      { option: 'B', analysis: "En Yaygın Kavram Yanılgısı: 'Kuvvet küçülürse yapılan iş ve harcanan enerji de küçülür' yanılgısı." },
      { option: 'C', analysis: "Kavram Yanılgısı: Basit makinelerin işten veya enerjiden kazanç sağladığı inancı." },
      { option: 'D', analysis: "Fiziksel Hata: Yoldan kaybı görmezden gelerek daha az iple aynı yüksekliğe çıkılacağını sanma." }
    ],
    contextNecessity: "Restorasyon senaryosu ve 1.500 N / 16 m veri tablosu olmadan iş-enerji korunumu ve kuvvet kazancı karşılaştırması yapılamaz.",
    audit: {
      T1_independent: true,
      T2_functionality: true,
      T3_problem: true,
      T4_reasoning: true,
      T5_noCamouflage: true,
      T6_noVerbalLoad: true,
      T7_functionalVisual: true,
      T8_singleCorrect: true,
      T9_noLeakage: true,
      T10_scientificAccuracy: true,
      T11_curriculumAlignment: true,
      T12_clarity: true,
      qualityScore: '20/20',
      mebChecklistPassed: true
    },
    pilotQuestions: [
      "Palangada kuvvet 4 kat azaldığında ipi neden 4 kat daha fazla çekmek zorunda kaldık?",
      "Yapılan işin her iki sistemde de 24.000 Joule çıkması sana basit makinelerin hangi temel kuralını hatırlattı?",
      "İşten kazanç sağlanabilir mi, yoksa sadece iş kolaylığı mı sağlanır?"
    ]
  }
];
