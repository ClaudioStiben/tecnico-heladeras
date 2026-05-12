import { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../context/useAuth';
import { useUI } from '../../context/useUI';
import { fetchAllReviewsPage, deleteReview, ADMIN_UID } from '../../services/reviews';
import ModalShell from '../ui/ModalShell';

const colors = [
  '#2563eb', '#22c55e', '#8b5cf6', '#ef4444', '#f59e0b', '#06b6d4', '#ec4899', '#14b8a6',
];

function getColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <i key={s} className={`fas fa-star text-xs ${s <= count ? 'text-stars' : 'text-slate-300'}`} />
      ))}
    </div>
  );
}

function formatDate(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('es-AR', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return '';
  }
}

export default function AllReviewsModal() {
  const { user } = useAuth();
  const { allReviewsOpen, closeAll, reviewsVersion, bumpReviews } = useUI();
  const isAdmin = user?.uid === ADMIN_UID;

  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmId, setConfirmId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const loadFirst = useCallback(async () => {
    setLoading(true);
    try {
      const { items, cursor, done } = await fetchAllReviewsPage({ pageSize: 50 });
      setItems(items);
      setCursor(cursor);
      setDone(done);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = async () => {
    if (done || loading || !cursor) return;
    setLoading(true);
    try {
      const res = await fetchAllReviewsPage({ pageSize: 50, cursor });
      setItems((prev) => [...prev, ...res.items]);
      setCursor(res.cursor);
      setDone(res.done);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allReviewsOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItems([]); setCursor(null); setDone(false);
      loadFirst();
    }
  }, [allReviewsOpen, reviewsVersion, loadFirst]);

  const onDelete = async () => {
    if (!confirmId) return;
    setDeleting(true);
    try {
      await deleteReview(confirmId);
      setItems((prev) => prev.filter((r) => r.id !== confirmId));
      setConfirmId(null);
      bumpReviews();
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <ModalShell
        open={allReviewsOpen}
        onClose={closeAll}
        title="Todas las reseñas"
        subtitle={items.length ? `${items.length}${done ? '' : '+'} reseñas` : ''}
        maxWidth="max-w-3xl"
      >
        {loading && items.length === 0 ? (
          <div className="py-12 text-center text-[var(--text-muted)]">
            <i className="fas fa-spinner fa-spin text-2xl mb-2 block" />
            Cargando reseñas…
          </div>
        ) : items.length === 0 ? (
          <div className="py-12 text-center text-[var(--text-muted)]">
            Todavía no hay reseñas. ¡Sé el primero!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((r) => (
              <div key={r.id} className="flex gap-4 p-4 bg-[var(--bg-alt)] rounded-xl">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5"
                  style={{ backgroundColor: getColor(r.name) }}
                >
                  {(r.name || '?').charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-sm text-[var(--text)]">{r.name}</span>
                      <Stars count={r.rating} />
                    </div>
                    <div className="flex items-center gap-3">
                      {r.createdAt && (
                        <span className="text-xs text-[var(--text-muted)]">{formatDate(r.createdAt)}</span>
                      )}
                      {isAdmin && (
                        <button
                          onClick={() => setConfirmId(r.id)}
                          className="text-xs text-red-600 hover:text-red-700 font-semibold"
                          aria-label="Eliminar reseña"
                        >
                          <i className="fas fa-trash" /> Borrar
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap">
                    {r.comment}
                  </p>
                </div>
              </div>
            ))}

            {!done && (
              <button
                onClick={loadMore}
                disabled={loading}
                className="self-center mt-2 px-5 py-2 border border-[var(--border)] rounded-full text-sm font-semibold hover:bg-[var(--bg-alt)] disabled:opacity-60"
              >
                {loading ? 'Cargando…' : 'Cargar más'}
              </button>
            )}
          </div>
        )}
      </ModalShell>

      {confirmId && (
        <div className="fixed inset-0 z-[9100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => !deleting && setConfirmId(null)} />
          <div className="relative bg-[var(--bg)] rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <h4 className="text-lg font-bold text-[var(--text)] mb-2">¿Eliminar reseña?</h4>
            <p className="text-sm text-[var(--text-muted)] mb-5">
              Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setConfirmId(null)} disabled={deleting}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-[var(--border)] hover:bg-[var(--bg-alt)]"
              >
                Cancelar
              </button>
              <button
                onClick={onDelete} disabled={deleting}
                className="px-4 py-2 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-60"
              >
                {deleting ? 'Eliminando…' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
