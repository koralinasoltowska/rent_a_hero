/* enlist-env es6 */
'use strict';

/* tworzenie obiektów bohaterów */
var superman = {
    name: "Superman",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/superman.jpg",
    price: "35000",
    isAviable: true
};

var hulk = {
    name: "Hulk",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/hulk.jpg",
    price: "25000",
    isAviable: true
};

var thor = {
    name: "Thor",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/thor.jpg",
    price: "55000",
    isAviable: true
};

var ironman = {
    name: "Ironman",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/ironman.jpg",
    price: "75000",
    isAviable: true
};

var potter = {
    name: "Potter",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/potter.jpg",
    price: "125000",
    isAviable: true
};

var batman = {
    name: "Batman",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sequi ullam est magnam, ab nesciunt quam minima in assumenda error. Fuga, ad adipisci veniam deserunt, quasi itaque fugiat at quos!",
    image: "images/batman.jpg",
    price: "20000",
    isAviable: true
};

/* tworzenie tablicy dostępnych bohaterów */

var heroes = [superman, hulk, thor, ironman, potter,batman];

var activeHero; //aktywny bohater
var heroesInBasket = []; // tworzenie tablicy w, której umieścimy bohaterów dodanych do koszyka


/* wyświetlanie okna szczegółów bohatera
    pobranie info obiektu i wyświtlenie w modalu */

function showModal(obj) {
    activeHero = obj;
    var modal = document.getElementById("myModal");
     modal.style.display = "block";
   
    document.getElementsByClassName("imghero")[0].src = obj.image;
    document.getElementsByClassName("namehero")[0].innerHTML = obj.name;
    document.getElementsByClassName("describe")[0].innerHTML = obj.description;
    document.getElementsByClassName("pricehero")[0].innerHTML = obj.price + " zł/h";
    
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
     }
    
    //sprawdzenie czy bohater jest dostępny i ewentualne zablokowanie przycisku dodania do koszyka
    
    if(obj.isAviable) {
        document.getElementById("add_to_basket").disabled = false;
    } else {
        document.getElementById("add_to_basket").disabled = true;
    } 
}

// ustawienie nasłuchiwania dla przycisków poszczególnych bohaterów

document.getElementById("superman").addEventListener("click", function(){showModal(superman)}, false);
document.getElementById("hulk").addEventListener("click", function(){showModal(hulk)}, false);
document.getElementById("thor").addEventListener("click", function(){showModal(thor)}, false);
document.getElementById("ironman").addEventListener("click", function(){showModal(ironman)}, false);
document.getElementById("potter").addEventListener("click", function(){showModal(potter)}, false);
document.getElementById("batman").addEventListener("click", function(){showModal(batman)}, false);


// ustalenie ceny początkowej
var cena = 0;

// zamiana kolejności wyświetlanych bohaterów w koszyku (zasada stosu)
function switchPosition() {
    
    if(heroesInBasket.length > 1) {
        for(var i = 0; i < heroesInBasket.length; i++) {
            document.getElementsByClassName("basket_item_image")[i].src = heroesInBasket[heroesInBasket.length - (i + 1)].image; 
            
        
          /*  
            document.getElementsByClassName("basket_item_name")[i].name = heroesInBasket[heroesInBasket.length -1].name;
           document.getElementsByClassName("basket_item_description").description = heroesInBasket[heroesInBasket.length -1].description;
           */
        }
    } else {
        document.getElementsByClassName("basket_item_image")[0].src = heroesInBasket[0].image;
    }
}

function obliczCene() {
    for(var i = 0; i < heroesInBasket.length; i++) {
        cena += +heroesInBasket[i].price;
    }
}

// dodawanie do koszyka
function addToBasket(obj) {
    obj.isAviable = false;
    document.getElementsByClassName("koszykpelny")[0].style.display = "block";
    alert(obj.name + " został dodany do koszyka.")
    heroesInBasket.push(obj);
    document.getElementById("add_to_basket").disabled = true;
    
    switchPosition();
    obliczCene();
    
    document.getElementsByClassName("koszyk2")[1].innerHTML = "Do zapłaty: " + cena + "zł";
 }

// usuwanie z koszyka
function removeFromBasket(obj) {
    heroesInBasket.remove(obj);
    obj.isAvaiable = true;
}

// ustawienie nasłuchiwania dla przycisku dodawania do koszyka
document.getElementById("add_to_basket").addEventListener("click", function() {addToBasket(activeHero)});

