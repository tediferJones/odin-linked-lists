
function linkedList(node) {
  // THEORETICALLY: the root node should contain the whole list, no idea what this is really gunna do tho.
  return {
    value: node.value,
    leftNode: node.leftNode,
    rightNode: node.rightNode,
    // needs some functions too.
    append(value) {
      // add new node with value to end of list
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
    toString(linkedList) {
      // returns a stringified verstion of linkedList like so;
      // ( value ) -> ( value ) -> ( value ) -> null
    }
  }
}

function node(value, leftNode, rightNode) {
  return {
    value,
    leftNode,
    rightNode
  }
}


// EXAMPLE CASE

// [4,2,7,6,1,3,5]

//            4
//         /     \
//       2         7
//     /   \     /   \
//    1     3   6
//             /
//            5

// // for this example
// node(4) = node(2), 4, node(7)
//     node(2) = node(1), 2, node(3)
//       node(1) = null, 1, null
//       return
//       node(3) = null, 3, null
//       return
//     node(7) = node(6), 7, null
//       node(6) = node(5), 6, null
//         node(5) = null, 5, null

// compare desired value to root value
//   if value == root, return;
//   if value < root;
//     explore left node;
//   if value > root;
//     explore right node;
//   if leftNode == null && rightNode == null;
//     return 'element does not exist'