const cardsContainer = document.getElementById("cards");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    
    shuffleCards();
    generateCards(); // Call the function to generate the card elements
    console.log(cards);
  });

function shuffleCards() {
  let temp;
  let currentIndex = cards.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temp; // Fix the assignment to the randomIndex
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    
    // Assuming your card data has a 'content' property
    cardElement.textContent = card.content;

    // Append the card element to the cards container
    cardsContainer.appendChild(cardElement);
  }
}
