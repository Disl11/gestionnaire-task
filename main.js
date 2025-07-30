import { creationPageAccueil } from "./modules/pagedaccueil.js";
import { pageAccueilChargement } from "./modules/pageChargement.js";
import { maFonction } from "./modules/listecontacts.js";
import { formContact } from "./modules/ajouterContact.js";
import { buttonVosContact } from "./modules/sawContact.js";

document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app-root");
  if (!appRoot) {
    console.error("L'élément n'as pas était trouvé.");
    return;
  }

  appRoot.innerHTML = "";
  pageAccueilChargement(appRoot);

  setTimeout(() => {
    appRoot.innerHTML = "";
    creationPageAccueil();

    const selectMenu = document.getElementById("menu-action");
    const contactList = document.getElementById("contact-list");
    const formulaireContact = document.getElementById("formulaire-contact");
    const sawContact = document.getElementById("saw-contact");

    if (!selectMenu || !contactList || !formContact || !sawContact) {
      console.error("l'élément n'as pas était trouvé");
      return;
    }

    selectMenu.addEventListener("change", (e) => {
      const selectedValue = e.target.value;

      contactList.innerHTML = "";
      contactList.style.display = "none";
      formulaireContact.innerHTML = "";
      formulaireContact.style.display = "none";
      sawContact.innerHTML = "";
      sawContact.style.display = "none";

      switch (selectedValue) {
        case "lister":
          maFonction(contactList, "menu-action");
          break;
        case "ajouter":
          formContact(formulaireContact, "menu-action");
          break;
        case "compter":
          buttonVosContact(sawContact, "menu-action");
          break;
        default:
          break;
      }
    });
  }, 2000);
});
