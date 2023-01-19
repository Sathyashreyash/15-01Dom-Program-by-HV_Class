// console.log(document.getElementById("firstp"));
// let el = document.getElementById("firstp") // this is manuplate the text 
// console.log(el.innerText);

// will do it function one by onclick

// function myfun(){
//     let el = document.getElementById("firstp") // this is manuplate the text 
// console.log(el.innerText) //  will create a button in HTML now
// }

// function myfun(){
//     let el = document.getElementById("firstp") // this is manuplate the text 
//     el.innerText = "Hello"
// console.log(el.innerText); //  will create a button in HTML now
// }

// we can find the rndom name onclicking button
// function mufun(){
//     const arr = ['Sathya', 'Shreyash', 'Kamble']
//     const randomInt = Math.floor(Math.random() * arr.length)
//     let el = document.getElementById("head")
//     el.innerText = arr[randomInt]
// }

function myfun() {
    let el1 = document.getElementById("inp1")
    let el2 = document.getElementById("inp2")
    console.log(el1.value+el2.value)
}
function myfun() {
    let el = document.createElement('h1')
    el.innerHTML  = "Prashant"
    let parantel = document.getElementById("samp")
    parantel.appendChild(el)
    console.log(el)
}

function table() {
    let el1 = document.getElementById("inp1")
    let el2 = document.getElementById("inp2")
    let output = document.getElementById("output")
    for(i=1; i<=parseInt(inp2.value); i++){
        const temp = document.createElement('p')
        temp.innerHTML = '${inp1.value} * ${i} = $(parseInt(inp1.value) * i)'
        output.appendChild(temp)
    }
}



