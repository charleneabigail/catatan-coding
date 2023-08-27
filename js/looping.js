// RATA-RATA DARI ARRAY


// Rata-Rata = Jumlah semua elemen / panjang array
// (5 + 8 + 12 + 4 + 6) / 5

// const sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
// const avg = sum / arr.length;
const arr = [5,8,12,4]

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log('Index: ', i, ' - Element:', arr[i])
    sum = sum + arr[i]
}

const avg = sum / arr.length
console.log('Sum:', sum);
console.log('Banyaknya data:', arr.length);
console.log('Avg:', avg)
/**
 * sum -> 0
 * i -> 0
 * selama i < arr.length -> i < 4
 * i = i + 1
 * 
 * Loop ke 0 -> 0 (nilai i) < 4 ? true
 * log -> index 0 | element: 5
 * sum = 0 + 5 = 5
 * i = 0 + 1
 * 
 * Loop ke 1 -> 1 (nilai i) < 4 ? true
 * log -> index 1 | element: 8
 * sum = 5 + 8 = 13
 * i = 1 + 1
 * 
 * Loop ke 2 -> 2 (nilai i) < 4 ? true
 * log -> index 2 | element: 12
 * sum =  13 + 12 = 25
 * i = 2 + 1
 * 
 * Loop ke 3 -> 3 (nilai i) < 4 ? true
 * log -> index 3 | element 4
 * sum = 25 + 4 = 29
 * i = 3 + 1
 * 
 * Loop ke 4 -> 4 < 4 ? false
 * 
 * log -> sum 29
 */

/**
 * arr.length - 1 = 6
 * 
 * Loop ke 1
 * i = 0,  
 */

// i++ adalah i = i +1

// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
// }


// for (let i = 0; i < 5; i++) {
//     console.log('Nilai i: ', i)
// }

/**
 * i = 0; 
 * selama i < 5
 * i + 1
 * -------
 * 
 * Loop ke 0 -> i < 5 ? true
 * output: Nilai i = 0
 * i = 0 + 1
 * 
 * Loop ke 1 -> i < 5 ? true
 * output: Nilai = 1
 * i = 1 + 1
 * 
 * Loop ke 2 -> i < 5 ? true
 * output: Nilai i = 2
 * i = 2 + 1
 * 
 * Loop 3 -> i < 5 ? true
 * output: Nilai = 3
 * i = 3 + 1
 * 
 * Loop 4 -> i < 5 ? true
 * output: Nilai = 4
 * i = 4 + 1
 * 
 * Loop 5 -> i < 5 ? false
 * 
 */


console.log("--------");


const array2 = [3,6,4,9]
let sum2 = 0
for(let i= 1; i<array2.length; i=i+2){
    sum2= sum2+array2[i]
}
console.log(sum2);








