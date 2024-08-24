//OBJECTS --> key-value pairs
const person = {
    name : 'Quazi',
    shirt : 'wblack'
}
/*
//accesing the objects
//1.dot notation
console.log(person.name)
console.log(person.shirt)
//bracket notation
console.log(person['name'])
console.log(person['shirt'])
*/
//assign object
person.phone = '12345'
//console.log(person['phone'])
//console.log(person)

const introducer= (name, shirt) => {
    const person1 = {
        name : name,
        shirt : shirt
    }
    const intro = `Hi, my  name is ${person1.name}. The color of my shirt is ${person1.shirt}.`
    return intro
}
console.log(introducer('leo', 'red'))
//my try
const introArrow = (name, shirt) => {
    const p2 = {
        name : name,
        shirt : shirt,
        salary : 10000,
        expenditure : 8000,
        savings : function() {
            return p2.salary - p2.expenditure
        }
        
    }
    const para = `hi,my name is ${p2.name}.My savings are $${p2.savings()}`
    return para
} 
console.log(introArrow('quazi', 'black'))
