var Shopwindow = function() {
	var self = this;	
	
	$('shopwindow').observe('click', function() {
		self.close();
	});
	
	this.close = function() {
		$('shopwindow').hide();
	};
	
	this.show = function() {
		$('shopwindow').show();	
	}	
};


var Item = function(it, shopwindow) {
	var element = it;
	var self = this;
	var shopwindow = shopwindow;
	
	this.show = function() {
		$('sw-title').update($('title-'+it.id).innerHTML);
		$('sw-image').writeAttribute('src', $('img-'+it.id).readAttribute('src'));
		$('sw-description').update($('description-'+it.id).innerHTML);
		$('sw-price').update($('price-'+it.id).innerHTML);		
		shopwindow.show();							
	}
		
	it.observe('click', function() { self.show(); });	

};


Event.observe(window, 'load', function() { 
	
	var shopwindow = new Shopwindow();
	shopwindow.close();
	
	$$('.item').each(function(it) {
		var item = new Item(it, shopwindow);
	});		
		
});