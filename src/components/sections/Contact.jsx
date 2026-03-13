import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK, PHONE, PHONE_DISPLAY, SCHEDULE, COVERAGE } from '../../data/constants';

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

          {/* Google Maps */}
          <AnimatedSection className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>Zona de cobertura</h3>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden">
              <iframe
                title="Zona de cobertura — Ciudad Autónoma de Buenos Aires"
                src="https://maps.google.com/maps?ll=-34.615824,-58.433298&z=11&t=m&hl=es-419&gl=AR&mapclient=embed&q=Buenos+Aires+Cdad.+Aut%C3%B3noma+de+Buenos+Aires&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
