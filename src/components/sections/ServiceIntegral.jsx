import AnimatedSection from '../ui/AnimatedSection';

const services = [
  {
    img: '/camionetas.jpeg',
    alt: 'Camionetas de Service de Heladeras CRS equipadas con repuestos',
    title: 'Unidades móviles con stock de repuestos',
    desc: 'Contamos con unidades equipadas con todos los repuestos necesarios para brindar una solución en el acto.',
  },
  {
    img: '/atencion.jpeg',
    alt: 'Atención al cliente de Service de Heladeras CRS',
    title: 'Atención personalizada y respuesta inmediata',
    desc: 'Coordinamos la visita en el día y brindamos un trato directo, sin intermediarios ni demoras.',
  },
];

export default function ServiceIntegral() {
  return (
    <section id="servicios" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Servicio integral
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Todo lo que necesitás en una sola visita
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Llegamos preparados para resolver el problema en el momento, sin necesidad de segundas visitas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 120}
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden hover:border-primary-400 hover:shadow-lg transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {s.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
