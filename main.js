import { creationPageAccueil } from "./modules/pagedaccueil.js";
import { pageAccueilChargement } from "./modules/pageChargement.js";

import { maFonction } from "./modules/listecontacts.js";
import { formContact } from "./modules/ajouterContact.js";
import { buttonVosContact } from "./modules/sawContact.js";


document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app-root");
  if (!appRoot) {

    console.error("L'élément n'a pas été trouvé.");

    return;
  }

  appRoot.innerHTML = "";
  pageAccueilChargement(appRoot);

  setTimeout(() => {
    appRoot.innerHTML = "";
    creationPageAccueil();


    const choisirOption = document.getElementById("bouton-choisir-option");
    const selectMenu = document.getElementById("menu-action");
    const contactList = document.getElementById("contact-list");
    const formulaireContact = document.getElementById("formulaire-contact");
    const sawContact = document.getElementById("saw-contact");

    if (!selectMenu || !contactList || !formulaireContact || !sawContact) {
      console.error("Un élément n'a pas été trouvé");
      return;
    }

    selectMenu.addEventListener("change", (e) => {
      const selectedValue = e.target.value;

      if (choisirOption) {
        choisirOption.style.display = "none";
        choisirOption.innerHTML = "";
      }
      // On vide tous les conteneurs et on les cache
      contactList.innerHTML = "";
      contactList.style.display = "none";
      formulaireContact.innerHTML = "";
      formulaireContact.style.display = "none";
      sawContact.innerHTML = "";
      sawContact.style.display = "none";

      // Affiche et remplit le bon conteneur selon le choix
      switch (selectedValue) {
        case "lister":
          contactList.style.display = "block";
          maFonction(contactList);
          break;
        case "ajouter":
          formulaireContact.style.display = "block";
          formContact(formulaireContact);
          break;
        case "compter":
          sawContact.style.display = "block";
          buttonVosContact(sawContact);
          break;
        default:
          break;
      }
    });

  }, 2000);
});
