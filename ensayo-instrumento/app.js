const app = document.getElementById('main')
const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const p = document.createElement('p')
            p.setAttribute('id', user.id)
            p.innerHTML = user.name
            p.addEventListener('click', function () {
                window.location.href = `./users.html?id=${user.id}`
            })
            app.appendChild(p)
        })
    })
    .catch(error => console.log(error))

