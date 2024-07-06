// insert queue values in array

class queue {
  constructor() {
    this.items = [];
  }

  insert(data) {
    this.items.push(data);
  }

  delete() {
    if (!this.items) return null;

    this.items.shift();
  }
}

let result = new queue();
result.insert(1);
result.insert(2);
result.insert(3);
result.insert(4);

result.delete();
console.log(result);
