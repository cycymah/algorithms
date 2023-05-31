const arrToSort = [];
const generateSortNumsCount = 10;

// Создаем список по которому проходмся
for (let i = 0; i <= generateSortNumsCount; i++) {
  arrToSort.push(Math.round(Math.random() * 10));
}


const sortCustom = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr;
}

console.time('regular')
const regularResult = arrToSort.sort((a, b) => a - b)
console.timeEnd('regular')

console.time('customSort')
const customResult = sortCustom(arrToSort)
console.timeEnd('customSort')

console.log(arrToSort, regularResult, customResult)

