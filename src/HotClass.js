export class HotClass{
	constructor(){
		if( window.console ) console.log('HotClass');

		document.addEventListener('click', (e)=>{ if( window.console ) console.log(this.message); })

	}
	get message(){
		return 'Apples'
	}
}

