const gallery = document.getElementsByClassName('gallery');
const portfoliosection = document.querySelector('.portfolio');

// Top édition noir
function topBarBlack() {
    const div = document.createElement("div");
    div.setAttribute('class', 'TopBar');

    const span = document.createElement("span");
    span.textContent = 'Mode édition';

    const icon = document.createElement("i")
    icon.setAttribute('class', 'fa-regular fa-pen-to-square')

    document.querySelector('body').prepend(div);
    div.appendChild(icon);
    div.appendChild(span);
}

//passer le tout en create elemenent = ... // setattribute(...,...) ou textcontent ='...'


async function works() {

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
    ;
}


async function categoriesFilters() {
    fetch("http://localhost:5678/api/categories")
        .then(reponse => reponse.json())
        .then(categories => {
            console.log(categories)

            const filters = document.createElement("div");
            filters.classList.add('categories');

            const ButtonAll = document.createElement("button");
            ButtonAll.textContent = 'Tous';
            ButtonAll.classList.add('button', 'tous');
            filters.appendChild(ButtonAll)

            for (let category of categories) {
                const button = document.createElement('button');
                button.setAttribute('class', 'button');
                button.textContent = `${category.name}`;
                filters.appendChild(button)
            }

            portfoliosection.insertBefore(filters, gallery[0]);


            function filterImages(categoryName) {
                const allImages = gallery.querySelectorAll('figure');
                allImages.forEach(image => {
                    const imageCategory = image.dataset.category;
                    if (categoryName === "Tous" || imageCategory === categoryName) {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });
            }
        });
    ;
}









works();
categoriesFilters();
topBarBlack();

/* 
Attribuer une classe CSS en JS pour le mdp oublié
Mettre les filtres en format texte puis JS simple
*/