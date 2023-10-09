let gallery = document.getElementsByName('gallery')
let figure = document.createElement("figure")
let img = document.createElement("img")
let figcaption = document.createElement("figcaption")




fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => {
        gallery.appendChild(figure)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        img = `< img src = "${data.imageURL[1]}"/>`
    });



/* Au lieu du imagesource creer un create element et un appen
child qui va creer a chaque boucle une figure/img/figcaption comme dans le html, pas besoin d'id pcq y en a pas
je dois pas copier coller le code du HTML */