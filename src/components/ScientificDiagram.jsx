import React from 'react';

// Bilimsel SVG Şemaları ve İnteraktif Görsel Veri Bileşeni
export default function ScientificDiagram({ type, title }) {
  if (!type) return null;

  switch (type) {
    case 'moon-tides':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 260" className="scientific-svg">
            <defs>
              <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>
              <radialGradient id="earthGrad" cx="40%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="60%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </radialGradient>
              <radialGradient id="moonGrad" cx="35%" cy="35%" r="50%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="80%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </radialGradient>
            </defs>

            {/* Arka Plan Uzay Çerçevesi */}
            <rect width="650" height="260" rx="12" fill="#090d16" />
            
            {/* Güneş Işınları */}
            <g transform="translate(40, 130)">
              <circle r="36" fill="url(#sunGrad)" filter="drop-shadow(0 0 16px #f59e0b)" />
              <text x="0" y="4" textAnchor="middle" fill="#78350f" fontSize="11" fontWeight="bold">GÜNEŞ</text>
              <path d="M 45 -20 L 130 -20 M 45 0 L 130 0 M 45 20 L 130 20" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />
              <text x="85" y="-26" textAnchor="middle" fill="#fbbf24" fontSize="9">Güneş Işınları</text>
            </g>

            {/* Dünya ve Gelgit Şişkinliği */}
            <g transform="translate(340, 130)">
              {/* Gelgit elipsi (kütle çekimi kabarması) */}
              <ellipse rx="58" ry="42" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,3" />
              {/* Katı Dünya küresi */}
              <circle r="38" fill="url(#earthGrad)" />
              <circle r="38" fill="none" stroke="#93c5fd" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">DÜNYA</text>
              
              {/* Gelgit Seviyesi Okları */}
              <path d="M 42 0 L 56 0" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="0" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">Okyanus Gelgit Şişkinliği (+48 cm)</text>
            </g>

            {/* Ay (Yeni Ay - Güneş ile Dünya arasında) */}
            <g transform="translate(205, 130)">
              <circle r="18" fill="url(#moonGrad)" />
              <circle r="18" fill="none" stroke="#e2e8f0" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">AY</text>
              <text x="0" y="-26" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="bold">1. Gün: Yeni Ay</text>
              <text x="0" y="32" textAnchor="middle" fill="#38bdf8" fontSize="8">Maksimum Çekim</text>
            </g>

            {/* Ay (Dolunay - Dünya'nın arkasında) */}
            <g transform="translate(485, 130)">
              <circle r="18" fill="url(#moonGrad)" />
              <circle r="18" fill="none" stroke="#e2e8f0" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">AY</text>
              <text x="0" y="-26" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="bold">15. Gün: Dolunay</text>
              <text x="0" y="32" textAnchor="middle" fill="#38bdf8" fontSize="8">Maksimum Çekim</text>
            </g>

            {/* Dördün evreleri göstergesi (yukarıda) */}
            <g transform="translate(340, 42)">
              <circle r="13" fill="url(#moonGrad)" stroke="#cbd5e1" />
              <text x="0" y="-18" textAnchor="middle" fill="#cbd5e1" fontSize="9">8. Gün: İlk Dördün</text>
            </g>
            <g transform="translate(340, 218)">
              <circle r="13" fill="url(#moonGrad)" stroke="#cbd5e1" />
              <text x="0" y="24" textAnchor="middle" fill="#cbd5e1" fontSize="9">22. Gün: Son Dördün</text>
            </g>

            <text x="325" y="250" textAnchor="middle" fill="#64748b" fontSize="9">
              Görsel 1: Güneş, Dünya ve Ay'ın Doğrultusu ile Gelgit Şiddeti İlişkisi (Ölçekli Değildir)
            </text>
          </svg>
        </div>
      );

    case 'friction-ramp':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 240" className="scientific-svg">
            <rect width="650" height="240" rx="12" fill="#0f172a" />
            
            {/* Eğimli Rampa */}
            <polygon points="50,180 260,180 50,70" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="180" x2="600" y2="180" stroke="#94a3b8" strokeWidth="3" />
            
            {/* Rampa Açısı */}
            <path d="M 230 180 A 30 30 0 0 0 215 156" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="180" y="172" fill="#f59e0b" fontSize="10" fontWeight="bold">θ = 15°</text>

            {/* Araç Rampa Üzerinde */}
            <g transform="translate(110, 95) rotate(-28)">
              <rect width="44" height="20" rx="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <circle cx="8" cy="22" r="5" fill="#1e293b" stroke="#94a3b8" />
              <circle cx="36" cy="22" r="5" fill="#1e293b" stroke="#94a3b8" />
              <text x="22" y="13" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">1200kg</text>
            </g>

            {/* Yatay Durma Mesafeleri Çizgisi */}
            <line x1="260" y1="140" x2="260" y2="190" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
            <text x="260" y="130" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">Frenleme Başlangıcı</text>

            {/* Zemin Durma Noktaları */}
            <circle cx="330" cy="180" r="4" fill="#10b981" />
            <text x="330" y="200" fill="#10b981" fontSize="9" textAnchor="middle">Kauçuk (5.1m)</text>

            <circle cx="390" cy="180" r="4" fill="#38bdf8" />
            <text x="390" y="215" fill="#38bdf8" fontSize="9" textAnchor="middle">Kumlu (7.8m)</text>

            <circle cx="455" cy="180" r="4" fill="#f59e0b" />
            <text x="455" y="200" fill="#f59e0b" fontSize="9" textAnchor="middle">Beton (11.2m)</text>

            <circle cx="560" cy="180" r="4" fill="#ef4444" />
            <text x="560" y="215" fill="#ef4444" fontSize="9" textAnchor="middle">Asfalt (18.4m)</text>

            <text x="325" y="40" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="bold">
              Kontrollü Rampa ve Yüzey Sürtünmesi Test Düzeneği
            </text>
          </svg>
        </div>
      );

    case 'ship-tugboat-forces':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 230" className="scientific-svg">
            <rect width="650" height="230" rx="12" fill="#082f49" />
            
            {/* Deniz Dalgacıkları */}
            <path d="M 20 190 Q 70 180 120 190 T 220 190 T 320 190 T 420 190 T 520 190 T 620 190" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M 40 210 Q 90 200 140 210 T 240 210 T 340 210 T 440 210 T 540 210" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.4" />

            {/* Konteyner Gemisi (Üstten Görünüş) */}
            <g transform="translate(240, 75)">
              <polygon points="0,25 25,0 150,0 170,25 150,50 25,50" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
              <rect x="35" y="8" width="105" height="34" fill="#334155" rx="3" />
              <text x="85" y="28" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">KONTEYNER GEMİSİ</text>
            </g>

            {/* Doğu Yönündeki Kuvvetler (K ve M Römorkörleri) */}
            {/* K Römorkörü */}
            <g transform="translate(415, 80)">
              <line x1="0" y1="0" x2="110" y2="0" stroke="#10b981" strokeWidth="3" />
              <polygon points="110,-5 125,0 110,5" fill="#10b981" />
              <text x="60" y="-8" fill="#10b981" fontSize="9" fontWeight="bold">K: 45.000 N (Doğu)</text>
            </g>

            {/* M Römorkörü */}
            <g transform="translate(415, 115)">
              <line x1="0" y1="0" x2="45" y2="0" stroke="#34d399" strokeWidth="2.5" />
              <polygon points="45,-4 55,0 45,4" fill="#34d399" />
              <text x="35" y="18" fill="#34d399" fontSize="9" fontWeight="bold">M: 10.000 N (Doğu)</text>
            </g>

            {/* Batı Yönündeki Kuvvetler (L Römorkörü ve Deniz Direnci) */}
            {/* L Römorkörü */}
            <g transform="translate(235, 80)">
              <line x1="0" y1="0" x2="-55" y2="0" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="-55,-4 -65,0 -55,4" fill="#f59e0b" />
              <text x="-40" y="-8" fill="#f59e0b" fontSize="9" fontWeight="bold">L: 15.000 N (Batı)</text>
            </g>

            {/* Deniz Direnci */}
            <g transform="translate(235, 115)">
              <line x1="0" y1="0" x2="-100" y2="0" stroke="#f43f5e" strokeWidth="3" />
              <polygon points="-100,-5 -115,0 -100,5" fill="#f43f5e" />
              <text x="-65" y="18" fill="#f43f5e" fontSize="9" fontWeight="bold">Su Direnci: 40.000 N (Batı)</text>
            </g>

            {/* Net Kuvvet Göstergesi */}
            <rect x="180" y="165" width="290" height="30" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <text x="325" y="184" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
              Bileşke Kuvvet (R_net) = 55.000 N - 55.000 N = 0 N (Dengelenmiş)
            </text>
          </svg>
        </div>
      );

    case 'density-tower':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 250" className="scientific-svg">
            <rect width="650" height="250" rx="12" fill="#18181b" />
            
            {/* Dereceli Silindir */}
            <g transform="translate(260, 30)">
              {/* Cam Gövde */}
              <rect x="0" y="0" width="130" height="190" fill="#27272a" fillOpacity="0.4" stroke="#a1a1aa" strokeWidth="2" rx="4" />
              
              {/* Tabaka 3: Zeytinyağı (En üstte) */}
              <rect x="2" y="20" width="126" height="50" fill="#eab308" fillOpacity="0.65" />
              <text x="65" y="50" fill="#fef08a" fontSize="11" textAnchor="middle" fontWeight="bold">
                Saf Zeytinyağı (0.91 g/cm³)
              </text>

              {/* Tabaka 2: Su (Ortada) */}
              <rect x="2" y="70" width="126" height="55" fill="#0284c7" fillOpacity="0.55" />
              <text x="65" y="102" fill="#bae6fd" fontSize="11" textAnchor="middle" fontWeight="bold">
                Saf Su (1.00 g/cm³)
              </text>

              {/* Tabaka 1: Bal (En altta) */}
              <rect x="2" y="125" width="126" height="63" fill="#d97706" fillOpacity="0.8" />
              <text x="65" y="160" fill="#fef3c7" fontSize="11" textAnchor="middle" fontWeight="bold">
                Saf Bal (1.42 g/cm³)
              </text>

              {/* Derece Çizgileri */}
              <line x1="0" y1="20" x2="12" y2="20" stroke="#f4f4f5" strokeWidth="1.5" />
              <line x1="0" y1="70" x2="12" y2="70" stroke="#f4f4f5" strokeWidth="1.5" />
              <line x1="0" y1="125" x2="12" y2="125" stroke="#f4f4f5" strokeWidth="1.5" />
            </g>

            {/* Yeni Eklenecek Pekmez Damlalığı */}
            <g transform="translate(440, 70)">
              <rect width="170" height="90" rx="8" fill="#27272a" stroke="#ec4899" strokeWidth="1.5" />
              <text x="85" y="24" fill="#f472b6" fontSize="11" textAnchor="middle" fontWeight="bold">
                İlave Edilecek Pekmez
              </text>
              <text x="85" y="44" fill="#e4e4e7" fontSize="10" textAnchor="middle">
                Kütle: 125 g | Hacim: 100 cm³
              </text>
              <text x="85" y="65" fill="#fbcfe8" fontSize="11" textAnchor="middle" fontWeight="bold">
                d = 1.25 g/cm³
              </text>
              {/* Ok: Su ile Bal arasına giriş */}
              <path d="M 0 50 L -45 50" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow)" />
            </g>

            <text x="325" y="235" textAnchor="middle" fill="#a1a1aa" fontSize="10">
              Şekil: Birbiri İçinde Çözünmeyen Sıvıların Yoğunluk Kulesi ve Pekmezin Yerleşim Konumu
            </text>
          </svg>
        </div>
      );

    case 'roller-coaster-energy':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 250" className="scientific-svg">
            <rect width="650" height="250" rx="12" fill="#0f172a" />

            {/* Hız Treni Ray Hattı (Bézier Eğrisi) */}
            <path
              d="M 40 60 C 130 60, 180 200, 240 200 C 300 200, 340 100, 420 100 C 480 100, 520 200, 600 200"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
            />
            {/* Destek Direkleri */}
            <line x1="50" y1="60" x2="50" y2="200" stroke="#475569" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="420" y1="100" x2="420" y2="200" stroke="#475569" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="30" y1="200" x2="610" y2="200" stroke="#94a3b8" strokeWidth="2" />

            {/* K Noktası */}
            <circle cx="50" cy="60" r="7" fill="#ef4444" />
            <text x="50" y="42" fill="#fca5a5" fontSize="10" textAnchor="middle" fontWeight="bold">K (h=40m)</text>
            <text x="50" y="85" fill="#f87171" fontSize="9" textAnchor="middle">Ep: Maksimum | Ek: Düşük</text>

            {/* L Noktası (Dip) */}
            <circle cx="240" cy="200" r="7" fill="#10b981" />
            <text x="240" y="222" fill="#6ee7b7" fontSize="10" textAnchor="middle" fontWeight="bold">L (h=2m, v=24m/s)</text>
            <text x="240" y="238" fill="#34d399" fontSize="9" textAnchor="middle">Ep: Minimum | Ek: Zirve</text>

            {/* M Noktası */}
            <circle cx="420" cy="100" r="7" fill="#f59e0b" />
            <text x="420" y="82" fill="#fde68a" fontSize="10" textAnchor="middle" fontWeight="bold">M (h=25m)</text>
            <text x="420" y="125" fill="#fbbf24" fontSize="9" textAnchor="middle">Ep + Ek Dengesi</text>

            {/* N Noktası */}
            <circle cx="590" cy="200" r="7" fill="#8b5cf6" />
            <text x="590" y="222" fill="#c4b5fd" fontSize="10" textAnchor="middle" fontWeight="bold">N (Bitiş - Durdu)</text>

            <text x="325" y="25" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">
              Mekanik Enerji Dönüşümü: Çekim Potansiyeli ⇄ Kinetik Enerji
            </text>
          </svg>
        </div>
      );

    case 'water-pressure-network':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 250" className="scientific-svg">
            <rect width="650" height="250" rx="12" fill="#082f49" />

            {/* Tepe ve Su Deposu */}
            <polygon points="20,230 180,90 240,230" fill="#1e293b" />
            {/* Su Deposu */}
            <rect x="80" y="50" width="80" height="50" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" rx="4" />
            <text x="120" y="80" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">SU DEPOSU</text>
            <text x="120" y="40" fill="#93c5fd" fontSize="9" textAnchor="middle">Rakım: 120m</text>

            {/* Ana Dağıtım Borusu */}
            <path d="M 120 100 L 120 220 L 600 220" fill="none" stroke="#38bdf8" strokeWidth="6" />

            {/* 1. Bölge (Vadi İçi Zemin Kat) */}
            <g transform="translate(280, 160)">
              <rect width="40" height="55" fill="#334155" stroke="#94a3b8" />
              <line x1="20" y1="60" x2="20" y2="55" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="20" cy="25" r="10" fill="#0f172a" stroke="#22c55e" strokeWidth="1.5" />
              <text x="20" y="28" fill="#22c55e" fontSize="7" textAnchor="middle" fontWeight="bold">4.0 Bar</text>
              <text x="20" y="-8" fill="#4ade80" fontSize="9" textAnchor="middle" fontWeight="bold">1. Bölge (h=40m)</text>
            </g>

            {/* 2. Bölge (Yamaç Evi) */}
            <g transform="translate(420, 120)">
              <rect width="40" height="95" fill="#334155" stroke="#94a3b8" />
              <circle cx="20" cy="45" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="20" y="48" fill="#f59e0b" fontSize="7" textAnchor="middle" fontWeight="bold">2.0 Bar</text>
              <text x="20" y="-8" fill="#fcd34d" fontSize="9" textAnchor="middle" fontWeight="bold">2. Bölge (h=20m)</text>
            </g>

            {/* 3. Bölge (Tepeye Yakın Ev - Az Basınç) */}
            <g transform="translate(540, 70)">
              <rect width="40" height="145" fill="#334155" stroke="#94a3b8" />
              <circle cx="20" cy="35" r="10" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="20" y="38" fill="#ef4444" fontSize="7" textAnchor="middle" fontWeight="bold">0.3 Bar</text>
              <text x="20" y="-8" fill="#fca5a5" fontSize="9" textAnchor="middle" fontWeight="bold">3. Bölge (h=3m)</text>
              <text x="20" y="160" fill="#f87171" fontSize="8" textAnchor="middle">Pompa Gerekli!</text>
            </g>

            <text x="325" y="242" textAnchor="middle" fill="#94a3b8" fontSize="10">
              Şekil: Serbest Su Yüzeyine Göre Derinlik (h) ile Sıvı Basıncı (P = h·d·g) İlişkisi
            </text>
          </svg>
        </div>
      );

    case 'pulley-systems':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 250" className="scientific-svg">
            <rect width="650" height="250" rx="12" fill="#1e1b4b" />

            {/* Sistem 1: Tek Sabit Makara */}
            <g transform="translate(130, 30)">
              <rect x="-60" y="0" width="120" height="10" fill="#64748b" />
              <circle cx="0" cy="30" r="20" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="0" cy="30" r="4" fill="#f8fafc" />
              <line x1="-20" y1="30" x2="-20" y2="110" stroke="#f59e0b" strokeWidth="3" />
              <line x1="20" y1="30" x2="20" y2="130" stroke="#f59e0b" strokeWidth="3" />
              
              {/* Yük */}
              <rect x="-35" y="110" width="30" height="30" rx="3" fill="#3b82f6" />
              <text x="-20" y="128" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">6000N</text>

              {/* Çekiş Kuvveti F */}
              <polygon points="20,135 15,125 25,125" fill="#10b981" />
              <text x="30" y="150" fill="#10b981" fontSize="10" fontWeight="bold">F = 6.000 N</text>
              <text x="0" y="180" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontWeight="bold">
                Sistem 1: Sabit Makara
              </text>
              <text x="0" y="196" fill="#94a3b8" fontSize="9" textAnchor="middle">
                Kuvvet Kazancı Yok (F = G)
              </text>
            </g>

            {/* Sistem 2: Palanga Düzeneği */}
            <g transform="translate(450, 30)">
              <rect x="-70" y="0" width="140" height="10" fill="#64748b" />
              
              {/* Üst Sabit Makaralar */}
              <circle cx="-16" cy="25" r="16" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
              <circle cx="16" cy="25" r="16" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Alt Hareketli Makaralar */}
              <circle cx="-16" cy="85" r="16" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="16" cy="85" r="16" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Yük Askısı */}
              <line x1="-16" y1="85" x2="16" y2="85" stroke="#94a3b8" strokeWidth="2" />
              <line x1="0" y1="85" x2="0" y2="120" stroke="#94a3b8" strokeWidth="2" />
              <rect x="-20" y="120" width="40" height="30" rx="3" fill="#3b82f6" />
              <text x="0" y="138" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">6000N</text>

              {/* Halat Sarımı (4 Kol) */}
              <line x1="-32" y1="25" x2="-32" y2="85" stroke="#f59e0b" strokeWidth="2" />
              <line x1="0" y1="25" x2="0" y2="85" stroke="#f59e0b" strokeWidth="2" />
              <line x1="32" y1="25" x2="32" y2="85" stroke="#f59e0b" strokeWidth="2" />
              <line x1="42" y1="25" x2="42" y2="140" stroke="#f59e0b" strokeWidth="2.5" />

              {/* Giriş Kuvveti */}
              <polygon points="42,145 37,135 47,135" fill="#22c55e" />
              <text x="52" y="145" fill="#22c55e" fontSize="10" fontWeight="bold">F = 1.500 N</text>

              <text x="0" y="180" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontWeight="bold">
                Sistem 2: Palanga (4 İp Kolu)
              </text>
              <text x="0" y="196" fill="#4ade80" fontSize="9" textAnchor="middle">
                Kuvvetten 4 Kat Kazanç (İş Değişmez)
              </text>
            </g>
          </svg>
        </div>
      );

    case 'seasons-tilt':
    case 'earth-sun-orbit':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 660 300" className="scientific-svg">
            <defs>
              <radialGradient id="sunGlowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="40%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </radialGradient>
              <linearGradient id="earthDayNightLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="52%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="earthDayNightRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="52%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>

            {/* Arka Plan Uzay */}
            <rect width="660" height="300" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1" />

            {/* Elips Yörünge Çizgisi */}
            <ellipse cx="330" cy="150" rx="260" ry="90" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="6,5" />
            <path d="M 330 60 L 338 56 L 338 64 Z" fill="#38bdf8" />
            <path d="M 330 240 L 322 236 L 322 244 Z" fill="#38bdf8" />

            {/* Merkezdeki GÜNEŞ */}
            <g transform="translate(330, 150)">
              <circle r="46" fill="#f59e0b" opacity="0.2" filter="blur(8px)" />
              <circle r="36" fill="url(#sunGlowGrad)" />
              <text x="0" y="4" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="900" fontStyle="italic">GÜNEŞ</text>
              {/* Işın Okları */}
              <line x1="-50" y1="0" x2="-180" y2="0" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="50" y1="0" x2="180" y2="0" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="0" y1="-45" x2="0" y2="-75" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
              <line x1="0" y1="45" x2="0" y2="75" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
            </g>

            {/* 1. KONUM: 21 HAZİRAN (Sol Konum - Kuzey Yarım Küre Güneş'e Dönük) */}
            <g transform="translate(100, 150)">
              {/* Eksen Eğikliği Çizgisi (23.5° sağa eğik) */}
              <line x1="-12" y1="-42" x2="12" y2="42" stroke="#ef4444" strokeWidth="2" strokeDasharray="2,2" />
              <circle r="28" fill="url(#earthDayNightLeft)" stroke="#93c5fd" strokeWidth="1.5" />
              {/* Ekvator ve Dönenceler */}
              <line x1="-22" y1="7" x2="22" y2="-7" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,2" />
              <text x="-12" y="-46" fill="#ef4444" fontSize="8" fontWeight="bold">Kuzey (23.5° Eğik)</text>
              <circle cx="6" cy="-8" r="3" fill="#22c55e" />
              <text x="12" y="-9" fill="#86efac" fontSize="8" fontWeight="bold">Yengeç (90° Dik)</text>
              
              <rect x="-70" y="38" width="140" height="38" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="52" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">1. Konum: 21 HAZİRAN</text>
              <text x="0" y="66" fill="#cbd5e1" fontSize="8" textAnchor="middle">KYK: Yaz (Dik Işık) • GYK: Kış</text>
            </g>

            {/* 2. KONUM: 23 EYLÜL (Alt Konum - Ekinoks) */}
            <g transform="translate(330, 240)">
              <line x1="-12" y1="-32" x2="12" y2="32" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2" />
              <circle r="24" fill="#0284c7" stroke="#93c5fd" strokeWidth="1.5" />
              <path d="M 0 -24 A 24 24 0 0 1 0 24 Z" fill="#0f172a" />
              <line x1="-20" y1="5" x2="20" y2="-5" stroke="#fde047" strokeWidth="1.5" />
              
              <rect x="-65" y="30" width="130" height="26" rx="5" fill="#0f172a" stroke="#ca8a04" strokeWidth="1" />
              <text x="0" y="42" fill="#facc15" fontSize="9" fontWeight="bold" textAnchor="middle">2. Konum: 23 EYLÜL (Ekinoks)</text>
              <text x="0" y="52" fill="#cbd5e1" fontSize="8" textAnchor="middle">Ekvator'a Dik • 12s Gece/12s Gündüz</text>
            </g>

            {/* 3. KONUM: 21 ARALIK (Sağ Konum - Güney Yarım Küre Güneş'e Dönük) */}
            <g transform="translate(560, 150)">
              <line x1="-12" y1="-42" x2="12" y2="42" stroke="#ef4444" strokeWidth="2" strokeDasharray="2,2" />
              <circle r="28" fill="url(#earthDayNightRight)" stroke="#93c5fd" strokeWidth="1.5" />
              <line x1="-22" y1="7" x2="22" y2="-7" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,2" />
              <circle cx="-6" cy="8" r="3" fill="#22c55e" />
              <text x="2" y="16" fill="#86efac" fontSize="8" fontWeight="bold">Oğlak (90° Dik)</text>

              <rect x="-70" y="38" width="140" height="38" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="52" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">3. Konum: 21 ARALIK</text>
              <text x="0" y="66" fill="#cbd5e1" fontSize="8" textAnchor="middle">KYK: Kış (Eğik Işık) • GYK: Yaz</text>
            </g>

            {/* 4. KONUM: 21 MART (Üst Konum - Ekinoks) */}
            <g transform="translate(330, 60)">
              <line x1="-12" y1="-32" x2="12" y2="32" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2" />
              <circle r="24" fill="#0284c7" stroke="#93c5fd" strokeWidth="1.5" />
              <path d="M 0 -24 A 24 24 0 0 0 0 24 Z" fill="#0f172a" />
              <line x1="-20" y1="5" x2="20" y2="-5" stroke="#fde047" strokeWidth="1.5" />
              
              <rect x="-65" y="-36" width="130" height="26" rx="5" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
              <text x="0" y="-24" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle">4. Konum: 21 MART (Ekinoks)</text>
              <text x="0" y="-14" fill="#cbd5e1" fontSize="8" textAnchor="middle">Ekvator'a Dik • İlkbahar Başlangıcı</text>
            </g>

            <text x="330" y="290" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">
              Şekil: Dünya'nın 23° 27' Eksen Eğikliği ve Yıllık Dolanma Hareketi ile Mevsim Dönüm Tarihleri
            </text>
          </svg>
        </div>
      );

    case 'sun-angle-shadow':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 660 270" className="scientific-svg">
            <rect width="660" height="270" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1" />

            {/* Sol Taraf: 90° DİK AÇI (Yaz Modeli) */}
            <g transform="translate(40, 20)">
              <rect width="270" height="225" rx="10" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
              <text x="135" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                DÜZENEK 1: 90° DİK GELİŞ AÇISI (YAZ)
              </text>
              
              {/* Tepe Feneri / Güneş */}
              <circle cx="135" cy="55" r="16" fill="#f59e0b" />
              <text x="135" y="58" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">IŞIK</text>
              
              {/* Dik Işınlar */}
              <line x1="125" y1="71" x2="125" y2="160" stroke="#fde047" strokeWidth="2.5" />
              <line x1="135" y1="71" x2="135" y2="160" stroke="#fde047" strokeWidth="3" />
              <line x1="145" y1="71" x2="145" y2="160" stroke="#fde047" strokeWidth="2.5" />

              {/* Zemin ve Dar Aydınlanma Alanı */}
              <line x1="40" y1="160" x2="230" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <ellipse cx="135" cy="160" rx="20" ry="6" fill="#f59e0b" fillOpacity="0.4" stroke="#eab308" strokeWidth="1.5" />
              <text x="135" y="180" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">
                Dar Alan (S₁ = 10 cm²)
              </text>

              {/* Dikey Çubuk ve Sıfır Gölge */}
              <line x1="135" y1="120" x2="135" y2="160" stroke="#ef4444" strokeWidth="3" />
              <text x="175" y="135" fill="#f87171" fontSize="8" fontWeight="bold">Çubuk: 10cm</text>
              <text x="175" y="147" fill="#86efac" fontSize="8" fontWeight="bold">Gölge = 0 cm</text>

              {/* Ölçüm Sonuç Kutusu */}
              <rect x="25" y="190" width="220" height="24" rx="4" fill="#0f172a" />
              <text x="135" y="206" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle">
                Yoğun Enerji • Sıcaklık: ΔT = +28°C
              </text>
            </g>

            {/* Sağ Taraf: 30° EĞİK AÇI (Kış Modeli) */}
            <g transform="translate(350, 20)">
              <rect width="270" height="225" rx="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="135" y="24" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
                DÜZENEK 2: 30° EĞİK GELİŞ AÇISI (KIŞ)
              </text>

              {/* Eğik Konumlu Fener */}
              <circle cx="50" cy="65" r="16" fill="#f59e0b" />
              <text x="50" y="68" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">IŞIK</text>

              {/* Eğik Işınlar */}
              <line x1="62" y1="76" x2="165" y2="160" stroke="#fde047" strokeWidth="2.5" />
              <line x1="50" y1="81" x2="120" y2="160" stroke="#fde047" strokeWidth="2" />
              <line x1="40" y1="78" x2="80" y2="160" stroke="#fde047" strokeWidth="1.5" />

              {/* Zemin ve Geniş Aydınlanma Alanı */}
              <line x1="40" y1="160" x2="230" y2="160" stroke="#94a3b8" strokeWidth="2" />
              <ellipse cx="120" cy="160" rx="55" ry="8" fill="#f59e0b" fillOpacity="0.25" stroke="#eab308" strokeWidth="1.5" />
              <text x="120" y="180" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">
                Geniş Alan (S₂ = 45 cm²)
              </text>

              {/* Dikey Çubuk ve Uzun Gölge */}
              <line x1="165" y1="120" x2="165" y2="160" stroke="#ef4444" strokeWidth="3" />
              {/* Gölge (Zeminde Siyah Çizgi) */}
              <line x1="165" y1="160" x2="225" y2="160" stroke="#000000" strokeWidth="4" />
              <text x="195" y="154" fill="#fca5a5" fontSize="8" fontWeight="bold">Gölge: 22cm</text>

              {/* Ölçüm Sonuç Kutusu */}
              <rect x="25" y="190" width="220" height="24" rx="4" fill="#0f172a" />
              <text x="135" y="206" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">
                Dağınık Enerji • Sıcaklık: ΔT = +8°C
              </text>
            </g>

            <text x="330" y="260" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">
              Şekil: Işığın Geliş Açısının Aydınlanan Alan, Birim Yüzeye Düşen Enerji ve Gölge Boyuna Etkisi
            </text>
          </svg>
        </div>
      );

    case 'dna-replication-model':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 660 250" className="scientific-svg">
            <rect width="660" height="250" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            
            <text x="330" y="26" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              DNA Çift Sarmal Modeli ve Kendini Eşleme (Replikasyon Çatalı)
            </text>

            {/* Eski İplik 1 */}
            <path d="M 60 70 C 180 70, 240 100, 310 120 L 600 50" fill="none" stroke="#0284c7" strokeWidth="4" />
            <text x="80" y="60" fill="#38bdf8" fontSize="10" fontWeight="bold">Eski İplik (Kalıp 1)</text>

            {/* Eski İplik 2 */}
            <path d="M 60 170 C 180 170, 240 140, 310 120 L 600 190" fill="none" stroke="#0284c7" strokeWidth="4" />
            <text x="80" y="190" fill="#38bdf8" fontSize="10" fontWeight="bold">Eski İplik (Kalıp 2)</text>

            {/* Yeni Tamamlayıcı İplikler (Açılan Çatala Girenler) */}
            <path d="M 330 115 L 600 80" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="5,3" />
            <text x="490" y="70" fill="#34d399" fontSize="9" fontWeight="bold">Yeni İplik (A-T / G-S)</text>

            <path d="M 330 125 L 600 160" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="5,3" />
            <text x="490" y="176" fill="#34d399" fontSize="9" fontWeight="bold">Yeni İplik (Tamamlayıcı)</text>

            {/* Nükleotid Baz Çiftleri (A-T, G-C) */}
            <g transform="translate(100, 90)">
              <rect x="0" y="0" width="30" height="15" fill="#ef4444" rx="2" />
              <text x="15" y="11" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">A</text>
              <line x1="30" y1="7" x2="45" y2="7" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2,1" />
              <rect x="45" y="0" width="30" height="15" fill="#3b82f6" rx="2" />
              <text x="60" y="11" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">T</text>
            </g>

            <g transform="translate(180, 115)">
              <rect x="0" y="0" width="30" height="15" fill="#10b981" rx="2" />
              <text x="15" y="11" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">G</text>
              <line x1="30" y1="7" x2="45" y2="7" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2,1" />
              <rect x="45" y="0" width="30" height="15" fill="#f59e0b" rx="2" />
              <text x="60" y="11" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">S</text>
            </g>

            <rect x="180" y="215" width="300" height="24" rx="5" fill="#1e293b" />
            <text x="330" y="231" fill="#e2e8f0" fontSize="9" textAnchor="middle">
              Sonuç: 1 DNA'dan Birebir Özdeş 2 Yeni DNA Molekülü Üretilir
            </text>
          </svg>
        </div>
      );

    case 'weather-pressure':
    case 'wind-pressure':
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 660 270" className="scientific-svg">
            <rect width="660" height="270" rx="14" fill="#0b132b" stroke="#1c2541" strokeWidth="1" />

            <text x="330" y="24" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              Basınç Merkezleri ve Rüzgârın Oluşum Mekanizması Modeli
            </text>

            {/* Sol Taraf: YÜKSEK BASINÇ ALANI (Soğuk Hava) */}
            <g transform="translate(40, 40)">
              <rect width="250" height="180" rx="10" fill="#1c2541" stroke="#3b82f6" strokeWidth="1.5" />
              <rect x="0" y="0" width="250" height="28" rx="10" fill="#1e3a8a" />
              <text x="125" y="18" fill="#bfdbfe" fontSize="10" fontWeight="bold" textAnchor="middle">
                YÜKSEK BASINÇ MERKEZİ (YB)
              </text>

              {/* Soğuk Hava ve Alçalıcı Hava Hareketi */}
              <text x="125" y="46" fill="#93c5fd" fontSize="9" textAnchor="middle">
                Sıcaklık: 12°C • Soğuk Hava
              </text>
              <text x="125" y="60" fill="#60a5fa" fontSize="8" textAnchor="middle">
                Hava Tanecikleri Yoğun ve Ağır
              </text>

              {/* Alçalıcı Oklar */}
              <g transform="translate(125, 95)">
                <line x1="-30" y1="-25" x2="-30" y2="25" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)" />
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrow)" />
                <line x1="30" y1="-25" x2="30" y2="25" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)" />
                <text x="0" y="-35" fill="#93c5fd" fontSize="8" textAnchor="middle">Alçalıcı Hava Hareketi</text>
              </g>

              {/* Zemin ve Merkezden Dışa Dağılma */}
              <line x1="20" y1="145" x2="230" y2="145" stroke="#64748b" strokeWidth="2" />
              <text x="125" y="165" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle">
                Hava Açık ve Güneşli • Yağış Yok
              </text>
            </g>

            {/* Orta Kısım: RÜZGÂR OKLARI (YB -> AB) */}
            <g transform="translate(300, 140)">
              {/* Rüzgâr Ana Oku */}
              <line x1="5" y1="0" x2="55" y2="0" stroke="#f59e0b" strokeWidth="5" />
              <polygon points="55,-6 65,0 55,6" fill="#f59e0b" />
              <line x1="10" y1="18" x2="50" y2="18" stroke="#f59e0b" strokeWidth="3" />
              <polygon points="50,14 58,18 50,22" fill="#f59e0b" />

              <rect x="-10" y="-36" width="80" height="22" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
              <text x="30" y="-22" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">
                RÜZGÂR
              </text>
              <text x="30" y="36" fill="#fde047" fontSize="8" textAnchor="middle">
                Hız: 28 km/h
              </text>
            </g>

            {/* Sağ Taraf: ALÇAK BASINÇ ALANI (Sıcak Hava) */}
            <g transform="translate(370, 40)">
              <rect width="250" height="180" rx="10" fill="#1c2541" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="0" y="0" width="250" height="28" rx="10" fill="#7f1d1d" />
              <text x="125" y="18" fill="#fecaca" fontSize="10" fontWeight="bold" textAnchor="middle">
                ALÇAK BASINÇ MERKEZİ (AB)
              </text>

              {/* Sıcak Hava ve Yükselici Hava Hareketi */}
              <text x="125" y="46" fill="#fca5a5" fontSize="9" textAnchor="middle">
                Sıcaklık: 28°C • Sıcak Hava
              </text>
              <text x="125" y="60" fill="#f87171" fontSize="8" textAnchor="middle">
                Hava Genleşir, Yoğunluğu Azalır
              </text>

              {/* Yükselici Oklar */}
              <g transform="translate(125, 105)">
                <line x1="-30" y1="25" x2="-30" y2="-25" stroke="#f87171" strokeWidth="3" markerEnd="url(#arrow)" />
                <line x1="0" y1="30" x2="0" y2="-30" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#arrow)" />
                <line x1="30" y1="25" x2="30" y2="-25" stroke="#f87171" strokeWidth="3" markerEnd="url(#arrow)" />
                <text x="0" y="42" fill="#fca5a5" fontSize="8" textAnchor="middle">Yükselici Hava Hareketi</text>
              </g>

              {/* Bulut Simgesi */}
              <g transform="translate(95, 68)">
                <ellipse cx="20" cy="10" rx="18" ry="10" fill="#94a3b8" />
                <ellipse cx="38" cy="8" rx="14" ry="9" fill="#cbd5e1" />
                <ellipse cx="12" cy="12" rx="12" ry="7" fill="#64748b" />
              </g>

              <line x1="20" y1="145" x2="230" y2="145" stroke="#64748b" strokeWidth="2" />
              <text x="125" y="165" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">
                Bulutlu • Yağış İhtimali Yüksek
              </text>
            </g>

            <text x="330" y="250" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">
              Şekil: Sıcaklık Farkı Kaynaklı Yatay Basınç Gradyanı ve Rüzgâr Yönü (YB → AB)
            </text>
          </svg>
        </div>
      );

    default:
      // Genel Temel Fen Bilimsel Deney / Gözlem İllüstrasyonu
      return (
        <div className="diagram-wrapper">
          <svg viewBox="0 0 650 200" className="scientific-svg">
            <rect width="650" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            
            {/* Laboratuvar Masası */}
            <rect x="40" y="135" width="570" height="12" fill="#334155" rx="3" />
            <line x1="70" y1="147" x2="70" y2="185" stroke="#475569" strokeWidth="4" />
            <line x1="580" y1="147" x2="580" y2="185" stroke="#475569" strokeWidth="4" />

            {/* Beherglas ve Sıvı */}
            <g transform="translate(100, 50)">
              <rect x="0" y="15" width="60" height="70" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <rect x="3" y="35" width="54" height="48" fill="#0284c7" fillOpacity="0.4" />
              <line x1="10" y1="35" x2="20" y2="35" stroke="#93c5fd" strokeWidth="1" />
              <line x1="10" y1="50" x2="25" y2="50" stroke="#93c5fd" strokeWidth="1" />
              <line x1="10" y1="65" x2="20" y2="65" stroke="#93c5fd" strokeWidth="1" />
              {/* Termometre */}
              <line x1="45" y1="5" x2="45" y2="80" stroke="#ef4444" strokeWidth="3" />
              <circle cx="45" cy="80" r="5" fill="#ef4444" />
              <text x="30" y="100" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Deney Grubu</text>
            </g>

            {/* Orta Kart: Hipotez ve Kontrollü Değişkenler */}
            <g transform="translate(200, 30)">
              <rect width="260" height="95" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
              <text x="130" y="24" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">
                {title || 'Kontrollü Deney ve Ölçüm İstasyonu'}
              </text>
              <line x1="20" y1="32" x2="240" y2="32" stroke="#475569" strokeWidth="1" />
              <text x="30" y="50" fill="#38bdf8" fontSize="9">Bağımsız Değişken: Kontrollü Etken</text>
              <text x="30" y="66" fill="#4ade80" fontSize="9">Bağımlı Değişken: Ölçülen Sonuç</text>
              <text x="30" y="82" fill="#fbbf24" fontSize="9">Sabit Tutulan: Ortam Şartları</text>
            </g>

            {/* Dijital Terazi / Ölçüm Cihazı */}
            <g transform="translate(490, 75)">
              <rect x="0" y="25" width="80" height="35" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
              <rect x="15" y="32" width="50" height="15" rx="2" fill="#0f172a" />
              <text x="40" y="44" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Δ = +24.5</text>
              <ellipse cx="40" cy="22" rx="28" ry="4" fill="#64748b" />
              <text x="40" y="75" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">Hassas Sensör</text>
            </g>

            <text x="325" y="170" textAnchor="middle" fill="#94a3b8" fontSize="9">
              Şekil: Kontrollü Değişkenler ve Bilimsel Ölçüm Protokolü
            </text>
          </svg>
        </div>
      );
  }
}
