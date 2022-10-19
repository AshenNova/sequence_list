console.log(document.title)
let part = ""
// if (document.title == "Legend 1"){
//     part = "legend1"
// }

switch (document.title){
    case "Legend 1":
        part = "legend1"
    break
    case "Part 4":
        part = "part4"
    break
}

const pokemonTable = document.getElementById(part)
// let btn = "."+part+"btn"
// console.log(btn)
const btnPress = document.querySelectorAll("."+part+"btn");
const btnClass = document.querySelectorAll("."+part+"-class");
const btnPokemon = document.querySelectorAll("."+part+"pokemon")

const appearBtn = document.querySelector("."+part+"-appear")
const clearBtn = document.querySelector("."+part+"-clear")
const entireTable = document.querySelectorAll('td')

const choiceText = document.getElementById("choice-text")
const counterEl = document.getElementById("counter")

function updateVisitCount(){
    fetch("https://api.countapi.xyz/update/gaolesequencelist.heroku.com/gaole/?amount=1")
    .then(res => res.json())
    .then(res => {
        counterEl.innerHTML = res.value;
    });
}

updateVisitCount()

const columnsArr = ["A","B","C","D","E","F","G","H"]
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let choiceArr = []


// const part4 = {
//     star1: ["1* Caterpie", "1* Crabrawler", "1* Staryu", "1* Psyduck", "1* Wingull", "1* Grubbin", "1* Goomy", "1* Deino", "1* Jangmo-o", "Ralts", "1* Gible"],
//     star2: ["2* Kirlia"],
//     star3: ["3* Turtonator"],
//     star4: ["4* Pikachu"],
//     star5: ["5* Necrozma"],
//     starL: ["L* Pikachu"]
// }

// const rowArrPart4 = {
//     row1: [0, 0, 0, part4.star1[1], 0, 0, 0, 0],
//     row2: [0, 0, 0, 0, 0, 0, 0, 0],
//     row3: [0, 0, 0, 0, 0, 0, 0, 0],
//     row4: [0, 0, 0, 0, 0, 0, 0, 0],
//     row5: [0, 0, 0, 0, 0, 0, 0, 0],
//     row6: [0, 0, 0, 0, 0, 0, 0, 0],
//     row7: [0, 0, 0, 0, 0, 0, part4.star1[1], part4.star1[2]],
//     row8: [0, 0, 0, 0, 0, 0, 0, 0],
//     row9: [0, 0, 0, 0, 0, 0, 0, 0],
//     row10: [0, 0, 0, 0, 0, part4.star1[2], 0, 0],
//     row11: [0, 0, 0, 0, part4.star1[1], 0, 0, 0],
//     row12: [part4.star1[0], part4.star1[2], 0, part4.star1[0], 0, 0, 0, 0],
//     row13: [0, 0, 0, 0, 0, part4.star1[1], 0, 0],
//     row14: [0, 0, 0, 0, 0, , 0, 0],
//     row15: [0, 0, 0, 0, 0, 0, 0, 0],
//     row16: [0, 0, 0, 0, 0, 0, 0, 0],
//     row17: [0, 0, 0, 0, 0, 0, 0, 0],
//     row18: [part4.star1[2], 0, part4.star1[1], 0, 0, 0, 0, 0],
//     row19: [0, 0, 0, 0, 0, 0, 0, 0],
//     row20: [0, 0, 0, 0, 0, 0, 0, 0],
//     row21: [0, part4.star1[0], 0, 0, 0, 0, 0, 0],
//     row22: [part4.star1[1], 0, part4.star1[0], 0, 0, 0, 0, 0],
//     row23: [0, 0, part4.star1[2], 0, 0, 0, 0, 0],
//     row24: [0, 0, 0, 0, 0, part4.star1[0], 0, 0],
//     row25: [0, 0, 0, 0, 0, 0, 0, 0],
//     row26: [0, 0, 0, part4.star1[2], 0, 0, 0, 0],
//     row27: [0, part4.star1[2], 0, 0, part4.star1[0], 0, 0, 0],
//     row28: [0, 0, 0, 0, 0, 0, 0, part4.star1[1]],
//     row29: [0, 0, 0, 0, 0, part4.star1[1], 0, 0],
//     row30: [0, 0, 0, 0, 0, 0, 0, 0],
//     row31: [0, 0, 0, 0, 0, 0, 0, 0],
//     row32: [0, 0, 0, 0, 0, 0, 0, 0],
//     row33: [0, 0, 0, 0, 0, 0, 0, 0],
//     row34: [0, 0, 0, 0, 0, 0, 0, 0],
//     row35: [0, 0, 0, 0, 0, 0, 0, 0],
//     row36: [0, 0, 0, 0, part4.star1[2], 0, part4.star1[0], part4.star1[2]],
//     row37: [0, 0, 0, 0, 0, 0, 0, 0],
//     row38: [0, 0, 0, 0, 0, 0, 0, 0],
//     row39: [0, 0, 0, 0, 0, 0, 0, 0],
//     row40: [part4.star1[0], 0, 0, 0, 0, 0, part4.star1[2], 0],
//     row41: [0, 0, 0, 0, 0, 0, 0, 0],
//     row42: [0, 0, 0, 0, 0, 0, 0, 0],
//     row43: [0, 0, 0, 0, 0, 0, 0, 0],
//     row44: [0, 0, 0, 0, 0, 0, 0, part4.star1[0]],
//     row45: [0, 0, 0, 0, part4.star1[2], 0, 0, 0],
//     row46: [0, 0, 0, 0, 0, 0, 0, 0],
//     row47: [part4.star1[1], 0, 0, part4.star1[0], 0, 0, 0, 0],
//     row48: [0, part4.star1[1], 0, 0, 0, 0, 0, 0],
//     row49: [0, 0, part4.star1[1], 0, 0, 0, 0, 0],
//     row50: [0, 0, 0, 0, 0, 0, 0, 0],
// }

