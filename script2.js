import { legend3 } from "./data/legend3.js";

// const legend3 = import("./data/legend3.json", { assert: { type: "json" } });

console.log(legend3);
const oneStarPokemon = document.querySelector(".oneStarPokemon");
const twoStarPokemon = document.querySelector(".twoStarPokemon");
const threeStarPokemon = document.querySelector(".threeStarPokemon");
const fourStarPokemon = document.querySelector(".fourStarPokemon");
const fiveStarPokemon = document.querySelector(".fiveStarPokemon");
const LStarPokemon = document.querySelector(".LStarPokemon");
const pokemonAll = document.querySelector(".pokemonList");
const pokemonIndex = document.querySelector(".pokemonIndex");

console.log(document.title);
let part = "";

let fullArray = [];
let array_1star = [];
let array_2star = [];
let array_3star = [];
let array_4star = [];
let array_5star = [];
let array_Lstar = [];

switch (document.title) {
  case "Legend 3":
    part = "legend3";
    fullArray = legend3;
    break;
  case "Legend 2":
    part = "legend2";
    break;
  case "Legend 1":
    part = "legend1";
    break;
  case "Part 4":
    part = "part4";
    break;
}

for (let i = 0; i < fullArray.length - 1; i++) {
  if (fullArray[i].includes("1*") && !array_1star.includes(fullArray[i])) {
    array_1star.push(fullArray[i]);
  }
  if (fullArray[i].includes("2*") && !array_2star.includes(fullArray[i])) {
    array_2star.push(fullArray[i]);
  }
  if (fullArray[i].includes("3*") && !array_3star.includes(fullArray[i])) {
    array_3star.push(fullArray[i]);
  }
  if (fullArray[i].includes("4*") && !array_4star.includes(fullArray[i])) {
    array_4star.push(fullArray[i]);
  }
  if (fullArray[i].includes("5*") && !array_5star.includes(fullArray[i])) {
    array_5star.push(fullArray[i]);
  }
  if (fullArray[i].includes("L*") && !array_Lstar.includes(fullArray[i])) {
    array_Lstar.push(fullArray[i]);
  }
}

console.log(array_1star.sort());
console.log(array_2star.sort());
console.log(array_3star.sort());
console.log(array_4star.sort());
console.log(array_5star.sort());
console.log(array_Lstar.sort());

const activeDisplay = function (pokemon, classStar) {
  let count = pokemon.length;
  let quotient = Math.floor(count / 4);
  let remainder = count % 4;
  let a = 0;
  if (quotient != 0) {
    for (let i = 0; i < quotient; i++) {
      const html = `
    <div class="row">
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a + 1]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a + 2]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a + 3]
          }</button>
      </div>
    </div>
    `;
      a += 4;
      classStar.insertAdjacentHTML("beforeend", html);
    }
  }
  if (remainder == 1) {
    const html = `
      <div class="row">
        <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${pokemon[a]}</button>
        </div>
      </div>
    `;
    classStar.insertAdjacentHTML("beforeend", html);
  }
  if (remainder == 2) {
    const html = `
      <div class="row">
        <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a]
          }</button>
        </div>
        <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a + 1]
          }</button>
        </div>
      </div>
    `;
    classStar.insertAdjacentHTML("beforeend", html);
  }
  if (remainder == 3) {
    const html = `
      <div class="row">
        <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a]
          }</button>
        </div>
        <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-primary legend3btn">${
            pokemon[a + 1]
          }</button>
        </div>
        <div class="col-sm-3 col-6">
        <button type="button" class="btn btn-primary legend3btn">${
          pokemon[a + 2]
        }</button>
      </div>
      </div>
    `;
    classStar.insertAdjacentHTML("beforeend", html);
  }
};

activeDisplay(array_1star, oneStarPokemon);
activeDisplay(array_2star, twoStarPokemon);
activeDisplay(array_3star, threeStarPokemon);
activeDisplay(array_4star, fourStarPokemon);
activeDisplay(array_5star, fiveStarPokemon);
activeDisplay(array_Lstar, LStarPokemon);

const listAllPokemon = function () {
  let a = 1;
  for (let i = 0; i < fullArray.length; i++) {
    const html = `
    <tr>
      <th scope="row">${a}</th>
      <td>${fullArray[i]}</td>
      <td>${fullArray[i + 1]}</td>
      <td>${fullArray[i + 2]}</td>
      <td>${fullArray[i + 3]}</td>
      <td>${fullArray[i + 4]}</td>
      <td>${fullArray[i + 5]}</td>
      <td>${fullArray[i + 6]}</td>
      <td>${fullArray[i + 7]}</td>
    </tr>
    `;
    a += 1;
    i += 7;
    pokemonAll.insertAdjacentHTML("beforeend", html);
  }
};
listAllPokemon();

