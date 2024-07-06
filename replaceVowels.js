class stack {
  constructor() {
    this.items = [];
  }

  insert(data) {
    let vowels = new Set("aeiou");

    for (let char of data) {
      if (vowels.has(char)) {
        this.items.push("*");
      } else {
        this.items.push(char);
      }
    }
  }
}

let result = new stack();

result.insert("anshid");

console.log(result);
