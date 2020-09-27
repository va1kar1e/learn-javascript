class Stack {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.push(element);
  }

  remove() {
    this.data.pop();
  }

  isEmpty() {
    return this.data.length == 0;
  }

  getlength() {
    return this.data.length;
  }

  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  printStack() {
    console.log(this.data);
  }
}

stack = new Stack();

for (var i = 0; i <= 10; i++) {
  stack.add(i);
}

stack.printStack();
stack.remove();
stack.printStack();
