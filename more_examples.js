'use strict';
//Ajax operator example;
const Rx = require('rxjs/Rx');
const axios = require('axios');

//Mouse Drag
down$.flatMap(md=>move$.takeUntil(up$));

//Search Box
var searchResults$ = value$
	.debounceTime(500)
	.distinctUntilChanged()
	.do(vm.loading = true)
	.switchMap(val=>searchByAjaxObservable(val).retry(3))
	.do(vm.loading = false);

