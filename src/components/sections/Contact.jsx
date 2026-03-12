import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK, PHONE, PHONE_DISPLAY, SCHEDULE, COVERAGE } from '../../data/constants';

const barrios = [
  'Palermo', 'Recoleta', 'Barrio Norte', 'Devoto',
  'Villa Crespo', 'Almagro', 'Caballito', 'Puerto Madero',
  'Belgrano', 'Colegiales', 'Chacarita', 'Flores',
  'San Telmo', 'Boedo', 'Saavedra', 'Núñez',
];

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Contactanos
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Servicio a domicilio en toda la Ciudad de Buenos Aires y Zona Norte GBA
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Info */}
          <AnimatedSection className="flex flex-col gap-6">
            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-whatsapp text-white text-lg">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <p className="font-bold text-white">WhatsApp</p>
                  <p className="text-white/70 text-sm">Respuesta inmediata</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/20 text-white text-lg">
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <p className="font-bold text-white">Teléfono</p>
                  <a href={`tel:${PHONE}`} className="text-white/70 text-sm hover:text-white transition-colors">
                    +54 9 {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/20 text-white text-lg">
                  <i className="fas fa-clock" />
                </div>
                <div>
                  <p className="font-bold text-white">Horario</p>
                  <span className="text-white/70 text-sm">{SCHEDULE}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-white/20 text-white text-lg">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <p className="font-bold text-white">Cobertura</p>
                  <span className="text-white/70 text-sm">{COVERAGE}</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl" /> Escribir por WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-all hover:-translate-y-0.5 flex-1"
              >
                <i className="fas fa-phone" /> Llamar ahora
              </a>
            </div>
          </AnimatedSection>

          {/* Barrios */}
          <AnimatedSection className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white">Zona de cobertura</h3>
            <div className="flex flex-wrap gap-2">
              {barrios.map(b => (
                <span key={b} className="px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm font-medium text-white/85 hover:bg-white/20 transition-all cursor-default">
                  {b}
                </span>
              ))}
              <span className="px-3.5 py-1.5 border border-dashed border-white/25 rounded-full text-sm text-white/50 italic">
                + más barrios
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex gap-1">
                <span className="text-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <p className="text-white/70 text-sm">
                <strong className="text-white">4.9/5</strong> — Basado en más de 200 reseñas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
