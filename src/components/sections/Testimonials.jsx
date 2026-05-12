import { useEffect, useState, useCallback } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { WA_LINK, PHONE } from "../../data/constants";
import { useAuth } from "../../context/useAuth";
import { useUI } from "../../context/useUI";
import { fetchLatestReviews } from "../../services/reviews";

const colors = [
  "#2563eb",
  "#22c55e",
  "#8b5cf6",
  "#ef4444",
  "#f59e0b",
  "#06b6d4",
  "#ec4899",
  "#14b8a6",
];

function getColor(name = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <i key={s} className={`fas fa-star text-sm ${s <= count ? "text-stars" : "text-slate-300"}`} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Stars count={review.rating} />
      <p className="text-[var(--text)] text-sm leading-relaxed mt-4 mb-6 flex-1">
        &ldquo;{review.comment}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: getColor(review.name) }}
        >
          {(review.name || "?").charAt(0).toUpperCase()}
        </div>
        <span className="font-semibold text-sm text-[var(--text)]">
          {review.name}
        </span>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 h-full flex flex-col animate-pulse">
      <div className="h-3 w-24 bg-slate-200 rounded mb-4" />
      <div className="h-3 bg-slate-200 rounded mb-2" />
      <div className="h-3 bg-slate-200 rounded mb-2 w-11/12" />
      <div className="h-3 bg-slate-200 rounded mb-6 w-8/12" />
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <div className="w-10 h-10 rounded-full bg-slate-200" />
        <div className="h-3 w-28 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { user } = useAuth();
  const { openReview, openLogin, openAllReviews, reviewsVersion } = useUI();
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setErr(false);
    try {
      const items = await fetchLatestReviews(3);
      setLatest(items);
    } catch {
      setErr(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, [load, reviewsVersion]);

  const handleLeaveReview = () => {
    if (user) openReview();
    else openLogin();
  };

  return (
    <section
      id="testimonios"
      className="py-16 md:py-24"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            Más de 2000 familias ya confiaron en nosotros
          </p>
        </AnimatedSection>

        {/* Featured 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {loading ? (
            [0, 1, 2].map((i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <SkeletonCard />
              </AnimatedSection>
            ))
          ) : err ? (
            <div className="col-span-full text-center text-[var(--text-muted)] py-8">
              No pudimos cargar las reseñas.{" "}
              <button onClick={load} className="text-primary-600 font-semibold hover:underline">
                Reintentar
              </button>
            </div>
          ) : latest.length === 0 ? (
            <div className="col-span-full text-center text-[var(--text-muted)] py-8">
              Todavía no hay reseñas. ¡Sé el primero!
            </div>
          ) : (
            latest.map((r, i) => (
              <AnimatedSection key={r.id} delay={i * 100}>
                <ReviewCard review={r} />
              </AnimatedSection>
            ))
          )}
        </div>

        {/* Acciones reseñas */}
        <AnimatedSection className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
          <button
            onClick={handleLeaveReview}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all hover:-translate-y-0.5"
          >
            <i className="fas fa-pen" />
            Dejá tu reseña
          </button>
          <button
            onClick={openAllReviews}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all"
          >
            <i className="fas fa-list" />
            Ver todas las reseñas
          </button>
        </AnimatedSection>

        {/* CTA de conversión */}
        <AnimatedSection className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
          <a
            href={WA_LINK}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
            data-track="testimonials-whatsapp"
          >
            <i className="fab fa-whatsapp text-lg" /> Escribinos por WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all hover:-translate-y-0.5"
            data-track="testimonials-call"
          >
            <i className="fas fa-phone" /> Llamar ahora
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
