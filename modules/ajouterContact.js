export function formContact() {
  let count = 0;

  const container = document.createElement("div");
  container.id = "formulaireDiv";
  document.body.appendChild(container);
  //nom
  const titleNom = document.createElement("h5");
  titleNom.textContent = "Nom";
  container.appendChild(titleNom);

  const inputNom = document.createElement("input");
  inputNom.id = "Nom";
  container.appendChild(inputNom);
  //prenom
  const titlePrenom = document.createElement("h5");
  titlePrenom.textContent = "Prénom";

  container.appendChild(titlePrenom);
  const inputPrenom = document.createElement("input");
  inputPrenom.id = "Prenom";
  container.appendChild(inputPrenom);
  //numero
  const titleNumero = document.createElement("h5");
  titleNumero.textContent = "Numéro";
  container.appendChild(titleNumero);

  const inputNumero = document.createElement("input");
  inputNumero.id = "Numero";
  container.appendChild(inputNumero);
  //valider
  const btnValider = document.createElement("input");
  btnValider.id = "btnValider";
  btnValider.type = "button";
  btnValider.value = "Valider";
  container.appendChild(btnValider);

  btnValider.addEventListener("click", () => {
    const nom = document.getElementById("Nom").value.trim();
    const prenom = document.getElementById("Prenom").value.trim();
    const tel = document.getElementById("Numero").value.trim();

    if (!nom && !prenom && !tel) {
      alert("Veuillez saisir les champs obligatoires");
      return;
    }

    count++;
    alert("Formulaire validé !");
  });
}
