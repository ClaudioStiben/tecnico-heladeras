import { WA_LINK, PHONE } from '../../data/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[72px] overflow-hidden bg-[var(--bg)]">
      {/* Subtle background accent — soft gradient blob top-right */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-primary-50 via-primary-50/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text */}
          <div className="text-center lg:text-left">
            {/* Small badge — minimal */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs text-primary-700 font-semibold uppercase tracking-wide mb-5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Solo heladeras · CABA
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--text)] leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Técnico de Heladeras{' '}
              <span className="text-primary-600">en CABA</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--text-muted)] font-light mb-5 leading-relaxed">
              ¿Tu heladera no enfría?{' '}
              <span className="text-[var(--text)] font-normal">La reparamos en el día.</span>
            </p>

            <p className="text-base text-[var(--text-muted)] max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed">
              Reparación a domicilio de heladeras y freezers en CABA.
              Trabajamos tanto con equipos convencionales como con heladeras <strong className="text-[var(--text)]">Side by Side</strong> y de <strong className="text-[var(--text)]">alta gama</strong>.
              <br /><br />
              Especialistas en sistemas <strong className="text-[var(--text)]">no frost</strong> y equipos de última generación (<strong className="text-[var(--text)]">inverter</strong>), con atención personalizada y soluciones rápidas para todo tipo de marcas y modelos.
            </p>

            {/* Checkmarks — clean horizontal */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-[var(--text-muted)] font-medium mb-6 justify-center lg:justify-start">
              {['Atención en el día', 'Repuestos a bordo', 'Garantía escrita 90 días'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <i className="fas fa-check text-primary-500 text-xs" /> {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl" /> Contactar por WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-phone" /> Llamar ahora
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute -inset-6 bg-primary-100/60 rounded-full blur-3xl" />
              <img
                src="/hero-sbs.jpeg"
                alt="Heladera Side by Side con dispenser — service especializado en alta gama"
                className="relative z-10 w-full max-w-xs max-h-[350px] object-cover rounded-2xl shadow-lg"
              />
              {/* Badge 1 */}
              <div className="absolute -left-6 bottom-16 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-md border border-slate-100">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <i className="fas fa-award text-lg" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">+15 años</p>
                  <p className="text-slate-500 text-xs">Solo heladeras</p>
                </div>
              </div>
              {/* Badge 2 */}
              <div className="absolute -right-6 top-12 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-md border border-slate-100">
                <div className="flex gap-0.5 text-stars text-sm">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">4.9 / 5</p>
                  <p className="text-slate-500 text-xs">+200 reseñas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="flex justify-center pb-4">
        <a
          href="#servicios"
          className="animate-bounce text-primary-400 hover:text-primary-600 transition-colors"
          aria-label="Ver más"
        >
          <i className="fas fa-chevron-down text-2xl" />
        </a>
      </div>

      {/* Soft divider line instead of heavy wave */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}
