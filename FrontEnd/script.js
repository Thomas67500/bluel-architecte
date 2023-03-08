 console.log ("connecte !");

 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
//infoCategorie.unshift("Tous"); rajoute juste une valeur tous
/*let tous = {
    id: 0,
    name:"tous"                          voulu creer un array tous pour l'inserer dans infoCategorie
};
let boutonTous = [tous]; 
boutonTous.push(infoCategorie);*/
console.table (infoCategorie);


for (let i = 0; i < infoCategorie.length; i++) {
id = infoCategorie[i].id;
nom = infoCategorie[i].name;
affichageBouton(id,nom);



}
}

listeCategories()






/*for (let i = 0 ; i < infoImage.length ; i++) {
    srcValue= infoImage.imageUrl[i]
    figCaptionValue= infoImage.title[i]

} */

function affichageBouton (id,nom) {

let bouton = document.createElement("bouton");
let textebouton = document.createElement("texte");


bouton.setAttribute("btn",id);
bouton.style.backgroundColor="red";


textebouton.append(bouton);
textebouton.append(nom);
bouton.append(id);
console.log(textebouton);
console.log(id);
console.log(bouton);



}






async function listeProjet() {

    let response = await fetch("http://localhost:5678/api/works")
    let infoImage = await response.json()
        //console.table (infoImage);
    for (let i = 0; i < infoImage.length; i++) {
        srcValue = infoImage[i].imageUrl;
        figCaptionValue = infoImage[i].title;
        affichageProjet(srcValue, figCaptionValue);
    }
}


listeProjet()


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







