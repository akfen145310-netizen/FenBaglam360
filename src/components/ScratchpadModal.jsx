import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, Pen, Trash2, Undo } from 'lucide-react';

export default function ScratchpadModal({ isOpen, onClose }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#38bdf8');
  const [lineWidth, setLineWidth] = useState(3);
  const [isEraser, setIsEraser] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Canvas çözünürlüğünü ekran boyutuna eşitle
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [isOpen]);

  if (!isOpen) return null;

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.strokeStyle = isEraser ? '#0f172a' : color;
    ctx.lineWidth = isEraser ? lineWidth * 4 : lineWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="scratchpad-modal" onClick={(e) => e.stopPropagation()}>
        <div className="scratchpad-header">
          <div className="scratchpad-title">
            <span className="dot pulse"></span>
            <h3>Öğrenci Karalama & İşlem Tahtası</h3>
            <span className="badge">Çizim & Not</span>
          </div>

          <div className="scratchpad-tools">
            <button
              className={`tool-btn ${!isEraser ? 'active' : ''}`}
              onClick={() => setIsEraser(false)}
              title="Kalem"
            >
              <Pen size={16} />
            </button>
            <button
              className={`tool-btn ${isEraser ? 'active' : ''}`}
              onClick={() => setIsEraser(true)}
              title="Silgi"
            >
              <Eraser size={16} />
            </button>

            {/* Renk Seçimi */}
            <div className="color-palette">
              {['#38bdf8', '#ef4444', '#10b981', '#f59e0b', '#ffffff'].map((c) => (
                <button
                  key={c}
                  className={`color-dot ${color === c && !isEraser ? 'selected' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => {
                    setColor(c);
                    setIsEraser(false);
                  }}
                />
              ))}
            </div>

            <button className="tool-btn" onClick={clearCanvas} title="Temizle">
              <Trash2 size={16} />
            </button>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="scratchpad-body">
          <canvas
            ref={canvasRef}
            className="scratchpad-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          <div className="scratchpad-watermark">FenBağlam 360 Karalama Alanı</div>
        </div>
      </div>
    </div>
  );
}
