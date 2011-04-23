$(document).ready(function(){
			$("#filter a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square', autoplay_slideshow: false, overlay_gallery: false});
		});
		
$(document).ready(function(){
	
	//set the starting bigestHeight variable
	var biggestHeight = 0;
	//check each of them
	$('.grid li').each(function(){
		//if the height of the current element is
		//bigger then the current biggestHeight value
		if($(this).height() > biggestHeight){
			//update the biggestHeight with the
			//height of the current elements
			biggestHeight = $(this).height();
		}
	});
	//when checking for biggestHeight is done set that
	//height to all the elements
	$('.grid li').height(biggestHeight);
	
});		