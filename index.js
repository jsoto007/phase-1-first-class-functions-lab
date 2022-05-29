// Code your solution in this file!


const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2)

}
const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function fareQuintupler(multiplier) {
  return (multiplier * 4)
};

function createFareMultiplier(multiplier) {
  return function multiplierReturn(fare) {
    console.log(fare);
    return (multiplier * fare)
  };
}

function fareDoubler(multiple) {
  return (multiple * 2)
}

function fareTripler(number) {
  return (number * 3);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);

}
