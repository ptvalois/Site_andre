const SITE_VERSION = "3.1.6";

const versionElement = document.getElementById("site-version");

if (versionElement) {
  versionElement.innerText = `Versão: ${SITE_VERSION}`;
}
