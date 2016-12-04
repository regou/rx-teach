'use strict';

class CustomObservable{
	constructor(creatorFn){
		this.creatorFn = creatorFn;
	}

	subscribe(observer){
		this.creatorFn(observer);
	}
}


var observer = {
	next:function nextCb(val) {
		console.log('next:' + val);
	},
	error:function errorCb() {

	},
	complete:function completeCb() {
		console.log('done');
	}
};

var arrOb$ = new CustomObservable(function (ob) {
	const arr = [1,2,3,4,5];
	arr.forEach(ob.next);
	ob.complete();
});

arrOb$.subscribe(observer);
