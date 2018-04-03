/*
modify javascripts/superheroes.js
create function : startApplication that creates an xhr call that reads in db/superheroes.json
On load XHR should call executeThisCodeAfterFileLoaded
executeThisCodeAfterFileLoaded should parse responseText and call buildDomString
buildDomString function should build all the cards and then call printToDom
printToDom function should display all the things
*/

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const maleOrFemaleBorderColor = () => {

};

const buildDomString = (input) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let borderColor = "";
    input[i].gender === 'Female' ? borderColor = 'pink-border' : borderColor = 'blue-border';
    output += `
              <div class="col-sm-3">
                <div class="panel">
                  <div class="panel-heading">
                    <h3 class="panel-title">${input[i].name}</h3>
                  </div>
                  <div class="panel-body">
                    <img class="charImage ${borderColor}" src="${input[i].image}">
                    <p class="charDescription">${input[i].description}</p>
                  </div>
                </div>
              </div>`;
  }
  printToDom(output,"superheroes");
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