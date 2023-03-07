 
 /*async function listeCategories () {
 let response= await fetch ("http://localhost:5678/api/categories")
 let info = await response.json()
 console.table (info)
 
}

listeCategories()*/

async function listeImage () {

 let response = await fetch ("http://localhost:5678/api/works")
let infoImage = await response.json()
console.table (infoImage);

}


listeImage() 

/*for (let i = 0; i < listeImage.length; i++) {
    let article = listeImage[i];
    let gallery= document.querySelector(".gallery");
    let figure= document.createElement("figure");
    let img= document.createElement("img");
    let figCaption= document.createElement("figcaption");
    let categoryId = document.createElement("article");

    img.setAttribute("src", listeImage[i].image.url);
    img.setAttribute("alt", listeImage[i].title);
    img.setAttribute("crossoring","anonymous");

    figcaption.innerHTML= listeImage[i].title;

    figure.append(img,figcaption);
    gallery.append(figure);

} */

   

for (let i = 0 ; i < listeImage.length ; i++) {
    srcValue= listeImage.imageUrl[i]
    figCaptionValue= listeImage.title[i]

}

function affichageProjet (srcValue,figCaptionValue) {

let gallery= document.querySelector(".gallery");

let figure= document.createElement("figure");
let img= document.createElement("img");
let figCaption= document.createElement("figCaption");

srcValue= listeImage.imageUrl
img.setAttribute("src",srcValue);
figCaption.textContent= figCaptionValue;
gallery.append(figure);
figure.append(img, figCaption);


}

affichageProjet()














