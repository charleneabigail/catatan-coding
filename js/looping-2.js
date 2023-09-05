/*
1. fungsi yang mengembalikan nilai minimum. Input: array of number
2. fungsi yang mengembalikan nilai maksimum. Input: array of number
3. fungsi yang mengembalikan sebuah boolean (true/false) jika sebuah angka adalah bilangan prima / bukan. Input: number
4. fungsi yang mengembailikan nilai faktorial dari sebuah number. Input: number. contoh 3! = 3 x 2 x 1
*/


// 1.
function getMinimumArray (arr) {
    return Math.min(...arr)
}
const minimumArray = getMinimumArray ([1,9,2,8,3,7])
console.log(minimumArray);

// 1. looping
function getMinimumArrayloop (arr) {
    let keranjang = 99
    for (let i = 0; i <= arr.length-1; i++) {
        if (keranjang > arr[i]) {
            keranjang = arr[i]
        }
    }
    return keranjang
}
let minimumArrayloop = getMinimumArrayloop ([7, 6, 3, 2, 8])
console.log(minimumArrayloop);


// 2.
function getMaximumArray (arr) {
    return Math.max(...arr)
}
const maximumArray = getMaximumArray ([1,9,2,8,3,7])
console.log(maximumArray);

// 2. looping
function getMaximumArrayloop (arr) {
    let keranjang = 0
    for (let i = 0; i < arr.length; i++) {
        if (keranjang < arr[i]) {
            keranjang  = arr[i]
        }
    }
    return keranjang
}
let maximumArrayloop = getMaximumArrayloop ([2,4,6,5,8,7])
console.log(maximumArrayloop);




// 1. loop2
let arr = ([2,5,3,7,6,1,9])
function getMinimumArrayloop2 (arr) {
    let keranjang = 99
    for (let i = 0; i < arr.length; i++) {
       if (keranjang > arr[i]) {
        keranjang = arr[i]}
    }
    return keranjang
}
let minimumArrayloop2 = getMinimumArrayloop2 ([2,5,3,7,6,1,9])
console.log(minimumArrayloop2);