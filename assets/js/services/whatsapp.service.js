
function buildWhatsAppUrl({ phone, message }) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function applyWhatsAppLinks(config) {
  const url = buildWhatsAppUrl(config);
  document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}
