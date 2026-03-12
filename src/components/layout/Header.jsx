import { useState, useEffect } from 'react';
import { WA_LINK } from '../../data/constants';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 shrink-0" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Service de Heladeras CRS"
            className="w-10 h-10 object-contain rounded-lg border border-slate-200 bg-white p-0.5"
          />
          <span className="font-bold text-slate-900 text-sm sm:text-base whitespace-nowrap">
            Service de Heladeras CRS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-primary-600 rounded-lg transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold rounded-full transition-all hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp text-base" /> WhatsApp
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />
        <nav
          className={`relative bg-white border-t border-slate-200 shadow-xl transition-transform duration-300
            ${menuOpen ? 'translate-y-0' : '-translate-y-4'}
          `}
        >
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-primary-50 rounded-xl transition-colors"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={WA_LINK}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <i className="fab fa-whatsapp text-lg" /> Contactar por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
