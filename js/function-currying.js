

function diskon (disc) {
    return function (price) {
        const jumlahDiskon = (disc * price)
        const finalPrice = (price - jumlahDiskon)
        return finalPrice    
    }
}

const diskonMembership = diskon(0.1);

const diskonEvent = diskon(0.5);

const disc1 = diskonMembership(10000)
const disc2 = diskonMembership(5000)
const disc3 = diskonMembership(2000)

const disc4 = diskonEvent(10000)
const disc5 = diskonEvent(5000)
const disc6 = diskonEvent(2000)

console.log(`Diskon Member
Disc1: ${disc1}
Disc2: ${disc2}
Disc3: ${disc3}

Diskon Event 9.9
Disc4: ${disc4}
Disc5: ${disc5}
Disc6: ${disc6}
`)

// //  Diskon spesial member
//  const disc1 = diskon (0.1, 10000)
//  const disc2 = diskon (0.1, 5000)
//  const disc3 = diskon (0.1, 2000)

// console.log(disc1);
// console.log(disc2);
// console.log(disc3);

// //  Diskon spesial 9.9
// const disc4 = diskon (0.5, 10000)
// const disc5 = diskon (0.5, 5000)
// const disc6 = diskon (0.5, 2000)

// console.log(disc4);
// console.log(disc5);
// console.log(disc6);



// UBAH CALCULATOR JADI CURRYING FUNCTION
function calculatorCurrying (operator) {
    return function (operand1, operand2) {
        if (typeof operand1 !== "number" || typeof operand2 !== "number"){
            return "bukanAngka"
        }
    
       if (operator === "*") {
            return operand1 * operand2
        }   else if (operator === "/") {
            return operand1 / operand2
        }   else if (operator === "+") {
            return operand1 + operand2
        }   else if (operator === "-") {
            return operand1 - operand2
        }   
    }
}

const operatormultiply = calculatorCurrying ("*")
const resultmultiply = operatormultiply(5,2)
console.log(resultmultiply);
