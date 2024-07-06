class stack {
  constructor() {
    this.items = [];
  }

  insert(data) {
    this.items.push(data);
  }

  remove() {
    this.items.pop();
  }
}

let result = new stack();

result.insert(1);
result.insert(2);
result.insert(3);

result.remove();

console.log(result);
