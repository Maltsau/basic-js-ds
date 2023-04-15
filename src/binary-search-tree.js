const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    this._root = addTo(this._root, data);

    function addTo(node, value) {
      if (!node) return new Node(value);
      if (node.value === value) return node;
      if (value < node.data) {
        node.left = addTo(node.left, value);
      } else {
        node.right = addTo(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searcIn(this._root, data);

    function searcIn(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      if (value < node.data) {
        return searcIn(node.left, value);
      } else {
        return searcIn(node.right, value);
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.root(), tree.has(8));

module.exports = {
  BinarySearchTree,
};
