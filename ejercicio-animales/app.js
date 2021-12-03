const card = document.getElementById('card')
const templateCard = document.getElementById('template_card').content
const fragment = document.createDocumentFragment()

const btn1 = document.getElementById('btn_eleccion1')
const btn2 = document.getElementById('btn_eleccion2')
const btn3 = document.getElementById('btn_eleccion3')
const btn4 = document.getElementById('btn_eleccion4')
const btn5 = document.getElementById('btn_eleccion5')

const animales = [
    {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
    {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
    {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
    {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
    {name:"León", type:"Mamifero", age:12,color:"Café"},
    {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
    {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
    {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
    {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
    {name:"Búho", type:"Ave", age:13,color:"Café"},
    {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
    {name:"Águila", type:"Ave", age:4,color:"Rojo"},
    {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
    {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
    {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
    {name:"Hombre", type:"Mamifero", age:9,color:"Piel"},
]

btn1.addEventListener('click', mostrarAnimalesB)
btn2.addEventListener('click', mostrarEdad5)
btn3.addEventListener('click', mostrarAve10)
btn4.addEventListener('click', mostrarMamiferoNegro)
btn5.addEventListener('click', mostrarNoBlanco)

mostrarInformacion()

function mostrarInformacion() {

    animales.forEach(elemento => {

        // console.log(elemento.name[0])
    
        templateCard.querySelector('#nombre_card').textContent = elemento.name
        templateCard.querySelector('#tipo_card').textContent = elemento.type
        templateCard.querySelector('#edad_card').textContent = elemento.age
        templateCard.querySelector('#color_card').textContent = elemento.color
    
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    })

    card.appendChild(fragment)

}

function mostrarAnimalesB() {

    card.innerHTML = ''

    animales.forEach(elemento => {

        if (elemento.name[0] === 'B') {

            console.log(elemento)

            templateCard.querySelector('#nombre_card').textContent = elemento.name
            templateCard.querySelector('#tipo_card').textContent = elemento.type
            templateCard.querySelector('#edad_card').textContent = elemento.age
            templateCard.querySelector('#color_card').textContent = elemento.color
        
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)

        }
        
        card.appendChild(fragment)
    })

}

function mostrarEdad5() {

    card.innerHTML = ''

    animales.forEach(elemento => {

        if (elemento.age === 5) {

            templateCard.querySelector('#nombre_card').textContent = elemento.name
            templateCard.querySelector('#tipo_card').textContent = elemento.type
            templateCard.querySelector('#edad_card').textContent = elemento.age
            templateCard.querySelector('#color_card').textContent = elemento.color
        
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)

        }
        
        card.appendChild(fragment)
    })

}

function mostrarAve10() {

    console.log("hola")

    card.innerHTML = ''

    animales.forEach(elemento => {

        if (elemento.type === 'Ave' && elemento.age > 10) {
            console.log(elemento)

            templateCard.querySelector('#nombre_card').textContent = elemento.name
            templateCard.querySelector('#tipo_card').textContent = elemento.type
            templateCard.querySelector('#edad_card').textContent = elemento.age
            templateCard.querySelector('#color_card').textContent = elemento.color
        
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)

        }
        
        card.appendChild(fragment)
    })

}

function mostrarMamiferoNegro() {

    card.innerHTML = ''

    animales.forEach(elemento => {

        if (elemento.type === 'Mamifero' && elemento.color === 'Negro') {

            let arreglo = [elemento.name, elemento.type, elemento.age, elemento.color]
            console.log(arreglo)

            templateCard.querySelector('#nombre_card').textContent = elemento.name
            templateCard.querySelector('#tipo_card').textContent = elemento.type
            templateCard.querySelector('#edad_card').textContent = elemento.age
            templateCard.querySelector('#color_card').textContent = elemento.color
        
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)

        }
        
        card.appendChild(fragment)
    })

}

function mostrarNoBlanco() {

    card.innerHTML = ''

    animales.forEach(elemento => {

        if (elemento.color !== 'Blanco') {

            let arreglo = [elemento.name, elemento.type, elemento.age, elemento.color]
            console.log(arreglo)

            templateCard.querySelector('#nombre_card').textContent = elemento.name
            templateCard.querySelector('#tipo_card').textContent = elemento.type
            templateCard.querySelector('#edad_card').textContent = elemento.age
            templateCard.querySelector('#color_card').textContent = elemento.color
        
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)

        }
        
        card.appendChild(fragment)
    })

}

// 1. Mostrar todos los animales cuya inicial sea la letra B
// 2. Mostrar todos los animales que tengan más de 5 años.
// 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
// 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
// 5. Muestre un Array donde se excluyan los animales de color blanco.

