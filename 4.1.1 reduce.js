let data = [1,2,3,4,5]
let sum = 0
let dataToJson = {}

for(let i = 0 ; i < data.length ; ++i) {
  sum += data[i]
}


for (let i = 1 ; i < data.length ; ++i) {
  dataToJson[i] = data[i]
}

console.log(sum)
console.log(dataToJson)