# Fastcampus 
## Web Programming & Frontend Dev SCHOOL
### Data Structures, Gulp(2)

---
<!--
page_number: true
$size: A4
footer : fastcampus 웹 프로그래밍 & 프론트엔드 개발 스쿨, Wooyoung Choi, 2017
-->

## Data Structure

---
## Data Structure
- Linked List
- Tree

---
## Linked List

---
## Linked List
> A linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory.

---
## Linked List
- Can be used to store linear data of simlar types.

![](http://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png)


---
## Array를 놔두고 굳이 왜???

---
## Array

`var myArray = [];`

---
## Array vs Linked List
![](http://www.necessaryandsufficient.net/wp-content/uploads/2009/07/array_vs_linked_list.jpg)


---
## Array vs Linked List
|Array|vs|Linked List|
|:--:|:--:|:--:|
|Fixed|Size|Dynamic|
|Hard|Insert|Easy|
|Hard|Deletion|Easy|
|Allowed|Random Access|Not allowed|
|doesn't need|Extra memory space|required|

---
## Array vs Linked List
|Array|vs|Linked List|
|:--:|:--:|:--:|
|o(1)|access|o(n)|
|o(n)|search|o(n)|
|o(n)|insert|o(1)|
|o(n)|remove|o(1)|

---
## Let's Create Linked List
```javascript
function LinkedList(){
    //define Node
    var Node = function(element){
        this.element = element;
        this.next = null;
    };
    
...
    
}
```

---
## Linked List
```javascript
function LinkedList(){
    //beneath Node

...

    var length = 0;
    var head = null;
    
    this.append = function(element){};
    this.insert = function(position, element){};    
    this.removeAt = function(position){};
    this.remove = function(element){};

...

}
```

---
## Linked List
- append: add new item to the end of the list
- insert: insert new item at a specified position in the list
- remove: removes an item from the list
- removeAt: removes an item from a specified in the list

---
## Linked List
```javascript
function LinkedList(){
    //beneath remove

...
    
    this.indexOf = function(element){};
    this.isEmpty = function(){};    
    this.size = function(){};
    this.toString = function(){};
    this.print = function(){};
}
```

---
## Linked List
- indexOf: returns the index of the element in the list


---
## Linked List - append
```javascript
this.append = function(element){
    var note = new Node(element),
        current;
    if (head === null){
        head = node;
    } else {
        current = head;
        while(current.next){
            current = current.next;
        }
    }
    
    length++;
};

```

---
## Linked List - removeAt
```javascript
this.removeAt = function(position){
    if (position > -1 && position < length){
        var current = head,
            previous,
            index = 0;
    
        if (position === 0) {
            head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        length--;
    
        return current.element;
    } else {
        return null;
    }
};

```

---
## Linked List - insert
```javascript
this.insert = function(position, element){
    if (position >= 0 && position <= length){
        var node = new Node(element),
            current = head,
            previous,
            index = 0;
...
```

---
## Linked List - insert
```javascript
...
        if (position === 0) {
            node.next = current;
            head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        length++;
        return true;
    
    } else {
        return false;
    }
};

```

---
## Linked List - remove
```javascript
...
        this.remove = function(element) {
            var index = this.indexOf(element);
            return this.removeAt(index);
        }

```

---
## Linked List - indexOf
```javascript
this.indexOf = function(element){
    var current = head,
        index = -1;

    while (current){
        if (element === current.element) {
            return index;
        }
        index++;
        current = current.next;
    }

    return -1;
};
```

---
## Linked List - isEmpty, size, toString, getHead
```javascript
this.isEmpty = function(){
    return length === 0;
};

this.size = function(){
    return length;
};

this.toString = function(){
    var current = head,
        string = '';

    while (current) {
        string = current.element;
        current = current.next;
    }
    return string;
};

this.getHead = function(){
    return head;
};
```


---
## Tree


---
## Tree
> A tree is an abstract model of a hierarchical structure.

- hierarchical: arranged in order of rank.

---
## Tree
![](http://www.the-pr.co.kr/news/photo/201705/18435_54247_3627.jpg)

---
## Tree
![](http://post.phinf.naver.net/MjAxNzA1MTJfMjk5/MDAxNDk0NTYyMzQ0MjMw.R0LvQSCWbHBcF6diubeQl806S-pYF4yWDRzsZ-WF9J4g.XP3s4UtaL327q2oqqpKbdYoJ8tUrSbRtA6DnG2Fs3Jgg.JPEG/%EC%9A%B0%EB%A6%AC%EA%B0%80%EC%A1%B1_%EA%B0%80%EA%B3%84%EB%8F%84-1.jpg?type=w1200)

---
## Tree
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png" width="700">

---
## Tree
- root: 2
- level: (0 ~ 3)
- child of 2: 7,5
- subtree: 6,5,11
- Node: (9)
- edge: (8)

---
## Binary Search Tree
> A node in a binary tree has at most two children: left child, right child

- if root == null, node = newNode
- left child < right child


---
## Binary Search Tree
```javascript
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

...

}
```

---
## Binary Search Tree - insert
```javascript
...
    this.insert = function(key){
        var newNode = new Node(key);

        if (root === null){
            root = newNode;
        } else {
            insertNode(root, newNode);
		}
	};

...
```

---
## Binary Search Tree - insertNode
```javascript
...
    var insertNode = function(node, newNode){
        if (newNode.key < node.key){
            if (node.left === null){
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
```

---
## Binary Search Tree - insert
```javascript
var tree = new BinarySearchTree();
```
`[11,7,15,5,3,9,8,10,13,12,14,20,18,25] + [6]`


---
## Binary Search Tree - inOrderTraverse
![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sorted_binary_tree_inorder.svg/440px-Sorted_binary_tree_inorder.svg.png)

---
## Binary Search Tree - inOrderTraverse
```javascript
...
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };

    var inOrderTraverseNode = function(node, callback){
        if (node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
```

---
## Binary Search Tree - printNode
```javascript
function printNode(value) {
    console.log(value);
}
```

---
## Binary Search Tree - preOrderTraverse
![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sorted_binary_tree_preorder.svg/440px-Sorted_binary_tree_preorder.svg.png)

---
## Binary Search Tree - preOrderTraverse
```javascript
...
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function(node, callback){
        if (node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
```

---
## Binary Search Tree - postOrderTraverse
![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sorted_binary_tree_postorder.svg/440px-Sorted_binary_tree_postorder.svg.png)

---
## Binary Search Tree - postOrderTraverse
```javascript
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function(node, callback){
        if (node !== null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
```



---
## Binary Search Tree - find min value
```javascript
    this.min = function(){
        return minNode(root);
    };

    var minNode = function(node){
        if (node){
            while (node && node.left !== null){
                node = node.left;
            }

            return node.key;
        }
        return null;
    };
```

---
## Binary Search Tree - find max value
```javascript
    this.max = function(){
        return maxNode(root);
    };

    var maxNode = function(node){
        if (node){
            while (node && node.right !== null){
                node = node.right;
            }

            return node.key;
        }
        return null;
    };
```

---
## Binary Search Tree - find specific value
```javascript
    this.search = function(key){
        return searchNode(root, key);
    };

    var searchNode = function(node, key){
        if (node == null){
            return false;
        }
        if (key < node.key){
            return searchNode(node.left, key);
        } else if (key > node.key){
            return searchNOde(node.right, key);
        } else {
            return true;
        }
    };
```
`console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');`

---
## Conditional Operator
`condition ? expr1 : expr2`
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

---
## gulp
![](http://www.shenyi.fr/wp-content/uploads/2016/10/gulp.png)

---
### [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) : image minify
```
gulp.task("imagemin", function(){
	pump([
		gulp.src(publicPath.src + 'img/*.jpg'),
		imagemin(),
		gulp.dest(publicPath.dest + 'img/')
	]);
});
```

---
### [css minify(gulp-clean-css)](https://github.com/scniro/gulp-clean-css) : css minify
```
gulp.task("cleancss", function(){
	pump([
		gulp.src(publicPath.src + 'css/minify.css'),
		cleancss(),
		gulp.dest(publicPath.dest + 'css/')
	]);
});
```
---
### [gulp-sass](https://github.com/dlmanning/gulp-sass) : convert .scss to .css
```
gulp.task("sass", function(){
	pump([
		gulp.src(publicPath.src + 'sass/*.scss'),
		sass().on('error', sass.logError),
		gulp.dest(publicPath.dest + 'css/')
	]);
});
```
---
### [gulp-concat-css](https://github.com/mariocasciaro/gulp-concat-css) : concatenate css files
```
gulp.task("concatcss", function(){
	pump([
		gulp.src([publicPath.src + 'css/concat1.css', publicPath.src + 'css/concat2.css']),
		concat('concatenated.css'),
		gulp.dest(publicPath.dest + 'css/')
	]);
});
```

---
### [clean(del)](https://github.com/sindresorhus/del)
```
gulp.task("clean", function(){
	return del.sync([publicPath.dest + 'js/*.js', publicPath.dest + 'css/*.css', publicPath.dest + 'img/']); 
});
```

---
### watch

```
gulp.task("watch", function(){
	gulp.watch("public/src/*.js", ["uglify"]);
});

gulp.task("default", ["uglify", "watch"]);
```

---
### watch
```
gulp.task("watch", function(){
	gulp.watch(publicPath.src + 'js/*.js', ["uglify", "concat"]),
	gulp.watch(publicPath.src + 'css/*.css', ["cleancss", "concatcss"]),
	gulp.watch(publicPath.src + 'img/*.jpg', ["imagemin"]),
	gulp.watch(publicPath.src + 'sass/*.scss', ["sass"])
 +});
```

---
### 이외에도..
![](https://github.com/osscafe/gulp-cheatsheet/raw/master/images/en-js-p1.png)

---
### 챌린지!!
[40라인으로 슬랙봇만들기](https://mager.co/how-to-write-a-slackbot-in-40-lines-of-code-52cf0c4fcf42#.2sfbrunyt) 를 이해하고 커스터마이즈 할 수 있다면 여러분은 node.js express.js heroku git REST api를 이해하셨습니다.


