'use strict';

// Core
class CustomObservable{
	constructor(creatorFn){
		this.creatorFn = creatorFn;
	}

	subscribe(observer){
		this.creatorFn(observer);
	}

	map(transform){
		var input$ = this;
		var output$ = new CustomObservable(function (ob) {
			input$.subscribe({
				next:function (val) {
					var newVal = transform(val);
					ob.next(newVal);
				},
				error:function (err) {ob.error(err)},
				complete:function () {ob.complete();}
			})
		});
		return output$;
	}

	filter(filterFn){
		var input$ = this;
		var output$ = new CustomObservable(function (ob) {
			input$.subscribe({
				next:function (val) {
					if(filterFn(val)){
						ob.next(val);
					}
				},
				error:function (err) {ob.error(err)},
				complete:function () {ob.complete();}
			})
		});
		return output$;
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


arrOb$
	.map(num => num * 10)
	.filter(num => num % 20 === 0)
	.subscribe(observer);



//重新揭示 Lazy , Parallel
