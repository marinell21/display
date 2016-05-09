;(function($){
	$(window).load(function(){
		var $mapDiv = $('#map')[0];
		var $map = new google.maps.Map($mapDiv, {
			center: {lat: 52.129450, lng: -106.668298},
			zoom: 14,
			scrollwheel: false
		});
		var $marker = new google.maps.Marker({
			position: {lat: 52.129450, lng: -106.668298},
			map: $map,
			icon: 'img/marker.png'
		});
	})
	$('.swipebox').swipebox();
})(jQuery);


$( document ).ready(function() {
	var $container = $('.ba-work');
    // filter buttons
    $('#filters button').click(function(){
    	var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
        	$this.parents('#options').find('.is-checked').removeClass('is-checked');
        	$this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({  itemSelector: '.item', filter: selector });
        return false;
    });
});
