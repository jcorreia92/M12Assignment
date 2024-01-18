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
// Now, create a public method called speak. Within the speak method you will 
// use a conditional to check the type of Animal being created. If it’s a dog, 
// return “The <color> dog is barking!” If it’s a cat return “The <color> cat is 
// meowing!” instead. Call that method after the Animal class has been instantiated.

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
// Now, convert all of your properties to private properties. Then, create a 
// private method called checkType(). In this method you will check to see what 
// the type is. If it’s dog, return dog, otherwise, return cat. Then, create a 
// privileged method called speak that returns the value of the checkType() 
// method. The console window should now display “The <animal type> has made a noise!”

// While the lecture specified that private properties and methods use the
// syntax of 'let' with an _ before the name of the property/method, this
// implementation uses a more 'secure' designation of private vs public with
// the symbol # before the name of the method/property along with variable
// declarations for private properties before the constructor.

class Animal {
    #type
    #breed
    #color
    #height
    #length

    constructor(type, breed, color, height, length) {
        this.#type = type
        this.#breed = breed
        this.#color = color
        this.#height = height
        this.#length = length
    }

    // In the case of other animals, this method could be implemented using
    // a simple return statement: #checkType() {return this.#type}
    #checkType() {
        if (this.#type == 'dog') return 'dog'
        else                     return 'cat'
    }

    speak() {
        console.log(`The ${this.#checkType()} has made a noise!`)
    }
}

const myCat = new Animal('cat', 'Bengal', 'Snow Mink', '12\"', '18\"')
const myDog = new Animal('dog', 'golden retriever', 'golden', '30\"', '40\"')

myCat.speak()
myDog.speak()

// STEP 9
// Create your own String method called findWords that inherits from the native 
// String Object. This method should find all instances of a specific word 
// within a provided paragraph of text. It should then alert out to the user the 
// number of time that word was found in the paragraph. Remember, you’ll need to 
// add your method to the String object’s prototype.