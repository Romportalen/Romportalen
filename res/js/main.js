// inview plugin: add inviewTrigger class to elements it should look for
/*$(document).ready(function(){
    $(".inviewTrigger").bind("inview", function (event, visible) {
        if (visible == true) {
            // element is visible
             $(this).addClass("inview");
        } else {
            // element is not visible
            $(this).removeClass("inview");
        }
    });
});*/

function viewPoll( selector ) {
	
	var elems = document.querySelectorAll( selector ),
		count = elems.length,
		scrollTop = 0,
		winHeight = 0;

	function colliding( y1, h1, y2, h2 ) {
		return ( 
			( y2 >= y1 && y2 <= y1 + h1 ) || 
			( y2 + h2 >= y1 && y2 + h2 <= y1 + h1 )
		);
	}

	function updateElemRects() {
		for( var i = 0; i < count; i++ ) {
			var elem = elems[ i ],
				rect = elem.getBoundingClientRect(),
				y = scrollTop + rect.top,
				h = rect.bottom - rect.top,
				inView = colliding( scrollTop, winHeight, y, h );
			if( inView ) {
				elem.classList.add( 'inview' );
			} else {
				elem.classList.remove( 'inview' );
			}
		}
	}

	function onResize() {
		winHeight = window.innerHeight;
		updateElemRects();
	}

	function onScroll() {
		updateElemRects();
	}

	window.addEventListener( 'resize', onResize, false );
	document.addEventListener( 'scroll', onScroll, false );
	document.addEventListener( 'touchmove', onScroll, false );

	onResize();
	onScroll();
}

viewPoll( ".inviewTrigger" );

(function ($) {
    $(document).ready(function(){
        // hide .navbar first
	    $(".navbar").hide();
	    // fade in .navbar
	    $(function () {
	       
	    $(window).scroll(function () {

              // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > $(window).height()) {
	                $('.navbar').fadeIn();
	            } else {
	                $('.navbar').fadeOut();
	            }
	        });
	    });

	});
	  }(jQuery));
