function luasPersegiPanjang(panjang, lebar) {
    return  panjang * lebar;
}

const nilai = luasPersegiPanjang(10, 5);
console.log(nilai)




const nilai2 = luasPersegiPanjang(4, 2);
console.log(nilai2)
const nilai3 = luasPersegiPanjang(2, 2);
console.log(nilai3)
console.log('Selesai')


function kelilingLingkaran(r) {
    const kll = 2 * 3.14 * r
    return kll
}
const kll = kelilingLingkaran(4)
console.log(kll);

const kll2 = kelilingLingkaran(6)
console.log(kll2);

const kll3 = kelilingLingkaran(8)
console.log(kll3);


function avg (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }    
    const avg = sum / arr.length
    return avg
}

const avr = avg([2,3,4])
console.log(avr);
const avrg = avg([1,2,3,4,5])
console.log(avrg);


function randomMinMax (min, max) {
    const range = max - min
    const random = Math.random()
    const randomMinMax = random * range + min
    return randomMinMax
}
 const randomMinMax1 = randomMinMax(2,6)
 console.log(randomMinMax1);

 const randomMinMax2 = randomMinMax(3,7)
 console.log(randomMinMax2);

 const randomMinMax3 = randomMinMax(5,10)
 console.log(randomMinMax3);
 


 function genapGanjil (num) {
    if (num % 2 == 0) {
        return "genap"
    } else {
        return "ganjil"
    }
 }
 const genapGanjil1 = genapGanjil(3)
 console.log(genapGanjil1);

 const genapGanjil2 = genapGanjil(10)
 console.log(genapGanjil2);




 function nama (namaLengkap) {
    const pembagiNama = namaLengkap.split(" ");
    const namaAwal = pembagiNama[0];
    return namaAwal
 }
 const namaAwal1 = nama("Charlene Abigail")
 console.log(namaAwal1);



 function nama1 (namaLengkap1) {
    const pembagiNama1 = namaLengkap1.split(" ");
    const namaAkhir = pembagiNama1[pembagiNama1.length-1]
    return namaAkhir
 }
 const namaAkhir1 = nama1("Yogi Wisesa Chandra")
 console.log(namaAkhir1);


 function diskon (disc, price) {
    const jumlahDiskon = (disc * price)
    const finalPrice = (price - jumlahDiskon)
    return finalPrice
 }
//  Diskon spesial member
 const disc1 = diskon (0.1, 10000)
 const disc2 = diskon (0.1, 5000)
 const disc3 = diskon (0.1, 2000)

console.log(disc1);
console.log(disc2);
console.log(disc3);

//  Diskon spesial 9.9
const disc4 = diskon (0.5, 10000)
const disc5 = diskon (0.5, 5000)
const disc6 = diskon (0.5, 2000)

console.log(disc4);
console.log(disc5);
console.log(disc6);

console.log('---------------')
function student (name, adress) {
    const greeting = `Hai nama saya ${name} alamat saya di ${adress}`
    return greeting
}
const sapa = student ("julio", "semarang")
console.log(sapa);


console.log('---------------')
const nama2 = 'Abel'
const address2 = 'Kedoya'

function student (name, adress) {
    return `Hai nama saya ${name} alamat saya di ${adress}`
}



const greeting = student('Mahatong', 'Cikarang')
console.log(greeting)

console.log(student (nama2, address2))
console.log(student ('Angel', "denpasar"))
console.log(student ('Carene', "jimbaran"))

console.log("============================");

// TUGAS MAHATTI
function golfScore (par, stroke) {
    if (stroke == 1) {
        return "Hole-in-one!"
    }
    else if (stroke <= par -2) {
        return "Eagle"
    }
    else if (stroke == par -1) {
        return "Birdie"
    }
    else if (stroke == par) {
        return "Par"
    }
    else if (stroke == par +1) {
        return "Bogey"
    }
    else if (stroke == par +2) {
        return "Double Bogey"
    }
    else if (stroke >= par +3) {
        return "Go Home"
    }
}

let ifScore = golfScore (1,1)
console.log(ifScore);
let ifScore2 = golfScore (2,2)
console.log(ifScore2);
let ifScore3 = golfScore (3,3)
console.log(ifScore3);