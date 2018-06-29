# Fastcampus 
## Frontend Dev SCHOOL
### colaborate with git, websocket

---
<!--
page_number: true
$size: A4
footer : fastcampus 프론트엔드 개발 스쿨, Wooyoung Choi, 2018
-->
---
## Agile Process

---
## Scrum
- an iterative and incremental agile software development framework for managing product development

---
## Scrum
- The **product owner** represents the stakeholders and is the voice of the customer, who is accountable for ensuring that the team delivers value to the business.
- The **development team** is responsible for delivering potentially shippable increments (PSIs) of product at the end of each sprint (the sprint goal).
- facilitated by a **scrum master**, who is accountable for removing impediments to the ability of the team to deliver the product goals and deliverables.

---
## Sprint
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Scrum_process.svg/700px-Scrum_process.svg.png)

--- 
## Planning Poker

- 애자일 추정을 위해 사용하는 도구
- 모든 팀원이 한가지 과제에 대해 충분히 토론하고 작업시간을 추정하기 위함
- deck 구성
0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, 무한대, 커피

- 점수는 단위 작업시간(8시간)을 의미함

---
## Planning Poker

- 플레이방법
	1. 추정할 과제를 가장 잘 아는 사람이 해당 과제에 대해 설명합니다.
	2. 다른 사람은 추정에 필요한 정보를 얻기위해 질문과 토의를 합니다.
	3. 각자 생각하는 이 과제의 점수를 보이지 않게 내려놓습니다.
	4. 점수를 공유하고 가장 낮은 점수, 가장 높은 점수를 낸 팀원이 이 점수를 낸 이유에 대해 설명합니다.
	5. 모든 팀원이 같은 점수를 낼 때 까지 3~4의 반복

---
## 일정 추정 과제
1. 은행 예금 계좌 및 체크카드 발급절차
2. Fizzbuzz(조건문 반복문으로, map, filter로)
3. Profile Porfolio Page

ex)
회차 최소 최대 중간값
 1 1 10 5
 2 4 8 6
 3 5 5 5
 

---
## Pair Programming

---
## Pair Programming

- 시니어와 주니어가 한 팀을 이뤄 노하우를 전수하거나 같은 과제에 대해 충분한 논의를 함으로써 생산성 향상을 도모
- Navigator와 Driver가 한 팀을 이뤄 실시
- Navigator는 해당 과제에 대해 주도적으로 의견을 제시하고 Driver는 Navigator가 지시하는 대로 작업하되, 이해되지 않는 부분이 있다면 이의를 제기
- 약속한 시간이 지나면 Navigator와 Driver의 역할 변경
- 과제를 해결할 때 까지 반복

---
##  Pair Programming

### So, Let's Try!!


---
## Code Review

검토사항
- 요구사항
- 설계요구 충족여부
- 과도한코딩
- 같은 기능
- 함수의 입출력
- 빌딩블록(API, 라이브러리, 자료구조, ..)
- 변수 사용전 초기화


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
## Websocket

---
### Request & Response

---
### Communication channels
- simplex
- half-duplex
- full-duplex

---
### simplex
단방향통신
> 데이터를 전송하는 방향이 정해져있는 방식

---
### half-duplex
반이중통신
> 전송의 방향은 양방향이나 전송 순간에는 한쪽에서만 전송가능한 방식

---
### full-duplex
양방향통신
> 동시에 송수신이 가능한 방식

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
### webSocket
HTML5의 표준 full-duplex 통신 방식
https://html.spec.whatwg.org/multipage/web-sockets.html#network

---
### socket.io

`npm install --save socket.io`

- 실시간 통신기술의 웹 브라우저 호환성 문제 해결을 위한 프로젝트
- IE6 부터 최신 브라우저까지 지원
- WebSocket, Flash Socket, AJAX Long Polling, AJAX Multipart Streaming, Forever iframe, JSONP Polling 기술 모두 포함
- 브라우저에 따라 최적화된 기술 사용
- 일관성있는 문법과 API로 개발 가능

https://caniuse.com/#search=web%20sockets

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
- unicast : 1:1. 출발지와 목적지가 정해진 전송
- broadcast : 네트워크에 접속된 모든 기기에 정보를 전송
- multicast : 네트워크에 접속된 기기 중 선택하여 전송

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
## Let's rebuild websocket with co-worker!


<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,800" rel="stylesheet">
<link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'>

<style>
h1,h2,h3,h4,h5,h6,
p,li, dd, table > * > * {
font-family: 'Nanum Gothic', Gothic;
}
span, pre {
font-family: Hack, monospace;
}
</style>

