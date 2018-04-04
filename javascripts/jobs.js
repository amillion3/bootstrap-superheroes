let selectedHero = "";

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (input) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += `
              <li>
                <a class="super-heros-dropdown" data-hero-id="${input[i].id}">${input[i].name}</a>
              </li>`;
  }
  printToDom(output,"awesome-dropdown");
};

function XHRSuccess() {
  const JSONData = JSON.parse(this.responseText);
  buildDomString(JSONData.superheroes);
  addheroSelectionEventListeners();
};

function XHRFail() {
  console.log("uh oh");
};

const displaySuperHero = heroes => {
  let domString = "";
  heroes.forEach(hero => {
    if (hero.id === selectedHero) {
      domString += `<div class="row">`;
      domString += `<div class="col-sm-4">`;
      if (hero.gender === "Male") {
        domString += `<img class="charImage maleImage" src="${
          hero.image
        }">`;
      } else {
        domString += `<img class="charImage femaleImage" src="${
          hero.image
        }">`;
      }
      domString += `</div>`;
      domString += `<div class="col-sm-6">`;
      domString += `<h2>Selected Hero: ${hero.name}</h2>`;
      domString +=     `<p class='charDescription'>${hero.description}</p>`;
      domString += `</div>`;
    }
  });
  printToDom(domString, "selected-hero");
};

function loadFileforSingleHero() {
  const JSONData = JSON.parse(this.responseText);
  //buildDomString(JSONData.superheroes);
  displaySuperHero(JSONData.superheroes);
}

const selectHero = (e) => {
  selectedHero = e.target.dataset.heroId;
  document.getElementById("awesome-button").classList.add('hide');
  genericHeroRequest(loadFileforSingleHero);
}

const addheroSelectionEventListeners = () => {
  const menuItems = document.getElementsByClassName("super-heros-dropdown");
  // const menuItems = document.getElementById("awesome-dropdown").children;
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', selectHero);
  }
};

const genericHeroRequest = (successFunction) => {
  const data = new XMLHttpRequest();
  data.addEventListener('load', successFunction);
  data.addEventListener('error', XHRFail);
  data.open("GET", "/db/superheroes.json");
  data.send();
};

const startApplication = () => {
  genericHeroRequest(XHRSuccess);
};
startApplication();