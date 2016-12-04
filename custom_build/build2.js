'use strict';


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


function ObservableFromArray(observer){
	const arr = [1,2,3,4,5];
	arr.forEach(observer.next);
	observer.complete();
}


ObservableFromArray(observer);
