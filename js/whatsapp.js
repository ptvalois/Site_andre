document.addEventListener("DOMContentLoaded", () => {
  const whatsappConfig = {
    phone: "5571996639409",
    message: "Olá, gostaria de agendar uma consulta com o Dr. André Brandão.",
  };

  const whatsappUrl = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(whatsappConfig.message)}`;

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl;
    link.target = "_blank";
  });
});
