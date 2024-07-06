// create a queue

class queue {
  constructor() {
    this.items = [];
  }

  enQueue(data) {
    this.items.push(data);
  }

  deQueue() {
    this.items.shift();
  }
}

let result = new queue();

result.enQueue(1);
result.enQueue(2);
result.enQueue(3);

result.deQueue();

console.log(result);
