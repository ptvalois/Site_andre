document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     ABRIR / FECHAR MENU
  ========================================== */

  const accessibilityBtn = document.getElementById("accessibilityBtn");
  const accessibilityMenu = document.getElementById("accessibilityMenu");

  if (accessibilityBtn && accessibilityMenu) {
    accessibilityBtn.addEventListener("click", () => {
      accessibilityMenu.classList.toggle("hidden");
    });
  }

  /* ==========================================
     AUMENTAR / DIMINUIR TEXTO
  ========================================== */

  let fontScale = parseInt(localStorage.getItem("fontScale")) || 100;

  document.documentElement.style.fontSize = fontScale + "%";

  const increaseText = document.getElementById("increaseText");
  const decreaseText = document.getElementById("decreaseText");

  if (increaseText) {
    increaseText.addEventListener("click", () => {
      if (fontScale < 140) {
        fontScale += 10;

        document.documentElement.style.fontSize = fontScale + "%";

        localStorage.setItem("fontScale", fontScale);
      }
    });
  }

  if (decreaseText) {
    decreaseText.addEventListener("click", () => {
      if (fontScale > 80) {
        fontScale -= 10;

        document.documentElement.style.fontSize = fontScale + "%";

        localStorage.setItem("fontScale", fontScale);
      }
    });
  }

  /* ==========================================
   ALTO CONTRASTE
========================================== */

  const toggleContrast = document.getElementById("toggleContrast");

  if (localStorage.getItem("contrastMode") === "true") {
    document.documentElement.classList.add("contrast-mode");
  }

  if (toggleContrast) {
    toggleContrast.addEventListener("click", () => {
      document.documentElement.classList.toggle("contrast-mode");

      localStorage.setItem(
        "contrastMode",
        document.documentElement.classList.contains("contrast-mode"),
      );
    });
  }

  /* ==========================================
   ESCALA DE CINZA
========================================== */

  const grayscaleMode = document.getElementById("grayscaleMode");

  if (localStorage.getItem("grayscaleMode") === "true") {
    document.documentElement.classList.add("grayscale-mode");
  }

  if (grayscaleMode) {
    grayscaleMode.addEventListener("click", () => {
      document.documentElement.classList.toggle("grayscale-mode");

      localStorage.setItem(
        "grayscaleMode",
        document.documentElement.classList.contains("grayscale-mode"),
      );
    });
  }
  /* ==========================================
     DESTACAR LINKS
  ========================================== */

  const highlightLinks = document.getElementById("highlightLinks");

  if (localStorage.getItem("highlightLinks") === "true") {
    document.documentElement.classList.add("accessibility-links");
  }

  if (highlightLinks) {
    highlightLinks.addEventListener("click", () => {
      document.documentElement.classList.toggle("accessibility-links");

      localStorage.setItem(
        "highlightLinks",
        document.documentElement.classList.contains("accessibility-links"),
      );
    });
  }

  /* ==========================================
     OUVIR PÁGINA
  ========================================== */

  const readPage = document.getElementById("readPage");

  if (readPage) {
    readPage.addEventListener("click", () => {
      speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(document.body.innerText);

      speech.lang = "pt-BR";

      speechSynthesis.speak(speech);
    });
  }

  if (resetAccessibility) {
    resetAccessibility.addEventListener("click", () => {
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
  }
});
