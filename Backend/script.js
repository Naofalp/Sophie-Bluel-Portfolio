fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => img.src=data.url)
    /* Au lieu du imagesource creer un create element et un happen 
    child qui va creer a chaque boucle une figure/img/figcaption comme dans le html, pas besoin d'id pcq y en a pas
    je dois pas copier coller le code du HTML */