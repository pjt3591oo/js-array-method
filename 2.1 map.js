let data = [1, 2, 3, 4]

let newData = data.map((item, idx) => {
  return {
    data: item,
    idx,
  }
})

console.log(newData)
