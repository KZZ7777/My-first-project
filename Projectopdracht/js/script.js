document.addEventListener('DOMContentLoaded', function() {
    const cart = {};
  
    // Functie om item toe te voegen of hoeveelheid te updaten
    function addToCart(productName, price) {
      if (cart[productName]) {
        cart[productName].qty += 1;
      } else {
        cart[productName] = {price: price, qty: 1};
      }
      updateCartUI();
    }
  
    // Functie om de winkelwagen UI te updaten
    function updateCartUI() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
        Object.keys(cart).forEach(productName => {
          const item = cart[productName];
          const li = document.createElement('li');
          li.textContent = `${productName} - €${item.price} x ${item.qty}`;
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Verwijder';
          removeButton.classList.add('remove-button'); // Voeg de klasse toe voor stijl
          removeButton.onclick = function() {
            if (cart[productName].qty > 1) { // Check of er meer dan één is
              cart[productName].qty -= 1; // Verminder de hoeveelheid met 1
            } else { // Als er maar 1 is
              delete cart[productName]; // Verwijder het product volledig
            }
            updateCartUI(); // Update de UI
          };
          li.appendChild(removeButton);
          cartList.appendChild(li);
        });
        
        // Bereken de totale prijs
        let totalPrice = 0;
        Object.values(cart).forEach(item => {
          totalPrice += item.qty * item.price;
        });
        // Toon de totale prijs in de UI
        document.getElementById('total-price').textContent = `€${totalPrice.toFixed(2)}`;
      }
  
    // Voeg eventlisteners toe aan alle "Toevoegen aan winkelwagen" knoppen
    document.querySelectorAll('.cartButton').forEach(button => {
      button.addEventListener('click', function() {
        const productElement = button.closest('.product');
        const productName = productElement.querySelector('.titel').textContent.trim();
        const price = productElement.querySelector('.price').textContent.trim().substring(1); // Verwijdert '€'
        addToCart(productName, parseFloat(price));
      });
    });
    
    const wishlistButtons = document.querySelectorAll(".wishlist");
    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.style.backgroundColor === "pink") {
                button.style.backgroundColor = "";
            } else {
                button.style.backgroundColor = "pink";
            }
        });
    });

       // Klanten.html

   fetchCustomers();

   function fetchCustomers() {
       fetch('https://randomuser.me/api/?results=9')
           .then(response => response.json())
           .then(data => {
               let reviews = [
                   "Fantastische producten en uitstekende service! Ik heb onlangs een aantal gezichtsserums en maskers gekocht bij Skin Solutions en ben diep onder de indruk. De kwaliteit is topklasse en mijn huid voelt super zacht en gehydrateerd aan. Ik kom zeker terug voor meer!",
                   "Vijf sterren voor de klantenservice! Ik had een probleem met mijn bestelling en het klantenserviceteam heeft het snel opgelost. Ze stuurden een vervangend product dat zelfs beter was dan wat ik oorspronkelijk had besteld. Zeer tevreden!",
                   "Snelle verzending en geweldige producten! Ik was sceptisch over het online kopen van huidverzorgingsproducten, maar de beschrijvingen en maattabel klopten perfect. Mijn bestelling kwam snel aan en de producten doen precies wat ze beloven.",
                   "Al jaren een tevreden klant. Ik ben al jaren klant bij Skin Solutions en ben nog nooit teleurgesteld geweest. Hun assortiment is geweldig en de prijzen zijn onverslaanbaar. Ik raad ze altijd aan bij vrienden.",
                   "Uitstekende kwaliteit en prijs. Ik heb hier mijn volledige huidverzorgingsroutine gekocht en was onder de indruk van de kwaliteit en de prijs. De verpakkingen zijn mooi en de producten werken uitstekend voor mijn gevoelige huid",
                   "Geweldige gepersonaliseerde producten! De gepersonaliseerde huidverzorgingssets zijn fantastisch! Het materiaal is zacht en de formules zijn precies afgestemd op mijn huidtype. Mijn huid ziet er geweldig uit sinds ik deze producten gebruik.",
                   "Perfect voor beginners. Ik was nieuw in de wereld van Koreaanse huidverzorging en had hulp nodig bij het kiezen van de juiste producten. Het klantenserviceteam was ongelooflijk behulpzaam en begeleidde me naar het perfecte starterspakket. Een echte aanrader!",
                   "Express levering was een redding. De optie voor expreslevering was een redder in nood toen ik nieuwe gezichtsmaskers nodig had voor een evenement. Ze kwamen binnen twee dagen en de kwaliteit is fantastisch. Mijn huid voelde direct fris en gehydrateerd aan.",
                   "Imponerende variëteit aan producten. De verscheidenheid aan beschikbare huidverzorgingsproducten bij Skin Solutions is indrukwekkend. Ik vond precies wat ik nodig had voor mijn huidtype en de gedetailleerde beschrijvingen hielpen me een weloverwogen keuze te maken."
               ];
               displayCustomers(data.results, reviews);
           })
   }
   
   function displayCustomers(customers, reviews) {
       let customersContainer = document.getElementById('customers');
       customersContainer.innerHTML = '';
   
       customers.forEach((customer, index) => {
   
           let reviewText = reviews[index] || "No review available.";
   
           let customerCard = `
           <article class="customer-card">
             <img class="customer-image" src="${customer.picture.large}" alt="${customer.name.first} ${customer.name.last}">
             <section class="customer-info">
               <h3>${customer.name.title} ${customer.name.first} ${customer.name.last}</h3>
               <p>${customer.location.country}</p>
             </section>
             <section class="customer-review">
               <blockquote><p>"${reviewText}"</p></blockquote>
             </section>
           </article>
         `;
           customersContainer.innerHTML += customerCard;
       });
   }
});

// wishlist knop bij product
const wishlistButton = document.getElementById("wishlist");
wishlistButton.addEventListener("click", function(event) {
  event.preventDefault();
    wishlistButton.style.backgroundColor = "pink";
});

 