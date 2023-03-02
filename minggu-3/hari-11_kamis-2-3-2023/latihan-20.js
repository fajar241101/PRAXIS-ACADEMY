// PART 1//
//<Creating set from Array>//
//<Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.>//
//<Set is an iterable object and we can iterate through each elements.>

// const languages = [
//     'Indonesia',
//     'England',
//     'Italy',         
//     'Indonesia',     
//     'French',        
//     'Chinese',
//     'Indonesia', 
// ]

// const setOfLanguages = new Set(languages);   
// for(const language of setOfLanguages){
// console.log(language);
    // }
    
    //<Checking an element in the set>//
// console.log(setOfLanguages.has('Japan'));    
// console.log(setOfLanguages.has('Italy'));    

// PART 2 // 

// const languages = [
//     'Indonesia',
//     'England',
//     'Italy',         
//     'Indonesia',     
//     'French',        
//     'Chinese',
//     'Indonesia', 
// ]
// const langSet = new Set(languages)
// console.log(langSet)
// console.log(langSet.size)

// const counts = []
// const count = {}

// for (const l of langSet){
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang)
//     counts.push({lang: l, count: filteredLang.length})
// }
// console.log(counts);
