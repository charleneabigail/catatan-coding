const random = Math.random()

// Random dengan nilai maksimum
const max = 10;
const randomWithMax = random * max;
console.log('decimal: ' + randomWithMax);
console.log("bilangan bulat: " + Math.round(randomWithMax));

// Random dengan nilai maksimum dan minimum
const min = 5;
const range = max - min;
const randomWithMaxMin = range * random + min 
console.log(randomWithMaxMin);

console.log(Math.round(randomWithMaxMin));