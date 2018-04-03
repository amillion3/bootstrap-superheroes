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

const buildDomString = (input) => {
  console.log(input);
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += `${input[i].name}`;
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

  // const myRequest = new XMLHttpRequest();
  // myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  // myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  // myRequest.open("GET", "animals.json");
  // myRequest.send();
};
startApplication();