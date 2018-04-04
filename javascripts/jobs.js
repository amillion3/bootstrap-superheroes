const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (input) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += `
              <li>
                <a href="#" data-hero-id="${input[i].id}">${input[i].name}</a>
              </li>`;
  }
  printToDom(output,"awesome-dropdown");
};

function XHRSuccess() {
  const JSONData = JSON.parse(this.responseText);
  buildDomString(JSONData.superheroes);
};

function XHRFail() {
  console.log("uh oh");
};

const startApplication = () => {
  const data = new XMLHttpRequest();
  data.addEventListener('load', XHRSuccess);
  data.addEventListener('error', XHRFail);
  data.open("GET", "/db/superheroes.json");
  data.send();
};
startApplication();