"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.val === val) return this;

    if (val < this.val) {
      if (this.left) return this.left.findRecursively(val);
    } else {
      if (this.right) return this.right.findRecursively(val);
    }

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {

    if (val < this.val) { // if left is smaller than right
      if (!this.left) { // does left exist?
        this.left = new Node(val); // set right to new node and return right
        return this.left;
      }
      return this.left.insertRecursively(val);  // else try again 

    } else { // if right is greater than left
      if (!this.right) {  // right does not exist?
        this.right = new Node(val); // set right to new node and return right
        return this.right;
      }
      return this.right.insertRecursively(val); // else try again 
    }

  }


  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let nodes = [];

    function _traverse(node) {
      if (!node) return;
      nodes.push(node.val);
      _traverse(node.left);
      _traverse(node.right);
    }

    _traverse(this);
    return nodes;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let nodes = [];

    function _traverse(node) {
      if (!node) return;
      _traverse(node.left);
      nodes.push(node.val);
      _traverse(node.right);
    }

    _traverse(this);
    return nodes;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    let nodes = [];

    function _traverse(node) {
      if (!node) return;
      _traverse(node.left);
      _traverse(node.right);
      nodes.push(node.val);
    }

    _traverse(this);
    return nodes;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };

    let previousNode = null;
    let current = this.root;

    while (current) {
      previousNode = current;

      if (newNode.val < current.val) {
        current = current.left;

        if (!current) {
          previousNode.left = newNode;
          return this;
        }

      } else {
        current = current.right;

        if (!current) {
          previousNode.right = newNode;
          return this;
        }
      }

    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.root.insertRecursively(val);
    }
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return;
    };

    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = (val < current.val) ?
        current.left :
        current.right;
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return;
    };
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (!this.root) return [];

    let stack = [this.root];
    let visited = [];

    while (stack.length) {
      let current = stack.shift();
      if (current) {
        visited.push(current.val);
        stack.push(current.left);
        stack.push(current.right);
      }
    }
    return visited;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
