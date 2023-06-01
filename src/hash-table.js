// Реализация хэш-таблицы (js объекта)
class HashTable {
  constructor(size = 5) {
    // Определяем размер таблицы
    this.size = size;
    // Заполняем
    this.table = new Array(size).fill(null).map(() => [])
  }

  // Хэш-функция, возвращает индекс в таблице
  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue % this.size;
  }

  // Метод добавляет значения значение в таблицу
  add(key, value) {
    const index = this.hash(key);
    const record = this.table[index];

    for (let i = 0; i < record.length; i++) {
      const [storedKey] = record[i];
      if (storedKey === key) return record[i][1] = value
    }

    record.push([key, value]);
  }

  // Метод возвращает значение по ключу
  get(key) {
    const index = this.hash(key);
    const record = this.table[index];

    console.log(record)
    for (let i = 0; i < record.length; i++) {
      const [storedKey, storedValue] = record[i];
      if (storedKey === key) return storedValue;
    }

    return null;
  }

  // Метод удаляет значение по ключу
  remove(key) {
    const index = this.hash(key);
    const table = this.table[index];

    for (let i = 0; i < table.length; i++) {
      const [storedKey] = table[i];
      if (storedKey === key) return table.splice(i, 1)
    }
  }
}

// Создаем таблицу на 15 элементов
const hash = new HashTable(15)
// Добавляем ключ-значение
hash.add('Test', 435)

console.log({
  get: hash.get('Test'),
  hash: hash.hash('Test'),
  hashTable: hash
})