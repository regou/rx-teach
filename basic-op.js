'use strict';
//No operator example;
const Rx = require('rxjs/Rx');

// var result$ = new Rx.Observable(function (observer) {
// 	let timmer = setInterval(function () {
// 		observer.next(Math.random() * 10);
// 	},200);
//
// 	return function(){
// 		clearInterval(timmer);
// 	}
// });

var source$ = Rx.Observable.range(0,500);

var multipleOfTen$ = source$
	.filter((val)=>val % 10 === 0)
	//.scan((acc, one, idx) => acc + one, 0);


function createObserver(name) {
	var name = name + ': ';
	return {
		next: x => console.log(name,x),
		error: err => console.error(name,err),
		complete: done => console.info(name,'done')
	};
}


var multipleOfTen$ = multipleOfTen$.subscribe(createObserver('greater'));

multipleOfTen$.unsubscribe();
