class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return "No data";
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  find(element) {
    let index = this.items.indexOf(element);
    return index === -1
      ? "Element not found"
      : `Element found ai index ${index}`;
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.find(3));
console.log(stack.pop());
