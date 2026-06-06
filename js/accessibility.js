document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  function openMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Impede o scroll do body quando o menu está aberto
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Restaura o scroll do body
  }

  // Abre o menu ao clicar no botão "hambúrguer"
  menuToggle.addEventListener("click", openMenu);

  // Fecha o menu ao clicar no botão "x" dentro do menu
  menuClose.addEventListener("click", closeMenu);

  // Fecha o menu ao clicar no overlay
  menuOverlay.addEventListener("click", closeMenu);

  // Opcional: Fechar o menu ao clicar em um item do menu (se ele for para uma âncora)
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  });

  /* ==========================
       ACESSIBILIDADE MENU
  ========================== */

  const accessibilityBtn = document.getElementById("accessibilityBtn");
  const accessibilityMenu = document.getElementById("accessibilityMenu");

  accessibilityBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    accessibilityMenu?.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!accessibilityMenu || !accessibilityBtn) return;

    const clicouNoMenu = accessibilityMenu.contains(event.target);
    const clicouNoBotao = accessibilityBtn.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {
      accessibilityMenu.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      accessibilityMenu?.classList.add("hidden");
    }
  });

  /* ==========================
     FONTE
  ========================== */

  let fontScale = parseInt(localStorage.getItem("fontScale")) || 100;
  document.documentElement.style.fontSize = fontScale + "%";

  document.getElementById("increaseText")?.addEventListener("click", () => {
    if (fontScale < 140) {
      fontScale += 10;
      document.documentElement.style.fontSize = fontScale + "%";
      localStorage.setItem("fontScale", fontScale);
    }
  });

  document.getElementById("decreaseText")?.addEventListener("click", () => {
    if (fontScale > 80) {
      fontScale -= 10;
      document.documentElement.style.fontSize = fontScale + "%";
      localStorage.setItem("fontScale", fontScale);
    }
  });

  /* ==========================
     CONTRASTE
  ========================== */

  const toggleContrast = document.getElementById("toggleContrast");

  if (localStorage.getItem("contrastMode") === "true") {
    document.documentElement.classList.add("contrast-mode");
  }

  toggleContrast?.addEventListener("click", () => {
    document.documentElement.classList.toggle("contrast-mode");

    localStorage.setItem(
      "contrastMode",
      document.documentElement.classList.contains("contrast-mode"),
    );
  });

  /* ==========================
     CINZA
  ========================== */

  const grayscaleMode = document.getElementById("grayscaleMode");

  if (localStorage.getItem("grayscaleMode") === "true") {
    document.documentElement.classList.add("grayscale-mode");
  }

  grayscaleMode?.addEventListener("click", () => {
    document.documentElement.classList.toggle("grayscale-mode");

    localStorage.setItem(
      "grayscaleMode",
      document.documentElement.classList.contains("grayscale-mode"),
    );
  });

  /* ==========================
     LINKS
  ========================== */

  const highlightLinks = document.getElementById("highlightLinks");

  if (localStorage.getItem("highlightLinks") === "true") {
    document.documentElement.classList.add("accessibility-links");
  }

  highlightLinks?.addEventListener("click", () => {
    document.documentElement.classList.toggle("accessibility-links");

    localStorage.setItem(
      "highlightLinks",
      document.documentElement.classList.contains("accessibility-links"),
    );
  });

  /* ==========================
     LEITURA
  ========================== */

  const readPage = document.getElementById("readPage");

  readPage?.addEventListener("click", () => {
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(document.body.innerText);
    speech.lang = "pt-BR";
    speechSynthesis.speak(speech);
  });

  /* ==========================
     RESET
  ========================== */

  const resetAccessibility = document.getElementById("resetAccessibility");

  resetAccessibility?.addEventListener("click", () => {
    document.documentElement.classList.remove(
      "contrast-mode",
      "accessibility-links",
      "grayscale-mode",
    );

    speechSynthesis.cancel();

    fontScale = 100;
    document.documentElement.style.fontSize = "100%";

    localStorage.removeItem("fontScale");
    localStorage.removeItem("contrastMode");
    localStorage.removeItem("highlightLinks");
    localStorage.removeItem("grayscaleMode");
  });

  /* ==========================================
   MENU ATIVO CONFORME SCROLL
========================================== */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  /* ==========================================
   FECHAR MENU MOBILE AO NAVEGAR
========================================== */

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");

      document.body.style.overflow = "";
    });
  });
});
