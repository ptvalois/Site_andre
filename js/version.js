const SITE_VERSION = "2.0.0";

const versionElement = document.getElementById("site-version");

if (versionElement) {
  versionElement.innerText = `Versão: ${SITE_VERSION}`;
}
