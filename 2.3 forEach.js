
let data1 = [1, 2, 3, 4]

let newData1 = data.forEach((item, idx) => {
  return {
    data: item,
    idx,
  }
})

console.log(newData1)