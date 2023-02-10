/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //I created a seed to generate a domain hack.
  let stringTime = String(Date.now());
  let timeSeed = stringTime[stringTime.length - 1];
  //*************************************//

  function DomainCreatorRandom(bigArray) {
    let chain = "";

    bigArray.map(function chainCreator(member) {
      chain += member[Math.floor(Math.random() * member.length)];
    });
    //If it is even: !!!!hack!!!!
    if (timeSeed % 2 == 0) {
      chain =
        chain.slice(0, chain.length - 2) + "." + chain.slice(chain.length - 2);
    } else {
      chain += domain[Math.floor(Math.random() * domain.length)];
    }
    return chain;
  }

  function DomainCreator(bigArray) {
    let Arraychain = [];
    let hacks = false;
    //it is going to create a conbination of all values into the
    //arrays but when it reachs a even last number of the seed, guess what: !!!hack!!!.
    for (let i = 0; i < bigArray[0].length; i++) {
      for (let j = 0; j < bigArray[1].length; j++) {
        for (let k = 0; k < bigArray[2].length; k++) {
          if (timeSeed % 2 == 0) {
            let chain = bigArray[0][i] + bigArray[1][j] + bigArray[2][k];
            chain =
              chain.slice(0, chain.length - 2) +
              "." +
              chain.slice(chain.length - 2);
            Arraychain.push(chain);
            hacks = true;
          } else {
            for (let l = 0; l < domain.length; l++) {
              let chain =
                bigArray[0][i] + bigArray[1][j] + bigArray[2][k] + domain[l];

              Arraychain.push(chain);
            }
          }
        }
      }
    }
    return { Arraychain: Arraychain, hacks: hacks };
  }
  ////////////////////////////////////////////////////////
  let pronoun = ["the", "our", "my", "your"];
  let adj = ["great", "big", "amazing", "small"];
  let noun = ["jogger", "racoon", "lazy", "eater", "lover"];
  let domain = [".com", ".net", ".us", ".io"];

  let bigArray = [];
  bigArray.push(pronoun, adj, noun);

  //////////////////Random array///////////////////////
  let finalRandom = [];
  for (let i = 0; i < 10; i++) {
    finalRandom.push(DomainCreatorRandom(bigArray));
  }

  console.log(finalRandom);

  ///////////////////////////////all combinations////////////////////////////

  console.log(DomainCreator(bigArray));

  const reload = document.querySelector("#tochange");
  const alertText = document.querySelector(".alert");

  let count = 0;
  const arrayDomains = DomainCreator(bigArray).Arraychain;
  arrayDomains.map(function insert(element) {
    count += 1;
    if (DomainCreator(bigArray).hacks) {
      alertText.innerHTML = `<h1>!!!Domains Hacks!!!</h1>`;
    }
    reload.innerHTML += `   
    <tr>
      <th scope="row">${count}</th>
      <td>${element}</td>
    </tr>`;
  });
};
