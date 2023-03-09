// PART 5 (UNION SETS) // 
// let a = [2,3,5,6,7]
// let b = [8,9,10]
// let c = [...a, ...b]
// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)
// console.log(C)

// PART 6 (INTERSECTION SETS) //
// let a = [5,6,7]
// let b = [6,7,8]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C)

// PART 7 (DIFFERENCE OF SETS) // 
let a = [5,6,7]
let b = [6,7,8]
let A = new Set(a)
let B = new Set(b)
let c = b.filter((num) => !A.has(num)) //{8}
let d = a.filter((num) => !B.has(num)) //{5}
let C = new Set(c)
let D = new Set(d)
console.log(D)