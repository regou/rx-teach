'use strict';

//观察盒子和猫
const Rx = require('rxjs/Rx');

const HAPPY_CAT_FACE = 'ฅ(͒•ɪ•͒)ฅ';
const DEAD_CAT_FACE = 'ค(TㅅT)';

var box$ = new Rx.Observable(function (triggerer) {
	var isExploded = Math.random() > 0.5;
	triggerer.next(isExploded);
	triggerer.complete();
});

var cat$ = box$
	.map(isExploded =>
		isExploded ? DEAD_CAT_FACE : HAPPY_CAT_FACE);//live or die


box$.subscribe(function (isExploded) {
	console.log(`The poison : ${isExploded ? 'exploded' : 'sealed'}`);
});

cat$.subscribe(function (catStatus) {
	console.log(`The cat    :  ${catStatus}`);
});

