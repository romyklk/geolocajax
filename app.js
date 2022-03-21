// dans la partie geoloc
// nous allons premièrement laisser la variable ville à



let ville
let key = '1c060e144d6d64ff968d2638e4fb1b77';
// au premier chargement récupérer la ville qui est dans let ville par défaut
//autreVille(ville)


////////////////Vérifier si la géolocalisation est activée dans notre navigateur

if("geolocation" in navigator){

    // récupérer la position (longitude et latitude)
    // watchPosition() Permet de réactualiser la postion à interval régulier(le cas ou la personne est en déplacement)
    // faire une fonction anonyme qui prend position en param


    navigator.geolocation.watchPosition((position) =>{

        //console.log(position.coords.latitude);
       // console.log(position.coords.longitude);


       ///////////////////////////////////JE COPIE TOUT CE QUI A ETE FAIT DANS LA FONCTION autreville() et je colle ici

//donc notre const url devient
//////////////////////////////// ICI L'URL change car on prendra lon et lat
////////////////https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const  url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&appid='+ key+'&units=metric';

//console.log(url);

// instancier XMLHttpRequest
let xhr = new XMLHttpRequest();

//Ouvrir la requête en GET acr on passe des info dans l'url
xhr.open('GET', url);

// Lui préciser le type de réponse

xhr.responseType ='json';

// envoyer la requête
xhr.send();

// détécter que l'api nous renvoit une réponse 


xhr.onload= function(){
    if(this.readyState == 4 && this.status == 200){
        
        let r = xhr.response;
        //console.log(r)

        let temperature = r.main.temp;

        // récupérer l'icon du temps qu'il fait (soleil ou pluvieux)
        let icon = r.weather[0].icon;
        //console.log(icon)
        let ville = r.name;
        //console.log(ville)

        // Changer la température
        document.querySelector('.temp').textContent = temperature;
        // changer le nom de la ville
        document.querySelector('h3').textContent = ville;
        document.querySelector('.type').textContent =ville;

        // Changer l'icon du temps qu'il fait
        let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector('#icon').src= iconurl
        //console.log(iconurl)

        let temp_max = r.main.temp_max;

        let temp_min = r.main.temp_min;

        let humidite = r.main.humidity;

        document.querySelector('#max').textContent = temp_max + '°';
        document.querySelector('#min').textContent = temp_min + '°';
        document.querySelector('#hum').textContent = humidite + '%';

    }else{
        alert('Un problème lors de la récupération des infos sur votre ville.');
    }
}

    }, erreur, options); // options va nous permettre d'augementer la puissance de notre géolocalisation
                       // options prend pas un objet litéral en paramètre
    
}else{
    // Si la géolocalisation n'est pas activé alors je lui passe une ville par défaut
    ville ='Montreal';
    autreVille(ville);
}

var options = {
    enableHighAccuracy : true // enableHighAccuracy permet d'avoir géoloc plus précise
}

/////////////////////////////////////////// ETAPE 3
// détecter le clique sur ma div changer de ville

let nouvelleVille = document.querySelector('#changer');

// Lui poser un écouteur d'événement qui èxécute une fonction anonyme au clic

nouvelleVille.addEventListener('click', ()=>{

    ville = prompt('Entrez le nom de la ville.');
  //  console.log(ville)
  // appeler la fonction autreVille qui permettra de changer la ville
  // cette fonction prend la ville en paramètre
    autreVille(ville);  // Cette fonction va englober tout ce que nous avions fais précédement (etape 1 et etape2)

})





/////////////////////////////////////////// ETAPE 1

// on en remplace les variables q et appid par nos infos
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
// q= paris appid = ma clé 

//const url = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=1c060e144d6d64ff968d2638e4fb1b77&units=metric';

///////////////////////////////////////////FIN ETAPE 1

/////////////////////////////////////////// ETAPE 2

// construire ma requête ajax

// dans cette fonction on prévoit le cas ou la personne n'a pas pu être géolocaliser
function erreur(){
    ville = 'Montreal';
    autreVille(ville)
}



function autreVille(){

 
//donc notre const url devient

const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +'&appid='+ key +'&units=metric';

console.log(url);

// instancier XMLHttpRequest
let xhr = new XMLHttpRequest();

//Ouvrir la requête en GET acr on passe des info dans l'url
xhr.open('GET', url);

// Lui préciser le type de réponse

xhr.responseType ='json';

// envoyer la requête
xhr.send();

// détécter que l'api nous renvoit une réponse 


xhr.onload= function(){
    if(this.readyState == 4 && this.status == 200){
        
        let r = xhr.response;
        //console.log(r)

        let temperature = r.main.temp;

        // récupérer l'icon du temps qu'il fait (soleil ou pluvieux)
        let icon = r.weather[0].icon;
        //console.log(icon)
        let ville = r.name;
        console.log(ville)

        // Changer la température
        document.querySelector('.temp').textContent = temperature;
        // changer le nom de la ville
        document.querySelector('h3').textContent = ville;
        document.querySelector('.type').textContent =ville;

        // Changer l'icon du temps qu'il fait
        let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector('#icon').src= iconurl
        //console.log(iconurl)

        let temp_max = r.main.temp_max;

        let temp_min = r.main.temp_min;

        let humidite = r.main.humidity;

        document.querySelector('#max').textContent = temp_max + '°';
        document.querySelector('#min').textContent = temp_min + '°';
        document.querySelector('#hum').textContent = humidite + '%';

    }else{
        alert('Un problème lors de la récupération des infos sur votre ville.');
    }
}

///////////////////////////////////////////FIN ETAPE 2

}

