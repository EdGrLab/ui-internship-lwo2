class Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

export class Stack {
  constructor() {
    this.size = 0;
    this.last = null;
  }
  push(value) {
    let node = new Node(value, this.last);
    node.prev = this.last;
    this.last = node;
    this.size++;
    return this.last;
  }
  pop() {
    const node = this.last;
    if (node === null) {
      return null;
    }
    this.last = this.last.prev;
    this.size--;
    return node.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}
