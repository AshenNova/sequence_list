const legend1Table = document.getElementById("legend1")
const legend1btn = document.querySelectorAll('.legend1btn');
const legend1Class = document.querySelectorAll('.legend1-class');
const legend1 = document.querySelectorAll(".legend1cl")

const legend1AppearBtn = document.querySelector(".legend1-appear")
const legend1ClearBtn = document.querySelector(".legend1-clear")
const entireTable = document.querySelectorAll('td')

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

legend1AppearBtn.addEventListener("click", function(){
    console.log(legend1Table)
    legend1Table.classList.remove("hidden")
})

legend1ClearBtn.addEventListener("click", function (){
    console.log("clear!")
    for (i = 0; i < entireTable.length; i++){
        entireTable[i].classList.remove('table-success')
        entireTable[i].style.removeProperty("background-color")
    }
    colorSet()
})

for (i = 0; i < legend1Class.length; i++ ){
    legend1Class[i].addEventListener("click", function (e){
        console.log(e)
        console.log(document.getElementsByClassName("legend1-1-stars"))
        // document.getElementsByClassName("legend1-1-stars")[0].classList.remove("hidden")

        for (i = 0 ; i < legend1.length; i++){
            console.log(e.target.innerHTML)
            if (legend1[i].classList.contains(e.target.innerHTML)){
                legend1[i].classList.remove("hidden")
            } else {
                legend1[i].classList.add("hidden")
            }
        }

        if (e.target.innerHTML == "Hide"){              
            legend1Table.classList.add('hidden')
        }
    })
}

for (i = 0; i < legend1btn.length; i++){
    console.log("click")
    
    legend1btn[i].addEventListener("click", function onClick(event){
        const audio = new Audio("sounds/yellow.mp3")
        audio.play();
        console.log(event.target.innerHTML)
        let pokemonName = (event.target.innerText)
        let target = event.target.id

    for (i = 0; i < entireTable.length; i++){
        if ((entireTable[i].innerHTML) == pokemonName){
            // entireTable[i].classList.toggle("table-success")
           
            // if (entireTable[i].classList.contains("limegreen")){
            //     colorSet()
            // }
            if (entireTable[i].style.backgroundColor == "limegreen"){
                entireTable[i].style.removeProperty("background-color")
            } else {
                entireTable[i].style.backgroundColor = "limegreen"
            }
        }
    }
    })
}