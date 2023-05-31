const nums = [];
const generateNumsCount = 10000000;
const findNumber = 10000000;

// Создаем список по которому проходмся
for (let i = 0; i <= generateNumsCount; i++) {
  nums.push({value: i, name: `Число ${i}`});
}

// Поиск стандартными методами arr
const findNumberRegular = (num) => nums.find((n) => n.value === num)?.name ?? 'Не найдено';

// Поиск перебором
const customRecular = (num) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].value === num) return nums[i].name
  }
};

// Бинарный поиск
const binaryFind = (num) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid].value === num) {
      return nums[mid].name;
    } else if (nums[mid].value < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 'Не найдено';
};

console.time('lodash');
const lodashFindIndex = _.findIndex(nums, (el) => el.value === findNumber)
console.timeEnd('lodash');

console.time('regular');
const findedRegular = findNumberRegular(findNumber);
console.timeEnd('regular');

console.time('regularCustom');
const findedCustomRegular = customRecular(findNumber);
console.timeEnd('regularCustom');

console.time('binary');
const binaryFindRes = binaryFind(findNumber);
console.timeEnd('binary');

console.log(findedRegular, findedCustomRegular, binaryFindRes, nums[lodashFindIndex]);