let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let slicedData = data.slice(2, 4)
console.log(slicedData)

let length = data.length 
let x = 2
let frontData = data.slice(0, x)
let backData = data.slice(x+1, length)

console.log(frontData)
console.log(backData)

let removedData = frontData.concat(backData)
console.log(removedData)