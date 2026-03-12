import { WA_LINK } from '../../data/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark text-white text-2xl rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      style={{ animation: 'wa-pulse 2s infinite' }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}
