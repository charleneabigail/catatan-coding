function getNama(nama) {
    return nama;
}

function hitungPanjangNama(nama){
    return nama.length;
}

function getNamaBesar(nama){
    return nama.toUpperCase()
}

function getNamaKecil(nama){
    return nama.toLowerCase()
}

function getFirstChar(nama){
    return nama[0]
}

function getFirstName(nama){
    return nama.split(" ")[0]
}

function getGabung(nama){
    return nama.split(" ")[0] + " Love Javascript"
}

function getLastChar(nama) {
    return nama[nama.length-1]
}

const name = 'Charlene Abigail';

const myName = getNama(name);
const myNameLength = hitungPanjangNama(name);
const namaBesar = getNamaBesar(name); 

console.log(myName);
console.log(myNameLength)
console.log(namaBesar)