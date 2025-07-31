
export function buttonVosContact(container) {
  container.innerHTML = ""; // Vide le conteneur

  const nbrContacts = 3;

  const divVosContact = document.createElement("div");
  divVosContact.classList.add("btnVosContact");
  divVosContact.textContent = `Vous avez ${nbrContacts} contacts`;

  container.appendChild(divVosContact);

  return divVosContact;
}

