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

	var index = 0;

	var timmer = setInterval(function () {
		if(index in arr){
			ob.next(arr[index]);
			index++
		}else{
			ob.complete();
			clearInterval(timmer);
		}

	},500);
});


arrOb$
	.map(num => num * 10)
	.subscribe(observer);


