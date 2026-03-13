import AnimatedSection from '../ui/AnimatedSection';
import { brands } from '../../data/brands';
import { WA_LINK } from '../../data/constants';

const reasons = [
  { icon: 'fas fa-user-tie',         title: 'Técnico especializado',    desc: 'Solo heladeras, sin excepciones.' },
  { icon: 'fas fa-calendar-check',   title: 'Visita el mismo día',      desc: 'Coordinamos con urgencia.' },
  { icon: 'fas fa-box',              title: 'Repuestos originales',     desc: 'A bordo para reparar en la primera visita.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Precio transparente',      desc: 'Presupuesto antes de empezar.' },
  { icon: 'fas fa-shield-alt',       title: 'Garantía escrita 90 días', desc: 'Si falla, volvemos sin costo.' },
  { icon: 'fas fa-credit-card',      title: 'Todos los medios de pago', desc: 'Efectivo, Débito, Transferencia y Mercado Pago.' },
];

const paymentMethods = [
  { icon: 'fas fa-money-bill-wave', label: 'Efectivo' },
  { icon: 'fas fa-credit-card',     label: 'Débito' },
  { icon: 'fas fa-exchange-alt',    label: 'Transferencia' },
  { icon: 'fas fa-mobile-alt',      label: 'Mercado Pago' },
];

/* Split brands into two rows for the double marquee */
const mid = Math.ceil(brands.length / 2);
const row1 = brands.slice(0, mid);
const row2 = brands.slice(mid);

export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro text — no photo */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Especialización</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Especialistas en heladeras de <span className="text-primary-600">alta gama</span> y <span className="text-primary-600">Side by Side</span> en CABA
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            No todos los técnicos trabajan con equipos complejos.
            Nos especializamos en <strong>Side by Side</strong> y modelos de <strong>mayor tecnología</strong>,
            con repuestos originales y diagnóstico preciso.
          </p>
        </AnimatedSection>

        {/* Why choose us */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>¿Por qué elegirnos?</h3>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">Honestidad, seriedad y experiencia en cada trabajo</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {reasons.map((r, i) => (
            <AnimatedSection
              key={r.title}
              delay={i * 80}
              className="flex items-start gap-4 p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-primary-400 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <i className={r.icon} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text)] mb-0.5">{r.title}</h4>
                <p className="text-sm text-[var(--text-muted)]">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Payment methods & guarantee */}
        <AnimatedSection className="mb-20">
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-[var(--text)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Medios de pago aceptados</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {paymentMethods.map(m => (
                <div key={m.label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm text-primary-600 text-xl">
                    <i className={m.icon} />
                  </div>
                  <span className="text-sm font-medium text-[var(--text)]">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-primary-200 text-sm font-semibold text-primary-700">
              <i className="fas fa-shield-alt" /> Garantía escrita de 90 días en cada reparación
            </div>
          </div>
        </AnimatedSection>

        {/* Brands - double row infinite marquee */}
        <AnimatedSection className="text-center">
          <h3 className="text-xl font-bold text-[var(--text)] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Marcas con las que trabajamos</h3>

          {/* Row 1 */}
          <div className="relative overflow-hidden mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />
            <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...row1, ...row1, ...row1].map((b, i) => (
                <BrandItem key={`r1-${b.name}-${i}`} brand={b} />
              ))}
            </div>
          </div>

          {/* Row 2 — reverse direction */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />
            <div className="flex animate-[marquee_30s_linear_infinite_reverse] hover:[animation-play-state:paused] w-max">
              {[...row2, ...row2, ...row2].map((b, i) => (
                <BrandItem key={`r2-${b.name}-${i}`} brand={b} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA after brands */}
        <AnimatedSection className="text-center mt-12">
          <a
            href={WA_LINK}
            className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
            data-track="about-whatsapp"
          >
            <i className="fab fa-whatsapp text-lg" /> Consultá sin compromiso
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

function BrandItem({ brand }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mx-6 sm:mx-8 shrink-0 w-24 sm:w-28">
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
      />
      <div className="hidden items-center justify-center h-10 sm:h-12 px-3 bg-primary-50 rounded-lg text-primary-700 font-bold text-xs">
        {brand.name}
      </div>
      <span className="text-xs text-[var(--text-muted)] font-medium truncate max-w-full">{brand.name}</span>
    </div>
  );
}
