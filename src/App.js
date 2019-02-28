import {HotClass} from './HotClass.js';
export class App{
	constructor(){
		console.log('App.constructor');
		this.hot = new HotClass();
	}
};


