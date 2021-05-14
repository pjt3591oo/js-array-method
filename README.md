# Array Methods

[블로그 설명](https://blog.naver.com/pjt3591oo/222210241412)

1. push & pop

2. map
2. filter
2. forEach

3. concat
3. slice
3. join

4. reduce
4. sort

---

JavaScript Array Methods

```
1. push / pop
2. map, filter, forEach
3. some, every
4. concat, slice, join
5. includes
6. reduce
7. sort
```

# push / pop

push와 pop은 스택의 push, pop과 동일한 기능수행

push는 리스트 마지막에 요소추가

pop은 리스트 마지막 요소를 가져옴

```js
let data = [1,2,3]

data.push(4)
data.push(5)
data.push(6)

console.log(data)

let a = data.pop()
let b = data.pop()

console.log(data)
```

# map / filter / forEach

map, filter는 리스트를 순회하는 메소드 map과 filter는 리턴 방식의 차이를 가짐

forEach는 아무런 값을 리턴(반환)하지 않음

* map

```js
let data = [1, 2, 3, 4]

let newData = data.map((item, idx) => {
  return {
    data: item,
    idx,
  }
})

console.log(newData)
```

```
[
  { data: 1, idx: 0 },
  { data: 2, idx: 1 },
  { data: 3, idx: 2 },
  { data: 4, idx: 3 }
]
```

맵은 list 데이터를 통해 새로운 형태의 모델을 만드는데 적합

* filter

```js
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

```

```
[
  { value: 1, name: 'a' },
  { value: 3, name: 'c' },
  { value: 5, name: 'e' }
]
```

filter는 true로 반환된 객체만 반환하여 새로운 리스트 생성

# some / every

some과 every는 반복문을 순회하여 최종적으로 boolean 형태의 값을 반환

* some

```js
let arr = [1, 2, 3, 4];
let result = arr.some((item) => item % 2);

console.log(result) // true
```

some은 리턴(반환)값 중 하나라도 true면 최종적으로  true 반환

* every

```js
let arr = [1, 2, 3, 4];
let result1 = arr.every((item) => item % 2);
let result2 = arr.every((item) => item < 10);

console.log(result1) // false
console.log(result2) // true
```

every는 하나라도 false 반환된 내용이 있으면 false 반환

# concat / slice / join

`concat`은 서로다른 리스트를 하나의 리스트로 합치는 메소드

`slice`는 하나의 리스트에서 특정 범위를 잘라내는 메소드

`join`은 리스트를 문자열로 바꾸는 메소드

* concat

```js
let data1 = [2,3,4]
let data2 = [12,13,14]
let data3 = [20,30,40]

let data4 = data1.concat(data2, data3)

console.log(data1) // [ 2, 3, 4 ]
console.log(data2) // [ 12, 13, 14 ]
console.log(data3) // [ 20, 30, 40 ]
console.log(data4) // [ 2,  3,  4, 12, 13, 14, 20, 30, 40 ]
```

concat은 원본은 유지하고 새로운 리스트 반환, 새롭게 만들어진 리스트는 별도의 포인터(참조)값을 가짐

* slice

```js
let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let slicedData = data.slice(2, 4)
console.log(slicedData) // [ 2, 3 ]
```

slice와 concat을 결합하여 다음과 같은 코드를 작성할 수 있음. 

```js
let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let length = data.length 
let cutPoint = 2
let frontData = data.slice(0, cutPoint)
let backData = data.slice(cutPoint+1, length)

console.log(frontData)  // [ 0, 1 ]
console.log(backData)   // [ 3, 4, 5, 6, 7, 8, 9 ]

let cutData = frontData.concat(backData) 
console.log(cutData)    // [ 0, 1, 3, 4, 5, 6, 7, 8, 9 ]
```

* join

join은 전달된 인자로 구분된 새로운 문자열 생성

```js
let data = ['멍개', '멍청이', '개구리']
console.log(data.join(',')) // 멍개,멍청이,개구리
```

# includes

`includes`는 배열에 특정 요소가 있는지 검사 결과를 `boolean`으로 반환

```js
let data = [1,2,3,4,5]

console.log(data.includes(1)) // true 
console.log(data.includes(0)) // false
```

# reduce

reduce의 형태는 다음과 같다.

```js
Array.reduce((계산된 값, 요소, 인덱스) => {
  
}, 초기값)
```

reduce가 처음 호출되면 계산된 값으로 초기값 전달

콜백함수가 실행한 후 리턴된 값을 다음번 콜백 호출 시 첫 번째 인자로 계산된 값 전달

```js
let data = [1,2,3,4,5]

let sum = data.reduce((acc, item, idx) => {
  acc += item
  return acc
}, 0)

console.log(sum) // 15

let listToJson = data.reduce((acc, item, idx) => {
  acc[idx] = item
  return acc
}, {})

console.log(listToJson) // { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
```

reduce는 리스트를 순회하면서 계산+반환 목적으로 사용 

해당 코드는 다음과 같이 작성할 수 있습니다.

```js
let data = [1,2,3,4,5]
let sum = 0
let dataToJson = {}

for(let i = 0 ; i < data.length ; ++i) {
  sum += data[i]
}


for (let i = 1 ; i < data.length ; ++i) {
  dataToJson[i] = data[i]
}

console.log(sum)        // 15
console.log(dataToJson) // { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
```

# sort

```js
let data = [1,4,3,2,7,5,3,2,5,6,7,1,]

let sortedData = data.sort((a, b) => a > b ? 1: a < b ? -1 : 0)
// let sortedData = data.sort((a, b) => a > b ? -1: a < b ? 1 : 0)  // 내림차순

console.log(sortedData)  // [ 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7 ]
```

