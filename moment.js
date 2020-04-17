requirejs.config({
  packages: [{
    name: 'moment',
    // This location is relative to baseUrl. Choose bower_components
    // or node_modules, depending on how moment was installed.
    location: 'node_modules/moment'
    main: 'moment'
  }]
});
// only needing core
define(['moment'], function (moment) {
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});

var Moment = require('moment');

var myfunc = setInterval(function(){
	var time = new Moment(); 
    	return console.log(time.format('h:mm:ss a')); 
        clearInterval(myfunc);
});