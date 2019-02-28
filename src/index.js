import './css/style.scss';
import {App} from './App.js';


new App();


import snippet from './html.snippet.html';
document.write(snippet);


if( module.hot ){
	module.hot.accept('./HotClass', function(){
		if (window.console) window.console.log('####');
	})
}