// inview plugin: add inviewTrigger class to elements it should look for
$(document).ready(function(){
    $(".inviewTrigger").bind("inview", function (event, visible) {
        if (visible == true) {
            // element is visible
             $(this).addClass("inview");
        } else {
            // element is not visible
            $(this).removeClass("inview");
        }
    });
});

(function ($) {
    $(document).ready(function(){
        // hide .navbar first
	    $(".navbar").hide();
	    // fade in .navbar
	    $(function () {
	       
	    $(window).scroll(function () {

              // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 950) {
	                $('.navbar').fadeIn();
	            } else {
	                $('.navbar').fadeOut();
	            }
	        });
	    });

	});
	  }(jQuery));
