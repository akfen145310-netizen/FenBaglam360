import React, { useState } from 'react';
import {
  X,
  Settings,
  Download,
  Upload,
  RefreshCw,
  Sparkles,
  Printer,
  Moon,
  Sun,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function AdminSettingsModal({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onPopulateSubtopic,
  onPopulateAllCurriculum,
  onResetBank,
  onExportJson,
  onImportJson,
  currentSubtopic
}) {
  if (!isOpen) return null;

  const [schoolName, setSchoolName] = useState(settings.schoolName);
  const [examTitle, setExamTitle] = useState(settings.examTitle);
  const [saveAlert, setSaveAlert] = useState(false);

  const handleTogglePdf = () => {
    onUpdateSettings({
      ...settings,
      pdfDownloadEnabled: !settings.pdfDownloadEnabled
    });
  };

  const handleToggleTheme = () => {
    onUpdateSettings({
      ...settings,
      theme: settings.theme === 'dark' ? 'light' : 'dark'
    });
  };

  const handleSaveHeaders = () => {
    onUpdateSettings({
      ...settings,
      schoolName,
      examTitle
    });
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 2000);
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (Array.isArray(parsed)) {
          onImportJson(parsed);
          alert(`Başarılı! ${parsed.length} adet soru başarıyla yüklendi.`);
        } else {
          alert('Geçersiz JSON formatı! Sorular dizi şeklinde olmalıdır.');
        }
      } catch (err) {
        alert('Dosya okuma hatası: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <div className="settings-title-row">
            <Settings size={20} className="icon-blue" />
            <h2>Yönetim ve Platform Ayarları</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="settings-body">
          {/* 1. PDF İndirme Seçeneği (Açılıp Kapanabilen) */}
          <div className="setting-card">
            <div className="setting-text">
              <div className="setting-title-with-icon">
                <Printer size={18} className="text-cyan" />
                <h4>PDF Olarak İndir / Yazdır Seçeneği</h4>
              </div>
              <p>
                Kullanıcıların soruları MEB sınav kağıdı formatında PDF olarak indirmesine izin verin veya bu özelliği kapatın.
              </p>
            </div>
            <div className="setting-control">
              <button
                className={`toggle-switch ${settings.pdfDownloadEnabled ? 'on' : 'off'}`}
                onClick={handleTogglePdf}
              >
                <span className="toggle-slider"></span>
                <span className="toggle-label">
                  {settings.pdfDownloadEnabled ? 'AÇIK' : 'KAPALI'}
                </span>
              </button>
            </div>
          </div>

          {/* 2. Tema Seçimi (Koyu / Açık) */}
          <div className="setting-card">
            <div className="setting-text">
              <div className="setting-title-with-icon">
                {settings.theme === 'dark' ? (
                  <Moon size={18} className="text-purple" />
                ) : (
                  <Sun size={18} className="text-amber" />
                )}
                <h4>Arayüz Teması</h4>
              </div>
              <p>Göz yormayan modern karanlık mod veya klasik aydınlık tema tercihi.</p>
            </div>
            <div className="setting-control">
              <button className="btn-secondary" onClick={handleToggleTheme}>
                {settings.theme === 'dark' ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç'}
              </button>
            </div>
          </div>

          {/* 3. 30 Soru Üretim Araçları */}
          <div className="setting-card">
            <div className="setting-text">
              <div className="setting-title-with-icon">
                <Sparkles size={18} className="text-amber" />
                <h4>Alt Başlık Başına 30 Soru Otomasyonu</h4>
              </div>
              <p>
                fenbilim.net müfredatındaki her bir alt başlığa TYMM Master Prompt kurallarına göre 30'ar bağlam temelli soru üretin.
              </p>
            </div>
            <div className="setting-control action-buttons-vertical">
              {currentSubtopic && (
                <button
                  className="btn-accent"
                  onClick={() => {
                    onPopulateSubtopic(currentSubtopic.id, 30);
                    onClose();
                  }}
                >
                  <Sparkles size={15} />
                  <span>Seçili Başlığı 30 Soruya Tamamla</span>
                </button>
              )}
              <button
                className="btn-primary"
                onClick={() => {
                  if (
                    window.confirm(
                      'Tüm 5, 6, 7 ve 8. sınıf alt başlıkları için 30\'ar soru üretilerek veri tabanına eklenecektir. Onaylıyor musunuz?'
                    )
                  ) {
                    onPopulateAllCurriculum(30);
                    alert('Tüm müfredat başarıyla 30\'ar soruya tamamlandı!');
                    onClose();
                  }
                }}
              >
                <Sparkles size={15} />
                <span>Tüm Müfredatı 30 Soruyla Doldur</span>
              </button>
            </div>
          </div>

          {/* 4. Sınav Başlık Özelleştirme */}
          <div className="setting-card full-width">
            <div className="setting-text">
              <div className="setting-title-with-icon">
                <ShieldCheck size={18} className="text-green" />
                <h4>PDF Sınav Kağıdı Başlıkları</h4>
              </div>
              <p>PDF çıktılarında yer alacak kurum adı ve sınav başlığını özelleştirin.</p>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Okul / Kurum Adı:</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Sınav Başlığı:</label>
                <input
                  type="text"
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group-action">
                <button className="btn-secondary" onClick={handleSaveHeaders}>
                  {saveAlert ? <Check size={15} className="text-green" /> : 'Başlıkları Kaydet'}
                </button>
              </div>
            </div>
          </div>

          {/* 5. JSON Dışa ve İçe Aktarma */}
          <div className="setting-card">
            <div className="setting-text">
              <div className="setting-title-with-icon">
                <Download size={18} className="text-cyan" />
                <h4>Soru Bankası Yedekleme & İçe Aktarma</h4>
              </div>
              <p>Mevcut tüm soruları JSON olarak bilgisayarınıza indirin veya yedekten geri yükleyin.</p>
            </div>
            <div className="setting-control action-buttons-row">
              <button className="btn-secondary" onClick={onExportJson}>
                <Download size={15} />
                <span>JSON İndir</span>
              </button>
              <label className="btn-secondary file-upload-btn">
                <Upload size={15} />
                <span>JSON Yükle</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileImport}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>

          {/* 6. Fabrika Ayarlarına Sıfırlama */}
          <div className="setting-card danger-zone">
            <div className="setting-text">
              <h4>Soru Bankasını Sıfırla</h4>
              <p>Üretilen tüm soruları temizler ve orijinal başlangıç sorularına döndürür.</p>
            </div>
            <div className="setting-control">
              <button
                className="btn-danger"
                onClick={() => {
                  if (
                    window.confirm(
                      'Tüm soru bankası sıfırlanacak ve fabrika ayarlarına dönülecektir. Emin misiniz?'
                    )
                  ) {
                    onResetBank();
                    onClose();
                  }
                }}
              >
                <RefreshCw size={15} />
                <span>Veritabanını Sıfırla</span>
              </button>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn-primary" onClick={onClose}>
            Ayarları Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
