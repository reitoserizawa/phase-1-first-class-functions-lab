// Code your solution in this file!
const returnFirstTwoDrivers = (arrayDrivers) => [arrayDrivers[0], arrayDrivers[1]]

const returnLastTwoDrivers = (arrayDrivers) => arrayDrivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (value) {
    
    return function (value){
        return (value * value)}

}

const fareDoubler = function (value) {
    return value * 2
}

const fareTripler = function (value) {
    return value * 3
}

const selectDifferentDrivers = function (arrayDrivers, chosenFunction) {
    if (chosenFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayDrivers)
    }
    else {
        return returnLastTwoDrivers(arrayDrivers)
    }
}

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the
// returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments,
// selectDifferentDrivers() will return either the first two drivers or the last two drivers.