let [...pokemonIndexOrder] = new Set(fullArray);
console.log(pokemonIndexOrder.sort().reverse());
const pokemonIndexList = function () {
  const quotient = Math.floor(pokemonIndexOrder.length / 4);
  const remainder = pokemonIndexOrder.length % 4;
  let a = "";
  for (let i = 0; i < quotient * 4; i++) {
    const html = `
    <div class="row">
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-light btnCaught">${
            pokemonIndexOrder[i]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-light btnCaught">${
            pokemonIndexOrder[i + 1]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-light btnCaught">${
            pokemonIndexOrder[i + 2]
          }</button>
      </div>
      <div class="col-sm-3 col-6">
          <button type="button" class="btn btn-light btnCaught">${
            pokemonIndexOrder[i + 3]
          }</button>
      </div>
    </div>
    `;
    i += 3;
    pokemonIndex.insertAdjacentHTML("beforeend", html);
    a = i + 1;
  }

  if (remainder == 1) {
    const html = `
        <div class="row">
          <div class="col-sm-3 col-6">
              <button type="button" class="btn btn-light btnCaught">${pokemonIndexOrder[a]}</button>
          </div>
        </div>
        `;
    pokemonIndex.insertAdjacentHTML("beforeend", html);
  }
  if (remainder == 2) {
    const html = `
        <div class="row">
          <div class="col-sm-3 col-6">
              <button type="button" class="btn btn-light btnCaught">${
                pokemonIndexOrder[a]
              }</button>
          </div>
          <div class="col-sm-3 col-6">
            <button type="button" class="btn btn-light btnCaught">${
              pokemonIndexOrder[a + 1]
            }</button>
          </div>
        </div>
        `;
    pokemonIndex.insertAdjacentHTML("beforeend", html);
  }
  if (remainder == 3) {
    const html = `
          <div class="row">
            <div class="col-sm-3 col-6">
                <button type="button" class="btn btn-light btnCaught">${
                  pokemonIndexOrder[a]
                }</button>
            </div>
            <div class="col-sm-3 col-6">
              <button type="button" class="btn btn-light btnCaught">${
                pokemonIndexOrder[a + 1]
              }</button>
            </div>
            <div class="col-sm-3 col-6">
              <button type="button" class="btn btn-light btnCaught">${
                pokemonIndexOrder[a + 2]
              }</button>
            </div>
          </div>
          `;
    pokemonIndex.insertAdjacentHTML("beforeend", html);
  }
};
pokemonIndexList();
const btnCaught = document.querySelectorAll(".btnCaught");
for (let i = 0; i < btnCaught.length; i++) {
  btnCaught[i].addEventListener("click", function (e) {
    // if (btnCaught[i].target.classList.includes("btn-light")) {
    //   console.log("true");
    // }
    console.log(e.target.classList.contains("btn-light"));
    if (e.target.classList.contains("btn-light")) {
      btnCaught[i].classList.remove("btn-light");
      btnCaught[i].classList.add("btn-dark");
    } else {
      btnCaught[i].classList.add("btn-light");
      btnCaught[i].classList.remove("btn-dark");
    }
  });
}

const pokemonTable = document.getElementById(part);
const btnPress = document.querySelectorAll("." + part + "btn");
const btnClass = document.querySelectorAll("." + part + "-class");
const btnPokemon = document.querySelectorAll("." + part + "pokemon");
const appearBtn = document.querySelector("." + part + "-appear");
const clearBtn = document.querySelector("." + part + "-clear");
const entireTable = document.querySelectorAll("td");
const choiceText = document.getElementById("choice-text");
const counterEl = document.getElementById("counter");

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/ashennova.github.io/gaole/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      counterEl.innerHTML = res.value;
    });
}

updateVisitCount();

const columnsArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let choiceArr = [];

// FOR BROCHURE!

const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById(part + "brochure");
const modalImg = document.getElementById(part + "modal");
const captionText = document.getElementById("caption");

// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

function displayArr() {
  choiceArr.sort();
  let string = choiceArr.join(" 🁢 ").split(",");
  console.log(choiceArr);
  choiceText.innerHTML = `${choiceArr.length}: ${string}`;
  // choiceArr.forEach((item, i) => {
  //     choiceText.innerHTML = i+1+ ": " +item
  // })
}

// Counter at the top of the table
function loopCount(set) {
  if (set == 0) {
    for (let i = 0; i < 8; i++) {
      document.querySelector(".count" + columnsArr[i]).textContent = "";
    }
  }
  if (set == 1) {
    for (let i = 0; i < 8; i++) {
      document.querySelector(".count" + columnsArr[i]).textContent =
        countArr[i];

      if (countArr[i] == 0) {
        document.querySelector(".count" + columnsArr[i]).textContent = "";
      }
    }
  }
}
// Colors the cell
function filterColor(a) {
  if (entireTable[a].innerHTML[0] == 1) {
    entireTable[a].classList.add("table-danger");
  }
  if (entireTable[a].innerHTML[0] == 2) {
    entireTable[a].classList.add("table-primary");
  }
  if (entireTable[a].innerHTML[0] == 3) {
    entireTable[a].classList.add("table-warning");
  }
  if (entireTable[a].innerHTML[0] == 4) {
    entireTable[a].classList.add("table-info");
  }
  if (entireTable[a].innerHTML[0] == 5) {
    entireTable[a].classList.add("table-dark");
  }
  if (entireTable[a].innerHTML[0] == "L") {
    entireTable[a].style.backgroundColor = "#F28583";
  }
}
function colorSet() {
  for (let i = 0; i < entireTable.length; i++) {
    filterColor(i);
  }
}
colorSet();

