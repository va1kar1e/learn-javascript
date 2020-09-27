class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Binarytree {
  constructor() {
    this.root = null;
  }

  insert(element) {
    var node = new Node(element);
    if (this.root) {
      var current = this.root;
      while (current) {
        if (element < current.data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
          }
        } else if (element > current.data) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
          }
        } else {
          break;
        }
      }
    } else {
      this.root = node;
    }
  }

  swap(node, level, target_level) {
    if (!node) return null;
    if (!node.left && !node.right) return null;
    if (level + 1 === target_level) {
      var temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
    this.swap(node.left, level + 1, target_level);
    this.swap(node.right, level + 1, target_level);
  }

  findValue(node, element) {
    if (element < node.data) {
      if (!node.left) return element.toString() + " Not Found";
      return this.findValue(node.left, element);
    } else if (element > node.data) {
      if (!node.right) return element.toString() + " Not Found";
      return this.findValue(node.right, element);
    } else return node.data.toString() + " Found";
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

tree = new Binarytree();
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

// prints 5 7 9 10 13 15 17 22 25 27
tree.inorder(tree.root);
// tree.swap(tree.root, 1, 3);
tree.inorder(tree.root);

// console.log(tree.findValue(tree.root, 17));
// console.log(tree.findValue(tree.root, 1));
