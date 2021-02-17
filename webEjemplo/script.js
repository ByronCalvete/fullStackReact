console.log('Hola mundo')

let myName = 'Miguel' // Se le puede cambiar y reasignar el valor
const yearInArgentina = 4 // No se puede reasignar el valor, pero SI se puede cambiar
var isDeveloper = true // Aunque este dentro de un scope, la variable se puede acceder desde afuera de ese scope

let age = 'twenty six' // Debilmente tipado y dinámico
age = 26

const firstName = 'Byron' // Tipos primitivos e inmutable
firstName.toUpperCase()

const list = []
const anotherList = list.concat(175)

const persona = {
    name: 'Byron',
    twitter: '@ByronCalvete',
    age: 26,
    isDeveloper: true,
    links: ['https://byroncalvete.dev', 'https://byroncalvete.live'],
}

const field = 'twitter'

// Funciones

const sumar = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

function restar(a, b) {
    return a - b
}

const opt1 = 8
const opt2 = 4

console.log(sumar(opt1, opt2))
console.log(restar(opt1, opt2))

console.log(persona[field])
console.log(persona['twitter'])