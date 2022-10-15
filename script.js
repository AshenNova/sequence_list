const legend1Table = document.getElementById("legend1")
const legend1btn = document.querySelectorAll('.legend1btn');
const legend1Class = document.querySelectorAll('.legend1-class');
const legend1 = document.querySelectorAll(".legend1cl")

const legend1AppearBtn = document.querySelector(".legend1-appear")
const legend1ClearBtn = document.querySelector(".legend1-clear")
const entireTable = document.querySelectorAll('td')

const columnsArr = ["A","B","C","D","E","F","G","H"]
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]

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
    for (i = 0; i < legend1btn.length; i++){
        if (legend1btn[i].classList.contains("btn-warning")){
            legend1btn[i].classList.remove("btn-warning")
            legend1btn[i].classList.add("btn-primary")
        }
    }
    countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    loopCount(0)
    colorSet()
})

for (i = 0; i < legend1Class.length; i++ ){
    legend1Class[i].addEventListener("click", function (e){
        // console.log(e)
        // console.log(document.getElementsByClassName("legend1-1-stars"))

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
        const audio = new Audio("sounds/click.m4a")
        audio.play();
        console.log(event.target.innerHTML)
        let pokemonName = (event.target.innerText)
        let target = event.target.id
    
    for (i = 0; i < legend1btn.length; i++){
        if (pokemonName == legend1btn[i].innerHTML){
            legend1btn[i].classList.toggle("btn-primary")
            legend1btn[i].classList.toggle("btn-warning")
        }
    }    
    
    for (i = 0; i < entireTable.length; i++){
        if ((entireTable[i].innerHTML) == pokemonName){
            
            // entireTable[i].classList.toggle("table-success")
           
            // if (entireTable[i].classList.contains("limegreen")){
            //     colorSet()
            // }
            if (entireTable[i].style.backgroundColor == "limegreen"){
                entireTable[i].style.removeProperty("background-color")
                countArr[i%countArr.length]--
                console.log(countArr)
                loopCount(1)
            } else {
                entireTable[i].style.backgroundColor = "limegreen"
                countArr[i%countArr.length]++
                console.log(countArr)
                loopCount(1)
             
            }
       
        }
    }
    })
}