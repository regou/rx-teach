'use strict';

function nextCb(val) {
	console.log('next:' + val);
}

function errorCb(err) {

}

function completeCb() {
	console.log('done');
}


function ObservableFromArray(next,error,complete){
	const arr = [1,2,3,4,5];
	arr.forEach(num => next(num));
	complete();
}


ObservableFromArray(nextCb,errorCb,completeCb);
