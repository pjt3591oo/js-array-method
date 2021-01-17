let data = [1,4,3,2,7,5,3,2,5,6,7,1,]

let sortedData = data.sort((a, b) => a > b ? 1: a < b ? -1 : 0)
console.log(sortedData)

let sortedData1 = data.sort()
console.log(sortedData1)

let sortedData2 = data.sort((a, b) => a - b)
console.log(sortedData2)