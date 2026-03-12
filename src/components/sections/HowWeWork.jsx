import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK } from '../../data/constants';

const steps = [
  { n: 1, title: 'Nos contactás',             desc: 'Por WhatsApp o teléfono — respondemos rápido.' },
  { n: 2, title: 'Coordinamos la visita',     desc: 'Agendamos para el mismo día en tu domicilio.' },
  { n: 3, title: 'Diagnóstico y presupuesto', desc: 'Te informamos el costo antes de empezar.' },
  { n: 4, title: 'Reparamos en el acto',      desc: 'Con repuestos originales a bordo.' },
  { n: 5, title: 'Garantía escrita',          desc: '90 días de garantía incluida en cada trabajo.' },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="py-16 md:py-24" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-4">Así trabajamos</h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            5 pasos simples para tener tu heladera funcionando
          </p>
        </AnimatedSection>

        <div className="relative max-w-2xl mx-auto mb-12">
          {/* Connector line */}
          <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-[var(--border)] hidden sm:block" />

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} className="flex items-start gap-4 relative z-10" delay={i * 80}>
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white font-extrabold shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                  {step.n}
                </div>
                <div className="flex-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl px-5 py-4 hover:border-primary-400 hover:shadow-md transition-all">
                  <h3 className="font-bold text-[var(--text)] mb-0.5">{step.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center">
          <a
            href={WA_LINK}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.35)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp text-xl" /> Empezar ahora
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
