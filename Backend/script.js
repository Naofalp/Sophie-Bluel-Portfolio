let gallery = document.getElementsByClassName('gallery')


fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let figure = document.createElement("figure")
            let img = document.createElement("img")
            let figcaption = document.createElement("figcaption")
            console.log(gallery[0])
            img.src = data[i].imageUrl
            figcaption.src = data[i].title
            gallery[0].appendChild(figure)
            figure.appendChild(img)
            figure.appendChild(figcaption)
        }
    });



/* Au lieu du imagesource creer un create element et un appen
child qui va creer a chaque boucle une figure/img/figcaption comme dans le html, pas besoin d'id pcq y en a pas
je dois pas copier coller le code du HTML 
Attribuer une classe CSS en JS
*/