// console.log(rowArrPart4)

const rowArr = ["3* Butterfree", "1* Ralts", "3* Golduck", "1* Crabrawler", "1* Deino", "4* Kommo-o", "3* Garchomp", "4* Goodra",
                "2* Zweilous", "2* Crabominable", "2* Sliggoo", "1* Ralts", "L* Pikachu", "1* Grubbin", "1* Grubbin", "1* Wingull",
                "1* Grubbin", "3* Turtonator", "L* Pikachu", "2* Hakamo-o", "3* Butterfree", "2* Pelipper", "2* Hakamo-o", "3* Gyarados",
                "5* Kyurem", "3* Gyarados", "1* Jangmo-o", "3* Garchomp", "1* Grubbin", "3* Pelipper", "3* Gallade", "2* Kirlia",
                "2* Kirlia", "1* Wingull", "1* Gible", "4* Lycanroc", "2* Golduck", "3* Gallade", "L* Pikachu", "4* Golisopod",
                "3* Garchomp", "2* Charjabug", "3* Gallade", "2* Kirlia", "1* Jangmo-o", "2* Gyarados", "2* Hakamo-o", "2* Sliggoo",
                "2* Hakamo-o", "L* Pikachu", "2* Starmie", "2* Gabite", "2* Crabominable", "2* Golduck", "1* Crabrawler", "1* Staryu",
                "3* Lycanroc", "3* Vikavolt", "3* Butterfree", "2* Rockruff", "3* Pelipper", "1* Gible", "1* Goomy", "1* Jangmo-o",
                "2* Sliggoo", "2* Wimpod", "4* Turtonator", "L* Charizard", "1* Psyduck", "L* Pikachu", "2* Pelipper", "3* Hydreigon",
                "2* Crabominable", "2* Kirlia", "2* Gabite", "1* Deino", "5* Greninja", "3* Gyarados", "3* Starmie", "1* Grubbin",
                "2* Wimpod", "2* Pelipper", "2* Metapod", "2* Crabominable", "1* Crabrawler", "1* Staryu", "4* Garchomp", "L* Pikachu",
                "1* Caterpie", "1* Staryu", "1* Ralts", "1* Caterpie", "3* Turtonator", "3* Lycanroc", "2* Sliggoo", "2* Metapod",
                "2* Zweilous", "4* Kommo-o", "3* Goodra", "3* Kangaskhan", "3* Golisopod", "1* Crabrawler", "2* Wimpod", "2* Hakamo-o",
                "L* Pikachu", "1* Deino", "2* Gyarados", "2* Wimpod", "1* Goomy", "2* Charjabug", "1* Jangmo-o", "2* Crabominable",
                "1* Psyduck", "2* Zweilous", "3* Vikavolt", "3* Starmie", "3* Crabominable", "2* Kirlia", "2* Golduck", "1* Goomy",
                "3* Goodra", "1* Jangmo-o", "1* Psyduck", "2* Kirlia", "2* Pelipper", "4* Vikavolt", "3* Poipole", "2* Starmie",
                "3* Gallade", "3* Crabominable", "5* Zekrom", "4* Golisopod", "2* Metapod", "2* Zweilous", "1* Ralts", "3* Kommo-o",
                "1* Staryu", "2* Sliggoo", "1* Crabrawler", "3* Crabominable", "1* Gible", "3* Kommo-o", "4* Turtonator", "2* Zweilous",
                "1* Wingull", "3* Butterfree", "1* Goomy", "1* Grubbin", "L* Pikachu", "2* Wimpod", "1* Gible", "1* Psyduck",
                "2* Psyduck", "4* Poipole", "2* Gyarados", "2* Metapod", "3* Kommo-o", "1* Wingull", "2* Gyarados", "4* Hydreigon",
                "4* Garchomp", "1* Caterpie", "1* Deino", "1* Psyduck", "2* Hakamo-o", "2* Sliggoo", "1* Deino", "3* Crabominable",
                "1* Crabrawler", "2* Golduck", "1* Caterpie", "2* Starmie", "1* Wingull", "1* Ralts", "5* Lycanroc", "1* Wingull",
                "2* Metapod", "L* Pikachu", "1* Staryu", "L* Pikachu", "2* Gyarados", "L* Charizard", "1* Caterpie", "3* Vikavolt",
                "3* Gyarados", "2* Starmie", "2* Wimpod", "1* Goomy", "1* Jangmo-o",  "1* Caterpie", "3* Kommo-o", "L* Pikachu",
                "1* Jangmo-o", "1* Psyduck", "L* Pikachu", "2* Pelipper", "2* Gabite", "1* Wingull", "1* Grubbin", "1* Goomy",
                "2* Gabite", "2* Crabominable", "2* Kirlia", "1* Staryu", "2* Starmie", "2* Kirlia", "2* Starmie", "2* Zweilous",
                "1* Psyduck", "1* Staryu", "2* Pelipper", "3* Poipole", "1* Caterpie", "1* Psyduck", "2* Sliggoo", "3* Poipole",
                "L* Pikachu", "5* Necrozma", "2* Rockruff", "1* Grubbin", "3* Poipole", "1* Jangmo-o", "3* Goodra", "1* Crabrawler",
                "1* Jangmo-o", "2* Gabite", "1* Psyduck", "1* Deino", "2* Kirlia", "1* Crabrawler", "4* Lycanroc", "2* Gabite",
                "1* Gible", "1* Grubbin", "2* Crabominable", "3* Kommo-o", "L* Charizard", "1* Psyduck", "2* Kirlia", "5* Solgaleo",
                "2* Gyarados", "2* Gyarados", "3* Poipole", "1* Wingull", "2* Sliggoo", "4* Poipole", "1* Psyduck", "3* Starmie",
                "2* Pelipper", "3* Hydreigon", "3* Golisopod", "5* Reshiram", "3* Hydreigon", "2* Rockruff", "3* Pelipper", "1* Deino",
                "4* Pikachu", "2* Wimpod", "2* Charjabug", "2* Gyarados", "3* Lycanroc", "2* Charjabug", "2* Charjabug", "3* Goodra",
                "3* Hydreigon", "2* Hakamo-o", "4* Lunala", "3* Golduck", "3* Gallade", "1* Deino", "1* Wingull", "2* Golduck",
                "1* Grubbin", "3* Lycanroc", "2* Pelipper", "1* Gible", "1* Wingull", "3* Golisopod", "2* Crabominable", "1* Gible",
                "1* Goomy", "1* Deino", "1* Ralts", "2* Metapod", "1* Staryu", "2* Crabominable", "1* Caterpie", "1* Staryu",
                "2* Charjabug", "4* Hydreigon", "L* Charizard", "3* Turtonator", "2* Zweilous", "3* Hydreigon", "2* Zweilous", "L* Charizard",
                "L* Charizard", "3* Golisopod", "3* Kangaskhan", "2* Zweilous", "4* Solgaleo", "4* Gallade", "L* Charizard", "2* Charjabug",
                "1* Ralts", "2* Pelipper", "3* Starmie", "L* Pikachu", "2* Charjabug", "2* Starmie", "3* Golisopod", "2* Wimpod",
                "1* Caterpie", "3* Kangaskhan", "1* Grubbin", "1* Jangmo-o", "3* Vikavolt", "3* Kangaskhan", "1* Staryu", "2* Pelipper",
                "3* Turtonator", "1* Wingull", "3* Lycanroc", "3* Goodra", "2* Rockruff", "2* Gabite", "2* Rockruff", "3* Turtonator",
                "1* Deino", "2* Metapod", "3* Garchomp", "3* Pelipper", "2* Starmie", "3* Crabominable", "3* Butterfree", "2* Gabite",
                "2* Starmie", "1* Goomy", "4* Gallade", "3* Gyarados", "2* Rockruff", "5* Rayquaza", "2* Crabominable", "1* Jangmo-o",
                "3* Vikavolt", "L* Charizard", "2* Golduck", "1* Gible", "5* Naganadel", "3* Golduck", "4* Lunala", "1* Caterpie",
                "5* Lunala", "1* Gible", "1* Gible", "4* Goodra", "1* Staryu", "1* Caterpie", "3* Kangaskhan", "4* Kangaskhan",
                "2* Rockruff", "4* Solgaleo", "2* Zweilous", "2* Golduck", "1* Ralts", "3* Garchomp", "2* Metapod", "2* Starmie",
                "1* Crabrawler", "2* Rockruff", "2* Hakamo-o", "1* Caterpie", "2* Wimpod", "1* Goomy", "1* Ralts", "1* Ralts",
                "2* Gyarados", "1* Crabrawler", "1* Wingull", "2* Sliggoo", "4* Pikachu", "1* Gible", "L* Pikachu", "2* Gyarados",
                "3* Golduck", "1* Goomy", "1* Crabrawler", "2* Charjabug", "1* Ralts", "2* Hakamo-o", "1* Deino", "2* Rockruff",
                "3* Starmie", "2* Golduck", "4* Vikavolt", "4* Kangaskhan", "2* Sliggoo", "L* Pikachu", "2* Gabite", "3* Golduck"

                ]


