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

  find(data) {
    return findIn(this._root, data);

    function findIn(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      if (value < node.data) {
        return findIn(node.left, value);
      } else {
        return findIn(node.right, value);
      }
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, value) {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this._root) return null;
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this._root) return null;
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
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
