import { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import { useUI } from '../../context/useUI';
import { submitReview } from '../../services/reviews';
import ModalShell from '../ui/ModalShell';

const MIN_COMMENT = 20;

export default function ReviewModal() {
  const { user } = useAuth();
  const { reviewOpen, closeAll, bumpReviews } = useUI();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [err, setErr] = useState('');
  const [ok, setOk] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setRating(0); setHover(0); setComment(''); setErr(''); setOk(''); setLoading(false);
  };

  const handleClose = () => { reset(); closeAll(); };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr(''); setOk('');
    if (!user) return setErr('Tenés que iniciar sesión.');
    if (rating < 1 || rating > 5) return setErr('Elegí una calificación.');
    const trimmed = comment.trim();
    if (trimmed.length < MIN_COMMENT) return setErr(`Escribí al menos ${MIN_COMMENT} caracteres.`);

    setLoading(true);
    try {
      await submitReview({ user, rating, comment: trimmed });
      setOk('¡Gracias por tu reseña!');
      bumpReviews();
      setTimeout(() => { reset(); closeAll(); }, 1500);
    } catch {
      setErr('No pudimos guardar tu reseña. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={reviewOpen} onClose={handleClose} title="Dejá tu reseña" subtitle={user ? `Como ${user.displayName || user.email}` : ''}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <span className="text-sm font-semibold text-[var(--text)] block mb-2">Calificación</span>
          <div className="flex gap-2" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => {
              const active = (hover || rating) >= n;
              return (
                <button
                  type="button" key={n}
                  onMouseEnter={() => setHover(n)}
                  onClick={() => setRating(n)}
                  aria-label={`${n} estrella${n > 1 ? 's' : ''}`}
                  className="text-3xl transition-transform hover:scale-110"
                  style={{ color: active ? 'var(--color-stars)' : '#cbd5e1' }}
                >
                  <i className="fas fa-star" />
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[var(--text)]">
            Comentario <span className="text-[var(--text-muted)] font-normal">(mín. {MIN_COMMENT} caracteres)</span>
          </span>
          <textarea
            value={comment} onChange={(e) => setComment(e.target.value)}
            rows={5} className="auth-input resize-y" placeholder="Contanos tu experiencia…" required
          />
          <span className="text-xs text-[var(--text-muted)] self-end">
            {comment.trim().length}/{MIN_COMMENT}
          </span>
        </label>

        {err && (
          <div className="text-sm px-3 py-2 rounded-lg border bg-red-50 text-red-700 border-red-200">
            {err}
          </div>
        )}
        {ok && (
          <div className="text-sm px-3 py-2 rounded-lg border bg-green-50 text-green-700 border-green-200">
            {ok}
          </div>
        )}

        <button
          type="submit" disabled={loading}
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-bold rounded-full transition-all"
        >
          {loading ? <><i className="fas fa-spinner fa-spin" /> Enviando…</> : 'Enviar reseña'}
        </button>
      </form>
    </ModalShell>
  );
}
