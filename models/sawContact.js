let nbrContacts = 0;

const btnVosContact = document.createElement("button");
btnVosContact.classList.add("btnVosContact");
btnVosContact.textContent = "Vous avez " + nbrContacts + " contacts";
document.body.appendChild(btnVosContact);

btnVosContact.addEventListener("click", function () {
  document.location.href = ""; //donnée la direction
});
