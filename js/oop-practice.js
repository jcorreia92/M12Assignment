/******************************************************************************/
// N.B. Steps 1 - 2 are grouped

// STEP 1

// class Cat {
//     constructor() {
//         console.log('Say hello to your new cat!')
//     }
// }

// const Dog = class {
//     constructor() {
//         console.log('Say hello to your new dog!')
//     }
// }

// STEP 2

// const myCat = new Cat()
// const myDog = new Dog()

/******************************************************************************/
// STEP 3

// class Animal {
//     constructor() {}

//     displayMessage() {
//         console.log('The Animal has been created.')
//     }
// }

// const myAnimal = new Animal()
// myAnimal.displayMessage()

/******************************************************************************/
// STEP 4

// class Animal {
//     constructor(message) {
//         this.message = message
//     }

//     displayMessage() {
//         console.log(this.message)
//     }
// }

// const myAnimal = new Animal('The Animal has been created.')
// myAnimal.displayMessage()

/******************************************************************************/
// N.B. Steps 5 and 6 are grouped

// STEP 5

// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }

// const myAnimal = new Animal('dog', 'golden retriever', 'golden', '30\"', '40\"')


// STEP 6

// for (let property in myAnimal) {
//     console.log(`${property}: ${myAnimal[property]}`)
// }

/******************************************************************************/
// STEP 7

// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }

//     speak() {
//         if (this.type == 'dog') {
//             console.log(`The ${this.color} dog is barking!`)
//         }

//         if (this.type == 'cat') {
//             console.log(`The ${this.color} cat is meowing!`)
//         }
//     }
// }

// const myCat = new Animal('cat', 'Bengal', 'Snow Mink', '12\"', '18\"')
// const myDog = new Animal('dog', 'golden retriever', 'golden', '30\"', '40\"')

// myCat.speak()
// myDog.speak()


/******************************************************************************/

// STEP 8
// While the lecture specified that private properties and methods use the
// syntax of 'let' with an _ before the name of the property/method, this
// implementation uses a more 'secure' designation of private vs public with
// the symbol # before the name of the method/property along with variable
// declarations for private properties before the constructor.

// class Animal {
//     #type
//     #breed
//     #color
//     #height
//     #length

//     constructor(type, breed, color, height, length) {
//         this.#type = type
//         this.#breed = breed
//         this.#color = color
//         this.#height = height
//         this.#length = length
//     }

//     // In the case of other animals, this method could be implemented using
//     // a simple return statement: #checkType() {return this.#type}
//     #checkType() {
//         if (this.#type == 'dog') return 'dog'
//         else                     return 'cat'
//     }

//     speak() {
//         console.log(`The ${this.#checkType()} has made a noise!`)
//     }
// }

// const myCat = new Animal('cat', 'Bengal', 'Snow Mink', '12\"', '18\"')
// const myDog = new Animal('dog', 'golden retriever', 'golden', '30\"', '40\"')

// myCat.speak()
// myDog.speak()

/******************************************************************************/
// STEP 9

// String.prototype.findWords = function(word) {

//     // Create a regular expression to represent the word to search
//     let regex = new RegExp('\\b' + word + '\\b', 'gi')

//     // Find all matches of the word based on the regular expression
//     let matches = this.match(regex)

//     // Count the number of matches if the matches array exists; 0 otherwise
//     let count = matches ? matches.length : 0

//     alert(`The word "${word}" was found ${count} times.`)
// }