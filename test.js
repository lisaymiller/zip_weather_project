var Moment = require('moment');

var myfunc = setInterval(function(){
	var time = new Moment(); 
    console.log(time.format('h:mm:ss a')); 
        clearInterval(myfunc);
});