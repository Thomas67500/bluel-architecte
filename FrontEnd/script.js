 console.log ("connecte !");





 async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let infoCategorie = await response.json()
console.table (infoCategorie);

for (let i = 0; i < infoCategorie.length; i++) {
nom = infoCategorie[i].name;
id= infoCategorie[i].id;
affichageBouton(id,nom);
}

}


listeCategories()


function affichageBouton (id,nom) {

let position = document.querySelector(".gallery");
let btn= document.createElement("button");
let textebouton = document.createElement("span");

btn.setAttribute("li",id);
console.log(btn);

textebouton.textContent =nom;
btn.append(textebouton);
position.append(btn);
}






async function listeProjet() {

    let response = await fetch("http://localhost:5678/api/works")
    let infoImage = await response.json()
        console.table (infoImage);
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











