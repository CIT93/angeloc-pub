const square = (num) => num * num

const squareLong = (num) => {
    return num * num
    }
console.log(square(5))

const people = [{
    name: "angelo",
    age: 21
}, {
    name: "ryan",
    age: 30
}, {
    name: "jesus",
    age: 25
}];

//const under30 = people.filter(function () {
  //  return person.age < 30
//})

const under30 = people.filter((person) => person.age <30)


    console.log(under30)

const person = people.find((person)  => person.age ===21)
console.log(person.name)