export function buttonVosContact() {
  let nbrContacts = 0;

  const divVosContact = document.createElement("div");
  divVosContact.classList.add("btnVosContact");
  divVosContact.textContent = "Vous avez " + nbrContacts + " contacts";
  document.body.appendChild(divVosContact);

  return divVosContact;
}
