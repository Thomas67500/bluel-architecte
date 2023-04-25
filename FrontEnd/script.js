let urlApi = "http://localhost:5678/api/"
let token = sessionStorage.getItem("token")


// permet de lier l'id et le nom des boutons aux boutons d'affichageBouton
//creation du bouton tous

 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
  let position = document.querySelector(".gallery");
  let portfolio=document.querySelector("#portfolio");
let blocBouton= document.createElement("div");
blocBouton.setAttribute("class","bloc-bouton");
   let btn = affichageBouton(0,"Tous"); 
   blocBouton.append(btn);
   portfolio.insertBefore(blocBouton,position); 
for (let i = 0; i < infoCategorie.length; i++) {
nom = infoCategorie[i].name;
id= infoCategorie[i].id;
let btn=affichageBouton(id,nom);
blocBouton.append(btn);

portfolio.insertBefore(blocBouton,position); 
if (sessionStorage.getItem("token")){
blocBouton.style.display="none"

}
}}

listeCategories()


// afficher les boutons sur l'index
function affichageBouton (id,nom) {
let btn= document.createElement("button");
btn.setAttribute("class","bouton");
btn.innerText =nom;
btn.addEventListener("click",function(){
  listeProjet(id)
})
  return btn;
}

 //recuperation du works, si la categoryID est identique au idCategorie,on recupere le srcvalue ainsi que sa figcaption, qui va ensuite etre utiliser dans affichageProjet
 // si correpond a rien, correspond a zero est sera utiliser pour le bouton Tous
async function listeProjet(idCategorie=0) {

    let response = await fetch("http://localhost:5678/api/works")
    let infoProjet = await response.json()
        let gallery = document.querySelector(".gallery")
        
        nettoyage(gallery)

    for (let i = 0; i < infoProjet.length; i++) {
        if(infoProjet[i].categoryId==idCategorie){


        
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        affichageProjet(srcValue, figCaptionValue);
        
    }
     else if(idCategorie==0){
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        idValue = infoProjet[i].id;
        affichageProjet(srcValue, figCaptionValue);
        

     }  
        
    }
}

 //identique a listeProjet mais sera utiliser pour la premiere modal
async function listeProjetModal(idCategorie=0) {
    let response = await fetch("http://localhost:5678/api/works")
    let infoProjet = await response.json()
    let GalerieImage= document.createElement("div");
    GalerieImage.setAttribute("class","galerie-image");
    
        
    
    for (let i = 0; i < infoProjet.length; i++) {
        if(infoProjet[i].categoryId==idCategorie){


        
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        affichageGalerie(srcValue);
    }
     else if(idCategorie==0){
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        idValue = infoProjet[i].id;
        affichageGalerie(srcValue, idValue);

     }  
        
    }
}

    listeProjetModal(0)
    listeProjet(0)

//permet l'affichage des projets de façon dynamique sur l'index
function affichageProjet(srcValue, figCaptionValue) {

    let gallery = document.querySelector(".gallery");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figCaption = document.createElement("figCaption");

    img.setAttribute("src",srcValue);
    figCaption.textContent = figCaptionValue;
    gallery.append(figure);
    figure.append(img, figCaption);
    
}

