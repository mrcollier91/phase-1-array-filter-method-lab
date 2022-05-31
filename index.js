/*function findMatching(drivers, name) {
    let newArray = []
    for (const string of drivers) {
        if (string.toLowerCase() === name.toLowerCase()) {
            newArray.push(string)
        }
     }
     return newArray
}
*/

/*
function findMatching(drivers, name) {
   let newArray = drivers.filter(function(string){
        return string.toLowerCase() === name.toLowerCase()
    })
    return newArray
}
*/
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
    
/*
function fuzzyMatch(drivers, name) {
    let result = drivers.filter(driversName => driversName.startsWith(name))
    return result
}
*/

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.slice(0, name.length) === name)
}
   
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}