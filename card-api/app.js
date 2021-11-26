const URL = "https://rickandmortyapi.com/api/character/"
const mainCard = document.querySelector('#main')
const cards = document.getElementById('card')
const templateCard = document.getElementById('template-cards').contains
const changeCharacters = document.getElementById('change-results')
const allCharacters = document.getElementById('all-results')
const fragment = document.createDocumentFragment()

function showCards(data){

    data.forEach(results => {
        templateCard.querySelector('#title-card').textContent = results.name
        templateCard.querySelector('#p-card-gender').textContent = results.gender
        templateCard.querySelector('#p-card-status').textContent = results.status
        templateCard.querySelector('#img-card').setAttribute("src", results.image)

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)

}

function FetchApi() {

    fetch(URL)
    .then(response => response.json())
    .then(cards => {
        mainCard.innerHTML = ''
        showCards(cards)
    })

}
