let modal = null
const modalGallerySection = document.querySelector('.js-modal-gallery');
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");


const openModal = function (e) {
    e.preventDefault()
    modal = modal1;
    modalGalleryWorks();
    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    //console.log(document.getElementById("js-modal1-close"))
    document.getElementById("js-modal1-close").addEventListener('click', closeModal)
    document.getElementById("js-modal1-stop").addEventListener('click', stopPropagation)
    document.getElementById("BouttonModal2").addEventListener('click',openModalAdd)
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    document.getElementById("js-modal1-close").removeEventListener('click', closeModal)
    document.getElementById("js-modal1-stop").removeEventListener('click', stopPropagation)
    modal = null
}
//Fermer la modale avec echap
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})

//Ne pas fermer la modale si on clique dedans
const stopPropagation = function (e) {
    e.stopPropagation()
}

// ouvrir la modal au click
document.getElementById('js-modal1').addEventListener('click', openModal);

// Reset la Gallery + Affichage de la gallerie
function resetModalGallery() {
    modalGallerySection.innerHTML = "";
}
async function modalGalleryWorks() {
    resetModalGallery();
    fetch("http://localhost:5678/api/works")
        .then(reponse => reponse.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {

                const div = document.createElement("div");
                div.classList.add("modal-image");
                modalGallerySection.appendChild(div);
                const img = document.createElement("img");
                img.src = data[i].imageUrl;
                img.alt = data[i].title;
                div.appendChild(img);
                const icon = document.createElement("i");
                icon.classList.add("fa-solid", "fa-trash-can");
                div.appendChild(icon);
            }
        });
    ;

}

// Deuxieme modale 

let modalAdd = null;

const openModalAdd = function (e) {
    closeModal(e);
    e.preventDefault()
    console.log(modal2)

    modalAdd = modal2; 

    modalAdd.style.display = null

    modalAdd.removeAttribute("aria-hidden")
    modalAdd.setAttribute("aria-modal", "true")

    modalAdd.addEventListener("click", closeModalAdd)
    document.getElementById("js-modal2-close").addEventListener("click", closeModalAdd)
    document.getElementById("js-modal2-stop").addEventListener("click", stopPropagation)

    document.getElementById("js-modal-return").addEventListener("click", backToModal1) 
};


//Fonction backtomodal1
const backToModal1 = function (e) {
    e.preventDefault()
    closeModalAdd(e)
    openModal(e)
}


// Fermeture de la modale projet
const closeModalAdd = function (e) {
    if (modalAdd === null) return
    modalAdd.style.display = "none"

    modalAdd.setAttribute("aria-hidden", "true")
    modalAdd.removeAttribute("aria-modal")
    
    modalAdd = null

    closeModal(e)
};
