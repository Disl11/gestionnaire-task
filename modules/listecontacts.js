 export function maFonction() {

   



//  const nouvelleDiv = document.createElement("div");
// document.body.appendChild(nouvelleDiv);
// nouvelleDiv.testContent ="ma div";
// -------------------------------------------------div------------

const nouvelleDiv = document.createElement("div");
document.body.appendChild(nouvelleDiv);
nouvelleDiv.setAttribute("class", "division container");
// nouvelleDiv.textContent = " ma div ";

// ------------------------------------------------titre-----------

const listeH3 = document.createElement("h3");
nouvelleDiv.appendChild(listeH3);
listeH3.setAttribute("class", "h3");
listeH3.textContent = "Liste de vos contacts";

      // ---------------------------------ul-----------------------

const listeUl = document.createElement("ul");
nouvelleDiv.appendChild(listeUl);
listeUl.setAttribute("class", "ul");
// listeUl.textContent = "ul";

// ----------------------------------------jean--------------------

const nomJean = document.createElement("li");
listeUl.appendChild(nomJean);
nomJean.setAttribute("class", "jean");
nomJean.textContent = "Jean Aymare";

const numeroJean = document.createElement("li");
listeUl.appendChild(numeroJean);
numeroJean.setAttribute("class", "numjean");
numeroJean.textContent = "06 85 45 69 95";

//------------------------------------------lea--------------------

const nomLea = document.createElement("li");
listeUl.appendChild(nomLea);
nomLea.setAttribute("class", "lea");
nomLea.textContent = "Léa Ricault";

const numeroLea = document.createElement("li");
listeUl.appendChild(numeroLea);
numeroLea.setAttribute("class", "numlea");
numeroLea.textContent = "06 85 45 69 95";

// -----------------------------------------melanie-----------

const nomMelanie = document.createElement("li");
listeUl.appendChild(nomMelanie);
nomMelanie.setAttribute("class", "Melanie");
nomMelanie.textContent = "Mélanie Zetteaufré";

const numeroMelanie = document.createElement("li");
listeUl.appendChild(numeroMelanie);
numeroMelanie.setAttribute("class", "numMelanie");
numeroMelanie.textContent = "06 85 45 69 95";


};