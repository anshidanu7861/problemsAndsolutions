// create a stack for using linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.size++;
  }

  delete() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;
  }
}

let result = new stack();
result.insert(1);
result.insert(2);
result.insert(3);
result.insert(4);
result.delete();

console.log(result);
