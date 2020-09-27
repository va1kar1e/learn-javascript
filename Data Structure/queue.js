class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    this.data.shift();
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

  printQueue() {
    console.log(this.data);
  }
}

queue = new Queue();

for (var i = 0; i <= 10; i++) {
  queue.enqueue(i);
}

queue.printQueue();
queue.dequeue();
queue.printQueue();
