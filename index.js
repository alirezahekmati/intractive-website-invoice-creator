
const leftEl= document.querySelector(".left_1")
const rightEl= document.querySelector(".right_1")
const leftEmptyEl = document.querySelector(".left_empty")
const rightEmptyEl = document.querySelector(".right_empty")
const priceEL =document.getElementById("total_price")
const paypalEL = document.getElementById("paypal")
let isDisplayedAddWash = false
let isDisplayedAddMow = false
let isDisplayedAddPul = false

let totalPrice  = 0

function addWash() {
    if(!isDisplayedAddWash){
        leftEmptyEl.innerHTML += `<div id="a1">Wash Car <span id="a3" onclick="remove_a1()">Remove</span></div>`
        rightEmptyEl.innerHTML += `<div id="a2">$10</div>`
        totalPrice += 10
    }
   
    isDisplayedAddWash= true
    priceEL.innerHTML="$"+totalPrice
    sayNotes()
}
function remove_a1(){
    document.getElementById("a1").remove()
    document.getElementById("a2").remove()
    // document.getElementById("a3").remove()
    totalPrice -= 10
    priceEL.innerHTML="$"+totalPrice
    isDisplayedAddWash= false
    sayNotes()

}
///////////////////////////////////////////////////////////
function addMow() {
    if(!isDisplayedAddMow){
        leftEmptyEl.innerHTML += `<div id="b1">Mow Lawn <span id="b3" onclick="remove_b1()">Remove</span></div>`
        rightEmptyEl.innerHTML += `<div id="b2">$20</div>`
        totalPrice += 20
    }
    
    isDisplayedAddMow= true
    priceEL.innerHTML="$"+totalPrice
    sayNotes()
}
function remove_b1(){
    document.getElementById("b1").remove()
    document.getElementById("b2").remove()
    // document.getElementById("b3").remove()
    totalPrice -= 20
    priceEL.innerHTML="$"+totalPrice
    isDisplayedAddMow= false
    sayNotes()
}
///////////////////////////////////////////////////////////////
function addPul() {
    if(!isDisplayedAddPul){
        leftEmptyEl.innerHTML += `<div id="c1">Pull Weeds <span id="c3" onclick="remove_c1()">Remove</span></div>`
        rightEmptyEl.innerHTML += `<div id="c2">$30</div>`
        totalPrice += 30
    }
   
    isDisplayedAddPul= true
    priceEL.innerHTML="$"+totalPrice
    sayNotes()
}
function remove_c1(){
    document.getElementById("c1").remove()
    document.getElementById("c2").remove()
    // document.getElementById("c3").remove()
    totalPrice -= 30
    priceEL.innerHTML="$"+totalPrice
    isDisplayedAddPul= false
    sayNotes()

}
let 
function sendOrder(){
    leftEmptyEl.innerHTML = ``
    rightEmptyEl.innerHTML = ``
    totalPrice = 0
    priceEL.innerHTML="$"+totalPrice
    isDisplayedAddWash = false
    isDisplayedAddMow = false
    isDisplayedAddPul = false
    sayNotes()
}
//////////////////////////////////////////////////

function sayNotes(){
    if(isDisplayedAddWash || isDisplayedAddMow || isDisplayedAddPul){
        paypalEL.textContent="We accept cash,credit card,or PayPal"
    }else{
        paypalEL.textContent="  noting yet"
    }
}
