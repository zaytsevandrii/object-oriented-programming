class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.job=''
    }
    getName() {
        return `${this.name} has ${this.age}`
    }
    getJob=(job)=>{
        this.job=job
    }
}

const Person1 = new Person("Anddrii", 37)
const Person2 = new Person("Yana", 32)
console.log(Person1.getName())
console.log(Person2.getName())

class House {
    constructor(adress, price, residents) {
        this.adress = adress
        this.price = price
        this.residents = residents
    }
    getAdress() {
        return this.adress
    }
    getPrice() {
        return this.price
    }
    getResidents() {
        return this.residents
    }
    addresident(resident){
        this.residents.push(resident)

    }
}

/* let Pedro=new Person('Pedro',19)
let David = new Person('David',21)
let house=new House('Premogi',280000,[Pedro,David])
console.log(house.getResidents())

let Paulo=new Person('Paulo',18)
house.addresident(Paulo)
console.log(house.getResidents()) */

let Prdro=new Person('Prdro',19)
let house = new House('Mariupol',2030,[])
house.addresident(Prdro)
Prdro.getJob('Developer')
console.log(house.getResidents())