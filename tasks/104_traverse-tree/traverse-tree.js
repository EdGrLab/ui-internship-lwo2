export function traverseTree(tree, callback) {
  callback(tree);
  tree.children.forEach((child) => {
    traverseTree(child, callback);
  });
}
