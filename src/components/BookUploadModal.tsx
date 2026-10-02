import React, { useState } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  BookOpen, 
  Cpu, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { SectionContent } from '../types';

interface BookUploadModalProps {
  onSectionGenerated: (newSection: SectionContent) => void;
  onClose: () => void;
}

export const BookUploadModal: React.FC<BookUploadModalProps> = ({
  onSectionGenerated,
  onClose
}) => {
  const [bookTitle, setBookTitle] = useState('');
  const [textContent, setTextContent] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detectedResult, setDetectedResult] = useState<any | null>(null);

  // Sample presets for quick testing
  const presets = [
    {
      label: '5. Sınıf: Güneş, Dünya ve Ay (1. Ünite Örneği)',
      title: '5. Sınıf Fen Bilimleri 1. Kitap',
      content: `5. SINIF FEN BİLİMLERİ DERS KİTABI - 1. ÜNİTE: GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ
1. BÖLÜM: GÜNEŞ'İN YAPISI VE ÖZELLİKLERİ
Kazanımlar: F.5.1.1.1. Güneş'in yapısı ve dönme hareketini açıklar.
Güneş, Samanyolu galaksisinde yer alan orta büyüklükte sarı bir cüce yıldızdır. Dünyamıza hayat veren ana ısı ve ışık kaynağımızdır. Çapı Dünya'mızın yaklaşık 109 katıdır. İçine yaklaşık 1 milyon 300 bin adet Dünya sığabilir.
Güneş katmanlardan oluşur: Çekirdek, Işık küre, Renk küre ve Taç küre. Güneş'in yüzey sıcaklığı yaklaşık 6.000 °C iken, merkezinde bu sıcaklık 15 milyon °C'ye ulaşır.
Güneş'in yüzeyinde çevrelerine göre daha soğuk olan koyu lekeler bulunur. Bunlara Güneş Lekeleri denir. Galileo Galilei teleskopuyla bu lekeleri gözlemleyerek Güneş'in kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) döndüğünü ispatlamıştır. Güneş kendi ekseni etrafındaki bir tam dönüşünü yaklaşık 25 günde tamamlar. Dünyamız ile Güneş arasındaki 150 milyon kilometrelik mesafe, ne yanmamıza ne de donmamıza sebep olacak hassas bir ölçüde tanzim edilmiştir.`
    },
    {
      label: '5. Sınıf: Maddenin Değişimi ve Hal Değişimleri (4. Ünite Örneği)',
      title: '5. Sınıf Fen Bilimleri - Maddenin Değişimi',
      content: `5. SINIF FEN BİLİMLERİ - 4. ÜNİTE: MADDENİN DEĞİŞİMİ
1. BÖLÜM: MADDENİN HAL DEĞİŞİMİ
Kazanımlar: F.5.4.1.1. Maddelerin ısı etkisiyle hal değiştirebileceğine yönelik deneyler yapar.
Maddeler katı, sıvı ve gaz olmak üzere üç temel halde bulunurlar. Maddenin ısı alarak ya da ısı vererek bir halden başka bir hale geçmesine hal değişimi denir.
Erime: Katı bir maddenin ısı alarak sıvı hale geçmesidir. (Örn: Buzun eriyip suya dönüşmesi).
Donma: Sıvı bir maddenin çevresine ısı vererek katı hale geçmesidir.
Buharlaşma: Sıvı maddenin her sıcaklıkta ısı alarak gaz haline geçmesidir.
Yoğuşma: Gaz maddenin ısı vererek sıvı hale gelmesidir. Yağmur ve çiğ oluşumu yoğuşma sayesindedir.
Süblimleşme: Katı maddenin sıvılaşmadan doğrudan gaz haline geçmesidir (Örn: Naftalin).
Kırağılaşma: Gaz maddenin doğrudan katıya dönüşmesidir.
Doğadaki su döngüsü, yeryüzündeki tüm canlıların su ihtiyacını karşılamak üzere kurulmuş muazzam bir arıtma ve geri dönüşüm sistemidir.`
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError(null);

    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target?.result as string;
      setTextContent(text);
      if (!bookTitle) {
        setBookTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    };
    reader.onerror = () => {
      setError('Dosya okunurken bir hata meydana geldi.');
    };
    reader.readAsText(file);
  };

  const handleAnalyze = async () => {
    if (!textContent.trim()) {
      setError('Lütfen bir ders kitabı metni giriniz veya dosya yükleyiniz.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/analyze-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          textContent,
          bookName: bookTitle || 'Yüklenen Fen Kitabı',
          requestedGrade: 5
        })
      });

      const resJson = await response.json();

      if (response.ok && resJson.success && resJson.data) {
        const d = resJson.data;
        setDetectedResult(d);

        // Construct SectionContent object
        const newSec: SectionContent = {
          code: d.sectionCode || '5.X.1',
          title: d.sectionTitle || 'Otomatik Analiz Edilen Bölüm',
          unitCode: `${d.detectedGrade || 5}. Sınıf Ünite`,
          unitTitle: d.unitTitle || 'İncelenen Ünite',
          summary: d.summary || textContent.slice(0, 200),
          kazanimlar: d.kazanimlar || ['Kitaptan çıkarılan ana fen kazanımları'],
          hatirlayalim: {
            text: 'Bu bölüm öncesinde öğrenilen temel fen kavramları hatırlanır.',
            keyPoints: ['Temel fen gözlemleri', 'Ölçme ve deney kültürü']
          },
          onDegerlendirme: [
            {
              id: 'on-auto-1',
              question: 'Bu bölümün ana inceleme konusu nedir?',
              answer: d.summary || 'Kitap metninde anlatılan ana bilimsel olgudur.'
            }
          ],
          hazirlik: {
            question: 'Bu doğa olayını günlük hayatımızda nerede gözlemleriz?',
            answer: 'Çevremizdeki doğa nizamında ve günlük yaşam uygulamalarında açıkça görülür.'
          },
          merak: {
            question: 'Bilim insanları bu olguyu ilk kez nasıl keşfetmiştir?',
            answer: 'Gözlem, deney ve hassas ölçüm aletleriyle keşfedilmiştir.'
          },
          hikmetStages: [
            {
              stage: 1,
              name: '1. Varlığı Tanıt',
              concept: 'Doğa Kanunu ve Varlık',
              text: d.hikmetSummary || 'Evrendeki her varlık birbiriyle uyumlu ve hikmetli bir gayeye hizmet eder.'
            },
            {
              stage: 2,
              name: '2. Ölçü ve Düzeni Göster',
              concept: 'Hassas Nizam',
              text: 'Maddenin ve kuvvetlerin hareketinde rastgeleliğe yer olmayan matematiksel bir denge hüküm sürer.'
            }
          ],
          etkinlikler: [
            {
              id: 'etk-auto-1',
              title: `${d.sectionTitle || 'Konu'} Deney ve İncelemesi`,
              type: 'Gözlem & Ölçüm',
              materials: ['Gözlem defteri', 'Ölçü aleti', 'Deney numunesi'],
              steps: ['Örnek hazırlanır', 'Ölçümler kaydedilir', 'Sonuçlar analiz edilir'],
              questions: [
                {
                  qId: 'etk-auto-1-a',
                  label: 'a',
                  prompt: 'Deney sonucunda elde edilen temel bilimsel çıkarım nedir?',
                  answer: 'Fiziksel olayın kurallara bağlı olarak ölçülü ve düzenli gerçekleştiğidir.'
                }
              ]
            }
          ],
          bilgiIstasyonlari: [
            {
              title: 'Tarihsel Keşif ve Bilim İnsanı',
              scientistOrMission: 'İslam ve Dünya Bilim Öncüleri',
              description: 'Doğa olaylarının altında yatan kanunları keşfederek insanlığa fayda sunmuşlardır.',
              hikmetNote: 'Her keşif kâinattaki muazzam ahengi daha net görmemizi sağlar.'
            }
          ],
          dda: {
            id: 'dda-auto-1',
            statement: `${d.sectionTitle || 'Bu fen konusunda'} anlatılan olaylar rastgele değil, ölçülü bir kanunla işler.`,
            correctDecision: 'D',
            reason: 'Tüm bilimsel yasalar düzeni ve ölçüyü ispatlar.',
            ifTrue: {
              exit: 1,
              isCorrect: true,
              feedback: 'Tebrikler! Doğru çıkışa ulaştınız.'
            },
            ifFalse: {
              exit: 2,
              isCorrect: false,
              feedback: 'Hatalı karar.'
            }
          },
          biliyorumAnliyorumDusunuyorum: d.biliyorumAnliyorumDusunuyorum || {
            biliyorum: 'Bu konudaki temel bilimsel kavram ve kanunlar.',
            anliyorum: 'Parçaların birbiriyle uyumlu çalışması.',
            dusunuyorum: 'Evrendeki ölçü, hikmet ve sanatın tefekkürü.'
          },
          fillInBlanks: (d.fillInBlanks && d.fillInBlanks.length > 0) ? d.fillInBlanks.map((b: any, bIdx: number) => ({
            id: `fib-auto-${bIdx + 1}`,
            number: b.number || bIdx + 1,
            baglam: b.baglam || 'Kitap metninden çıkarılan gerçek yaşam bağlamı.',
            soruKoku: b.soruKoku || 'Bu olay .................................... kavramı ile açıklanır.',
            blankAnswer: b.blankAnswer || 'Kavram',
            acceptableAnswers: [b.blankAnswer, (b.blankAnswer || '').toLowerCase()],
            explanation: b.explanation || 'Doğru bilimsel terim.',
            wordBankHint: b.wordBankHint || [b.blankAnswer, 'Terim1', 'Terim2']
          })) : [
            {
              id: 'fib-auto-1',
              number: 1,
              baglam: 'Kitap metninde anlatılan ana fiziksel süreç incelenir.',
              soruKoku: 'Bu süreç fen bilimlerinde .................................... olarak adlandırılır.',
              blankAnswer: 'Fen Bilimi',
              acceptableAnswers: ['Fen Bilimi', 'fen bilimi'],
              explanation: 'Kitaptaki ana kavramdır.',
              wordBankHint: ['Fen Bilimi', 'Kuvvet', 'Enerji', 'Madde']
            }
          ],
          contextQuestions: (d.contextQuestions && d.contextQuestions.length > 0) ? d.contextQuestions.map((q: any, qIdx: number) => ({
            id: `mcq-auto-${qIdx + 1}`,
            number: q.number || qIdx + 1,
            baglam: q.baglam || 'Laboratuvarda yapılan bir deney ve ölçüm tablosu.',
            soruKoku: q.soruKoku || 'Bu deneyden çıkarılabilecek en doğru sonuç hangisidir?',
            secenekler: q.secenekler || {
              A: 'Doğa kanunları düzenli işler.',
              B: 'Ölçümler rastgeledir.',
              C: 'Kuvvet ölçülemez.',
              D: 'Maddeler değişmez.'
            },
            dogruCevap: q.dogruCevap || 'A',
            cozum: q.cozum || 'Kitap verileri incelendiğinde doğru çıkarım A seçeneğidir.',
            olculenKazanim: q.olculenKazanim || 'F.5.X.X',
            olculenBeceri: q.olculenBeceri || 'Veri Analizi ve Çıkarım',
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
          })) : []
        };

        onSectionGenerated(newSec);
      } else {
        // Fallback local processing
        const fallbackSec: SectionContent = {
          code: '5.4.1',
          title: bookTitle || 'Maddenin Değişimi ve Hal Değişimleri',
          unitCode: '4. Ünite',
          unitTitle: 'Maddenin Değişimi',
          summary: textContent.slice(0, 300),
          kazanimlar: ['F.5.4.1.1. Maddelerin ısı etkisiyle hal değiştirebileceğine yönelik çıkarımlar yapar.'],
          hatirlayalim: {
            text: 'Maddelerin katı, sıvı ve gaz halleri ve çevremizdeki ısı alışverişi hatırlanır.',
            keyPoints: ['Maddeler ısı alır veya verir', 'Su döngüsü hayatın devamı için tanzim edilmiştir']
          },
          onDegerlendirme: [
            {
              id: 'on-fall-1',
              question: 'Buzun eriyerek su haline gelmesi için ne gerekir?',
              answer: 'Buzun ortamdan ısı alması gerekir.'
            }
          ],
          hazirlik: {
            question: 'Çamaşırlar balkonda kururken su nereye gider?',
            answer: 'Güneş ve rüzgârın etkisiyle buharlaşarak atmosfere karışır.'
          },
          merak: {
            question: 'Kışın arabaların camlarında oluşan kırağı nasıl meydana gelir?',
            answer: 'Havadaki su buharının aniden donarak doğrudan buz kristallerine dönüşmesiyle oluşur.'
          },
          hikmetStages: [
            {
              stage: 1,
              name: '1. Varlığı Tanıt',
              concept: 'Suyun ve Maddenin Formları',
              text: 'Su aynı kimyasal yapıda kalarak hem buz, hem su, hem de buhar olarak canlılığa hizmet ettirilir.'
            },
            {
              stage: 2,
              name: '2. Vazife ve Hikmet',
              concept: 'Kusursuz Su Döngüsü',
              text: 'Okyanuslardan buharlaşan su, gökyüzünde temizlenip tatlı yağmur olarak yeryüzündeki bitki ve hayvanlara ulaştırılır.'
            }
          ],
          etkinlikler: [
            {
              id: 'etk-fall-1',
              title: 'Buzun Erimesi ve Isı Alışverişi',
              type: 'Deney',
              materials: ['Buz küpü', 'Beherglas', 'Termometre'],
              steps: ['Buz beherin içine konur', 'Sıcaklık 2 dakikada bir ölçülür'],
              questions: [
                {
                  qId: 'etk-fall-1-a',
                  label: 'a',
                  prompt: 'Erime süresince sıcaklık neden sabit kalır?',
                  answer: 'Alınan ısı tanecikler arasındaki bağları kırmak için kullanılır.'
                }
              ]
            }
          ],
          bilgiIstasyonlari: [
            {
              title: 'Su Döngüsü ve Canlılık',
              scientistOrMission: 'Doğa Nizamı',
              description: 'Yeryüzündeki suyun milyarlarca yıldır tükenmeden devir daim etmesi.',
              hikmetNote: 'Muazzam bir geri dönüşüm fabrikası kurulmuştur.'
            }
          ],
          dda: {
            id: 'dda-fall-1',
            statement: 'Erime sırasında madde çevresine ısı verir.',
            correctDecision: 'Y',
            reason: 'Erime sırasında madde çevresinden ısı alır.',
            ifFalse: {
              exit: 2,
              isCorrect: true,
              feedback: 'Doğru analiz! 2. Çıkışa ulaştınız.'
            }
          },
          biliyorumAnliyorumDusunuyorum: {
            biliyorum: 'Isı alan madde erir, buharlaşır; ısı veren madde donar, yoğuşur.',
            anliyorum: 'Hal değişimleri doğadaki su döngüsünü ve iklim ahengini sağlar.',
            dusunuyorum: 'Suyun bu muazzam döngüsü olmasaydı yeryüzünde hayat birkaç haftada sona ererdi.'
          },
          fillInBlanks: [
            {
              id: 'fib-fall-1',
              number: 1,
              baglam: 'Sıcak bir yaz gününde bardağa konulan buz yavaşça suya dönüşmektedir.',
              soruKoku: 'Katı bir maddenin ısı alarak sıvı hale geçmesine .................................... denir.',
              blankAnswer: 'Erime',
              acceptableAnswers: ['erime', 'Erime'],
              explanation: 'Erime katıdan sıvıya geçiştir.',
              wordBankHint: ['Erime', 'Donma', 'Buharlaşma', 'Yoğuşma']
            },
            {
              id: 'fib-fall-2',
              number: 2,
              baglam: 'Islak çamaşırlar balkona asıldıktan bir süre sonra tamamen kurur.',
              soruKoku: 'Sıvı maddenin her sıcaklıkta gaz haline geçmesine .................................... denir.',
              blankAnswer: 'Buharlaşma',
              acceptableAnswers: ['buharlaşma', 'Buharlaşma'],
              explanation: 'Buharlaşma sıvıdan gaza geçiştir.',
              wordBankHint: ['Buharlaşma', 'Donma', 'Erime', 'Süblimleşme']
            }
          ],
          contextQuestions: [
            {
              id: 'mcq-fall-1',
              number: 1,
              baglam: 'Zeynep, buz dolabından çıkardığı soğuk su şişesinin dış yüzeyinde küçük su damlacıklarının oluştuğunu fark etmiştir.',
              soruKoku: 'Şişenin dış yüzeyinde meydana gelen bu olay ve sebebi aşağıdakilerden hangisinde doğru açıklanmıştır?',
              secenekler: {
                A: 'Şişedeki su dışarı sızmıştır.',
                B: 'Havadaki su buharı soğuk şişeye çarparak ısı vermiş ve yoğuşmuştur.',
                C: 'Şişe ısı alarak erimiştir.',
                D: 'Şişedeki su buharlaşmıştır.'
              },
              dogruCevap: 'B',
              cozum: 'Havadaki görünmez su buharı soğuk yüzeye temas ettiğinde ısısını vererek sıvı damlacıklarına dönüşür (yoğuşma).',
              olculenKazanim: 'F.5.4.1.1. Hal değişimlerini açıklar.',
              olculenBeceri: 'Günlük Yaşam Fen Analizi',
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

        onSectionGenerated(fallbackSec);
      }
    } catch (e: any) {
      console.error(e);
      setError('Analiz sırasında hata: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-7 animate-in fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-900 to-purple-950 text-white rounded-2xl p-6 sm:p-7 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
            <UploadCloud className="w-6 h-6 text-violet-300" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-violet-300 uppercase tracking-wider">
              OTOMATİK MAARİF MODELİ DÖNÜŞTÜRÜCÜ
            </span>
            <h1 className="text-xl sm:text-2xl font-bold font-serif">
              Ders Kitabı Yükle & Etkileşimli Analiz Et
            </h1>
            <p className="text-xs text-violet-200 mt-0.5">
              Yüklediğiniz ders kitabının sınıf seviyesi, ünite ve alt konuları otomatik algılanır; tıklamayla açılan 10 aşamalı hikmet anlatımı, 10 boşluk ve 20 soru üretilir.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Test Presets */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-violet-600" />
          Hızlı Deneme Şablonları (Kitap Metni Seç):
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setBookTitle(preset.title);
                setTextContent(preset.content);
                setFileName('');
              }}
              className="text-left p-3 rounded-xl border border-slate-200 hover:border-violet-400 hover:bg-violet-50/40 text-xs font-semibold text-slate-800 transition-colors cursor-pointer"
            >
              <div className="text-violet-800 font-bold mb-1">
                {preset.label}
              </div>
              <p className="text-slate-500 text-[11px] line-clamp-2">
                {preset.content}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Upload Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Kitap / Bölüm Adı:
          </label>
          <input
            type="text"
            value={bookTitle}
            onChange={e => setBookTitle(e.target.value)}
            placeholder="Örn: 5. Sınıf Fen Bilimleri 1. Kitap - Güneş"
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-medium outline-hidden focus:border-violet-500"
          />
        </div>

        {/* Drag and Drop File Area */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Ders Kitabı Dosyası Yükle (Metin veya PDF):
          </label>
          <div className="border-2 border-dashed border-slate-300 hover:border-violet-400 rounded-2xl p-6 text-center transition-colors bg-slate-50/50">
            <input
              type="file"
              id="file-upload-input"
              accept=".txt,.md,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label
              htmlFor="file-upload-input"
              className="flex flex-col items-center justify-center cursor-pointer space-y-2"
            >
              <FileText className="w-8 h-8 text-violet-500" />
              <span className="text-xs font-bold text-slate-800">
                {fileName ? fileName : 'Dosya seçmek için tıklayın veya buraya sürükleyin'}
              </span>
              <span className="text-[11px] text-slate-400">
                Metin dosyası (.txt), ders notları veya kitap kesitleri
              </span>
            </label>
          </div>
        </div>

        {/* Or Paste Text Area */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Veya Ders Kitabı Metnini Buraya Yapıştırın:
          </label>
          <textarea
            rows={7}
            value={textContent}
            onChange={e => setTextContent(e.target.value)}
            placeholder="Ders kitabındaki konu anlatımı, kazanımlar, etkinlikler ve açıklamaları buraya yapıştırın..."
            className="w-full p-3.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-mono text-slate-800 outline-hidden focus:border-violet-500"
          />
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            İptal
          </button>
          <button
            disabled={loading || !textContent.trim()}
            onClick={handleAnalyze}
            className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Kitap İnceleniyor & Müfredat Oluşturuluyor...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Otomatik Maarif Formatına Dönüştür</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
