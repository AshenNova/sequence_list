const legend1Table = document.getElementById("legend1")
const legend1btn = document.querySelectorAll('.legend1btn');
const legend1Class = document.querySelectorAll('.legend1-class');
const legend1 = document.querySelectorAll(".legend1cl")

const legend1AppearBtn = document.querySelector(".legend1-appear")
const legend1ClearBtn = document.querySelector(".legend1-clear")
const entireTable = document.querySelectorAll('td')


function filterColor (){
    if (entireTable[i].innerHTML[0] == 1){
        entireTable[i].classList.add("table-danger")
    }
    if (entireTable[i].innerHTML[0] == 2){
     entireTable[i].classList.add("table-primary")
    }
    if (entireTable[i].innerHTML[0] == 3){
     entireTable[i].classList.add("table-warning")
    }
    if (entireTable[i].innerHTML[0] == 4){
     entireTable[i].classList.add("table-info")
    }
    if (entireTable[i].innerHTML[0] == 5){
     entireTable[i].classList.add("table-dark")
    }
    if (entireTable[i].innerHTML[0] == "L"){
     entireTable[i].style.backgroundColor = "red"
    }
}
function colorSet () {
    for (i = 0; i < entireTable.length; i++){
      filterColor()
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
                filterColor()
            } else {
                entireTable[i].style.backgroundColor = "limegreen"
            }
        }
    }
    })
}

