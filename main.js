import { creationPageAccueil } from "./modules/pagedaccueil.js";
import { pageAccueilChargement } from "./modules/pageChargement.js";

document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app-root");
  if (!appRoot) {
    console.error(
      "L'élément '#app-root' n'a pas été trouvé dans le DOM. Assurez-vous qu'il est bien dans index.html."
    );
    return;
  }

  appRoot.innerHTML = "";
  pageAccueilChargement(appRoot);

  setTimeout(() => {
    appRoot.innerHTML = "";
    creationPageAccueil();

    // import { maFonction } from "./module/listecontacts.js";
    // maFonction();

    // import { buttonVosContact } from "./modules/sawContact.js";
    // buttonVosContact();
  }, 2000);
});
