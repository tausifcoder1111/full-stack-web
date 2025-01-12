
const mySymbol = Symbol('my Keyss Symbol');
console.log(typeof mySymbol)
const jsUser = {
    name: 'Tausif',
    [mySymbol] : 'Object Symbol',
    "full Name" : 'Shaikh Tausif',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        return 0;
    }
}

// console.log(jsUser.greet())

console.log(jsUser["name"])
// console.log(jsUser.full Name)
console.log(jsUser["full Name"])
// console.log(typeof jsUser.mySymbol)  ... we can't use like this
console.log(jsUser[mySymbol])

console.log('----------------------------------------------------------------')
console.log(jsUser)


