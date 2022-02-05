// fonction pour recup les infos du LS

function gender(){
let gender = localStorage.getItem("gender")
    if(gender != null){
    return JSON.parse(gender)
    }
}

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
        return JSON.parse(activity)
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
let newprotNeed = document.createTextNode(`${protNeed} g de protéines`)
protNeedElement.appendChild(newprotNeed)

// creation de l'element fat

let fatNeedElement = document.getElementById('fatNeed')
let newfatNeed= document.createTextNode(`${fatNeed} g de lipides`)
fatNeedElement.appendChild(newfatNeed)

// creation de l'element carb

let carbNeedElement = document.getElementById('carbNeed')
let newcarbNeed = document.createTextNode(`${carbNeed} g de glucides`)
carbNeedElement.appendChild(newcarbNeed)

// interpretation

//création de la barre de progression 
function progressHtml(progress , bg){
    let progressBar = document.getElementById('progressBar')
    progressBar.insertAdjacentHTML("afterbegin", `<div class= "progress-bar ${bg}" role="progressbar" style= "width : ${progress/72*100}%" aria-valuenow= "${progress}" aria-valuemin="0" aria-valuemax="100"></div>`)
}

// explication de la barre de progression
function scanHtml(scan){
    let scanElement = document.getElementById('scan')
    let newScan = document.createTextNode(`${scan}`)
    scanElement.appendChild(newScan)
}

// condition affichant la bonne barre de progression et sa bonne explication

if( imc() >= 18.5 && imc() <= 25 ){
   let scan = "vous êtes de coprulance normale "
   scanHtml(scan)
   progressHtml(imc(),"bg-success")

}else if( imc() < 18.5){
    let scan = "vous êtes en insufisance pondérale (maigreur)"
    scanHtml(scan)
    progressHtml(imc(),"bg-danger")

}else if(imc() > 25 && imc() <= 30){
    let scan ="vous êtes en surpoids"
    scanHtml(scan)
    progressHtml(imc(),"bg-info")

}else if(imc() > 30 && imc() <= 35){
   let scan ="vous êtes en obésité modérée"
   scanHtml(scan)
   progressHtml(imc(),"bg-warning")

}else if(imc() > 35 && imc() <= 40){
    let scan = "vous êtes en obésité sévère"
    scanHtml(scan)
    progressHtml(imc(),"bg-warning")

}else if(imc() > 40){
    let scan = "vous êtes en obésité morbide ou massive"
    scanHtml(scan)
    progressHtml(imc(),"bg-danger")
}