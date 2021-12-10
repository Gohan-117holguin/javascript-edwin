const app = document.getElementById('main')
const getURL = new URLSearchParams(window.location.search)
const id = getURL.get('id')
const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(`${URL}/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))