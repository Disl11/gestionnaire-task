//5page//
let count = 0;

const container = document.createElement("div");
document.body.appendChild(container);

// Compteur

const titleNom = document.createElement("h1");
titleNom.textContent = "Nom";
container.appendChild(titleNom);

const inputNom = document.createElement("input");
inputNom.id = "Nom";
inputNom.placeholder = "Nom";
container.appendChild(inputNom);

const titlePrenom = document.createElement("h1");
titlePrenom.textContent = "Prenom";
container.appendChild(titlePrenom);

const inputPrenom = document.createElement("input");
inputPrenom.id = "Prenom";
inputPrenom.placeholder = "Prénom";
container.appendChild(inputPrenom);

const titleNumero = document.createElement("h1");
titleNumero.textContent = "Numero";

container.appendChild(titleNumero);

const inputNumero = document.createElement("input");
inputNumero.id = "Numero";
inputNumero.placeholder = "Numéro";
container.appendChild(inputNumero);

const btnValider = document.createElement("input");
btnValider.type = "button";
btnValider.value = "Valider";
btnValider.style.background = "red";

container.appendChild(btnValider);

btnValider.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});
