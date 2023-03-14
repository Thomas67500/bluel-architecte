
 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
console.table (infoCategorie);
affichageBouton(0,"Tous"); 
for (let i = 0; i < infoCategorie.length; i++) {
nom = infoCategorie[i].name;
id= infoCategorie[i].id;
affichageBouton(id,nom);

let bouton= document.querySelector(".bouton1");
bouton.addEventListener("click",function(){
 affichageProjet(srcValue, figCaptionValue,idCategorie);
 //if() {}
 //else () {}
});

}}


listeCategories()


function affichageBouton (id,nom) {

let position = document.querySelector(".gallery");
let btn= document.createElement("button");
btn.setAttribute("class","bouton"+ id);
console.log(btn);
btn.innerText =nom;
position.append(btn);



}







async function listeProjet() {

    let response = await fetch("http://localhost:5678/api/works")
    let infoImage = await response.json()
        console.table (infoImage);
    for (let i = 0; i < infoImage.length; i++) {
        srcValue = infoImage[i].imageUrl;
        figCaptionValue = infoImage[i].title;
        idCategorie= infoImage[i].categoryId;
        affichageProjet(srcValue, figCaptionValue,idCategorie);
       
        
    }
}


listeProjet()


function affichageProjet(srcValue, figCaptionValue,idCategorie) {

    let gallery = document.querySelector(".gallery");
    console.log(gallery);

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figCaption = document.createElement("figCaption");

   
    figure.setAttribute("class",idCategorie);
    img.setAttribute("src",srcValue);
    figCaption.textContent = figCaptionValue;
    gallery.append(figure);
    figure.append(img, figCaption);


}

//let boutonTous = document.querySelector(".bouton0");
//boutonTous.onclick = () => {
//};









