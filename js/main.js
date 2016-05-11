;(function($){
	$(window).load(function(){
		var $mapDiv = $('#map')[0];
		if($('#map').length){
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
		}
	})

	$( document ).ready(function() {
		$('.ba-slider').slick();
		$('.swipebox').swipebox();

		var $container = $('.ba-work');
	    // filter buttons
	    $container.isotope({  itemSelector: '.item' });

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


})(jQuery);

