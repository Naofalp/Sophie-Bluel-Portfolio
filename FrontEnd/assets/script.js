const gallery = document.getElementsByClassName('gallery');
const portfoliosection = document.querySelector('.portfolio');
//passer le tout en create elemenent = ... // setattribute(...,...) ou textcontent ='...'


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

    fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let figure = document.createElement("figure")
                let img = document.createElement("img")
                let figcaption = document.createElement("figcaption")
                // console.log(gallery[0])
                img.src = data[i].imageUrl
                figcaption.textContent = data[i].title
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
           // console.log(categories)

            const filters = document.createElement("div");
            filters.classList.add('categories');

            const ButtonAll = document.createElement("button");
            ButtonAll.textContent = 'Tous';
            ButtonAll.classList.add('button', 'tous');
            ButtonAll.addEventListener('click', () => filterImages("Tous"));
            filters.appendChild(ButtonAll)

            for (let category of categories) {
                const button = document.createElement('button');
                button.setAttribute('class', 'button');
                button.textContent = `${category.name}`;
                button.addEventListener('click', () => filterImages(category.name));
                filters.appendChild(button)
            }

            portfoliosection.insertBefore(filters, gallery[0]);
        });
    ;
}

// Matcher la cate works et categories. Refaire un appel API.

function filterImages(categoryName) {
    // console.log(gallery);
    const allImages = gallery[0].querySelectorAll("figure");
    allImages.forEach(image => {
        const imageCategory = image.dataset.category;
        // console.log(image)
        if (categoryName === "Tous" || imageCategory === categoryName) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

async function main() {
    await works();
    categoriesFilters();
}

//main();
// works();
//categoriesFilters();
Loged();

// Ca marche mais ca passe toute les images en display:none, 
//verifier que c'est bien relier a sa category name.