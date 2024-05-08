
//========================================== Q1  ===============================================================

const inputValueNum = [5, -5];

function closestToZero(inputArrayVal) {
    if (!inputArrayVal || inputArrayVal.length === 0 || inputArrayVal[0] === null) {
        return 0;
    }
    let closestValue = inputArrayVal[0];
    for (let i = 1; i < inputArrayVal.length; i++) {
        if (Math.abs(inputArrayVal[i]) < Math.abs(closestValue) || (Math.abs(inputArrayVal[i]) === Math.abs(closestValue) && inputArrayVal[i] > 0)) {
            closestValue = inputArrayVal[i];
        }
    }

    return closestValue;
}

console.log(closestToZero(inputValueNum)); 
console.log(closestToZero([])); 
console.log(closestToZero(null)); 

//========================================== Q2  ===============================================================

function calculateTotalPrice(purchasedPrices, ownerPercentDiscount) {
  if (purchasedPrices.length === 0) {
    return 0;
  }

  let maxPriceItem = Math.max(...purchasedPrices);

  let discountedPrice = maxPriceItem - (maxPriceItem * ownerPercentDiscount) / 100;

  let totalPriceOfItem =
    discountedPrice + purchasedPrices.reduce((acc, curr) => acc + curr, 0) - maxPriceItem;

  return Math.floor(totalPriceOfItem);
}

const purchasedItemPrice = [50, 30, 70, 1];
const ownerDiscount = 20;
console.log(calculateTotalPrice(purchasedItemPrice, ownerDiscount)); 






//========================================== Q3  ===============================================================


function filterFun(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

//  ex1
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
console.log(filterFun(arr1, fn1));

// ex2
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filterFun(arr2, fn2)); 

// ex3
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) { return n + 1; };
console.log(filterFun(arr3, fn3));

