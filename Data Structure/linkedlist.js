class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end of list
  add(element) {
    // creates a new node
    var node = new Node(element);

    // if list is Empty add the
    // element and make it head
    node.next = this.head;
    this.head = node;

    this.size++;
  }

  remove(element) {
    var index = this.indexOf(element);

    if (index == null) return -1;
    else {
      var curr = this.head,
        prev = curr,
        it = this.size;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it > index) {
          index++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  indexOf(element) {
    var index = this.size,
      current = this.head;
    while (index >= 0 && current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index -= 1;
    }
    return null;
  }

  findMiddleElement() {
    var firstPointer = this.head,
      secondPointer = this.head;

    while (secondPointer && secondPointer.next) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next.next;
    }
    return firstPointer.data;
  }

  printList() {
    var current = this.head;
    var str = "";
    while (current) {
      str = "->" + current.data + str;
      current = current.next;
    }
    console.log("Head" + str);
  }
}

// Linkedlist class
var ll = new LinkedList();

// adding element to the list
for (var i = 10; i <= 100; i += 10) {
  ll.add(i);
}

ll.printList();
console.log("Index of 30 is " + ll.indexOf(30));
console.log("Middle element is " + ll.findMiddleElement());

ll.remove(30);
ll.printList();
console.log("Index of 30 is " + ll.indexOf(30));
console.log("Middle element is " + ll.findMiddleElement());
