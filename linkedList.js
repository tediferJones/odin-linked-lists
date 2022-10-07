
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
    },
    prepend(value) {
      // add new node with value to beginning 
    },
    size() {
      // return number of nodes in list
    },
    head() {
      // return first element of list
    },
    tail() {
      // return last element of list
    },
    at(index) {
      // return element at [index]
    },
    pop() {
      // remove last element of list
    },
    contains(value) {
      // return true if the value exists in the list
      // return false if it does not exist
    },
    find(value) {
      // returns the index of the node containing said value
      // returns null if not found
    },
    toString() {
      // returns a stringified verstion of linkedList like so;
      // ( value ) -> ( value ) -> ( value ) -> null

      let result = '';
      let currentNode = node;
      while (currentNode.next) {
        result = result + `${currentNode.value} -> `;
        currentNode = currentNode.next;
      }
      result = result + `${currentNode.value} -> null`
      return result
    }
  }
}

function nodeClass(value, next=null) {
  return {
    value,
    next
  }
}

// let node1 = node(1);
// let node2 = node(2);
// let node3 = node(3);
// node1.next = node2;
// node2.next = node3;
let node1 = nodeClass(1, nodeClass(2, nodeClass(3)))

let x = linkedList(node1);
// console.log(x.node.next.next)
console.log(x.toString());
x.append(4);
x.append(5);
x.append(6);
console.log(x.toString());
// x.append(4)


// it is just an infinite array

// node(1) -> node(2) -> node(3) -> null

// to append, edit last node's next attr, make it point to new node