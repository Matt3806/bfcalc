// fonction pour recup les infos du LS

function imc(){
    let customerImc = localStorage.getItem("customerImc")
    if (customerImc != null){
    return JSON.parse(customerImc)
    }
}

function img(){
    let customerImg = localStorage.getItem("customerImg")
    if (customerImg != null){
    return JSON.parse(customerImg)
    }
}

function mb(){
    let customerMb = localStorage.getItem("customerMb")
    if (customerMb != null){
    return JSON.parse(customerMb)
    }
}

function activity(){
    let activity = localStorage.getItem("activity")
    if (activity != null){
        return parseFloat(JSON.parse(activity))
    }
} 

// creation de l'element IMC

let imcElement = document.getElementById('customerImc')
let newImc = document.createTextNode(`Votre IMC est de : ${imc()}`)
imcElement.appendChild(newImc)

// creation de l'element IMG

let imgElement = document.getElementById('customerImg')
let newImg = document.createTextNode(`Votre IMG est de : ${img()}`)
imgElement.appendChild(newImg)

// calcul necessaire à la création des éléments kc prot fat carb

let kcNeed = Math.round(mb()/4.18*activity())
let protNeed = Math.round(mb()*activity()*15/100/17)
let fatNeed = Math.round(mb()*activity()*30/100/38)
let carbNeed = Math.round(mb()*activity()*55/100/17)

// creation de l'element kc

let kcNeedElement = document.getElementById('kcNeed')
let newKcNeed = document.createTextNode(`votre besoin calorique par jour est de : ${kcNeed} Kcal`)
kcNeedElement.appendChild(newKcNeed)

// creation de l'element prot

let protNeedElement = document.getElementById('protNeed')
let newprotNeed = document.createTextNode(`soit : ${protNeed} g de protéines`)
protNeedElement.appendChild(newprotNeed)

// creation de l'element fat

let fatNeedElement = document.getElementById('fatNeed')
let newfatNeed= document.createTextNode(`soit : ${fatNeed} g de lipides`)
fatNeedElement.appendChild(newfatNeed)

// creation de l'element carb

let carbNeedElement = document.getElementById('carbNeed')
let newcarbNeed = document.createTextNode(`soit : ${carbNeed} g de glucides`)
carbNeedElement.appendChild(newcarbNeed)