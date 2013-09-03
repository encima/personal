$(document).ready(function() {
  $('.img-text h3').hide();
});

$(".left-nav").each(function() {
	$(this).data("standardWidth", $(this).width());
});

$(".left-nav").hover(function() {
	$(this).stop(true, false).animate({
	    width: "20%"
	}, 500, function() {
		$('.img-text h3').show();
	} );
	
	},
	function() {
		$(this).parent().children().each(function() {
	    	$(this).stop(true, false).animate({
	        	width: $(this).data("standardWidth")
	    	}, 500, function() {
	    		$('.img-text h3').hide();
	    	} );
		});
	}
);
