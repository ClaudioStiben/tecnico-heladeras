import { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { WA_LINK } from '../../data/constants';

const problems = [
  { icon: 'fas fa-thermometer-empty', label: 'No enfría' },
  { icon: 'fas fa-snowflake',         label: 'No congela' },
  { icon: 'fas fa-mountain',          label: 'Hace hielo atrás' },
  { icon: 'fas fa-tint',              label: 'Pierde agua' },
  { icon: 'fas fa-bolt',              label: 'No corta o enfría de más' },
  { icon: 'fas fa-th-large',          label: 'Fallas en Side by Side' },
];

const slides = [
  { img: '/sbs-electrolux.jpeg',    title: 'Side by Side Electrolux',      desc: 'Reparación especializada en Side by Side Electrolux French Door' },
  { img: '/sbs-ge.jpeg',            title: 'Side by Side General Electric', desc: 'Service de heladeras GE Side by Side — todas las fallas' },
  { img: '/sbs-patrick.jpeg',       title: 'Side by Side Patrick',          desc: 'Técnico especialista en Side by Side Patrick con repuestos originales' },
  { img: '/heladera-nofrost.jpg',   title: 'Heladera No Frost Whirlpool',  desc: 'Reparación de sistemas No Frost — descongelado automático y ventilador' },
  { img: '/heladera-3puertas.jpg',  title: 'Heladera 3 Puertas',           desc: 'Service de heladeras de alta gama con display digital' },
  { img: '/compresor-inverter.jpg',  title: 'Compresor Inverter',           desc: 'Diagnóstico y reparación de compresores Inverter — alta eficiencia' },
  { img: '/freezer vertical.webp',  title: 'Freezers Verticales',          desc: 'Congeladores de gran capacidad para uso doméstico' },
  { img: '/minibar.jpg',            title: 'Minibares',                     desc: 'Refrigeradores compactos para oficina y hogar' },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((i) => {
    setCurrent(((i % total) + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => goTo(current + 1), 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, paused, goTo]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/2] max-w-4xl mx-auto shadow-xl">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h4 className="text-white font-bold text-xl sm:text-2xl mb-1">{slide.title}</h4>
              <p className="text-white/80 text-sm sm:text-base">{slide.desc}</p>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-xl transition-all z-10"
          aria-label="Anterior"
        >
          <i className="fas fa-chevron-left text-sm" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-xl transition-all z-10"
          aria-label="Siguiente"
        >
          <i className="fas fa-chevron-right text-sm" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-primary-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-5 overflow-x-auto pb-2 px-1 snap-x snap-mandatory scrollbar-hide">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => goTo(i)}
            className={`shrink-0 snap-start rounded-xl overflow-hidden transition-all duration-300 ${
              i === current
                ? 'ring-2 ring-primary-600 ring-offset-2 opacity-100 scale-105'
                : 'opacity-60 hover:opacity-90'
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-24 h-16 sm:w-28 sm:h-[74px] object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)] mb-4">
            Solucionamos tu problema<br className="hidden sm:block" /> rápido y sin vueltas
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Sabemos que cada hora sin heladera genera pérdidas. Diagnosticamos y reparamos en el mismo día.
          </p>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-10">
          <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto leading-relaxed">
            Sabemos lo que significa que una heladera deje de funcionar. Se pierde mercadería, se genera estrés y necesitás una solución urgente.
          </p>
        </AnimatedSection>

        {/* Problem chips */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-6">
          {problems.map(p => (
            <div
              key={p.label}
              className="flex items-center gap-2.5 px-5 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-sm font-medium text-[var(--text)] hover:border-primary-500 hover:shadow-md transition-all cursor-default"
            >
              <i className={`${p.icon} text-primary-600`} />
              <span>{p.label}</span>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16">
          <p className="text-[var(--text-muted)] text-sm mb-4">
            ¿Tu problema no está en la lista? <strong className="text-[var(--text)]">Consultanos igual.</strong>
          </p>
          <a
            href={WA_LINK}
            className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp text-lg" /> Consultar por WhatsApp
          </a>
        </AnimatedSection>

        {/* Equipment carousel */}
        <AnimatedSection className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-3">Equipos que reparamos</h3>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            Más de 15 años de experiencia en todos los sistemas de refrigeración doméstica
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <Carousel />
        </AnimatedSection>
      </div>
    </section>
  );
}
