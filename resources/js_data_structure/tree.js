function BinarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    var insertNode = function(node, newNode){
        if (newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null){
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function(key){
        var newNode = new Node(key);

        if(root === null){
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var preOrderTraverseNode = function(node, callback){
        if (node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function(node, callback){
        if (node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function(node, callback){
        if (node !== null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    this.min = function(){
        return minNode(root);
    };

    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }

            return node.key;
        }

        return null;
    };

    this.max = function(){
        return maxNode(root);
    };

    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    this.search = function(key){
        return searchNode(root, key);
    };

    var searchNode = function(node, key){
        if (node === null){
            return false;
        }
        
        if (key < node.key){
            return searchNode(node.left, key);
        } else if (key > node.key){
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

}

function printNode(value){
        console.log(value);
}











