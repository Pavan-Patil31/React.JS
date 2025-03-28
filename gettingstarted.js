
import  greetings  from "./data"

const dataFile = require()

function sayLouder(text){
    return text.toUppercase()

}
console.log(sayLouder("It eorks"))
console.log(sayLouder("we are happy to learn code"))

function getPositiveNumbers(numberArray){
    return numberArray.filter((element)=> element> 0)
}
console.log(getPositiveNumbers([10, -5, 2, 4]))


function getPassingDate(results){
    return results.filter((element)=> element.grade >= 10)


}
const data = [{id:1, grade:10},{id:2, grade:4},{id:3, grade:18}]
console.log(getPassingDate(data))

dataFile.greetings();