let data = [
  {value: 1, name: 'a'},
  {value: 2, name: 'b'},
  {value: 3, name: 'c'},
  {value: 4, name: 'd'},
  {value: 5, name: 'e'},
  {value: 6, name: 'f'}
]

let filteredData = data.filter((item, idx) => item.value % 2)
console.log(filteredData)