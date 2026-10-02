import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Filter,
  Search,
  Layers,
  Zap,
  Globe,
  Sun,
  Dna,
  Gauge,
  Leaf
} from 'lucide-react';
import { CURRICULUM } from '../data/curriculum.js';

export default function CurriculumSidebar({
  currentGrade,
  selectedSubtopicId,
  onSelectSubtopic,
  questionsBank,
  onPopulateAll
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedUnits, setExpandedUnits] = useState({
    [`${currentGrade}-1`]: true,
    [`${currentGrade}-2`]: true
  });

  const units = CURRICULUM[currentGrade] || [];

  const toggleUnit = (unitId) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  // Alt başlık bazında soru sayısını hesapla
  const getSubtopicCount = (subtopicId) => {
    return questionsBank.filter((q) => q.subtopicId === subtopicId).length;
  };

  return (
    <aside className="curriculum-sidebar">
      {/* Sidebar Başlığı */}
      <div className="sidebar-header">
        <div className="sidebar-title-row">
          <BookOpen size={18} className="icon-cyan" />
          <h3>Üniteler ve Konular</h3>
        </div>
        <span className="sidebar-subtitle">
          {currentGrade}. Sınıf • fenbilim.net & TYMM
        </span>
      </div>

      {/* Arama Kutusu */}
      <div className="sidebar-search">
        <Search size={15} className="search-icon" />
        <input
          type="text"
          placeholder="Konu veya kazanım ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 30 Soru Toplu Tamamlama Butonu */}
      <div className="sidebar-batch-action">
        <button
          className="btn-batch-populate"
          onClick={onPopulateAll}
          title="Tüm alt başlıklara 30'ar bağlam temelli soru üretir"
        >
          <Sparkles size={15} />
          <span>Tüm Müfredatı 30 Soruya Tamamla</span>
        </button>
      </div>

      {/* Ünite Listesi */}
      <div className="units-accordion">
        {units.map((unit) => {
          const isExpanded = expandedUnits[unit.unitId] !== false;
          const filteredSubtopics = unit.subtopics.filter((st) =>
            st.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            st.code.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (searchQuery && filteredSubtopics.length === 0) return null;

          return (
            <div key={unit.unitId} className="unit-group">
              <button
                className={`unit-toggle-btn ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleUnit(unit.unitId)}
              >
                <div className="unit-toggle-left">
                  <span className="unit-num-circle">{unit.unitNumber}</span>
                  <span className="unit-name">{unit.unitTitle}</span>
                </div>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {isExpanded && (
                <div className="subtopics-list slide-down">
                  {filteredSubtopics.map((st) => {
                    const isSelected = selectedSubtopicId === st.id;
                    const count = getSubtopicCount(st.id);
                    const isTargetReached = count >= 30;

                    return (
                      <button
                        key={st.id}
                        className={`subtopic-item-btn ${isSelected ? 'active' : ''}`}
                        onClick={() => onSelectSubtopic(st.id)}
                      >
                        <div className="subtopic-info">
                          <span className="subtopic-code">{st.code}</span>
                          <span className="subtopic-title">{st.title}</span>
                        </div>
                        <div className="subtopic-badge-wrapper">
                          <span
                            className={`badge-count ${
                              isTargetReached ? 'badge-complete' : count > 0 ? 'badge-partial' : 'badge-zero'
                            }`}
                          >
                            {count} / 30
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
