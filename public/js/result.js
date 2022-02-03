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

let imcElement = document.getElementById('customerImc')
let newImc = document.createTextNode(`Votre IMC est de : ${imc()}`)
imcElement.appendChild(newImc)

let imgElement = document.getElementById('customerImg')
let newImg = document.createTextNode(`Votre IMG est de : ${img()}`)
imgElement.appendChild(newImg)