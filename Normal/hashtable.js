class HashTable {
  constructor() {
    this.HashTable = [];
  }

  displayHash() {
    for (var i = 0; i < this.HashTable.length; i++) {
      if (this.HashTable[i])
        console.log(i + " : " + this.HashTable[i].join("->"));
    }
  }
  Hashing(keyvalue) {
    return keyvalue % 10;
  }

  insert(keyvalue) {
    var hash_key = this.Hashing(keyvalue);
    if (this.HashTable[hash_key]) {
      this.HashTable[hash_key].push(keyvalue);
    } else {
      this.HashTable[hash_key] = [keyvalue];
    }
  }

  search(keyvalue) {
    var hash_key = this.Hashing(keyvalue);
    if (this.HashTable[hash_key])
      return [hash_key, this.HashTable[hash_key].indexOf(keyvalue)];
    return [None, None];
  }

  delete(keyvalue) {
    var index = this.search(keyvalue);
    this.HashTable[index[0]].splice(index[1], 1);
  }
}

hashTable = new HashTable();

const phones = [2559555856, 2505559264, 2556555670, 2535552364, 2535558249];
phones.forEach((phone) => hashTable.insert(phone));

hashTable.displayHash();
console.log(hashTable.search(2535552364));
hashTable.delete(2505559264);
hashTable.displayHash();
console.log(hashTable.search(2535552364));
