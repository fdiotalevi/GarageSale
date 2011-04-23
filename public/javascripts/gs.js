var ValidationChecker = function() {
	$("form.validated").validate();
}

$(document).ready(function() {	
	console.log('starting..');
	new ValidationChecker();	
});