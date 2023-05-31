const arrToSort = [];
const generateSortNumsCount = 100000;

// Создаем список по которому проходмся
for (let i = 0; i <= generateSortNumsCount; i++) {
  arrToSort.push(Math.round(Math.random() * 10));
}

// Сортировка выбором
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

// Быстрая сортировка с применением рекурсии и принципом Разделяй и влавствуй
const quickSort = (arr) => {
  if (arr.length <= 1) return arr

  const refValue = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    // Разбиваем на подмассивы
    if (arr[i] < refValue) {
      left.push(arr[i]);
    } else if (arr[i] > refValue) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), refValue, ...quickSort(right)];
}

console.time('regular')
const regularResult = arrToSort.sort((a, b) => a - b)
console.timeEnd('regular')

console.time('customSort')
const customResult = sortCustom(arrToSort)
console.timeEnd('customSort')

console.time('quickSort')
const quickSortResult = quickSort(arrToSort)
console.timeEnd('quickSort')


