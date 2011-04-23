/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu", //Menu DIV id
	orientation: 'v', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'menu-v', //class added to menu's outer DIV
	//customtheme: ["#804000", "#482400"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
$(function() {
$('#drop a img, #right-side img, .list a img').css("opacity","1.0");	
$('#drop a img, #right-side img, .list a img').hover(function () {										  
$(this).stop().animate({ opacity: 0.85 }, "fast"); },	
function () {			
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});


/*-----------------------------------------------------------------------------------*/
/*	PORTFOLIO & CAROUSEL IMAGE HOVER
/*-----------------------------------------------------------------------------------*/

$(function() {
$("ul.grid img, .carousel a img").css("opacity","1.0");
$("ul.grid img, .carousel a img").hover(function () {
$(this).stop().animate({ opacity: 0.75 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "slow");  
}); 

});
 
 
$(document).ready(function() {
	$("ul.tags li a, ul.tabs li a, a#next, .page-navi li a").append("<span></span>");	
});