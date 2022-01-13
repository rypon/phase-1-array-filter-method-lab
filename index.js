// Code your solution here

function findMatching(array, name) {
    return array.filter(val => val.toLowerCase().indexOf(name.toLowerCase()) > -1)

}
//console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(array, name) {
    return array.filter(val => val.slice(0, name.length) == name)
}
//console.log(fuzzyMatch(drivers, "y"))



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
console.log(matchName(drivers, "Bobby"))
