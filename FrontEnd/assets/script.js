const gallery = document.getElementsByClassName('gallery');
const portfoliosection = document.querySelector('.portfolio');
const token = window.sessionStorage.getItem('token')

// Affichage admin connecté
async function Loged() {
    console.log('token : ' + token)

    if (token === null) {
        console.log('Token is null or undefined. Performing main() and ModalHide().');
        main();
        ModalHide();
    } else {
        console.log('Token is defined. Performing works(), topBarBlack(), and Logout().');
        works();
        topBarBlack();
        Logout();
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

//Non affichage de la Modal
function ModalHide() {
    const modal = document.getElementById("js-modal1")
    modal.style.display = "none"
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
            ButtonAll.classList.add('button-active');
            ButtonAll.setAttribute('id', 'ButtonAll')
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
                button.setAttribute('id', 'Button' + `${category.id}`)
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
    //Reset le button qui est déjà en surbrillance
    const allButtons = document.querySelectorAll('.button');
    allButtons.forEach(button => button.classList.remove('button-active'));

    resetGallery()

    fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(data => {
            console.log(typeof IDcategory)
            //IDcategory renvoi une string, ParseInt transforme cette string en number
            /*Si IDcategory=0 afficher TOUT sinon lance une boucle comme work avec la condition
            que l'image se genere seulement si son id correspond à celle du bouton*/
            if ((parseInt(IDcategory)) === 0) {
                works()
                document.getElementById('ButtonAll').classList.add('button-active');
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
                document.getElementById('Button' + IDcategory).classList.add('button-active');
                document.getElementById('ButtonAll').classList.remove('button-active');
                document.getElementById('ButtonAll').classList.add('button');
            }
        })
}

async function main() {
    await works();
    categoriesFilters();
}


window.addEventListener('load', function () {
    Loged();
});





/*
Verif : 
- Affichage different si connecté
- Gallery mise a jour lors de changement
- Gallery filtrée selon boutons
- boutton filtres en vert 
- lien modale à cote du titre
*/

/* A faire 
- Remplir la fonction loged en consequence quand tout sera fini.
- Valider W3C
*/

/* Pour les slide 
Presentation du projet 
De mes missions, screen du notion.site 
La techno utilisée et sur quel logiciel (VScode)
code validé par W3C, montré sur le site internet
Faire un tour rapide du code pour montrer les balises semantiques et ce qui etait deja fourni de base 
screener bout de code pour les expliquer (surtout le JS filter, works, modal, login...)
Vu qu'on doit être log, montrer les accès avec/sans log et les conditions+messages mis en place .
Montrer la fonction supprimer et Post qui met bien à jour le swagger.
Dire ce que j'ai fait par exemple le CSS que j'ai gardé pour les bouton et input à chaque fois
    ou les fois ou j'ai fait du CSS dans le JS pour que ca soit Dynamique justement
Les endroits ou j'ai galere notamment la fonction filterimages ou j'avais commencé 
    par vouloir cibler le nom puis je suis passé à l'id mais ca marchait pas car...(jai appris 
    typeof+parseInt) et la fonction modal Preview
Conclusion?
 */