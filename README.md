# 🌟 FenBağlam 360
### Türkiye Yüzyılı Maarif Modeli Fen Bilimleri Bağlam Temelli Soru & Ölçme Platformu

FenBağlam 360; MEB Türkiye Yüzyılı Maarif Modeli müfredatına tam uyumlu, 5, 6, 7 ve 8. Sınıf Fen Bilimleri dersleri için geliştirilmiş, erdem-değer-hikmet eksenli ve bağlam temelli yeni nesil soru & pekiştirme platformudur.

---

## 🎯 Temel Özellikler

- **4 Sınıf Düzeyi Eksiksiz Müfredat:**
  - **5. Sınıf:** Güneş, Dünya ve Ay, Kuvvet, Canlılar, Işık, Madde ve Isı, Çevre, Elektrik (7 Ünite, 20 Bölüm).
  - **6. Sınıf:** Güneş Sistemi, Vücudumuzdaki Sistemler, Kuvvet ve Hareket, Madde ve Isı, Ses, Bitki ve Hayvanlarda Üreme, Elektrik (7 Ünite).
  - **7. Sınıf:** Güneş Sistemi ve Ötesi, Hücre ve Bölünmeler, Kuvvet ve Enerji, Saf Madde ve Karışımlar, Işığın Madde ile Etkileşimi, Canlılarda Üreme, Elektrik Devreleri (7 Ünite).
  - **8. Sınıf LGS:** 7 Ünite, 17 Alt Konu, Kavram Yanılgıları Analizi ve 340+ Bağlam Temelli Yeni Nesil Çözümlü Soru Havuzu.
- **Hikmet & İspat Eksenli Maarif Modeli:** Tıklamayla bağımsız açılan açıklamalar, 10 aşamalı hikmet derinliği.
- **Pekiştirme İstasyonları:** Her konu için etkileşimli boşluk doldurma ve çoktan seçmeli yeni nesil bağlam soruları.
- **Kişiselleştirilmiş Eksik Takibi (Eksik Avcısı):** Yanlış çözülen soruları otomatik olarak eksik havuzuna kaydetme ve telafi etme imkânı.
- **Öğretmen Masası & Referans Kodu:** Öğretmenlerin öğrencilerini tek kod ile takip edebilmesi, sınıf başarı analizleri.
- **A4 Yazdırılabilir / PDF Test Çıktısı:** Soru ve cevap anahtarlarını anında MEB formatında test kağıdına dökme.
- **%100 Çevrimdışı (Portable USB & Akıllı Tahta):** İnternetsiz okullarda ve MEB Fatih Akıllı Tahtalarında tek tıkla çalışabilen bağımsız taşınabilir sürüm.

---

## 💾 Taşınabilir (USB / Akıllı Tahta) Sürümü

Platform, internet bağlantısı veya herhangi bir program kurulumu (Node.js/Python vb.) gerektirmeden USB bellek üzerinden çalıştırılabilir:

1. `tasinabilir-offline-surum` klasörünü veya `public/FenBaglam360_Tasinabilir_Surum.zip` arşivini USB belleğinize kopyalayın.
2. USB içindeki `Baslat.bat` dosyasına (veya doğrudan `index.html` dosyasına) çift tıklayın.
3. Platform, varsayılan tarayıcınızda veya akıllı tahtada donmadan çalışır.

---

## 🚀 Geliştirici Kurulumu

Projeyi yerel geliştirme ortamınızda çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/akfen145310-netizen/FenBaglam360.git
cd FenBaglam360

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev

# 4. Canlı üretim paketini derleyin
npm run build
```

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React 19, TypeScript, Vite
- **Stil & Tasarım:** Tailwind CSS, Lucide Icons, Glassmorphic Modern UI
- **Taşınabilir Derleme:** `vite-plugin-singlefile`
- **Veri Mimarisi:** TYMM Maarif Fen Bilimleri Müfredat & Kavram Yanılgısı Veri Tabanı

---

## 📄 Lisans

Bu proje eğitim ve öğretim amaçlı geliştirilmiştir. Tüm hakları saklıdır.
