import AnimatedSection from '../ui/AnimatedSection';
import { WA_URGENT, PHONE } from '../../data/constants';

export default function Urgency() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <i className="fas fa-exclamation-triangle text-amber-400 text-3xl mb-5 block" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            No dejes pasar el problema
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Cuando una heladera empieza a fallar, el problema suele empeorar.
            Un diagnóstico a tiempo evita gastos mayores y pérdida de mercadería.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={WA_URGENT}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              target="_blank"
              rel="noopener noreferrer"
              data-track="urgency-whatsapp"
            >
              <i className="fab fa-whatsapp text-xl" /> Escribinos ahora
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-all hover:-translate-y-0.5"
              data-track="urgency-call"
            >
              <i className="fas fa-phone" /> Llamar ahora
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
