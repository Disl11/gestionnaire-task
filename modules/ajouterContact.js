export function formContact() {
  let count = 0;

  const container = document.createElement("div");
  document.body.appendChild(container);
  //nom
  const titleNom = document.createElement("h1");
  titleNom.textContent = "Nom";
  container.appendChild(titleNom);

  const inputNom = document.createElement("input");
  inputNom.id = "Nom";
  inputNom.placeholder = "Nom";
  container.appendChild(inputNom);
  //prenom
  const titlePrenom = document.createElement("h1");
  titlePrenom.textContent = "Prenom";

  container.appendChild(titlePrenom);
  const inputPrenom = document.createElement("input");
  inputPrenom.id = "Prenom";
  inputPrenom.placeholder = "Prénom";
  container.appendChild(inputPrenom);
  //numero
  const titleNumero = document.createElement("h1");
  titleNumero.textContent = "Numero";
  container.appendChild(titleNumero);

  const inputNumero = document.createElement("input");
  inputNumero.id = "Numero";
  inputNumero.placeholder = "Numéro";
  container.appendChild(inputNumero);
  //valider
  const btnValider = document.createElement("input");
  btnValider.type = "button";
  btnValider.value = "Valider";
  btnValider.style.background = "red";
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
