// Code your solution in this file!


const returnFirstTwoDrivers = function (nameArr) {

    nameArr = ['Antonia',"Nuru",'Amari','Mo']

    const newArr = nameArr.slice(0,2);
    return newArr;
}

const returnLastTwoDrivers = function (nameArr) {
    nameArr = ['Antonia',"Nuru",'Amari','Mo']

    const newArr2 = nameArr.slice(-2);
    return newArr2;
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(number) {
    return function (fare) {
       return fare * number;
    }
}

const fareDoubler = (function(fare) {
    return fare*2
})

const fareTripler = (function(fare) {
    return fare*3
})


function selectDifferentDrivers(nameArr, selectingFunction) {
    if (selectingFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(nameArr);
    } else if (selectingFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(nameArr);
    }
}
