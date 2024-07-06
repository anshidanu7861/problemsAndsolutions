class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addListLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  addListFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const result = new LinkedList();
result.addListLast(1);
result.addListLast(2);
result.addListLast(3);
result.addListFirst(7);
result.printList();

console.log(result);