if (part == "part4"){                
    for (let i = 0; i < entireTable.length; i++){
        entireTable[i].innerText = rowArr[i]
    }
}
 
function displayArr(){
    let string = choiceArr.join(' 🁢 ').split(",")
    console.log(choiceArr)
    choiceText.innerHTML = `${choiceArr.length}: ${string}`
    // choiceArr.forEach((item, i) => {
    //     choiceText.innerHTML = i+1+ ": " +item
    // })
}

function loopCount(set){
    if (set == 0){
        for ( let i = 0; i < 8; i++){
            document.querySelector(".count"+columnsArr[i]).textContent = ""
        }
    }
    if (set == 1){
        for ( let i = 0; i < 8; i++){
            document.querySelector(".count"+columnsArr[i]).textContent = countArr[i]

            if (countArr[i] == 0){
                document.querySelector(".count"+columnsArr[i]).textContent = ""
            }
        }
    }
}

function filterColor(a){
    if (entireTable[a].innerHTML[0] == 1){
        entireTable[a].classList.add("table-danger")
    }
    if (entireTable[a].innerHTML[0] == 2){
     entireTable[a].classList.add("table-primary")
    }
    if (entireTable[a].innerHTML[0] == 3){
     entireTable[a].classList.add("table-warning")
    }
    if (entireTable[a].innerHTML[0] == 4){
     entireTable[a].classList.add("table-info")
    }
    if (entireTable[a].innerHTML[0] == 5){
     entireTable[a].classList.add("table-dark")
    }
    if (entireTable[a].innerHTML[0] == "L"){
     entireTable[a].style.backgroundColor = "#F28583"
    }
}

