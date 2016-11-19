/**
 * Created by wangxiao on 19/11/2016.
 */

'use strict';
//No operator example;
const Rx = require('rxjs/Rx');

var result$ = new Rx.Observable(function (observer) {
	let timmer = setInterval(function () {
		observer.next(Math.random() * 10);
	},200);
	//Throw error
	//observer.error(err);

	//self complete
	//observer.complete();

	return function(){
		console.log('do some clean up');
		clearInterval(timmer);
	}
});

var observer = {
	next: x => console.log(x),
	error: err => console.error(err),
	complete: done => console.info('done')
};
var subscription = result$.subscribe(observer);

setTimeout(function () {
	subscription.unsubscribe();
},4*1000);

