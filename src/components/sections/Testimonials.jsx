import { useState, useEffect } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { staticReviews } from "../../data/staticReviews";

const featured = staticReviews.filter((r) => r.featured);
const allReviews = staticReviews;

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

function getColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
      {[1, 2, 3, 4, 5].map((s) => (
        <i key={s} className="fas fa-star text-sm text-stars" />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Stars />
      <p className="text-[var(--text)] text-sm leading-relaxed mt-4 mb-6 flex-1">
        &ldquo;{review.comment}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: getColor(review.name) }}
        >
          {review.name.charAt(0).toUpperCase()}
        </div>
        <span className="font-semibold text-sm text-[var(--text)]">
          {review.name}
        </span>
      </div>
    </div>
  );
}

function ReviewsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9000] flex items-start justify-center p-4 pt-[72px] sm:pt-20">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-[var(--bg)] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[calc(100vh-100px)] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] shrink-0">
          <div>
            <h3 className="text-lg font-bold text-[var(--text)]">
              Todas las reseñas
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              {allReviews.length} reseñas — todas con 5 estrellas
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-lg" />
          </button>
        </div>

        {/* Reviews list */}
        <div className="overflow-y-auto p-6 flex flex-col gap-4">
          {allReviews.map((r) => (
            <div
              key={r.id}
              className="flex gap-4 p-4 bg-[var(--bg-alt)] rounded-xl"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5"
                style={{ backgroundColor: getColor(r.name) }}
              >
                {r.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-sm text-[var(--text)]">
                    {r.name}
                  </span>
                  <Stars />
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {r.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showModal, setShowModal] = useState(false);

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
          {featured.map((r, i) => (
            <AnimatedSection key={r.id} delay={i * 100}>
              <ReviewCard review={r} />
            </AnimatedSection>
          ))}
        </div>

        {/* Ver todas */}
        <AnimatedSection className="text-center mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all"
          >
            <i className="fas fa-list" />
            Ver más reseñas
          </button>
        </AnimatedSection>
      </div>

      <ReviewsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
