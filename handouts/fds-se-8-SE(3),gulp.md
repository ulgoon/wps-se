# Fastcampus 
## Frontend Dev SCHOOL
### Software Engineering(3), gulp

---
<!--
page_number: true
$size: A4
footer : fastcampus 프론트엔드 개발 스쿨, Wooyoung Choi, 2018
-->
## 개발자가 오프라인에서 살아가는 법

---
## Communicate with Co-worker

---
### 상대를 아프게 하지 마세요

---
### 작은 것을 칭찬하세요

---
### 회사는 개발자만 존재하지 않아요

---
![](../img/communicate.png)

---
### How를 생각하기 전 What과 Why를 먼저 생각하세요

---
### `404` 보단 `404 - Not Found`

### `안되요` 보단 `시스템에 악영향을 줄 가능성이 있어 다른 방법을 고려하는 것이 좋을 것 같습니다.`

---
## 개발자가 관리해야 할 것
- github
- linkedin
- blog

---
## 개발자가 갖춰야 할 덕목

---
### Geekiness
![](http://www.arghink.com/wp-content/uploads/2015/06/geek_wallpaper____by_bigteddyrawr-d5us99o.png)

---
### Curiosity
![](https://c1.staticflickr.com/9/8205/8162305237_7c5fe5aa8a_b.jpg)

---
### Computational Thinking
![](https://upload.wikimedia.org/wikipedia/commons/1/17/ArtificialFictionBrain.png)

---
## Queue

---
![](https://celdf.org/wp-content/uploads/2015/08/pipeline-2.jpg)

---
## Queue
> a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order. 

---
## FIFO
First In First Out

---
## Enqueue & Dequeue
- Enqueue: addition of entities to the rear terminal position
- Dequeue: removal of entities from the front terminal position

---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png)

---
## Let's Create Queue class
```javascript
function Queue() {
	//properties, methods
	var items = [];
}
```

---
## Enqueue & Dequeue
```javascript
function Queue() {
	//properties, methods
	this.enqueue = function(element) {
		items.push(element);
	};
	this.dequeue = function() {
		return items.shift();
	};
}
```

---
## front & isEmpty
```javascript
function Queue() {
	//underneath Enqueue & Dequeue
    
...    
    
	this.front = function() {
		return items[0];
	};
	this.isEmpty = function() {
		return items.length == 0;
	};
}
```

---
## clear & size & print
```javascript
function Queue() {
	//underneath front & isEmpty

...

	this.clear = function() {
		items = [];
	};
	this.size = function() {
		return items.length;
	};
	this.print = function() {
		console.log(items.toString());
	};

}
```

---
## Let's Enqueue with Queue class
```javascript
> var queue = new Queue();
> console.log(queue.isEmpty());

> queue.enqueue("Fast");
> queue.enqueue("Campus");
> queue.enqueue("School");

> queue.print();
> console.log(queue.size());
> console.log(queue.isEmpty());
```

---
## Let's Dequeue with Queue class
```javascript
> queue.dequeue();
> queue.dequeue();

> queue.print();
```

---
## collaborate with git flow

---
## Method 2: Fork and Merge
![](../img/fork1.png)

---
## Fork and Merge
![](../img/fork2.png)

---
## Fork and Merge
![](../img/fork3.png)

---
## Fork and Merge
`$ git clone https://github.com/username/forked-repo.git`
`$ git remote add upstream https://github.com/anotheruser/original-repo.git`

---
## Fork and Merge

`$ git fetch upstream`
`$ git merge upstream/master`
`$ git branch -a`
`$ git checkout -b new-feature`

---
## Fork and Merge

Make some change

`$ git add file`
`$ git commit -m "commit message"`
`$ git push origin new-feature`

---
## Fork and Merge
![](../img/pr1.png)

---
## Fork and Merge
![](../img/pr2.png)

---
## Fork and Merge
![](../img/pr3.png)

---
## Fork and Merge
![](../img/pr4.png)

---
## Fork and Merge
![](../img/pr5.png)

---
## Fork and Merge
![](../img/pr6.png)

---
## Fork and Merge
![](../img/pr7.png)
---
## continuous pull

---
## continuous pull

`$ git remote add upstream https://github.com/anotheruser/original-repo.git`

`$ git fetch upstream`
`$ git merge upstream/master`


---
## use git flow easily!
[Link](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

![](https://danielkummer.github.io/git-flow-cheatsheet/img/git-flow-commands.png)

---
## git flow practice
master -> develop -> features -> develop -> release -> master

---
## with Data Sturcture

---
## Create Stack(), QueueWithStack()
- 3 members 1 repo 
- pull 받아 사용해야 하며, 피처 브랜치에서 작업해야 합니다.
- Requirement
	- stack
		- push, pop
		- peek, isEmpty
		- size, print
	- queue with stack
		- enqueue, dequeue

---
## Create Queue with 2 Stacks
```
function Queue_with_stack() {
    var inBox = [];
    var outBox = [];

    this.enqueue = function(num) {
        inBox.push(num);
    };

    this.dequeue = function() {
        if (outBox.length > 0) {
            return outBox.pop();
        }

        while(inBox.length > 1) {
            outBox.push(inBox.pop());
        }

        return inBox.pop();
    };
}
```

---
# Gulp
![](https://camo.githubusercontent.com/2d78b03f66a6ba65037abc89f403b1058c3c49e4/687474703a2f2f692e696d6775722e636f6d2f5270744a4d35512e706e67)

---
## Gulp is..
![](https://s-media-cache-ak0.pinimg.com/736x/29/06/5f/29065f8958f69bbff84d53fadb691255--gulp-soda.jpg)

---
## Task runner

- 매우 귀찮은 루틴한 작업들을 자동화 할 수 있는 툴
- 현재 2735 + a 개의 패키지가 존재
	- 따라서 필요한 기능을 골라 설치할 필요가 있음!!
  

---
### task flow

`코드작성 - JS test(jshint) - JS Minify - JS Merge(concat) - CSS Minify - CSS Merge - 결과물`

```
$ npm install gulp --global
$ npm install gulp --save-dev
```

```
$ touch gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello gulpworld");
});

$ gulp hello
```

---
### gulp 기본 문법
- `gulp.task` : gulp의 작업단위
- `gulp.src` : gulp 실행의 대상
- `gulp.dest` : gulp 실행 후 목적지
- `gulp.watch` : 변화 감지 후 자동 실행


---
### 기본값 설정하기

```
$ gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello gulpworld");
});

gulp.task("default", ["hello"]);

$ gulp
```

---
### 우선순위 설정하기

```
$touch gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello");
});

gulp.task("gulpworld", ["hello"], function () {
	return console.log("gulpworld");
});

gulp.task("default", ["gulpworld"]);

$ gulp
```

---
### 자주쓰는 목적지 설정하기
```
var publicPath = {
	src  : './public/src/',
	dest : './public/dist/'
};
```


---
### [uglify(gulp-uglify)](https://github.com/terinjokes/gulp-uglify) : js uglify
```
gulp.task("uglify", function(){
	pump([
		gulp.src(publicPath.src + 'js/uglify.js'),
		uglify(),
		gulp.dest(publicPath.dest + 'js/')
	]);
});
```

---
### [gulp-concat](https://github.com/wearefractal/gulp-concat) : js concatenate
```
gulp.task("concat", function(){
	pump([
		gulp.src([publicPath.src + 'js/concat1.js', publicPath.src + 'js/concat2.js', publicPath.src + 'js/concat3.js']),
		concat('concatenated.js'),
		gulp.dest(publicPath.dest + 'js/')
	]);
});
```

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