

function message(){
	if (window.console) window.console.log('message: 2');
}

class message2{
	constructor(){
		if (window.console) window.console.log('message2: 1', this );
	}
	get msg(){
		return msg;
	}
}

var msg = 'popo-<<<< 00000';




export {message, message2, msg};
