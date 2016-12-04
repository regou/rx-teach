'use strict';

class CustomObservable{
	subscribe(observer){
		const arr = [1,2,3,4,5];
		arr.forEach(observer.next);
		observer.complete();
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

var ob$ = new CustomObservable();

ob$.subscribe(observer);
