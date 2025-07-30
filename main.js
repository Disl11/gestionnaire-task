import { creationPageAccueil } from "./modules/pagedaccueil.js";

console.log("main.js chargé et s'exécute !");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded déclenché !");
  creationPageAccueil();
});
console.log("Bonjour");
