// GIORNATA DEDICATA ALLE FUNZIONI! :)

// modo più semplice di scrivere una funzione:
function bark() {
  console.log('BAU!')
}
// questa sopra è una DICHIARAZIONE di FUNZIONE!

// tuttavia, questa funzione è solamente "disponibile" per l'utilizzo! non viene
// automaticamente invocata

bark() // <-- questa è una INVOCAZIONE della funzione bark
bark() // <-- questa è una INVOCAZIONE della funzione bark
bark() // <-- questa è una INVOCAZIONE della funzione bark
// tre bark totali, perchè la funzione bark() scrive UN console.log
// bark() è una funzione semplicissima, dentro le parentesi non ci va niente
// perchè bark() NON accetta "parametri"

// VALORI DI RITORNO
// una funzione, una volta invocata, PUÒ "ritornare" un valore al suo esecutore.
// in caso una funzione ritorni un valore, probabilmente conterrà la parola "return"

function sum() {
  const result = 5 + 10 // 15
  //   console.log(result)
  return result // <-- sto RITORNANDO la variabile result dall'esecuzione di sum
}

let x = sum() // scrivere sum() (invocarla) equivale al numero 15
console.log('X', x) // x vale 15

console.log(sum() + 10) // 25
// invocare una funzione dotata di un valore di ritorno, equivale a ottenere
// il valore di ritorno stesso!

// SE UNA FUNZIONE NON HA VALORE DI RITORNO, NON HA SENSO CREARE UNA VARIABILE
// A PARTIRE DALLA SUA ESECUZIONE (es. riga 29)
// PERCHÈ NON POTREMO TRATTARE L'ESECUZIONE DELLA FUNZIONE COME IL SUO VALORE DI RITORNO
// l'ouput di una funzione === il suo valore di ritorno

function sayHello() {
  const greetings = 'Hello'
  const myName = 'Stefano'
  const complete = greetings + ', ' + myName
  return complete
}
console.log(sayHello()) // 'Hello, Stefano'

const example = sayHello()
console.log('IL VALORE DI EXAMPLE È', example)

console.log(typeof sayHello())

sayHello() + ' e insegno ad epicode'

// PARAMETRI DI UNA FUNZIONE
// una funzione può accettare parametri (input) per cercare di inserire della "varietà"
// nel suo comportamento (come ad esempio poter dire Hello ad una persona qualunque
// invece che sempre a Stefano)

function sayHelloCustom(nameOfThePerson) {
  const greetings = 'Hello'
  const myName = nameOfThePerson
  const complete = greetings + ', ' + myName // 'Hello, Pietro'
  return complete
}

console.log(sayHelloCustom('Wendy')) // nameOfThePerson è 'Wendy'
console.log(sayHelloCustom('Pietro')) // nameOfThePerson è 'Pietro'
console.log(sayHelloCustom('Alessandro')) // nameOfThePerson è 'Alessandro'
console.log(sayHelloCustom()) // nameOfThePerson è undefined

// è l'INVOCAZIONE della funzione che specificherà chi è "nameOfThePerson"

function smartSum(num1, num2) {
  const result = num1 + num2
  // scrivete la funzione NON CON DATI VERI, ma con delle incognite, dei placeholder
  return result
}

// i DATI VERI arrivano quando invocate la funzione
// la funzione smartSum "si aspetta" di ricevere due numeri, che poi internamente
// tratterà come num1 e num2
const finalResult = smartSum(8, 9) + smartSum(2, 87) // 106
smartSum(1, 2) // 3
console.log(smartSum(4)) // somma 4 + undefined -> NaN, JS ce lo fa fare lo stesso! :O

smartSum('8', '9') // --> ? '89' :(

function ultimateSum(num1, num2 = 2) {
  // lo 0 verrà utilizzato come valore di num2 qualora num2 non venisse passato come argomento
  return num1 + num2
}

console.log(ultimateSum(2, 3)) // vedrò in console il numero 5
console.log(ultimateSum(3)) // num1 è 3, ma num2 è 0 (meglio di undefined)

function ultimateGreetings(persona = 'Mario', saluto = 'Buongiorno') {
  const result = saluto + ', io mi chiamo ' + persona
  return result
}

const saluto1 = ultimateGreetings('Salvatore', 'ciao') // 'ciao, io mi chiamo Salvatore'
const saluto2 = ultimateGreetings('Elisa') // 'Buongiorno, io mi chiamo Elisa'
const saluto3 = ultimateGreetings('Stefano', 'Ueila') // 'Ueila, io mi chiamo Stefano'
const saluto4 = ultimateGreetings() // 'Buongiorno, io mi chiamo Mario'

// tutte le variabili saluto* sono STRINGHE!
console.log(saluto1)
console.log(saluto2)
console.log(saluto3)
console.log(saluto4)

// esempietto di invocazione di sayHelloCustom con dato proveniente da prompt
// const userName = prompt('Ciao! Come ti chiami?') // 'Mario'
// console.log(sayHelloCustom(userName))

const arrayOfNames = [
  'Stefano',
  'Nicolò',
  'Alessia',
  'Dalila',
  'Jurgen',
  'Anas',
]

// sayHelloCustom('Stefano')
// sayHelloCustom('Nicolò')
// sayHelloCustom('Alessia')
// ...

for (let i = 0; i < arrayOfNames.length; i++) {
  // chiamo la funzione automaticamente 6 volte, ogni volta con un nome diverso!
  console.log(sayHelloCustom(arrayOfNames[i]))
}

// function ciao() {
//   return 100
// }

const ciao = function () {
  return 100
}

console.log(ciao())

// console.log(testVar)

// const testVar = 100

const anotherSum = function (num1, num2) {
  return num1 + num2
}

const myResult = anotherSum(10, 23) // myResult vale 33
