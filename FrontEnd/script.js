
 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
console.table (infoCategorie);
affichageBouton(0,"Tous"); 
for (let i = 0; i < infoCategorie.length; i++) {
nom = infoCategorie[i].name;
id= infoCategorie[i].id;
affichageBouton(id,nom);



}

 }


listeCategories()


function affichageBouton (id,nom) {

let position = document.querySelector(".gallery");
let portfolio=document.querySelector("#portfolio");
let blocBouton= document.createElement("div");
let btn= document.createElement("button");
btn.setAttribute("class","bouton");
console.log(btn);
btn.innerText =nom;
blocBouton.append(btn);
portfolio.insertBefore(blocBouton,position);
btn.addEventListener("click",function(){
 listeProjet(id)



})
}







async function listeProjet(idCategorie=0) {

    let response = await fetch("http://localhost:5678/api/works")
    let infoProjet = await response.json()
       // console.table (infoProjet);
        let gallery = document.querySelector(".gallery")
        
        //if (idCategorie!=0) 
        nettoyage(gallery)

    for (let i = 0; i < infoProjet.length; i++) {
        if(infoProjet[i].categoryId==idCategorie){


        
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        idCategorie= infoProjet[i].categoryId;
        affichageProjet(srcValue, figCaptionValue);
    }
     else if(idCategorie==0){
        console.log("idCategorie"+idCategorie)
        srcValue = infoProjet[i].imageUrl;
        figCaptionValue = infoProjet[i].title;
        idCategorie= infoProjet[i].categoryId;
        affichageProjet(srcValue, figCaptionValue);

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

   
    //figure.setAttribute("class","");
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








