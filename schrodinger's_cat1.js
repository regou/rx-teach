'use strict';
//Cat live or die?
const Rx = require('rxjs/Rx');

const HAPPY_CAT_FACE = 'ฅ(͒•ɪ•͒)ฅ';
const DEAD_CAT_FACE = 'ค(TㅅT)';

//盒子里随机炸了或没炸(输出单一值的Observable)
var box$ = new Rx.Observable(function (triggerer) {
	var isExploded = Math.random() > 0.5;
	triggerer.next(isExploded);
	triggerer.complete();
});

var cat$ = box$
	.map(isExploded =>
		isExploded ? DEAD_CAT_FACE : HAPPY_CAT_FACE);//live or die


cat$.subscribe(function (catStatus) {
	console.log(`Schrödinger's Cat :  ${catStatus}`);
});









//Try : no subscribe , delayed subscribe
