// Ano automático do footer
const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}