function colorSet() {
    for (i = 0; i < entireTable.length; i++){
      filterColor(i)
    }
}

colorSet()

appearBtn.addEventListener("click", function(){
    console.log(pokemonTable)
    pokemonTable.classList.remove("hidden")
})

clearBtn.addEventListener("click", function (){
    console.log("clear!")
    for (i = 0; i < entireTable.length; i++){
        entireTable[i].classList.remove('table-success')
        entireTable[i].style.removeProperty("background-color")
    }
    for (i = 0; i < btnPress.length; i++){
        if (btnPress[i].classList.contains("btn-warning")){
            btnPress[i].classList.remove("btn-warning")
            btnPress[i].classList.add("btn-primary")
        }
    }
    countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    choiceArr = []
    choiceText.textContent = "Hi"
    loopCount(0)
    colorSet()
})

for (let i = 0; i < btnClass.length; i++ ){
    btnClass[i].addEventListener("click", function (e){
        console.log(e)
        // console.log(document.getElementsByClassName("legend1-1-stars"))
        console.log(btnPokemon[0])

        if (e.target.innerHTML == "Choice") {
            return document.getElementById("choice").classList.toggle("hidden")
        }

        if (e.target.innerHTML == "Hide"){              
            return pokemonTable.classList.add('hidden')
        }
        for (let i = 1 ; (i <= btnPokemon.length); i++){
           
            console.log(e.target.innerHTML)
          
            if (btnPokemon[i].classList.contains(e.target.innerHTML)){
                btnPokemon[i].classList.toggle("hidden")
            } else {
                btnPokemon[i].classList.add("hidden")
            }
            
        }
    })
}

