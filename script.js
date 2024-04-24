console.log('hello world');
let harTrykt = false;

/*function generateCard() {
    console.log("hej");
}
*/
let generateCardlet = document.getElementById("card");
console.log(generateCardlet);
generateCardlet.addEventListener("click", function() {
        /*
        let card = document.getElementById("generateCard2");
        card = !card;
        if (card) {
            console.log(card);
            card.style.backgroundColor = "red";
        } else {
            console.log(card);
        }
        */
       console.log("asdasdf");
    }
);

function generateCard() {

  if (!harTrykt) {
    harTrykt = true;

    const cardcontainer = document.querySelector("#card");
    console.log(cardcontainer);

    const h2title = document.createElement("h2");
    h2title.textContent = "Adrian H";
    console.log(h2title);

    cardcontainer.appendChild(h2title);
    cardcontainer.style.backgroundImage = "url('maling.jpg')";

    const contact = document.createElement("div");
    cardcontainer.appendChild(contact);

    const pdescription = document.createElement("p");
    pdescription.textContent = "telefonnummer: 12345678";
    console.log(pdescription);
    contact.appendChild(pdescription);

    const email = document.createElement("p");
    email.textContent = "email: adrian.koder@gmail.com";
    console.log(email);
    contact.appendChild(email);
  }}
