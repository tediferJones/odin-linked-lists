
function linkedList(node) {
  return {
    node,
    append(value) {
      // add new node with value to end of list
      // i.e. change next pointer of last element from null, to the point of nodeClass(number)
      let currentNode = node;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = nodeClass(value);
      return this.toString();
    },
    prepend(value) {
      // add new node with value to beginning
      // i.e. create a new nodeClass whose next attr points to the first node
      let newNode = nodeClass(value);
      newNode.next = node;
      node = newNode;
      return this.toString();
    },
    size() {
      // return number of nodes in list
      let currentNode = node;
      let count = 0;
      while (currentNode) {
        currentNode = currentNode.next;
        count++;
      }
      return count;
    },
    head() {
      // return first element of list
      return node.value;
    },
    tail() {
      // return last element of list
      let currentNode = node;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    },
    at(index) {
      // return element at [index]
      let currentNode = node;
      let counter = 0;
      if (index >= 0) { // for all positive numbers, traverse array from head to tail
        if (index > this.size() - 1) {
          return 'Index is outside the scope of this array';
        }
        while (counter < index) {
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode.value;
      } else { // for all negative numbers, traverse array from tail to head
        if (index * -1 > this.size()) {
          return 'Index is outside the scope of this array';
        }
        return this.at(index + this.size());
      }
    },
    pop() {
      // remove last element of list
      // just change the pointer of the second last to null;
      let currentNode = node;
      while (currentNode.next.next) {
        currentNode = currentNode.next
      }
      currentNode.next = null;
      return this.toString();
    },
    contains(value) {
      // return true if the value exists in the list
      // return false if it does not exist
      let currentNode = node;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    },
    find(value) {
      // returns the index of the node containing said value
      // returns null if not found
      let currentNode = node;
      let index = 0;
      while (currentNode) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.next;
        index++;
      }
      return null;
    },
    toString() {
      // returns a stringified verstion of linkedList like so;
      // ( value ) -> ( value ) -> ( value ) -> null
      let result = '';
      let currentNode = node;
      while (currentNode) {
        result = result + `${currentNode.value} -> `;
        currentNode = currentNode.next;
      }
      return result + 'null';
    }
  }
}

function nodeClass(value, next=null) {
  return {
    value,
    next
  }
}

let node1 = nodeClass(1, nodeClass(2, nodeClass(3)));

let x = linkedList(node1);

console.log('APPEND(4): ' + x.append(4));
console.log('PREPEND(0): ' + x.prepend(0));
console.log('PREPEND(7): ' + x.prepend(7));
console.log('SIZE(): ' + x.size());
console.log('HEAD(): ' + x.head());
console.log('TAIL(): ' + x.tail());
console.log('AT(0): ' + x.at(0));
console.log('AT(5): ' + x.at(5));
console.log('AT(-1): ' + x.at(-1));
console.log('AT(-6): ' + x.at(-6));
console.log('POP(): ' + x.pop());
console.log('CONTAINS(3): ' + x.contains(3));
console.log('CONTAINS(7): ' + x.contains(7));
console.log('CONTAINS(9): ' + x.contains(9));
console.log('FIND(1): ' + x.find(1));
console.log('FIND(9): ' + x.find(9));
console.log('toString(): ' + x.toString());

// it is just an infinite array
