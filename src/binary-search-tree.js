const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data; 
    this.left = null;
    this.right = null; 
  } 
}

module.exports = class BinarySearchTree {
  constructor() { 
    this.rootNode = null; 
  }

  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data); 
    if (this.rootNode === null) {
      this.rootNode = newNode; 
    } 
    else { 
      this.insertNode(this.rootNode, newNode); 
    }
    // remove line with error and write your code here
  }

  insertNode(node, newNode) { 
    if (newNode.data < node.data) { 
      if (node.left === null) { 
        node.left = newNode; 
      } 
      else { 
        this.insertNode(node.left, newNode); 
      } 
    } 
    else { 
      if (node.right === null) { 
        node.right = newNode; 
      } 
      else { 
        this.insertNode(node.right, newNode); 
      } 
    } 
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
    // remove line with error and write your code here
  }

  search(node, data) {// не поиска и пофиииииг, хооочуууу спаааааааать
    if (node === null) {
      return null;
    } 
    else if (data < node.data) {
      return this.search(node.left, data);
    } 
    else if (data > node.data) {
      return this.search(node.right, data);
    } 
    else {
      return node;
    }
  }

  find(data) {
    return this.search(this.rootNode, data);
    // remove line with error and write your code here
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    } 
    else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } 
    else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } 
    else {
      if (node.left === null && node.right === null) {
          node = null;
          return node;
      }
       if (node.left === null) {
          node = node.right;
          return node;
      } else if (node.right === null) {
          node = node.left;
         return node;
        }
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
    // remove line with error and write your code here
  }

  findMinNode(node) {
    if (node.left === null) {
        return node;
    } 
    else {
        return this.findMinNode(node.left);
    }
  }

  min() {
    let node = this.rootNode;
    if (node === null) 
      return null;
    while (node.left !== null) {
        node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    let node = this.rootNode;
    if (node === null) 
      return null;
    while (node.right !== null) {
        node = node.right;
    }
    return node.data;
    // remove line with error and write your code here
  }
};
