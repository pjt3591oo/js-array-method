let data = [1,2,3,4,5]

let sum = data.reduce((acc, item, idx) => {
  acc += item
  return acc
}, 0)

console.log(sum)

let listToJson = data.reduce((acc, item, idx) => {
  acc[idx] = item
  return acc
}, {})

console.log(listToJson)