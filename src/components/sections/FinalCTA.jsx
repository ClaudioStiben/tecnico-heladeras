import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK, PHONE } from '../../data/constants';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Tu heladera necesita reparación?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Escribinos ahora y resolvé el problema hoy. Atención personalizada y profesional.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a
              href={WA_LINK}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              target="_blank"
              rel="noopener noreferrer"
              data-track="final-whatsapp"
            >
              <i className="fab fa-whatsapp text-xl" /> Enviar WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-all hover:-translate-y-0.5"
              data-track="final-call"
            >
              <i className="fas fa-phone" /> Llamar ahora
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-bolt text-amber-400" /> Respuesta rápida
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-user text-amber-400" /> Atención directa
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-check-circle text-amber-400" /> Sin intermediarios
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
