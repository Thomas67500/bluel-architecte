let urlApi = "http://localhost:5678/api/"
let token = sessionStorage.getItem("token")
console.log(token);


 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
console.table (infoCategorie);
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
}}


listeCategories()


function affichageBouton (id,nom) {


let btn= document.createElement("button");
btn.setAttribute("class","bouton");
console.log(btn);
btn.innerText =nom;
btn.addEventListener("click",function(){

 listeProjet(id)
})
return btn;
}







async function listeProjet(idCategorie=0) {

    let response = await fetch("http://localhost:5678/api/works")
    let infoProjet = await response.json()
    console.table(infoProjet);
        let gallery = document.querySelector(".gallery")
        
        nettoyage(gallery)

    for (let i = 0; i < infoProjet.length; i++) {
        if(infoProjet[i].categoryId==idCategorie){


        
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        affichageProjet(srcValue, figCaptionValue);
        affichageGalerie(srcValue);
    }
     else if(idCategorie==0){
        console.log("idCategorie"+idCategorie)
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        idValue = infoProjet[i].id;
        affichageProjet(srcValue, figCaptionValue);
        affichageGalerie(srcValue, idValue);

     }  
        
    }
}


listeProjet(0)


function affichageProjet(srcValue, figCaptionValue) {

    let gallery = document.querySelector(".gallery");
    console.log(gallery);

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figCaption = document.createElement("figCaption");

   

    img.setAttribute("src",srcValue);
    figCaption.textContent = figCaptionValue;
    gallery.append(figure);
    figure.append(img, figCaption);
    


}

function nettoyage(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}




let modal = null

const openModal = function (e) {
e.preventDefault()
const target = document.querySelector("#modal1")
target.style.display ="flex"
target.removeAttribute("aria-hidden")
target.setAttribute("aria-modal","true")
modal =target
modal.addEventListener("click", closeModal)
modal.querySelector(".js-modal-close").addEventListener("click",closeModal)
modal.querySelector(".js-modal-stop").addEventListener("click",stopPropagation)
modal = null
}

const closeModal = function (e) {
    const modal = document.querySelector("#modal1")   
    if  (modal === null) return
e.preventDefault()
modal.style.display = "none"
modal.setAttribute("aria-hidden","true")
modal.removeAttribute("aria-modal")
modal.removeEventListener("click", closeModal)
modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
modal.querySelector(".js-modal-stop").removeEventListener("click",stopPropagation)
modal = null
}

const stopPropagation = function (e) {
     e.stopPropagation()
}

document.querySelectorAll (".js-modal").forEach(a => {
a.addEventListener("click",openModal)

})



 // creation const pour index modifier//
const headModifier = document.querySelector(".head-modifier");
const login = document.querySelector(".login");
const logout = document.querySelector(".logout");
const sousPhoto = document.querySelector(".sous-photo");
const jsModal = document.querySelector(".js-modal");


 // fonction pour afficher index modifier en cas de token//
function  loginIndex() {

if (sessionStorage.getItem("token")){
 headModifier.style.display ="inherit"
 login.style.display="none"
 logout.style.display="inherit"
 sousPhoto.style.display="inherit"
 jsModal.style.display="inherit"

}
 else{
   console.error("Pas de token"); }
 
}

loginIndex()



let GalerieImage= document.createElement("div");
GalerieImage.setAttribute("class","galerie-image");

// affichage des images dans la modale
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
            "Autorization" : "Bearer + ${token}"
        }
       })

    .then (e =>
        {

        nettoyage(figure)
        
    })
    }
    )
    




}