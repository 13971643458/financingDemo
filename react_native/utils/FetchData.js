import react from 'react';
import Data from './Data';

var list = [];

export default class Modify {
	constructor() {
		this.list = Data.list;
		this.length = this.list.length;

	}

	get() {
		let num = this._random(0, this.length);
		let data = [];
		for(let i = 0; i < num; i ++) {
			let index = this._random(0, this.length - 1);
			data.push(this.list[index]);
		}

		return {list: data};
	}

	_random(lo, hi) {
		let dis = hi - lo;
		let num = Math.random() * dis + lo;
		num = Math.round(num);
		return num;
	}
}

// module.exports = Modify;