const gallery = document.getElementsByClassName('gallery');
const portfoliosection = document.querySelector('.portfolio');

// Affichage admin connecté
async function Loged() {
    if (window.sessionStorage.getItem('token') === null) {
        main();
    } else {
        works();
        topBarBlack();
        Logout();
        //Ajouter modale qui apparait
    }
}
const token = window.sessionStorage.getItem('token')
console.log(token + ' : token')

// Logout
function Logout() {
    const logoutButton = document.getElementById('login');
    logoutButton.textContent = 'logout';
    /* logoutButton.setAttribute('href', 'index.html') // On reste sur la page d'accueil */
    logoutButton.addEventListener('click', () => {
        window.sessionStorage.removeItem('token'); //reprendre la supp du token
        console.log('Vous êtes déconnecté');
        alert('Vous êtes déconnecté.');
    });
}

// TopBarBlack (Mode Edition)
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


//Affichage des travaux
async function works() {
    resetGallery();
    fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(data => {
            //console.log(data)

            for (let i = 0; i < data.length; i++) {
                let figure = document.createElement("figure")
                let img = document.createElement("img")
                let figcaption = document.createElement("figcaption")
                // console.log(gallery[0])
                img.src = data[i].imageUrl
                figcaption.textContent = data[i].title
                //console.log(figure)
                gallery[0].appendChild(figure)
                figure.appendChild(img)
                figure.appendChild(figcaption)
            }
        });
    ;
}

// Lien modifier modal a cote de H2 A FAIRE 
function modifyButton() {
    const MyProjects = document.getElementById('MyProjects')
}

//Filtres par catégories
async function categoriesFilters() {
    fetch("http://localhost:5678/api/categories")
        .then(reponse => reponse.json())
        .then(categories => {
            //console.log(categories)

            const filters = document.createElement("div");
            filters.classList.add('categories');

            const ButtonAll = document.createElement("button");
            ButtonAll.textContent = 'Tous';
            ButtonAll.classList.add('button', 'tous');
            ButtonAll.dataset.categoryId = 0;
            ButtonAll.addEventListener('click', () => filterImages(0));
            filters.appendChild(ButtonAll)
            //console.log(ButtonAll)


            for (let category of categories) {
                const button = document.createElement('button');
                button.setAttribute('class', 'button');
                button.textContent = `${category.name}`;
                button.dataset.categoryId = `${category.id}`;
                let IDcategory = button.dataset.categoryId
                console.log(IDcategory);
                //Pour voir l'id relier au bouton
                button.addEventListener('click', () => filterImages(IDcategory));
                filters.appendChild(button)
                //console.log(button)
            }

            portfoliosection.insertBefore(filters, gallery[0]);
        });
    ;
}

//Reset la gallery
function resetGallery() {
    gallery[0].innerHTML = "";
    // console.log('reset'); Afficher pour montrer que ca a reset.
}


function filterImages(IDcategory) {
    resetGallery()
    fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(data => {
            // SI le if marche toute la boucle en bas s'execute selon id.
            //Trouver pourquoi ca marche quand je mets 1,2,3 mais pas quand je mets la classe qui renvoi aussi des numeros
            if ((parseInt(IDcategory)) === 0) {
                works()
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].categoryId === (parseInt(IDcategory))) {
                        let figure = document.createElement("figure")
                        let img = document.createElement("img")
                        let figcaption = document.createElement("figcaption")
                        img.src = data[i].imageUrl
                        figcaption.textContent = data[i].title
                        // Récupérez la valeur categoryId de l'image
                        //figure.dataset.categoryId = data[i].categoryId; CA sera ca la condition du if
                        gallery[0].appendChild(figure)
                        figure.appendChild(img)
                        figure.appendChild(figcaption)
                    }
                };
            }
            ;
        })
        
    /*const allImages = gallery[0].querySelectorAll("figure");
    allImages.forEach(figure => {
        const imageCategory = figure.dataset.categoryId;
        console.log(imageCategory)

        if (imageCategory === categoryId || imageCategory === 0) {
            figure.style.display = "block";
        } else {
            figure.style.display = "none";
        
    }); A REFAIRE */
}

async function main() {
    await works();
    categoriesFilters();
}



//main();
// works();
//categoriesFilters();
Loged();

/*
Verif : 
- Affichage different si connecté
- Gallery mise a jour lors de changement
*/