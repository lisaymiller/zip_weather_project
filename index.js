$('input').on('keyup', function (e) {
    if(e.which === 13){
    	// $('#target').submit();
    	var myfunc = setInterval(function(){
		var time = new Moment(); 
    	return console.log(time.format('h:mm:ss a')); 
        clearInterval(myfunc);
});
    	// return console.log('myfunc');
    	return false;
    }
});

//instead of nesting so much make outside function and call into button function when enter key is pressed
//add functionality where cannot enter nothing or invalid zipcode