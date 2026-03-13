import { WA_LINK, PHONE, PHONE_DISPLAY, SCHEDULE, COVERAGE } from '../../data/constants';

const topBrands = [
  'Whirlpool', 'Samsung', 'LG', 'Electrolux',
  'Patrick', 'Bosch', 'General Electric',
  'BGH', 'Philco', 'Gafa',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-block mb-4">
              <img src="/logo.png" alt="Service de Heladeras CRS" className="h-12 w-auto rounded-lg bg-white p-1" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Servicio técnico especializado en heladeras con más de 15 años de experiencia.
              Seriedad, transparencia y trayectoria.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h6 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Servicios</h6>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Reparación de Heladeras</li>
              <li>Sistemas No Frost</li>
              <li>Side by Side</li>
              <li>Tecnología Inverter</li>
              <li>Freezers Verticales</li>
            </ul>
          </div>

          {/* Marcas */}
          <div>
            <h6 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Marcas</h6>
            <ul className="flex flex-col gap-2 text-sm">
              {topBrands.map(b => (
                <li key={b}>{b}</li>
              ))}
              <li className="text-slate-500 italic">+ 27 marcas más</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h6 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</h6>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                  +54 9 {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>{SCHEDULE}</li>
              <li>{COVERAGE}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Service de Heladeras CRS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
