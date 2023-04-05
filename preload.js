// preload.js

// Toutes les API Node.js sont disponibles dans le processus de préchargement.
// Il a la même sandbox qu'une extension Chrome.

const replaceText = (selector, text) => {
  const element = document.getElementById(selector);
  element.addEventListener("click", () => {
    element.innerText = text;
  });
};
replaceText("state", "Bien reçue");
for (const dependency of ["chrome", "node", "electron"]) {
  replaceText(`${dependency}-version`, process.versions[dependency]);
}
