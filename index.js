const taskLeftEl  = document.querySelector(".task-factor .left ")
const taskRightE  = document.querySelector(".task-factor .right ")
const span = document.querySelector("span")
let isDispalyedaddPul=false
let isDispalyedaddWash=false
let isDispalyedaddMow=false
let totalPrice=0
let a =document.querySelector(".p")
let b =document.querySelector(".w")
let c =document.querySelector(".m")
let aid =document.querySelector("#p")
let bid =document.querySelector("#w")
let cid =document.querySelector("#m")

function addWash(){
    
    if(!isDispalyedaddWash){
        taskLeftEl.innerHTML += ` 
                    <div  id="w" class="list-margin-top-10">
                    <span class="w list-margin-top-10">Wash Car</span>
                    <span onclick="remover_w()" class="btn_remove">remove</span>
                    </div>
                                `
        taskRightE.innerHTML += ` <div class="w list-margin-top-10">$10</div>`
        
        totalPrice +=10
        span.innerHTML = `$${totalPrice}`
    }
    b =document.querySelector(".w")
    bid =document.querySelector("#w")
   
    isDispalyedaddWash =true
    
} 
function addMow(){
    
    if(!isDispalyedaddMow){
        taskLeftEl.innerHTML += ` 
                    <div" id="m" class="list-margin-top-10">
                    <span class="m list-margin-top-10">Mow Lawn</span>
                    <span  onclick="remover_m()" class="btn_remove" >remove</span>
                    </div>
                                `
        taskRightE.innerHTML += ` <div class="m list-margin-top-10">$20</div>`
        
        totalPrice +=20
        span.innerHTML = `$${totalPrice}`
    }
    c =document.querySelector(".m")
    cid =document.querySelector("#m")
    isDispalyedaddMow =true
        
}
function addPul(){
    
    if(!isDispalyedaddPul){
    taskLeftEl.innerHTML += ` 
                <div id="p"  class="list-margin-top-10">
                <span class="p list-margin-top-10">Pull Weeds</span>
                <span  onclick="remover_p()"  class="btn_remove">remove</span>
                </div>
                            `
    taskRightE.innerHTML += ` <div class="p list-margin-top-10">$30</div>`
   
    totalPrice +=30 
    span.innerHTML = `$${totalPrice}`
    
    } 
    a =document.querySelector("#p")
    aid =document.querySelector(".p")
    isDispalyedaddPul=true 
}
function sendOrder(){
    taskLeftEl.innerHTML = ` <div >task</div>`
    taskRightE.innerHTML = ` <div >total</div>`
    isDispalyedaddPul=false
    isDispalyedaddWash=false
    isDispalyedaddMow=false
    totalPrice =0
    span.innerHTML = `$${totalPrice}`

}

function remover_p(){
    console.log(a.innerHTML)
    a.innerHTML=""
    aid.innerHTML=""
    isDispalyedaddPul=false
    
    
}
function remover_w(){
    console.log(b.innerHTML)
    b.innerHTML=""
    bid.innerHTML=""
    isDispalyedaddWash=false
    
    
}
function remover_m(){
    console.log(c.innerHTML)
    c.innerHTML=""
    cid.innerHTML=""
    isDispalyedaddMow=false
    
    
}


    
    