//permet d'enlever un element sur la page
function nettoyage(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

 // permet l'ouverture de la premiere modal 
let modal = null
const openModal = function (e) {
e.preventDefault()
const GallerieModal= document.querySelector(".galerie-image")
    nettoyage(GallerieModal)
listeProjetModal(0)
const target = document.querySelector("#modal1")
const target2 = document.querySelector("#modal2")
target.style.display ="flex"
target.removeAttribute("aria-hidden")
target.setAttribute("aria-modal","true")
target2.style.display="none"
modal =target
modal.addEventListener("click", closeModal)
modal.querySelector(".js-modal-close").addEventListener("click",closeModal)
modal.querySelector(".js-modal-stop").addEventListener("click",stopPropagation)

}

//fermeture de la premiere modal
const closeModal = function (e) {
    const modal = document.querySelector("#modal1")   
    if  (modal === null) return
e.preventDefault()
listeProjet(0)
modal.style.display = "none"
modal.setAttribute("aria-hidden","true")
modal.removeAttribute("aria-modal")
modal.removeEventListener("click", closeModal)
modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
modal.querySelector(".js-modal-stop").removeEventListener("click",stopPropagation)
//modal = null
}

//evite la fermeture des modales quand on clique n'importe ou
const stopPropagation = function (e) {
     e.stopPropagation()
}

//ouvre la modal 1
const modal1 =document.querySelector(".js-modal")
modal1.addEventListener("click",openModal)

//permet l'ouverture de la modal2 
const openModal2 = function(e){
    e.preventDefault()
    initModal2()
    const target2 = document.querySelector("#modal2")
    const target1 = document.querySelector("#modal1")
    target2.style.display="flex"
    target2.removeAttribute("aria-hidden")
    target2.setAttribute("aria-modal","true")
    target1.style.display="none"
    modal =target2
modal.addEventListener("click", closeModal2)
modal.querySelector(".js-modal-close2").addEventListener("click",closeModal2)
modal.querySelector(".js-modal-stop2").addEventListener("click",stopPropagation)
}

//ferme la modal 2
const closeModal2 = function (e) {
    const modal2 = document.querySelector("#modal2")   
    if  (modal2 === null) return
e.preventDefault()
modal2.style.display = "none"

modal2.setAttribute("aria-hidden","true")
modal2.removeAttribute("aria-modal")
modal2.removeEventListener("click", closeModal2)

}

// ouvre la modal2
const modal2 = document.querySelector(".js-modal2")
    modal2.addEventListener("click",openModal2)
 
//retour vers modal 1 //

const retourModal1= document.querySelector(".retour-modal1");
retourModal1.addEventListener("click",openModal)


// afficher l'image dans la modal2 //
const input = document.getElementById("upload-image")
const output = document.querySelector("output")
const imagePreview = document.querySelector(".test")
let imagesArray = []
const boutonUpload= document.getElementById("label-upload")
    const texteUpload= document.querySelector(".texte-upload")

function displayImages(image) {
    let images = ""
        images = `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
              </div>`
    output.innerHTML = images
   if ((output.innnerHTML= images)) {
     boutonUpload.style.display="none"
     texteUpload.style.display="none"
    } 
  }
input.addEventListener("change", function() {
const file= input.files
displayImages(file[0])
})

 // creation const pour index modifier//
const headModifier = document.querySelector(".head-modifier");
const modifierArticle= document.querySelector(".modifier-article");
const login = document.querySelector(".login");
const logout = document.querySelector(".logout");
const sousPhoto = document.querySelector(".sous-photo");
const jsModal = document.querySelector(".js-modal");
const jsModal2 = document.querySelector(".js-modal2");



 // fonction pour afficher index modifier en cas de token//
function  loginIndex() {

if (sessionStorage.getItem("token")){
 headModifier.style.display ="inherit"
 login.style.display="none"
 logout.style.display="inherit"
 sousPhoto.style.display="inherit"
 jsModal.style.display="inherit"
 jsModal2.style.display="inherit"
 modifierArticle.style.display="inherit"

}
}

loginIndex()

let GalerieImage= document.createElement("div");
GalerieImage.setAttribute("class","galerie-image");

// affichage des images dans la modale 1
function affichageGalerie(srcValue,idValue){
    
    let titreModal = document.querySelector(".titre-modal");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figCaption = document.createElement("figCaption");
    let iconeCorbeille= document.createElement("button");
    iconeCorbeille.setAttribute("class","icone-supprimer");
    iconeCorbeille.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
    figure.setAttribute("class","image-modal");

    img.setAttribute("src",srcValue);
    img.setAttribute("class",idValue);
    figCaption.textContent= "éditer";
    GalerieImage.append(figure);
    figure.append(img,figCaption,iconeCorbeille);
    titreModal.insertAdjacentElement("afterend",GalerieImage);

    iconeCorbeille.addEventListener("click",function(){

       fetch (urlApi +"works/" + idValue, {
        
        method : "DELETE",
        headers : {
            Authorization: `Bearer ${token}` 
        },
       })

    .then (e =>
        {

        nettoyage(figure)
        
    })
    }
    )
}

// faire le select des categories//

 document.addEventListener('DOMContentLoaded',() =>{
 const selectCategorie= document.querySelector("#categories");

 fetch("http://localhost:5678/api/categories")
 .then(res =>{
     return res.json();
 })
 .then(data =>{
 let output ="";
 data.forEach(categorie =>{
    
     output += `<option value="${categorie.id}">${categorie.name}</option>`;
 })
 selectCategorie.innerHTML= output;
 })
 .catch(err=> {
     console.log(err);
})
 });


 const boutonSubmit= document.querySelector(".bouton-valider")
 const formTitre = document.getElementById("titre-requis")
 const formSelect = document.getElementById("categories")
 const formPhoto = document.getElementById("form-photo")
 const titrePhoto = document.querySelector(".photo-titre")



//fonction pour changer la couleur du bouton submit si le form est rempli

input.addEventListener("change",boutonActiver)
formTitre.addEventListener("keyup",boutonActiver)


function boutonActiver (){

    if (( formTitre.value!=="") && (input.value!=="")) {

        boutonSubmit.disabled=false;
    }
    else {
        boutonSubmit.disabled=true;
        
        
    }

}


// envoie des donnees modal 2//

const form = document.getElementById("form-photo");


form.addEventListener("submit",function(e){
    e.preventDefault();

let formData =new FormData(form);

formData.append("title",formTitre.value);
formData.append("category",formSelect.value);

fetch("http://localhost:5678/api/works",{
method: "POST",
headers: {Authorization :`Bearer ${token}`},
body: formData,
})
.then (res => res.json())
.then (res=> {
    listeProjet(0)
    closeModal2(e)
 
})
})



function initModal2() {
    
    output.innerHTML= '<i class="fa-regular fa-image test" ></i>'
    document.getElementById("titre-requis").value=""
    document.getElementById("upload-image").value=""
    boutonUpload.style.display="inline-grid"
    boutonSubmit.disabled=true
    texteUpload.style.display="inherit"     
        
}