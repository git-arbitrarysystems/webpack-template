

function other(){
	if (window.console) window.console.log('other: 2');
}

class other2{
	constructor(){
		if (window.console) window.console.log('other2: 1');
	}
	get localMsg(){
		return 'lo'
	}
	static get boom(){ return 'boem X233333'; }
	
}

export {other, other2};