for (i = 0; i < btnPress.length; i++){
    console.log("click")
    
    btnPress[i].addEventListener("click", function onClick(event){
        const audio = new Audio("sounds/click.m4a")
        audio.play();
        console.log(event.target.innerHTML)
        let pokemonName = (event.target.innerText)
        let target = event.target.id
    
    for (i = 0; i < btnPress.length; i++){
        if (pokemonName == btnPress[i].innerHTML){
            btnPress[i].classList.toggle("btn-primary")
            btnPress[i].classList.toggle("btn-warning")
        }
    }    
    
    for (let i = 0; i < entireTable.length; i++){
        if ((entireTable[i].innerHTML) == pokemonName){
            
            // entireTable[i].classList.toggle("table-success")
           
            // if (entireTable[i].classList.contains("limegreen")){
            //     colorSet()
            // }
            if (entireTable[i].style.backgroundColor == "limegreen"){
                entireTable[i].style.removeProperty("background-color")
                countArr[i%columnsArr.length]--
                console.log(countArr)
                loopCount(1)
                filterColor(i)
                if (choiceArr.includes(entireTable[i].innerHTML)){
                    const index = choiceArr.indexOf(entireTable[i].innerHTML)
                    choiceArr.splice(index,1)
                    displayArr()
                }
               
            } else {
                entireTable[i].style.backgroundColor = "limegreen"
                countArr[i%columnsArr.length]++
                console.log(countArr)
                loopCount(1)
                if (!choiceArr.includes(entireTable[i].innerHTML)){
                    choiceArr.push(entireTable[i].innerHTML)
                    displayArr()
                }
             
            }
       
        }
    }
    })
}