export function formContact(container) {
  container.innerHTML = ""; // Vide le conteneur avant d’ajouter le formulaire

  // Création du div formulaire
  const formulaireDiv = document.createElement("div");
  formulaireDiv.id = "formulaireDiv";

  // nom
  const titleNom = document.createElement("h5");
  titleNom.textContent = "Nom";
  formulaireDiv.appendChild(titleNom);

  const inputNom = document.createElement("input");
  inputNom.id = "Nom";
  formulaireDiv.appendChild(inputNom);

  // prénom
  const titlePrenom = document.createElement("h5");
  titlePrenom.textContent = "Prénom";
  formulaireDiv.appendChild(titlePrenom);

  const inputPrenom = document.createElement("input");
  inputPrenom.id = "Prenom";
  formulaireDiv.appendChild(inputPrenom);

  // numéro
  const titleNumero = document.createElement("h5");
  titleNumero.textContent = "Numéro";
  formulaireDiv.appendChild(titleNumero);

  const inputNumero = document.createElement("input");
  inputNumero.id = "Numero";
  formulaireDiv.appendChild(inputNumero);

  // bouton valider
  const btnValider = document.createElement("input");
  btnValider.id = "btnValider";
  btnValider.type = "button";
  btnValider.value = "Valider";
  formulaireDiv.appendChild(btnValider);

  btnValider.addEventListener("click", () => {
    const nom = inputNom.value.trim();
    const prenom = inputPrenom.value.trim();
    const tel = inputNumero.value.trim();

    if (!nom && !prenom && !tel) {
      alert("Veuillez saisir les champs obligatoires");
      return;
    }

    alert("Formulaire validé !");
  });

  container.appendChild(formulaireDiv);
}
