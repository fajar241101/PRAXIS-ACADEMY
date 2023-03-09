// PART 8 - MAPS // 
// const map = new Map()
// console.log(map) //Map(0) {}

// animes = [
//     ['Dragonball', 'Frieza'], // 'Dragonball' => 'Frieza'
//     ['Naruto', 'Obito'], // 'Naruto' => 'Obito'
//     ['Spy Family', 'Yor'] // 'Spy Family' => 'Yor'
// ]
// const map = new Map(animes)
// console.log(map)
// console.log(map.size)

// PART 9 - ADDING VALUES TO THE MAP // 
const countriesMap = new Map()
// console.log(countriesMap.size)
countriesMap.set('Indonesia', 'Jakarta')
countriesMap.set('USA', 'Ohio')
countriesMap.set('UAE', 'Dubai')
countriesMap.set('England', 'Manchester')
// console.log(countriesMap)
// console.log(countriesMap.size)

// GETTING VALUE FROM MAP // 
// console.log(countriesMap.get('England'));   // bagaimana cara manggil kota nya bukan negara (dibalik)?

// CHECKING KEY IN MAP // 
// console.log(countriesMap.has('England'));

// GETTING ALL VALUES FROM MAP USING LOOP // 
for(const country of countriesMap){
console.log(country);
}

for(const [country, city] of countriesMap){
    console.log(country, city);
}