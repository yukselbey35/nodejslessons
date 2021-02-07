// function(name){
//     console.log(`My name is $(name)`)
// }
//sayName('Mr. AK')
let sayName=function(name){
    console.log(`My name is ${name}`)
}

let sayAge= function(age){
    console.log(`I am ${age} year old`)
}

module.exports = {
    sayName:sayName,
    sayAge:sayAge
}