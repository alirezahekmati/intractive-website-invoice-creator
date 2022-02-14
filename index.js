
const leftEl= document.querySelector(".left_1")
const rightEl= document.querySelector(".right_1")
const leftEmptyEl = document.querySelector(".left_empty")
const rightEmptyEl = document.querySelector(".right_empty")

let isDisplayedAddWash = false
let isDisplayedAddMow = false
let isDisplayedAddPul = false



function addWash() {
    if(!isDisplayedAddWash){
        leftEmptyEl.innerHTML += `<span id="a1">Wash Car</span> <span id="a3" onclick="remove_a1()">Remove</span>`
        rightEmptyEl.innerHTML += `<span id="a2">$10</span>`
    }
    isDisplayedAddWash= true
}
function remove_a1(){
    document.getElementById("a1").remove()
    document.getElementById("a2").remove()
    document.getElementById("a3").remove()
    
    isDisplayedAddWash= false

}
// function addMow() {
    
//     isDisplayedAddMow= true
// }
// function addPul() {
    
//     isDisplayedAddPul= true
// }