appearBtn.addEventListener("click", function () {
  console.log(pokemonTable);
  pokemonTable.classList.remove("hidden");
});

// Clear button, resets everything!
clearBtn.addEventListener("click", function () {
  console.log("clear!");
  for (let i = 0; i < entireTable.length; i++) {
    entireTable[i].classList.remove("table-success");
    entireTable[i].style.removeProperty("background-color");
  }
  for (let i = 0; i < btnPress.length; i++) {
    if (btnPress[i].classList.contains("btn-warning")) {
      btnPress[i].classList.remove("btn-warning");
      btnPress[i].classList.add("btn-primary");
    }
  }
  countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  choiceArr = [];
  choiceText.textContent = "The list is empty!";
  loopCount(0);
  colorSet();
});

// Hides and appears buttons
for (let i = 0; i < btnClass.length; i++) {
  btnClass[i].addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
    // console.log(document.getElementsByClassName("legend1-1-stars"))
    console.log(btnPokemon[0]);

    if (e.target.innerHTML == "Choice") {
      return document.getElementById("choice").classList.toggle("hidden");
    }

    if (e.target.innerHTML == "Caught") {
      return document.getElementById("caught").classList.toggle("hidden");
    }

    if (e.target.innerHTML == "Hide") {
      return pokemonTable.classList.add("hidden");
    }

    for (let i = 1; i <= btnPokemon.length; i++) {
      console.log(e.target.innerHTML);

      if (btnPokemon[i].classList.contains(e.target.innerText)) {
        btnPokemon[i].classList.toggle("hidden");
      } else {
        btnPokemon[i].classList.add("hidden");
      }
    }
  });
}

function animationCount(set, i) {
  const duration = 3000;
  if (set == 1) {
    document
      .querySelector(".count" + columnsArr[i % 8])
      .classList.add("animate-add");
    setTimeout(
      () =>
        document
          .querySelector(".count" + columnsArr[i % 8])
          .classList.remove("animate-add"),
      duration
    );
  }
  if (set == 0) {
    document
      .querySelector(".count" + columnsArr[i % 8])
      .classList.add("animate-remove");
    setTimeout(
      () =>
        document
          .querySelector(".count" + columnsArr[i % 8])
          .classList.remove("animate-remove"),
      duration
    );
  }
}

for (let i = 0; i < btnPress.length; i++) {
  console.log("click");

  btnPress[i].addEventListener("click", function onClick(event) {
    const audio = new Audio("sounds/click.m4a");
    audio.play();
    console.log(event.target.innerHTML);
    let pokemonName = event.target.innerText;
    let target = event.target.id;

    for (i = 0; i < btnPress.length; i++) {
      if (pokemonName == btnPress[i].innerHTML) {
        btnPress[i].classList.toggle("btn-primary");
        btnPress[i].classList.toggle("btn-warning");
      }
    }

    for (let i = 0; i < entireTable.length; i++) {
      let columnAlp = columnsArr[i % 8];
      if (entireTable[i].innerHTML == pokemonName) {
        console.log("Found!");
        if (entireTable[i].style.backgroundColor == "limegreen") {
          entireTable[i].style.removeProperty("background-color");
          countArr[i % columnsArr.length]--;
          animationCount(0, i);

          loopCount(1);
          filterColor(i);
          if (choiceArr.includes(entireTable[i].innerHTML)) {
            const index = choiceArr.indexOf(entireTable[i].innerHTML);
            choiceArr.splice(index, 1);
            displayArr();
          }
        } else {
          let column = document.querySelector(".count" + columnsArr[i]);
          entireTable[i].style.backgroundColor = "limegreen";
          countArr[i % columnsArr.length]++;
          animationCount(1, i);
          console.log(columnAlp);
          for (let x = 0; x < 50; x++) {
            let columnsIndex = columnsArr.indexOf(columnAlp);
            entireTable[columnsIndex + 8 * x].classList.add(
              "animate-border-add"
            );
            setTimeout(
              () =>
                entireTable[columnsIndex + 8 * x].classList.remove(
                  "animate-border-add"
                ),
              1000
            );
          }
          loopCount(1);
          if (!choiceArr.includes(entireTable[i].innerHTML)) {
            choiceArr.push(entireTable[i].innerHTML);
            displayArr();
          }
        }
      }
    }
  });
}
