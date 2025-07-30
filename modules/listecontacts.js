export function maFonction(container) {
  container.innerHTML = "";

  // -------------------------------------------------div------------
  const nouvelleDiv = document.createElement("div");
  nouvelleDiv.setAttribute("class", "division container");
  container.appendChild(nouvelleDiv);

  // ------------------------------------------------titre-----------

  const listeH3 = document.createElement("h3");
  listeH3.setAttribute("class", "h3");
  listeH3.textContent = "Liste de vos contacts";
  nouvelleDiv.appendChild(listeH3);

  // ---------------------------------ul-----------------------

  const listeUl = document.createElement("ul");
  listeUl.setAttribute("class", "ul");
  nouvelleDiv.appendChild(listeUl);

  // ----------------------------------------jean--------------------
  const nomJean = document.createElement("li");
  nomJean.setAttribute("class", "jean");
  nomJean.textContent = "Jean Aymare";
  listeUl.appendChild(nomJean);

  const numeroJean = document.createElement("li");
  numeroJean.setAttribute("class", "numjean");
  numeroJean.textContent = "06 85 45 69 95";
  listeUl.appendChild(numeroJean);

  //------------------------------------------lea--------------------
  const nomLea = document.createElement("li");
  nomLea.setAttribute("class", "lea");
  nomLea.textContent = "Léa Ricault";
  listeUl.appendChild(nomLea);

  const numeroLea = document.createElement("li");
  numeroLea.setAttribute("class", "numlea");
  numeroLea.textContent = "06 85 45 69 95";
  listeUl.appendChild(numeroLea);

  // -----------------------------------------melanie-----------
  const nomMelanie = document.createElement("li");
  nomMelanie.setAttribute("class", "Melanie");
  nomMelanie.textContent = "Mélanie Zetteaufré";
  listeUl.appendChild(nomMelanie);

  const numeroMelanie = document.createElement("li");
  numeroMelanie.setAttribute("class", "numMelanie");
  numeroMelanie.textContent = "06 85 45 69 95";
  listeUl.appendChild(numeroMelanie);
}
