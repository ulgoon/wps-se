# Fastcampus 
## Web Programming & Frontend Dev SCHOOL
### Web_socket, Data Structure, gulp

---
<!--
page_number: true
$size: A4
footer : fastcampus 프론트엔드 개발 스쿨, Wooyoung Choi, 2017
-->
## Websocket

---
## Websocket
> 웹사이트가 사용자와 상호작용하기 위해 만들어진 기술

W3C가 API를 관리
port:80, HTTP1.1

---
## Before Websocket
- HTTP Request, Response
- Hidden Frame
- Long Polling

---
## Polling vs Websocket
![](http://d2.naver.com/content/images/2015/06/helloworld-1336-1-1.png)

---
## Differences between Socket, Websocket
Socket - HTTP run over TCP/IP
Websocket - run from web browser

---
## [Socket.io](https://socket.io/)
> browser 와 상관없이 js를 이용해 실시간 통신을 지원

`npm install --save socket.io`

- 브라우저와 웹 서버의 종류와 버전을 분석해 가장 적절한 기술로 통신
- WebSocket, FlashSocket, AJAX Long Polling, AJAX Multi part Streaming, IFrame, JSONP Polling을 추상화한 기술
- 일관성있는 문법과 API로 개발 가능
- IE6 부터 최신 브라우저까지 지원

---
### chat.ejs
```
<style>
	* { margin: 0; padding: 0; box-sizing: border-box; }
	body { font: 13px Helvetica, Arial; }
	form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
	form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
	form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
	#messages { list-style-type: none; margin: 0; padding: 0; }
	#messages li { padding: 5px 10px; }
	#messages li:nth-child(odd) { background: #eee; }
</style>

<ul id="messages"></ul>
<form action="">
	<input id="m" autocomplete="off" /><button>Send</button>
</form>
```

---
### connection

```
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket){
	console.log("a user connected");
});

http.listen(8080, function(){
	console.log("Chat Server is running at localhost:8080");
});
```

```
<script src="/socket.io/socket.io.js"></script>
<script>
	var socket = io();
</script>
```

---
### disconnect

```
socket.on("disconnect", function(){
	console.log("user disconnected");
});
```

---
### emit message

```
socket.on("chat message", function(msg){
	console.log("message: " + msg);
```

```
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

var socket = io();
$("form").submit(function(){
	socket.emit("chat message", $("#m").val());
	$("#m").val("");
	return false;
});
```

---
### broadcast

```
io.emit("chat message", msg);
```

```
socket.on("chat message", function(msg){
	$("#messages").append($("<li>").text(msg));
});
```


---
## Data Structure

---
## Data Structure
> Data structure is a particular way of organizing data in a computer so that it can be used efficiently.

---
## So, Data Structure is..
![](https://qph.ec.quoracdn.net/main-qimg-cafdb4368095621b0b6cd00738c19f95)


---
## Data Structures in Web Development

Array & Hash(Dictionary) - indexing post
```
in RDB
[articleId, title, body, userId, view]
```

```
[{
	userId: 1,
	articleId: 1,
	view: 100,
	title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}, 
...

]
```

---
## Data Structures in Web Development

Tree - DOM rendering performance, reply

```html
<html>
<head></head>
<body>
<h1></h1>
<p></p>
</body>
</html>
```

---
## Data Structures in Web Development


- Binary Tree Search
	- Queue(BFS, Breadth First Search) 
	- Stack(DFS, Depth First Search) 

---
## Stack

---
![](http://www.healthy-life.narod.ru/cock/coc0.jpg)

---
## Stack
> A stack is an abstract data type that serves as a collection of elements, with two principal operations.

- push: which adds an element to the collection
- pop: which removes the most recently added element that was not yet removed

---
## LIFO
> Last In, First Out

---
![](http://images.clipartpanda.com/stack-of-paper-png-stack1.jpg4a6cfc02-82c9-46b8-b70d-d1a0d0244befLarge.jpg)

---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lifo_stack.png/700px-Lifo_stack.png)

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
# Gulp
![](http://www.shenyi.fr/wp-content/uploads/2016/10/gulp.png)

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



