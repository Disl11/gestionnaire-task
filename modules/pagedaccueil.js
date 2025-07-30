import { createAndAddElement } from "./createAndAddElement.js";

export function creationPageAccueil() {
  const appRoot = document.getElementById("app-root");
  if (!appRoot) {
    console.error("Le point d'accès n'a pas été trouvé.");
    return;
  }
  appRoot.innerHTML = "";

  const divPrincipal = createAndAddElement("div", appRoot, null, {
    class: "page-accueil-container",
  });

  const titrePrincipal = createAndAddElement(
    "h1",
    divPrincipal,
    "Gestionnaire de contacts",
    { class: "titre-application" }
  );

  const logoPrincipal = createAndAddElement("img", divPrincipal, null, {
    src: "./images/image.png",
    alt: "logo de l'application",
    class: "logo-principal",
  });

  const divListeDeroulante = createAndAddElement("div", divPrincipal, null, {
    class: "select-group",
  });

  const labelForListeDeroulante = createAndAddElement(
    "label",
    divListeDeroulante
  );

  const selectElement = createAndAddElement(
    "select",
    divListeDeroulante,
    null,
    {
      id: "menu-action",
      class: "select-menu",
    }
  );

  createAndAddElement("option", selectElement, "Que voulez-vous faire ?", {
    value: "default",
    selected: true,
    disabled: true,
    hidden: true,
  });
  createAndAddElement("option", selectElement, "Lister les contacts", {
    value: "lister",
  });
  createAndAddElement("option", selectElement, "Ajouter un contact", {
    value: "ajouter",
  });
  createAndAddElement("option", selectElement, "Voir le nombre de contact", {
    value: "compter",
  });
  createAndAddElement("div", divPrincipal, "Choisir une option", {
    class: "bouton-option",
  });

  return divPrincipal;
}
