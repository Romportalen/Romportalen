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

/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
						
	// Cache the Window object
	$window = $(window);
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
	
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
				// Check for any Videos that need scrolling
				$('[data-type="video"]', $self).each(function() {
					
					// Cache the video
					var $video = $(this);
					
					// There's some repetition going on here, so 
					// feel free to tidy this section up. 
					var yPos = -($window.scrollTop() / $video.data('speed'));					
					var coords = (yPos + $video.data('offsetY')) + 'px';
	
					$video.css({ top: coords });													
					
				}); // video	
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

}); // document ready

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

$(document).ready(function(){
	viewPoll( ".inviewTrigger" );
});

(function ($) {
    $(document).ready(function(){
        // hide .navbar first
	    $(".navbar").hide();
	    // fade in .navbar
	    $(function () {
	       
	    $(window).scroll(function () {

              // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > $(".frontPageContainer .tileNav h3").offset().top) {
	                $('.navbar').fadeIn();
	            } else {
	                $('.navbar').fadeOut();
	            }
	        });
	    });

	});
	  }(jQuery));

// fancy header function
$(document).ready(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() < $(".frontPageContainer").height()/10*5 ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").show();
		} else if ($(window).scrollTop() < $(".frontPageContainer").height()/10*9 ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").hide();
		} else {
			document.querySelector(".frontPageContainer").style.top = -$(".frontPageContainer").height()/10*9+"px";
			$(".frontPageContainer .tile-image").hide();
		}
	});
});