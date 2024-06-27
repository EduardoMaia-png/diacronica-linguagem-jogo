let cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);
            if (flippedCards.length === 2) {
                setTimeout(() => {
                    if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
                        matchedCards.push(flippedCards[0]);
                        matchedCards.push(flippedCards[1]);
                        flippedCards[0].classList.add('matched');
                        flippedCards[1].classList.add('matched');
                    } else {
                        flippedCards[0].classList.remove('flipped');
                        flippedCards[1].classList.remove('flipped');
                    }
                    flippedCards = [];
                }, 1000);
            }
        }
    });
});