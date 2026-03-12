import AnimatedSection from '../ui/AnimatedSection';
import { brands } from '../../data/brands';

const reasons = [
  { icon: 'fas fa-user-tie',         title: 'Técnico especializado',    desc: 'Solo heladeras, sin excepciones.' },
  { icon: 'fas fa-calendar-check',   title: 'Visita el mismo día',      desc: 'Coordinamos con urgencia.' },
  { icon: 'fas fa-box',              title: 'Repuestos originales',     desc: 'A bordo para reparar en la primera visita.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Precio transparente',      desc: 'Presupuesto antes de empezar.' },
  { icon: 'fas fa-shield-alt',       title: 'Garantía escrita 90 días', desc: 'Si falla, volvemos sin costo.' },
];

export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero row: photo + text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <AnimatedSection className="flex justify-center">
            <div className="relative">
              <img
                src="/foto-claudio.png"
                alt="Claudio — técnico especialista"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl px-4 py-3 shadow-lg">
                <i className="fas fa-award text-primary-600 text-xl" />
                <div>
                  <p className="font-bold text-[var(--text)] text-sm">+15 años</p>
                  <p className="text-[var(--text-muted)] text-xs">Solo heladeras</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">Especialización</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-5 leading-tight">
              Especialistas en heladeras de alta gama y Side by Side
            </h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
              No todos los técnicos trabajan con equipos complejos.
              Nos especializamos en Side by Side y modelos de mayor tecnología,
              con repuestos originales y diagnóstico preciso.
            </p>
          </AnimatedSection>
        </div>

        {/* Why choose us */}
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-3">¿Por qué elegirnos?</h3>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">Honestidad, seriedad y experiencia en cada trabajo</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
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

        {/* Brands - infinite marquee */}
        <AnimatedSection className="text-center">
          <h3 className="text-xl font-bold text-[var(--text)] mb-8">Marcas con las que trabajamos</h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />
            <div className="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...brands, ...brands, ...brands].map((b, i) => (
                <div key={`${b.name}-${i}`} className="flex flex-col items-center gap-2 mx-8 sm:mx-12 shrink-0">
                  <img src={b.logo} alt={b.name} className="h-10 sm:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <span className="text-xs text-[var(--text-muted)] font-medium">{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
