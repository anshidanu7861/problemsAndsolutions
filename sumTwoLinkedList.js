// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new Node(0);
  let current = dummyNode;
  let curry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;

    let sum = curry + x + y;
    curry = Math.floor(sum / 10);

    current.next = new Node(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (curry > 0) {
    current.next = new Node(curry);
  }

  return dummyNode.next;
};

function createLinkedList(arr) {
  let dummyHead = new Node(0);
  let current = dummyHead;
  for (let val of arr) {
    current.next = new Node(val);
    current = current.next;
  }
  return dummyHead.next;
}

// Helper function to print a linked list
function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

// Creating two linked lists
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

// Adding the two numbers
let result = addTwoNumbers(l1, l2);

console.log(result);

// Printing the result
printLinkedList(result);
