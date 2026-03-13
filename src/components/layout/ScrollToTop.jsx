import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white text-xl rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Volver arriba"
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
}
