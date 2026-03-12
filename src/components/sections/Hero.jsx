import { WA_LINK, PHONE, COVERAGE } from '../../data/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 font-medium mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Técnico especializado · Solo heladeras
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 font-semibold mb-6 ml-0 sm:ml-3">
              <i className="fas fa-map-marker-alt text-primary-300" />
              CABA y Zona Norte
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              ¿Tu heladera no enfría?
              <span className="block text-white font-semibold mt-2">Técnico de heladeras en Buenos Aires</span>
            </h1>

            <p className="text-lg text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Reparación de heladeras y freezers a domicilio en CABA.
              Especialistas en <strong className="text-white">Side by Side</strong> y equipos de <strong className="text-white">alta gama</strong>.
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 text-white/85 text-sm font-medium mb-10 justify-center lg:justify-start">
              {['Atención rápida a domicilio', 'Reparaciones en el acto', 'Garantía escrita de 90 días', 'Trato directo con el técnico'].map(t => (
                <li key={t} className="flex items-center gap-2">
                  <i className="fas fa-check text-primary-300 text-xs" /> {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl" /> Contactar por WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-lg border-2 border-white/30 hover:border-white/60 transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-phone" /> Llamar ahora
              </a>
            </div>

            <div className="flex items-center gap-2 text-white/70 text-sm justify-center lg:justify-start">
              <i className="fas fa-map-marker-alt" />
              Zona de atención: <strong className="text-white/90">{COVERAGE}</strong>
            </div>
          </div>

          {/* Photo */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              <img
                src="/hero-sbs.jpeg"
                alt="Heladera Side by Side con dispenser — service especializado en alta gama"
                className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl"
              />
              {/* Badge 1 */}
              <div className="absolute -left-4 bottom-16 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-slate-900 text-sm">+15 años</p>
                  <p className="text-slate-500 text-xs">Solo heladeras</p>
                </div>
              </div>
              {/* Badge 2 */}
              <div className="absolute -right-4 top-12 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-slate-900 text-sm">4.9 / 5</p>
                  <p className="text-slate-500 text-xs">+200 reseñas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px] block" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  );
}
