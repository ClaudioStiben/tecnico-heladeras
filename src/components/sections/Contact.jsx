import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK, PHONE, PHONE_DISPLAY, SCHEDULE, COVERAGE } from '../../data/constants';

const barrios = [
  { name: 'Palermo',       cx: 170, cy: 155 },
  { name: 'Recoleta',      cx: 195, cy: 175 },
  { name: 'Belgrano',      cx: 155, cy: 110 },
  { name: 'Caballito',     cx: 155, cy: 215 },
  { name: 'Almagro',       cx: 175, cy: 205 },
  { name: 'Villa Crespo',  cx: 160, cy: 185 },
  { name: 'Flores',        cx: 120, cy: 235 },
  { name: 'Devoto',        cx: 95,  cy: 165 },
  { name: 'Núñez',         cx: 155, cy: 80 },
  { name: 'San Telmo',     cx: 210, cy: 230 },
  { name: 'Boedo',         cx: 185, cy: 240 },
  { name: 'Colegiales',    cx: 160, cy: 140 },
  { name: 'Chacarita',     cx: 145, cy: 160 },
  { name: 'Saavedra',      cx: 130, cy: 80 },
  { name: 'Puerto Madero', cx: 230, cy: 215 },
  { name: 'Barrio Norte',  cx: 190, cy: 190 },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Atendemos en toda CABA
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            Servicio a domicilio en toda la Ciudad Autónoma de Buenos Aires
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Info */}
          <AnimatedSection className="flex flex-col gap-6">
            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-whatsapp text-white text-lg">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text)]">WhatsApp</p>
                  <p className="text-[var(--text-muted)] text-sm">Respuesta inmediata</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 text-lg">
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text)]">Teléfono</p>
                  <a href={`tel:${PHONE}`} className="text-[var(--text-muted)] text-sm hover:text-primary-600 transition-colors">
                    +54 9 {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 text-lg">
                  <i className="fas fa-clock" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text)]">Horario</p>
                  <span className="text-[var(--text-muted)] text-sm">{SCHEDULE}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 text-lg">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <p className="font-bold text-[var(--text)]">Cobertura</p>
                  <span className="text-[var(--text-muted)] text-sm">{COVERAGE}</span>
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
                data-track="contact-whatsapp"
              >
                <i className="fab fa-whatsapp text-xl" /> Enviar WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full text-lg transition-all hover:-translate-y-0.5 flex-1"
                data-track="contact-call"
              >
                <i className="fas fa-phone" /> Llamar ahora
              </a>
            </div>
          </AnimatedSection>

          {/* CABA Map */}
          <AnimatedSection className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>Zona de cobertura</h3>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 flex justify-center">
              <svg viewBox="0 0 320 380" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified CABA silhouette */}
                <path
                  d="M155,20 C140,20 120,35 105,55 C85,80 70,105 60,140 C50,175 50,200 55,230 C60,260 70,285 85,310 C100,335 120,350 145,360 C170,365 195,355 215,335 C235,310 250,280 255,245 C260,210 255,180 245,150 C235,120 220,95 205,70 C190,50 175,30 160,22 Z"
                  fill="#eaf2f8"
                  stroke="#1b4f72"
                  strokeWidth="2"
                />
                {/* Río de la Plata indication (right edge) */}
                <path
                  d="M245,150 C260,160 270,180 275,205 C278,230 270,260 255,245"
                  fill="none"
                  stroke="#a9cce3"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />

                {/* Barrio markers */}
                {barrios.map((b, i) => (
                  <g key={b.name}>
                    {/* Pulse ring */}
                    <circle
                      cx={b.cx} cy={b.cy} r="6"
                      fill="none"
                      stroke="#1b4f72"
                      strokeWidth="1.5"
                      opacity="0.4"
                      style={{ animation: `pulse-dot 2s ease-in-out ${i * 0.15}s infinite` }}
                    />
                    {/* Dot */}
                    <circle cx={b.cx} cy={b.cy} r="3.5" fill="#1b4f72" />
                    {/* Label */}
                    <text
                      x={b.cx}
                      y={b.cy - 10}
                      textAnchor="middle"
                      fill="#0e2a43"
                      fontSize="8"
                      fontWeight="600"
                      fontFamily="Inter, sans-serif"
                    >
                      {b.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex gap-1">
                <span className="text-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <p className="text-[var(--text-muted)] text-sm">
                <strong className="text-[var(--text)]">4.9/5</strong> — Basado en más de 200 reseñas
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
