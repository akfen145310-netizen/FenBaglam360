import { SectionContent } from '../../types';

export const unit4Review: SectionContent = {
  code: "7.4.3",
  title: "4. Ünite Sonu Değerlendirme & Sonuç Çalışmaları",
  unitCode: "7.4",
  unitTitle: "4. Ünite: Işığın Kırılması ve Mercekler",
  summary: "MEB 2. Kitap 4. Ünite değerlendirme çalışmaları (Sayfa 35-41): Madeni para ve su deneyi, K-L-M ortamlarında ışık hızı ve yoğunluk ilişkisi, kapalı kutulardaki mercek düzenekleri, havuzdaki kutu görünür derinlik analizi, teleskop mercek tasarımı, miyop ve hipermetrop göz kusurları, saat tamircisi büyüteç analizi ve ünite kazanımlarının kapsamlı sentezi.",
  kazanimlar: [
    "F.7.4.1.1. ve F.7.4.1.2. Işığın kırılma kanunlarını, hız değişimlerini ve görünür derinlik yanılsamalarını grafik ve deneylerle irdeler.",
    "F.7.4.1.3. ve F.7.4.1.4. Beyaz ışığın prizmada ayrışmasını ve Türk-İslam optik bilginlerinin katkılarını değerlendirir.",
    "F.7.4.2.1. ve F.7.4.2.2. İnce ve kalın kenarlı merceklerin odak ve ışık kırma davranışlarını deneysel düzenekler üzerinde karşılaştırır.",
    "F.7.4.2.3. ve F.7.4.2.4. Orman yangınları önleme bilinci, göz sağlığı ve optik aletlerin çalışma mekanizmalarını sentezler."
  ],
  hatirlayalim: {
    text: "4. Ünite boyunca ışığın saydam ortamlarda yayılma hızını, az ve çok yoğun ortamlarda kırılma kurallarını, prizmada beyaz ışığın renklerine ayrışmasını, ince ve kalın kenarlı merceklerin çalışma prensiplerini ve optik teknolojilerini öğrendik.",
    keyPoints: [
      "Az yoğun → Çok yoğun: Işık yavaşlar, normale yaklaşarak kırılır.",
      "Çok yoğun → Az yoğun: Işık hızlanır, normalden uzaklaşarak kırılır.",
      "İnce kenarlı mercek (yakınsak): Işığı odakta toplar, cisimleri büyütür (hipermetrop düzeltimi, büyüteç).",
      "Kalın kenarlı mercek (ıraksak): Işığı dağıtır, geniş alan gösterir (miyop düzeltimi, kapı dürbünü)."
    ]
  },
  onDegerlendirme: [
    {
      id: "od-u4rev-1",
      question: "Kitap Sayfa 36'daki deneyde boş fincandaki madeni para fincanın kenarından bakıldığında görünmezken, fincana su doldurulduğunda neden görünür hale gelir?",
      answer: "Boş fincanda madeni paradan çıkan ışık ışınları fincanın kenarına çarparak göze ulaşamaz. Fincana su doldurulduğunda paradan çıkan ışınlar sudan havaya geçerken normalden uzaklaşarak kırılır ve bükülerek gözlemcinin gözüne ulaşır."
    },
    {
      id: "od-u4rev-2",
      question: "Kitap Sayfa 38'deki kapalı bir kutuya gönderilen paralel ışık demeti kutudan birbirine yaklaşarak çıkıyorsa kutu içinde hangi mercek vardır?",
      answer: "Kutu içinde ince kenarlı (yakınsak) mercek vardır; çünkü paralel gelen ışınları birbirine doğru yaklaştırıp odaklayan mercek ince kenarlıdır."
    },
    {
      id: "od-u4rev-3",
      question: "Kitap Sayfa 40'taki teleskop modelinde objektif ve okülerde neden farklı mercekler kullanılır?",
      answer: "Objektif merceği uzaktaki gök cisminden gelen ışınları toplayıp odak düzleminde küçük ve parlak bir görüntü oluşturur; oküler merceği (göz merceği) ise bu görüntüyü büyüterek gözün net görmesini sağlar."
    }
  ],
  hazirlik: {
    question: "Kitap Sayfa 37'de K, L ve M ortamlarında ışığın hız grafiği verilmiştir. Işığın hızı K ortamında en fazla, M ortamında en az olduğuna göre ışık K ortamından M ortamına geçerken nasıl kırılır?",
    answer: "K ortamında hız en fazla olduğuna göre K en az yoğun, M ise en çok yoğun ortamdır. Az yoğun K'den çok yoğun M'ye geçen ışın yavaşlar ve normale yaklaşarak kırılır."
  },
  merak: {
    question: "Kâinattaki tüm optik sistemler (insan gözü, atmosferdeki ışık kırılmaları, su damlalarındaki gökkuşağı ve yıldızların ışığı) aynı fizik kurallarına göre çalışır. Işığın bu evrensel kanunları bize ne fısıldar?",
    answer: "Mikro boyuttaki su damlasından makro boyuttaki galaksilere kadar her yerde aynı optik yasaların hüküm sürmesi, tüm kâinatın tek bir Yaratıcı'nın ilim ve iradesiyle kusursuz bir nizam içinde yönetildiğini gösterir."
  },
  kopru: {
    title: "Ünite Sonuç Sentezi ve 5. Üniteye Geçiş",
    content: "Işığın kırılması ve mercekleri kavradıktan sonra, ışığı geçiren ve yansıtan maddenin en derin yapı taşlarına: atomlara, moleküllere, element ve bileşiklere doğru bir keşif yolculuğuna çıkacağız.",
    question: "Camın veya suyun ışığı kırmasını sağlayan şey aslında nedir?",
    answer: "Maddenin atomik ve moleküler yapısı, elektron yoğunluğu ve tanecik dizilimidir. 5. Ünitede maddenin tanecikli yapısını ve atom modellerini inceleyeceğiz."
  },
  hikmetStages: [
    {
      stage: 1,
      name: "1. Varlığı Tanıt (Işık ve Madde Etkileşimi)",
      concept: "Optik Evrenin Temel Yasaları",
      text: "Işığın kırılması ve mercekler, ışık enerjisinin madde ile karşılaşmasında ortaya çıkan matematiksel ve fiziksel ahenktir. Saydam maddelerin yoğunluğu ışığa yön verir, hızını belirler ve görüntüler oluşturur.",
      analogies: ["Işık ışınlarının saydam dünyadaki dansı"]
    },
    {
      stage: 2,
      name: "2. Parçalarını Göster (Kırılma ve Mercekler Dengesi)",
      concept: "Kırılma Kanunu ve İki Mercek Tipi",
      text: "Kırılma: Az yoğundan çok yoğuna (normale yaklaşır, hızı düşer), çok yoğundan az yoğuna (normalden uzaklaşır, hızlanır). İnce mercek: Işığı toplar, yakını düzeltir, yangın riski taşır. Kalın mercek: Işığı dağıtır, uzağı düzeltir, geniş açı sağlar.",
      analogies: ["Optik terazinin iki kefesi"]
    },
    {
      stage: 3,
      name: "3. Sanatını Çöz (Deneysel Kanıtlar)",
      concept: "Fincandaki Para ve Havuzdaki Kutu",
      text: "Madeni paranın suda görünmesi, su dolu havuz tabanındaki kutunun daha yüzeyde algılanması, yağmur damlasında gökkuşağı belirmesi doğadaki optik kanunların şaşmaz delilleridir.",
      analogies: ["Gözümüzün önüne serilen optik mucizeler"]
    },
    {
      stage: 4,
      name: "4. Hikmetini Kavra (İnsan ve Çevre Sorumluluğu)",
      concept: "Doğayı Koruma ve Sağlık Nimeti",
      text: "Mercek etkisiyle ormanların kül olmasını engellemek insani bir mesuliyettir. Göz kusurlarını düzelten mercekler tıp ilminin insana sunduğu birer şifa vesilesidir.",
      analogies: ["Doğaya merhamet, ilme sadakat"]
    },
    {
      stage: 5,
      name: "5. Teknolojide Birlik (OPMER'den Teleskoplara)",
      concept: "Milli Optik Hamlesi",
      text: "TÜBİTAK UZAY OPMER ile uydularımızın gözü olan mercekleri millîleştiren Türkiye, teleskop ve mikroskop teknolojilerinde kendi geleceğini inşa etmektedir.",
      analogies: ["Gözü yerde değil göklerde olan bir medeniyet"]
    },
    {
      stage: 6,
      name: "6. Medeniyet Ufku (İbnü'l-Heysem'den Geleceğe)",
      concept: "Optik Mirasının Sentezi",
      text: "İbn Sehl'in mercek çizimleri, İbnü'l-Heysem'in Kitâbü'l-Menâzır'ı, Mîrim Çelebi'nin gökkuşağı risalesi ve Thomas Young'ın dalga modeli ışığın hikmet yolculuğunda birer kutlu duraktır.",
      analogies: ["Asırları aydınlatan ilim meşalesi"]
    }
  ],
  etkinlikler: [
    {
      id: "etk-7-4-3",
      title: "Ünite Sonu Beceri Atölyesi: Fincandaki Para ve Kutu Mercek Analizi (MEB Sayfa 36-39)",
      type: "Problem Durumu ve Çözüm Modelleme",
      materials: ["Opak fincan", "Madeni para", "Su", "Optik kutu modeli"],
      steps: [
        "Fincanın dibine madeni para koyup para görünmeyene kadar geriye çekiliniz.",
        "Konumunuzu değiştirmeden bir arkadaşınızdan fincana yavaşça su doldurmasını isteyiniz.",
        "Paranın görünür hale geldiği anı gözlemleyip ışın diyagramını defterinize çiziniz."
      ],
      questions: [
        {
          qId: "etk-u4rev-q1",
          label: "1. Sentez Sorusu",
          prompt: "Fincana su eklendiğinde madeni paranın görünür hale gelmesinin nedeni nedir?",
          answer: "Paradan çıkan ışınlar sudan havaya geçerken normalden uzaklaşarak kırılmış ve fincanın kenarını aşarak gözlemcinin gözüne ulaşmıştır."
        },
        {
          qId: "etk-u4rev-q2",
          label: "2. Sentez Sorusu",
          prompt: "İçinde gizli bir mercek bulunan kutudan çıkan ışınlar birbirine yaklaşıyorsa kutu içindeki mercek nedir?",
          answer: "İnce kenarlı (yakınsak) mercektir; çünkü gelen ışınları odak noktasında toplayıcı özelliktedir."
        }
      ]
    }
  ],
  bilgiIstasyonlari: [
    {
      title: "MEB 4. Ünite Kavram Özeti (Sayfa 35 B Bölümü)",
      scientistOrMission: "4. Ünite Sonuç Bilgileri",
      description: "Işık saydam ortamlarda kırılarak yayılır. Az yoğundan çok yoğuna normale yaklaşarak; çok yoğundan az yoğuna normalden uzaklaşarak kırılır. İnce mercek ışığı toplar, hipermetropu düzeltir. Kalın mercek ışığı dağıtır, miyopu düzeltir.",
      hikmetNote: "Öğrenilen her kavram, kâinat kitabının bir harfini doğru okumamıza vesile olur."
    },
    {
      title: "Teleskopta Merceklerin İş Birliği (Sayfa 40)",
      scientistOrMission: "Murat ve Feray'ın Teleskop Modeli",
      description: "Teleskopta ışığı toplayan büyük ince kenarlı objektif merceği ile görüntüyü büyüterek göze ileten oküler merceği bir arada çalışır.",
      hikmetNote: "Küçük parçaların mükemmel iş birliği, insanı sonsuz fezayı temaşa ettirecek güçte araçlara dönüştürür."
    }
  ],
  dda: {
    id: "dda-u4rev-root",
    statement: "Işığın kırılması, ışık ışınlarının saydam bir ortamdan başka bir saydam ortama geçerken doğrultu ve sürat değiştirmesidir.",
    correctDecision: "D",
    reason: "Kırılma, hız ve doğrultu değişimi olayıdır.",
    ifTrue: {
      id: "dda-u4rev-node-d",
      statement: "İnce kenarlı mercekler cisimleri olduğundan küçük gösterir ve uzağı görme kusuru olan miyop tedavisinde kullanılır.",
      correctDecision: "Y",
      reason: "İnce kenarlı mercek cisimleri büyütür ve hipermetrop tedavisinde kullanılır; miyopta kalın kenarlı mercek kullanılır.",
      ifTrue: {
        id: "dda-u4rev-leaf-1",
        statement: "Ormanlara atılan cam kırıkları yangın tehlikesi oluşturmaz.",
        correctDecision: "Y",
        reason: "Cam kırıkları ince kenarlı mercek gibi davranıp yangına yol açar.",
        ifTrue: { exit: 1, isCorrect: false, feedback: "Hatalı yol izlendi." },
        ifFalse: { exit: 2, isCorrect: false, feedback: "İnce kenarlı mercek miyop için kullanılmaz ifadesi yanlıştı." }
      },
      ifFalse: {
        id: "dda-u4rev-leaf-2",
        statement: "Çok yoğun ortamdan az yoğun ortama geçen ışık ışınları normalden uzaklaşarak kırılır ve hızı artar.",
        correctDecision: "D",
        reason: "Çok yoğundan az yoğuna geçen ışın normalden uzaklaşır ve az yoğun ortamda hızı artar.",
        ifTrue: { exit: 3, isCorrect: true, feedback: "Tebrikler! 4. Ünite DDA değerlendirmesinde 3. Çıkışa doğru kararlarla ulaştınız." },
        ifFalse: { exit: 4, isCorrect: false, feedback: "Çok yoğundan az yoğuna geçişte normalden uzaklaşma kuralı geçerlidir." }
      }
    },
    ifFalse: {
      id: "dda-u4rev-node-y",
      statement: "Gelen ışın, normal ve kırılan ışın aynı düzlemdedir.",
      correctDecision: "D",
      reason: "Kırılma kanunudur.",
      ifTrue: { exit: 5, isCorrect: false, feedback: "Kök ifade doğruydu." }
    }
  },
  biliyorumAnliyorumDusunuyorum: {
    biliyorum: "Işığın kırılma kanunlarını, az ve çok yoğun ortamlardaki açı ve hız ilişkilerini, ince ve kalın kenarlı merceklerin odak ve görüntü özelliklerini biliyorum.",
    anliyorum: "Görünür derinlik yanılsamalarının, su dolu fincandaki madeni paranın görünmesinin ve orman yangınlarının mercek etkisinden kaynaklandığını anlıyorum.",
    dusunuyorum: "Mercekler ve ışık kanunları keşfedilmeseydi mikrobiyoloji, astronomi ve tıp bilimi bugün hangi seviyede olurdu?"
  },
  pekistirmeIstasyonu: {
    stationTitle: "Pekiştirme İstasyonu: 4. Ünite Sonuç Değerlendirme Çalışmaları",
    pageReference: "MEB 7. Sınıf Fen Bilimleri 2. Kitap, Sayfa 35-41",
    summaryText: "Bu istasyonda 4. Ünitenin tüm alt başlıklarını (kırılma kanunları, hız-yoğunluk grafikleri, mercek kutu deneyleri, teleskop mekanizması, göz kusurları ve doğa yangınları) ünite sonu soruları ekseninde pekiştirdiniz.",
    targetSkills: [
      "Sayfa 36'daki madeni para ve su deneyini optik kırılma ile temellendirme",
      "Sayfa 37'deki K-L-M hız grafiğinden yoğunluk ve kırılma açısı tahmini yapma",
      "Sayfa 38'deki kapalı kutularda mercek türü tespiti yapma",
      "Sayfa 39'daki havuzdaki kutunun görünür derinlik konumunu açıklama",
      "Sayfa 40'taki teleskop modelinde objektif ve oküler mercek görevlerini açıklama",
      "Sayfa 41'deki miyop ve hipermetrop göz kusurları ile saat tamircisi büyütecini analiz etme"
    ]
  },
  nelerOgrenildi: {
    title: "4. Ünite Sonunda Neler Öğrenildi? (Ünite Sonuç Değerlendirmesi)",
    ogrenilenKavramlar: [
      "Işığın Kırılması ve Kırılma Kanunları (Az/Çok Yoğun Ortam)",
      "Yüzey Normali, Gelme Açısı, Kırılma Açısı",
      "Görünür Derinlik (Fincandaki Para & Havuzdaki Balık)",
      "Prizmada Renklere Ayrılma (KUTUSAYAMAM)",
      "İnce Kenarlı (Yakınsak) Mercek & Odak Noktası",
      "Kalın Kenarlı (Iraksak) Mercek & Geniş Görüş Alanı",
      "Göz Kusurları (Miyop - Kalın / Hipermetrop - İnce)",
      "Orman Yangınları ve Çevre Koruması",
      "Teleskop, Mikroskop, Büyüteç, Dürbün, Kamera",
      "TÜBİTAK UZAY OPMER",
      "İbn Sehl, İbnü'l-Heysem, Mîrim Çelebi, Thomas Young"
    ],
    ozet: "MEB 7. Sınıf 2. Kitap 4. Ünite Genel Değerlendirmesi (Sayfa 35-41): Bu ünitede ışığın farklı yoğunluktaki saydam ortamlarda hız ve doğrultu değiştirerek kırıldığını (az yoğunda hızlı ve normalden uzak, çok yoğunda yavaş ve normale yakın); yüzeye dik gelen ışının kırılmadan geçtiğini; beyaz ışığın prizmada renklere ayrıldığını; ince kenarlı merceklerin ışığı odakta toplayıp cisimleri büyüterek hipermetrobu düzelttiğini ve orman yangını riski taşıdığını; kalın kenarlı merceklerin ise ışığı dağıtıp cisimleri küçülterek miyobu düzelttiğini ve kapı dürbünlerinde kullanıldığını kapsamlı deney ve problem durumlarıyla öğrendik.",
    kontrolSorulari: [
      {
        id: "ko-u4rev-1",
        soru: "K ortamında ışığın hızı L ortamındakinden büyükse, ışık K'den L'ye geçerken nasıl bir yol izler?",
        cevap: "K ortamı az yoğun, L ortamı çok yoğundur. Işık K'den L'ye geçerken yavaşlar ve yüzey normaline yaklaşarak kırılır."
      },
      {
        id: "ko-u4rev-2",
        soru: "Bir kutunun içine gönderilen paralel ışık demeti kutudan çıktıktan sonra etrafa saçılıyorsa kutu içindeki optik alet nedir?",
        cevap: "Kalın kenarlı (ıraksak) mercektir; çünkü paralel ışığı dağıtarak kırar."
      },
      {
        id: "ko-u4rev-3",
        soru: "Teleskop yapımında neden tek bir mercek yerine iki farklı mercek kullanılır?",
        cevap: "Objektif merceği uzaktaki cisimden gelen ışığı toplayarak net bir ara görüntü oluşturur; oküler merceği ise bu ara görüntüyü kat kat büyüterek insan gözünün inceleyebileceği hale getirir."
      }
    ]
  },
  sonrakiKonu: {
    code: "7.5.1",
    title: "Maddenin Tanecikli Yapısı ve Atom Modelleri"
  },
  fillInBlanks: [
    {
      id: "fib-7-4-21",
      number: 1,
      baglam: "MEB Sayfa 35 B Bölümü: Işık ışınları saydam ortamlardan geçerken doğrultu değiştirerek kırılarak yayılır.",
      soruKoku: "Işık ışınları farklı yoğunluktaki saydam ortamlardan geçerken ________ yayılır.",
      blankAnswer: "kırılarak",
      acceptableAnswers: ["kırılarak", "kirilarak"],
      explanation: "Işığın farklı ortama geçişinde bükülerek yol alması kırılarak yayılmasıdır.",
      wordBankHint: ["kırılarak", "soğrularak", "durarak", "kutupsal"]
    },
    {
      id: "fib-7-4-22",
      number: 2,
      baglam: "MEB Sayfa 35 B Bölümü: Işık ışınları az yoğun ortamdan çok yoğun ortama geçerken normale yaklaşarak kırılır.",
      soruKoku: "Işık ışınları az yoğun ortamdan çok yoğun ortama geçerken normale ________ kırılır.",
      blankAnswer: "yaklaşarak",
      acceptableAnswers: ["yaklaşarak", "yaklasarak"],
      explanation: "Az yoğundan çok yoğuna geçen ışın yavaşlar ve normale yaklaşır.",
      wordBankHint: ["yaklaşarak", "uzaklaşarak", "paralel", "sabit"]
    },
    {
      id: "fib-7-4-23",
      number: 3,
      baglam: "MEB Sayfa 35 B Bölümü: Işık ışınları çok yoğun ortamdan az yoğun ortama geçerken normalden uzaklaşarak kırılır.",
      soruKoku: "Işık ışınları çok yoğun ortamdan az yoğun ortama geçerken normalden ________ kırılır.",
      blankAnswer: "uzaklaşarak",
      acceptableAnswers: ["uzaklaşarak", "uzaklasarak"],
      explanation: "Çok yoğundan az yoğuna geçen ışın hızlanır ve normalden uzaklaşır.",
      wordBankHint: ["uzaklaşarak", "yaklaşarak", "dik", "dönerek"]
    },
    {
      id: "fib-7-4-24",
      number: 4,
      baglam: "MEB Sayfa 35 B Bölümü: Yüzeye dik gelen ışık ışınları kırılmaz.",
      soruKoku: "Ortamları ayıran yüzeye dik (90°) gelen ışık ışınları ________.",
      blankAnswer: "kırılmaz",
      acceptableAnswers: ["kırılmaz", "kirilmaz", "sapmaz"],
      explanation: "Yüzeye dik gelen ışın doğrultu değiştirmez (kırılmaz).",
      wordBankHint: ["kırılmaz", "kırılır", "yansır", "yok olur"]
    },
    {
      id: "fib-7-4-25",
      number: 5,
      baglam: "MEB Sayfa 35 B Bölümü: İnce kenarlı mercekler paralel gelen ışık ışınlarını odak noktasında toplar.",
      soruKoku: "İnce kenarlı merceğe asal eksene paralel gelen ışık ışınları ________ noktasında toplanır.",
      blankAnswer: "odak",
      acceptableAnswers: ["odak", "odak noktası"],
      explanation: "Paralel ışınların toplandığı nokta odaktır.",
      wordBankHint: ["odak", "merkez", "tepe", "kenar"]
    },
    {
      id: "fib-7-4-26",
      number: 6,
      baglam: "MEB Sayfa 35 B Bölümü: Kalın kenarlı mercekler paralel gelen ışık ışınlarını dağıtır.",
      soruKoku: "Kalın kenarlı mercekler asal eksene paralel gelen ışık ışınlarını ________.",
      blankAnswer: "dağıtır",
      acceptableAnswers: ["dağıtır", "dagitir", "uzaklaştırır"],
      explanation: "Kalın kenarlı (ıraksak) mercek ışığı dağıtarak kırar.",
      wordBankHint: ["dağıtır", "toplar", "soğurur", "durdurur"]
    },
    {
      id: "fib-7-4-27",
      number: 7,
      baglam: "MEB Sayfa 35 B Bölümü: Yakını görememe göz kusuru olan hipermetrop, ince kenarlı mercekle düzeltilir.",
      soruKoku: "Yakını net görememe kusuru olan hipermetrop göz kusuru ________ kenarlı mercekle düzeltilir.",
      blankAnswer: "ince",
      acceptableAnswers: ["ince", "yakınsak"],
      explanation: "Hipermetrop ince kenarlı mercekle düzeltilir.",
      wordBankHint: ["ince", "kalın", "silindirik", "düzlem"]
    },
    {
      id: "fib-7-4-28",
      number: 8,
      baglam: "MEB Sayfa 35 B Bölümü: Uzağı net görememe göz kusuru olan miyop, kalın kenarlı mercekle düzeltilir.",
      soruKoku: "Uzağı net görememe kusuru olan miyop göz kusuru ________ kenarlı mercekle düzeltilir.",
      blankAnswer: "kalın",
      acceptableAnswers: ["kalın", "kalin", "ıraksak"],
      explanation: "Miyop kalın kenarlı mercekle düzeltilir.",
      wordBankHint: ["kalın", "ince", "küresel", "prizmatik"]
    },
    {
      id: "fib-7-4-29",
      number: 9,
      baglam: "MEB Sayfa 35 B Bölümü: Ormanlara atılan cam kırıkları ince kenarlı mercek etkisi göstererek orman yangınlarına yol açar.",
      soruKoku: "Ormanlara atılan cam kırıkları ve pet şişeler ________ yangınlarına neden olabilmektedir.",
      blankAnswer: "orman",
      acceptableAnswers: ["orman", "orman yangınlarına"],
      explanation: "Mercek etkisi orman yangınlarını tetikler.",
      wordBankHint: ["orman", "şehir", "sanayi", "çöl"]
    },
    {
      id: "fib-7-4-30",
      number: 10,
      baglam: "MEB Sayfa 40: Teleskopta uzaktaki cisimden gelen ışığı toplayıp odaklayan ilk merceğe objektif merceği denir.",
      soruKoku: "Teleskopta uzaydaki gök cisimlerinden gelen ışıkları toplayan büyük merceğe ________ merceği denir.",
      blankAnswer: "objektif",
      acceptableAnswers: ["objektif", "objektif merceği"],
      explanation: "Işığı toplayan ön mercek objektiftir.",
      wordBankHint: ["objektif", "oküler", "gözlük", "büyüteç"]
    }
  ],
  contextQuestions: [
    {
      id: "mcq-7-4-41",
      number: 1,
      baglam: "MEB Sayfa 36'daki deneyde Azra, boş bir kupanın tabanına madeni para koymuş ve kupanın kenarından baktığında parayı görememiştir. Ancak arkadaşı kupaya su doldurduğunda Azra yerinden hiç kıpırdamadan parayı görmeye başlamıştır.",
      soruKoku: "Kupaya su doldurulduğunda madeni paranın görünür hale gelmesinin nedeni aşağıdakilerden hangisidir?",
      secenekler: {
        A: "Paranın suyun kaldırma kuvvetiyle yüzeye çıkması",
        B: "Paradan çıkan ışık ışınlarının sudan havaya geçerken normalden uzaklaşarak kırılıp Azra'nın gözüne ulaşması",
        C: "Suyun havadan daha az yoğun bir ortam olması",
        D: "Madeni paranın suyun içinde eriyerek parlaması"
      },
      dogruCevap: "B",
      cozum: "Kupa boşken paradan çıkan ışınlar doğrusal ilerleyip kupa kenarına takılır. Su konulduğunda çok yoğun sudan az yoğun havaya çıkan ışınlar normalden uzaklaşarak bükülür ve kupanın kenarını aşarak göze ulaşır.",
      olculenKazanim: "F.7.4.1.1. Işığın kırılması deneyini ve görünür derinliği irdeler.",
      olculenBeceri: "Deneysel Süreç Analizi",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-42",
      number: 2,
      baglam: "MEB Sayfa 37'de K, L ve M saydam ortamlarında ışığın yayılma hızları grafiği verilmiştir. Grafikte ışığın yayılma hızları sırasıyla: K ortamında 270.000 km/s, L ortamında 220.000 km/s ve M ortamında 180.000 km/s olarak gösterilmiştir.",
      soruKoku: "Buna göre K, L ve M ortamlarının yoğunluklarının (kırıcılıklarının) büyükten küçüğe doğru sıralanışı nasıldır?",
      secenekler: {
        A: "K > L > M",
        B: "M > L > K",
        C: "L > K > M",
        D: "M > K > L"
      },
      dogruCevap: "B",
      cozum: "Işığın yayılma hızı ile ortam yoğunluğu ters orantılıdır. Işık en yavaş M ortamında yayıldığına göre en yoğun ortam M'dir. Işığın en hızlı yayıldığı K ortamı ise en az yoğundur. Sıralama: M > L > K.",
      olculenKazanim: "F.7.4.1.2. Işık hızı grafiğinden ortam yoğunluklarını karşılaştırır.",
      olculenBeceri: "Grafik Okuma ve Yorumlama",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-43",
      number: 3,
      baglam: "Bir ışık ışını yukarıdaki soruya göre L ortamından K ortamına gönderilmektedir (L'nin hızı 220.000 km/s, K'nin hızı 270.000 km/s).",
      soruKoku: "Işığın L ortamından K ortamına geçişiyle ilgili aşağıdakilerden hangisi doğrudur?",
      secenekler: {
        A: "Işık çok yoğundan az yoğuna geçtiği için normalden uzaklaşarak kırılır.",
        B: "Işık az yoğundan çok yoğuna geçtiği için normale yaklaşarak kırılır.",
        C: "Işığın hızı K ortamında azalır.",
        D: "Gelme açısı kırılma açısından daha büyük olur."
      },
      dogruCevap: "A",
      cozum: "L ortamı M'den sonra en yoğun, K ise en az yoğun ortamdır. Işık çok yoğun L'den az yoğun K'ye geçerken hızlanır ve normalden uzaklaşarak kırılır (kırılma açısı > gelme açısı).",
      olculenKazanim: "F.7.4.1.2. Çok yoğundan az yoğuna geçiş kurallarını uygular.",
      olculenBeceri: "Mantıksal Akıl Yürütme",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-44",
      number: 4,
      baglam: "MEB Sayfa 38'de iki kapalı kutunun içine birbirine paralel ikişer ışık ışını gönderilmiştir. 1. kutudan çıkan ışınlar birbirine doğru yaklaşarak bir noktada kesişmiş; 2. kutudan çıkan ışınlar ise birbirinden uzaklaşarak dağılmıştır.",
      soruKoku: "1 ve 2 numaralı kapalı kutuların içinde bulunan optik mercek türleri aşağıdakilerden hangisidir?",
      secenekler: {
        A: "1. Kutu: İnce kenarlı mercek / 2. Kutu: Kalın kenarlı mercek",
        B: "1. Kutu: Kalın kenarlı mercek / 2. Kutu: İnce kenarlı mercek",
        C: "Her iki kutuda da ince kenarlı mercek vardır.",
        D: "Her iki kutuda da düzlem ayna vardır."
      },
      dogruCevap: "A",
      cozum: "1. kutuda ışınlar toplanarak odakta kesiştiği için ince kenarlı (yakınsak) mercek; 2. kutuda ışınlar dağıldığı için kalın kenarlı (ıraksak) mercek bulunmaktadır.",
      olculenKazanim: "F.7.4.2.1. Işık demetlerinin davranışından mercek türünü belirler.",
      olculenBeceri: "Tersine Mühendislik ve Teşhis",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-45",
      number: 5,
      baglam: "MEB Sayfa 39'daki soruda Alper, 2 metre derinliğindeki bir yüzme havuzunun dibinde duran plastik kutuya yukarıdan baktığında kutunun derinliğini tahmin etmeye çalışmaktadır.",
      soruKoku: "Alper havuzdaki kutuyu gerçekte olduğu derinliğe göre nasıl algılar?",
      secenekler: {
        A: "Tam olarak 2 metre derinlikte görür.",
        B: "2 metreden daha sığda (yüzeye daha yakın, örneğin 1.5 metrede) görür.",
        C: "2 metreden daha derinde (örneğin 3 metrede) görür.",
        D: "Kutuyu havuzun dışına fırlamış gibi görür."
      },
      dogruCevap: "B",
      cozum: "Az yoğun ortamdan (hava) çok yoğun ortama (su) bakan bir gözlemci, cisimden gelen ışınlar sudan havaya geçerken normalden uzaklaşarak kırıldığı için cismi gerçekte olduğundan daha yakında (daha sığda) görür.",
      olculenKazanim: "F.7.4.1.1. Havadan suya bakışta görünür derinliği irdeler.",
      olculenBeceri: "Problem Çözme ve Günlük Yaşam",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-46",
      number: 6,
      baglam: "MEB Sayfa 40'ta Murat ve Feray, bir karton boru ve iki mercek kullanarak basit bir mercekli astronomi teleskobu yapmışlardır. Modelde borunun ön ucundaki mercek (objektif) ışığı toplarken, arka uçtaki mercek (oküler) görüntüyü büyütmektedir.",
      soruKoku: "Teleskop modelindeki mercekler ve işlevleri ile ilgili aşağıdaki açıklamalardan hangisi yanlıştır?",
      secenekler: {
        A: "Objektif merceği uzaktaki cisimden gelen zayıf ışığı toplayarak odakta odaklar.",
        B: "Oküler merceği gözün rahatça inceleyebileceği büyük bir görüntü oluşturur.",
        C: "Teleskobun çalışabilmesi için iki merceğin de ışığı dağıtan kalın kenarlı mercek olması zorunludur.",
        D: "Teleskop sayesinde çıplak gözle seçilemeyen uzaktaki gök cisimleri yakındaymış gibi görünür."
      },
      dogruCevap: "C",
      cozum: "Astronomik mercekli teleskoplarda objektif ışığı toplayan ince kenarlı mercektir. Her iki merceğin kalın kenarlı olması teleskobun çalışmasını sağlamaz (kalın mercek ışığı dağıtır).",
      olculenKazanim: "F.7.4.2.2. Teleskop sistemlerinde merceklerin işlevini analiz eder.",
      olculenBeceri: "Teknolojik Düzenek Analizi",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-47",
      number: 7,
      baglam: "MEB Sayfa 41'deki soruda Mert tahtadaki uzaktaki yazıları okuyamazken (miyop); Erkan ise elindeki kitaptaki yakındaki yazıları okuyamamaktadır (hipermetrop).",
      soruKoku: "Mert ve Erkan'ın göz kusurlarının düzeltilmesi için kullanmaları gereken gözlük mercekleri hangi seçenekte doğru verilmiştir?",
      secenekler: {
        A: "Mert: Kalın kenarlı mercek / Erkan: İnce kenarlı mercek",
        B: "Mert: İnce kenarlı mercek / Erkan: Kalın kenarlı mercek",
        C: "Her ikisi de ince kenarlı mercek kullanmalıdır.",
        D: "Her ikisi de kalın kenarlı mercek kullanmalıdır."
      },
      dogruCevap: "A",
      cozum: "Miyop (uzağı görememe) kusuru ışığı dağıtıcı kalın kenarlı mercekle; hipermetrop (yakını görememe) kusuru ise ışığı toplayıcı ince kenarlı mercekle düzeltilir.",
      olculenKazanim: "F.7.4.2.2. Göz kusurları ve mercek eşleştirmesini yapar.",
      olculenBeceri: "Tıbbi Optik Uygulamaları",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-48",
      number: 8,
      baglam: "MEB Sayfa 41'de bir saat tamircisinin gözüne taktığı özel büyüteç gösterilmektedir. Saat tamircisi çarkların en küçük dişlilerini bu mercekle incelemektedir.",
      soruKoku: "Saat tamircisinin büyüteci ile ilgili olarak I. İnce kenarlı mercektir. II. Cisimleri düz ve büyük gösterir. III. Işığı dağıtıcı özelliktedir. ifadelerinden hangileri doğrudur?",
      secenekler: {
        A: "Yalnız I",
        B: "I ve II",
        C: "II ve III",
        D: "I, II ve III"
      },
      dogruCevap: "B",
      cozum: "Büyüteç ince kenarlı mercektir ve cisimleri düz ve büyük gösterir (I ve II doğru). Işığı dağıtmaz, odakta toplar (III yanlış).",
      olculenKazanim: "F.7.4.2.2. Büyüteç özelliklerini irdeler.",
      olculenBeceri: "Öncüllü Muhakeme",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-49",
      number: 9,
      baglam: "Güneşli bir piknik gününün ardından geride bırakılan içi yarısına kadar su dolu pet şişeler ormanlık alanda bırakılmıştır. Birkaç saat sonra pet şişenin altındaki kuru otların alev aldığı görülmüştür.",
      soruKoku: "Bu doğa felaketine yol açan fiziksel etkeni açıklayan en doğru ifade hangisidir?",
      secenekler: {
        A: "Pet şişenin güneş ışığını tamamen soğurup elektriğe dönüştürmesi",
        B: "Su dolu pet şişenin ince kenarlı mercek etkisi göstererek paralel güneş ışınlarını tek bir noktaya odaklaması ve kuru otları tutuşturması",
        C: "Plastiğin kendi kendine tutuşma özelliğinin olması",
        D: "Pet şişenin kalın kenarlı mercek gibi davranması"
      },
      dogruCevap: "B",
      cozum: "Küresel ve silindirik su dolu şişeler ince kenarlı mercek davranışı sergiler. Güneş ışığını odak noktasında toplayarak sıcaklığı yüzlerce dereceye ulaştırır ve orman yangınına sebep olur.",
      olculenKazanim: "F.7.4.2.3. Orman yangınları ve mercek tehlikesini açıklar.",
      olculenBeceri: "Çevre ve Doğa Sorumluluğu",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-50",
      number: 10,
      baglam: "Bir fen deneyinde prizmaya gönderilen beyaz güneş ışığı kırılarak kırmızıdan mora kadar renklere ayrılmıştır.",
      soruKoku: "Güneş ışığının prizmada renklere ayrılması sürecinde en az sapan (en az kırılan) renk ile en çok sapan (en çok kırılan) renk sırasıyla hangileridir?",
      secenekler: {
        A: "Kırmızı - Mor",
        B: "Mor - Kırmızı",
        C: "Sarı - Yeşil",
        D: "Mavi - Turuncu"
      },
      dogruCevap: "A",
      cozum: "Prizmada dalga boyu en büyük olan kırmızı ışık en az kırılır; frekansı en yüksek olan mor ışık en çok kırılır.",
      olculenKazanim: "F.7.4.1.3. Prizmada ışığın renklere ayrışma sırasını kavrar.",
      olculenBeceri: "Optik Bilgisi",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-51",
      number: 11,
      baglam: "Bir öğrenci optik merkezinden geçen ışının sapmadan yoluna devam ettiğini gözlemlemiştir.",
      soruKoku: "Merceğin tam orta noktası olan bu referans noktasına ne ad verilir?",
      secenekler: {
        A: "Odak Noktası (F)",
        B: "Optik Merkez (O)",
        C: "Kırılma Köşesi",
        D: "Asal Tepe"
      },
      dogruCevap: "B",
      cozum: "Merceğin tam orta noktasına optik merkez (O) denir ve buradan geçen ışınlar doğrultu değiştirmeden geçer.",
      olculenKazanim: "F.7.4.2.1. Merceğin temel elemanlarını tanımlar.",
      olculenBeceri: "Tanım ve Kavram Netliği",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-52",
      number: 12,
      baglam: "Hava ortamından su ortamına 40°'lik gelme açısıyla gönderilen ışık ışını için kırılma açısı ölçülecektir.",
      soruKoku: "Suyun yoğunluğu havadan büyük olduğuna göre ölçülen kırılma açısı aşağıdakilerden hangisi olabilir?",
      secenekler: {
        A: "28°",
        B: "40°",
        C: "55°",
        D: "90°"
      },
      dogruCevap: "A",
      cozum: "Az yoğundan çok yoğuna geçen ışın normale yaklaşarak kırılır. Bu nedenle kırılma açısı gelme açısından (40°) küçük olmalıdır (28° uygundur).",
      olculenKazanim: "F.7.4.1.2. Az yoğundan çok yoğuna geçiş açısını tahmin eder.",
      olculenBeceri: "Sayısal Akıl Yürütme",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-53",
      number: 13,
      baglam: "Bir gölette yüzen sazan balığı, suyun üzerinden uçan bir balıkçıl kuşunu fark etmiştir. Balıkçıl kuşu su yüzeyinden 3 metre yukarıda uçmaktadır.",
      soruKoku: "Sazan balığı suyun içinden baktığında kuşu gerçekte uçtuğu yüksekliğe göre nasıl görür?",
      secenekler: {
        A: "Tam 3 metre yükseklikte",
        B: "3 metreden daha yüksekte (örneğin 4 metrede)",
        C: "3 metreden daha alçakta (örneğin 1 metrede)",
        D: "Suyun dibinde"
      },
      dogruCevap: "B",
      cozum: "Çok yoğun ortamdan (su) az yoğun ortama (hava) bakan bir canlı, kuştan gelen ışınların suya girerken normale yaklaşması sebebiyle kuşu olduğundan daha uzakta (daha yüksekte) görür.",
      olculenKazanim: "F.7.4.1.1. Sudan havaya bakışta görünür yüksekliği irdeler.",
      olculenBeceri: "Doğa Olayı Çıkarımı",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-54",
      number: 14,
      baglam: "Bir apartman dairesinin çelik kapısında koridoru görmek için kullanılan kapı dürbünü incelenmektedir.",
      soruKoku: "Kapı dürbünlerinde kalın kenarlı mercek kullanılmasının temel gerekçesi nedir?",
      secenekler: {
        A: "Gelen kişiyi devasa boyutta büyüterek yüzündeki gözenekleri göstermek",
        B: "Işığı dağıtarak daha geniş bir görüş alanı sunmak ve kapı önündeki herkesi kadraja sığdırmak",
        C: "Koridoru tamamen karanlık göstermek",
        D: "Ziyaretçiyi ters göstermek"
      },
      dogruCevap: "B",
      cozum: "Kalın kenarlı mercekler cisimleri küçültür ve ışığı dağıtıcı yapısıyla çok geniş bir açıyı küçük bir delikten görmemizi sağlar.",
      olculenKazanim: "F.7.4.2.2. Kapı dürbününün optik prensibini açıklar.",
      olculenBeceri: "Teknolojik Tasarım Amacı",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-55",
      number: 15,
      baglam: "TÜBİTAK UZAY OPMER laboratuvarında İMECE ve GÖKTÜRK gibi millî yer gözlem uydularımız için yüksek çözünürlüklü optik sistemler üretilmektedir.",
      soruKoku: "Millî optik sistemlerinin ülkemizde üretilmesinin savunma ve uzay sanayiine sağladığı fayda hangisidir?",
      secenekler: {
        A: "Dışa bağımlılığı kaldırarak stratejik uydu görüntülerinin bağımsız elde edilmesi",
        B: "Tüm uyduların merceksiz uzaya fırlatılması",
        C: "Fotoğraf çekiminin yasaklanması",
        D: "Cam tüketiminin sıfırlanması"
      },
      dogruCevap: "A",
      cozum: "OPMER sayesinde millî uydularımızın optik kalbi Türkiye'de üretilmekte ve stratejik bağımsızlık sağlanmaktadır.",
      olculenKazanim: "F.7.4.2.2. Milli optik teknolojilerini kavrar.",
      olculenBeceri: "Stratejik Teknoloji Farkındalığı",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-56",
      number: 16,
      baglam: "İbn Sehl'in 10. yüzyılda mercekler ve kırılma üzerine yaptığı çizimler, optik biliminin tarihindeki en erken matematiksel modeller arasında yer alır.",
      soruKoku: "İbn Sehl'in bu çalışmaları bilim dünyasına hangi yöntemi kazandırmıştır?",
      secenekler: {
        A: "Doğa olaylarını sadece felsefi tahminlerle açıklamak",
        B: "Optik ve kırılma olaylarını somut geometrik modeller ve hassas çizimlerle izah etmek",
        C: "Deney yapmayı tamamen terk etmek",
        D: "Işığın maddesel parçacık olduğunu reddetmek"
      },
      dogruCevap: "B",
      cozum: "İbn Sehl, küresel merceklerde kırılmayı hassas geometrik çizimlerle modelleyen tarihteki ilk bilgindir.",
      olculenKazanim: "F.7.4.2.4. İbn Sehl'in bilimsel yaklaşımını kavrar.",
      olculenBeceri: "Bilim Tarihi ve Metodoloji",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-57",
      number: 17,
      baglam: "Işık demeti yoğunluğu çok olan camdan yoğunluğu az olan havaya geçerken gelme açısı büyütüldükçe kırılma açısı da büyümüş ve bir noktada kırılan ışın iki ortamı ayıran yüzey üzerinden gitmiştir.",
      soruKoku: "Kırılma açısının tam 90° olduğu bu andaki gelme açısına ne ad verilir?",
      secenekler: {
        A: "Sınır açısı",
        B: "Yansıma açısı",
        C: "Tepe açısı",
        D: "Optik açı"
      },
      dogruCevap: "A",
      cozum: "Çok yoğundan az yoğuna geçerken kırılma açısının 90° olduğu andaki gelme açısına sınır açısı denir. Gelme açısı sınır açısından büyük olursa tam yansıma gerçekleşir.",
      olculenKazanim: "F.7.4.1.2. Sınır açısı ve tam yansıma kavramını fark eder.",
      olculenBeceri: "İleri Düzey Optik Çıkarımı",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-58",
      number: 18,
      baglam: "Bir fen projesinde mikroskop tasarlayan öğrenciler iki ince kenarlı merceği aralarında belirli bir mesafe olacak şekilde aynı asal eksen üzerine yerleştirmişlerdir.",
      soruKoku: "Öğrencilerin mikroskopta iki ince kenarlı mercek kullanmalarının amacı nedir?",
      secenekler: {
        A: "Işığı dağıtıp görüntüyü tamamen küçültmek",
        B: "Birinci mercekle büyütülen görüntüyü ikinci mercekle bir kez daha büyüterek mikro boyutlardaki hücreleri görünür kılmak",
        C: "Mikroskobun ağır olmasını sağlamak",
        D: "Merceklerin birbirini kırmasını engellemek"
      },
      dogruCevap: "B",
      cozum: "Mikroskopta objektif ve oküler mercekleri görüntüyü katlamalı olarak büyüterek çıplak gözle görülemeyen mikroskobik canlı ve hücrelerin incelenmesini sağlar.",
      olculenKazanim: "F.7.4.2.2. Mikroskop optik yapısını çözümler.",
      olculenBeceri: "Optik Alet Tasarımı",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-59",
      number: 19,
      baglam: "Bir ışık ışınının farklı ortamlardaki davranışı incelendiğinde: I. Yüzeye dik gelen ışın kırılmaz. II. Az yoğundan çok yoğuna geçen ışının hızı azalır. III. Çok yoğundan az yoğuna geçen ışın normale yaklaşır.",
      soruKoku: "Yukarıda verilen yargılardan hangileri doğrudur?",
      secenekler: {
        A: "I ve II",
        B: "I ve III",
        C: "II ve III",
        D: "I, II ve III"
      },
      dogruCevap: "A",
      cozum: "I ve II doğrudur. III yanlıştır çünkü çok yoğundan az yoğuna geçen ışın normale yaklaşmaz, normalden uzaklaşır.",
      olculenKazanim: "F.7.4.1.2. Kırılma kurallarını analiz eder.",
      olculenBeceri: "Eleştirel Öncül Değerlendirme",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    },
    {
      id: "mcq-7-4-60",
      number: 20,
      baglam: "4. Ünite boyunca incelediğimiz gibi; ışığın camda, suda ve havada takip ettiği rotalar, prizmadaki renk ayrışması ve merceklerin odaklama mekanizması santimetrenin milyonda biri hassasiyetinde işleyen matematiksel bir nizamın ürünüdür.",
      soruKoku: "Bu muhteşem fiziksel intizamın tefekkürü insana hangi temel hayat düsturunu kazandırır?",
      secenekler: {
        A: "Tabiatın tesadüfi çarpışmalarla rastgele oluştuğunu",
        B: "Evrendeki en küçük ışık huzmesinden en büyük yıldızlara kadar her varlığın sonsuz bir ilim, hikmet ve adaletle yaratılıp idare edildiğini",
        C: "Optik biliminin insan aklına hiçbir katkısı olmadığını",
        D: "Işık kanunlarının her an bozulabileceğini"
      },
      dogruCevap: "B",
      cozum: "Işığın şaşmaz kırılma kanunları ve merceklerdeki kusursuz geometrik intizam, kâinatın sahipsiz ve başıboş olmadığını, sonsuz bir ilim ve hikmet sahibinin eseri olduğunu açıkça gösterir.",
      olculenKazanim: "F.7.4.1.1. Hikmet ve kâinat tasavvuru eksenli bütüncül fen bilinci kazanır.",
      olculenBeceri: "Hikmet, Tefekkür ve Değerler Eğitimi",
      kaliteAudit: {
        gercekYasamBaglami: true,
        problemDurumu: true,
        fenBilgisiBaglamaGomulu: true,
        dusunmeGerektiriyor: true,
        ezberdenUzak: true,
        gorselVeriIslevsel: true,
        soruKokuAcik: true,
        tekDogruCevap: true,
        bilimselDogruluk: true,
        seviyeUygunlugu: true,
        kalitePuani: 20
      }
    }
  ]
};
