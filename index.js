async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  console.log(countries);
  countries.forEach(createCoutryCard); //é igual a forEach((country) => createCoutryCard(country));
}

function createCoutryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.getElementById("countries").append(card);
}

getCountries();
