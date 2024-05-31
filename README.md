<img src="FrontEnd/assets/images/logo_sophie_bluel.png" alt="Logo de sophie bluel" width="200"> <img src="FrontEnd/assets/images/JavaScript-logo.png" alt="Logo Javascript" width="40">


# Portfolio-architecte-sophie-bluel

Ce projet m'engage à créer une page web dynamique, interactive et fonctionnelle pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API. Le travail implique l'authentification, le filtrage de la gallerie et une modale de gestion de la gallerie par l'admin.

[Lancer le site](#Information-pour-le-lancer-le-code) ⎜ [Maquette Figma](https://www.figma.com/file/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?type=design&node-id=0-1&mode=design) ⎜ [English](#English)

## Description

Je travaille comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés. 

Ayant terminé mon dernier projet avec un peu d'avance, je suis envoyé en renfort comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.
[Kanban de la mission](https://www.notion.so/openclassrooms/da3bb5863a554b34ba1a8df90d4c99af?v=df7f8dcccd9f4917a664a559f00b7ccb&p=c10173024288498295c67b9625cf437f&pm=s)

## Table des matières

- [Spécifications fonctionnelles](#spécifications-fonctionnelles)
- [Spécifications techniques](#spécifications-techniques)


## Spécifications fonctionnelles

### Filtres 
- Il est important de garder une option de menu permettant d’afficher tous les travaux, comme par défaut.
- La possibilité de filtrer la galerie par catégorie de projet, à l’aide d’un “menu de catégories” qui aura été généré dynamiquement.

### Page Login

- Redirection vers la page d’accueil quand la connexion est confirmée.
- Message d’erreur quand les informations utilisateur / mot de passe ne sont pas correctes.  

### Modale 

- Doit pouvoir se déclencher au clic sur le bouton Modifier, et se refermer au clic sur la croix ou en dehors de la modale.
- La modale doit proposer deux vues distinctes : une première vue "Galerie photo", suivie d'une seconde vue "Ajout photo".
- On ne devrait pas avoir besoin de recharger la page pour voir qu'un projet a été supprimé ou ajouté.
- La nouvelle image doit être ajouté ou supprimé dans le DOM et dans la liste des images de la modale.

## Spécifications techniques

- Faire appel à l’API avec fetch.
- Supprimer le HTML des travaux qui étaient présents. Le contenu doit ajouter dynamiquement grâce à JavaScript.
- S’assurer que la configuration est maintenue.
- Stocker le token d'authentification pour pouvoir réaliser les envois et suppressions de travaux.

### Modale 

- quel que soit le nombre de fois que vous ouvrez / fermez la modale, une seule modale est présente dans le code source.
- utilisation des objets FormData pour l’envoi des données du formulaire. *


## Information pour le lancer le code

- Telecharger le dossier ou cloner le repository.
- Lancer le serveur backend depuis son terminal en suivant les instruction du fichier Backend/ReadMe.
- Lancer le frontend depuis [index.html](FrontEnd/index.html) avec la fonction `go live` de l'Editeur de Code ou sélectionnez le fichier sur votre ordinateur puis faites un clic droit (ou double clic s'il s'agit d'un Mac) et choisissez « Ouvrir avec » Google Chrome, Microsoft Edge ou Firefox.