const gallery = document.getElementsByClassName('gallery')


fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let figure = document.createElement("figure")
            let img = document.createElement("img")
            let figcaption = document.createElement("figcaption")
            console.log(gallery[0])
            img.src = data[i].imageUrl
            figcaption.textContent = data[i].title
            gallery[0].appendChild(figure)
            figure.appendChild(img)
            figure.appendChild(figcaption)
        }
    });









/* 
Attribuer une classe CSS en JS pour le mdp oublié
Mettre les filtres en format texte puis JS simple
*/