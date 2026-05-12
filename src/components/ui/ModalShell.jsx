import { useEffect } from 'react';

export default function ModalShell({ open, onClose, title, subtitle, children, maxWidth = 'max-w-md' }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9000] flex items-start justify-center p-4 pt-[72px] sm:pt-20">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-[var(--bg)] rounded-2xl shadow-2xl w-full ${maxWidth} max-h-[calc(100vh-100px)] overflow-hidden flex flex-col`}>
        <div className="flex items-start justify-between px-6 py-4 border-b border-[var(--border)] shrink-0">
          <div>
            {title && <h3 className="text-lg font-bold text-[var(--text)]">{title}</h3>}
            {subtitle && <p className="text-sm text-[var(--text-muted)] mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-lg" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
