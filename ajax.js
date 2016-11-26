'use strict';
//Ajax operator example;
const Rx = require('rxjs/Rx');
const axios = require('axios');


var users$ = Rx.Observable.from(['BBB','PixelsCommander','regou']);

var userInfo$ = users$
	.map(user => `https://api.github.com/users/${user}`)
	.do((url)=>console.log(url))
	.switchMap((url)=>Rx.Observable.fromPromise( axios.get(url) ));



userInfo$.subscribe(function (info) {
	console.log(info.data.bio);
},function (err) {
	console.error(err);
});


//Home work: 学习Cancel Token，并优化此例子
