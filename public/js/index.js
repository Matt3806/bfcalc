//suppression du Ls pour prevenir les bug 

localStorage.clear()

// création du BgImage de base 

let bgImage = document.getElementById('formContainer')
let imageWomen = document.createElement("img")
imageWomen.src ="public/images/weight-loss-gad92ba7ad_1920.jpg"
imageWomen.alt ="femme athlétique"
bgImage.appendChild(imageWomen)

let genderChange = document.getElementById('gender')

//changement du BgImage selon le sexe

genderChange.addEventListener("change", function(e){
    let gender = document.getElementById('gender').value

    let bgImage = document.getElementById('formContainer')
    let imageWomen = document.createElement("img")
    imageWomen.src ="public/images/weight-loss-gad92ba7ad_1920.jpg"
    imageWomen.alt ="femme athlétique"
    
    let imageMen = document.createElement("img")
    imageMen.src ="public/images/biceps-g3a2125ee9_1920.jpg"
    imageMen.alt ="homme athlétique"
    
    if( gender == 2){
        bgImage.appendChild(imageWomen)
        }else{
            bgImage.appendChild(imageMen)
    }
})

let btn = document.getElementById('btnSubmit')

// création de l'objet customer au click

btn.addEventListener("click", function(e){
    e.preventDefault()
    let gender = document.getElementById('gender').value
    let age = document.getElementById('age').value
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value /100
    let activity = parseFloat(document.getElementById('activity').value)

    let customer ={
        gender: gender,
        activity : activity,
        age: age,
        weight: weight,
        height: height,
    }

    // formule de calcul de l'IMC et envoi dans le Ls 
    let imc = customer.weight / (customer.height*customer.height)
    let imcRes = Math.round(imc)
    localStorage.setItem("customerImc", JSON.stringify(imcRes))

    localStorage.setItem("activity",JSON.stringify(customer.activity))

    localStorage.setItem("gender", JSON.stringify(customer.gender))
    
    // formule de calcul de l'IMG et du MB puis envoi dans le Ls
    if(gender == 1){
        let img = 1.2*imc + 0.23*age - 10.8 -5.4
        let imgRes = Math.round(img)
        let mb = 1.083*Math.pow(weight, 0.48)*Math.pow(height, 0.50)*Math.pow(age, -0.13)*1000
        localStorage.setItem("customerImg", JSON.stringify(imgRes))
        localStorage.setItem("customerMb", JSON.stringify(mb))
    }else{
        let img =  1.2*imc + 0.23*age -5.4
        let imgRes = Math.round(img)
        let mb = 0.963*Math.pow(weight, 0.48)*Math.pow(height, 0.50)*Math.pow(age, -0.13)*1000
        localStorage.setItem("customerImg", JSON.stringify(imgRes))
        localStorage.setItem("customerMb", JSON.stringify(mb))
    }
    
    window.location.assign("result.html")
})


