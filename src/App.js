import { other, other2} from './OtherClass.js';
import { message, message2} from './HotClass.js';


export class App{
	constructor(){
		
		console.log('App.constructor');

		
		this.sub = new other2();
		this.m2 = new message2()
		setInterval(()=>{
			
			let m2 = new message2()

			message();
			if (window.console) window.console.log( this.sub.localMsg );
			if (window.console) window.console.log( this.m2.msg  );

			if (window.console) window.console.log(other2.boom);

		}, 1000)

	}
};




if( module.hot ){

	module.hot.accept('./App', function(){
		if (window.console) window.console.log('####');
	});


	module.hot.accept('./HotClass', function(){
		if (window.console) window.console.log('####');
	});

	module.hot.accept('./OtherClass', function(){
		if (window.console) window.console.log('####');
	})

}