// Ejemplo de array.map()
// Syntax:
// Arrow function
// map ((element) => {/*...*/})
// map ((element, index) => {/*---*/})
// map((element,index,array) => {/*...*/})

const array = [1,2,3,4,5]
const numeros = array.map((num) => num *2) 
console.log (numeros);