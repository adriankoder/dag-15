console.log('hello world');
//crate a varible 
const cardcontainer = document.querySelector ("#card");
console.log(cardcontainer);

const h2title =document.createElement("h2");
// lager en variabel i js som lager en h2 tag i htmlen
h2title.textContent = "Adrian H";
console.log(h2title);

//lag en variabel som henter ut variablen på jsen til htmlen
cardcontainer.appendChild(h2title);

const contact = document.createElement("div");
cardcontainer.appendChild(contact);
const pdescription = document.createElement("p");

pdescription.textContent = "telefon nommer: 12345678";
console.log(pdescription);
contact.appendChild(pdescription);

const email = document.createElement("p");
email.textContent = "email:adrian.koder@gmail.com";
console.log(email);
contact.appendChild(email);