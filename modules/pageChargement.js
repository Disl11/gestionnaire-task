import { createAndAddElement } from "./createAndAddElement.js";

export function pageAccueilChargement(parentElement) {
  const divPrincipal = createAndAddElement("div", parentElement, null, {
    class: "page-chargement",
  });
  const logoPrincipal = createAndAddElement("img", divPrincipal, null, {
    src: "./images/image.png",
    alt: "logo de l'application",
    class: "logo-principal",
  });
  createAndAddElement("p", divPrincipal, "Chargement en cours...", {
    class: "texte-chargement",
  });
}
