// fancy header function

var lastScrollPosition = -1;
var linkNavState = "changing";
var prevLinkNavState = "init";

	function updateHeaderPosition() {
		if (lastScrollPosition != $(window).scrollTop()) {
			lastScrollPosition = $(window).scrollTop();
			prevLinkNavState = linkNavState;

			if (!document.querySelector(".frontpageContainer.navbarState")) {
				/* no point in running these if we're in .navbarState: they're hidden then. */
				/* title animation rules start */
				if ($(window).scrollTop() < $(".frontPageContainer").height()/10) {
					document.querySelector(".titleContainer").style.top = "10vh";
					document.querySelector(".titleContainer").style.bottom = "auto";
				} else if ($(window).scrollTop() < $(".frontPageContainer").height()-$(".frontPageContainer .titleContainer h1").outerHeight()-$(".frontPageContainer ul li a h3").height()) {
					document.querySelector(".titleContainer").style.top = $(window).scrollTop()+"px";
					document.querySelector(".titleContainer").style.bottom = "auto";
				} else {
					document.querySelector(".titleContainer").style.top = "auto";
					document.querySelector(".titleContainer").style.bottom = $(".frontPageContainer .titleContainer h1").outerHeight()+$(".frontPageContainer ul li a h3").height()+$(".frontPageContainer .titleContainer .progressContainer").outerHeight()+"px";
				}
				/* title animation rules end */
			}

			/* link animation rules start */
			if ($(window).scrollTop() == 0) {
				linkNavState = "changing";
				document.querySelector(".frontPageContainer").style.top = "0px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").removeClass("hideImg");
				$(".frontPageContainer").removeClass("navbarState");
			} else if ($(window).scrollTop() < $(".frontPageContainer").height()/10*5 ) {
				linkNavState = "changing";
				document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").removeClass("hideImg");
				$(".frontPageContainer").removeClass("navbarState");
			} else if ($(window).scrollTop() < $(".frontPageContainer").height()-$(".frontPageContainer ul li.preStudentLink a h3").height()-$(".frontPageContainer .titleContainer h1").outerHeight() ) {
				linkNavState = "changing";
				document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").addClass("hideImg");
				$(".frontPageContainer").addClass("navbarState");
			} else {
				linkNavState = "fixed";
				if(prevLinkNavState !== linkNavState) {
					console.log("nav position updated");
					document.querySelector(".frontPageContainer").style.top = -($(".frontPageContainer").height()-$(".frontPageContainer ul li a h3").height())+$(".frontPageContainer .titleContainer h1").outerHeight()+"px";
					document.querySelector(".frontPageContainer .tileNav").style.height = $(".frontPageContainer ul li.preStudentLink a h3").height()+"px";
					$(".frontPageContainer .tile-image").addClass("hideImg");
				}
				$(".frontPageContainer").addClass("navbarState");
			}
			/* link animation rules end */

			var navHeight = $(".frontPageContainer ul li a h3").height()+2;
			if($(window).scrollTop() > $("#arbeidslivet").offset().top-navHeight) {
				if (window.location.hash !== "#arbeidslivet" | document.querySelector(".postStudentLink.tileButton h3").className.indexOf("currentSection") == -1) {
					$(".postStudentLink.tileButton h3").addClass("currentSection");
					if (document.origin != "null") {
						history.replaceState("Romportalen.no - Student", "Romportalen.no - Arbeidslivet", "#arbeidslivet");
					}
					$(".generalLink.tileButton h3").removeClass("currentSection");
					$(".preStudentLink.tileButton h3").removeClass("currentSection");
					$(".studentLink.tileButton h3").removeClass("currentSection");
				}
			} else if($(window).scrollTop() > $("#student").offset().top-navHeight) {
				if (window.location.hash !== "#student" | document.querySelector(".studentLink.tileButton h3").className.indexOf("currentSection") == -1) {
					$(".studentLink.tileButton h3").addClass("currentSection");
					if (document.origin != "null") {
						history.replaceState("Romportalen.no - Student", "Romportalen.no - Student", "#student");
					}
					$(".generalLink.tileButton h3").removeClass("currentSection");
					$(".preStudentLink.tileButton h3").removeClass("currentSection");
					$(".postStudentLink.tileButton h3").removeClass("currentSection");
				}
			} else if($(window).scrollTop() > $("#hoeyereUtdanning").offset().top-navHeight) {
				if (window.location.hash !== "#hoeyereUtdanning" | document.querySelector(".preStudentLink.tileButton h3").className.indexOf("currentSection") == -1) {
					$(".preStudentLink.tileButton h3").addClass("currentSection");
					if (document.origin != "null") {
						history.replaceState("Romportalen.no - Høyere utdanning", "Romportalen.no - Høyere utdanning", "#hoeyereUtdanning");
					}
					$(".generalLink.tileButton h3").removeClass("currentSection");
					$(".studentLink.tileButton h3").removeClass("currentSection");
					$(".postStudentLink.tileButton h3").removeClass("currentSection");
				}
			} else if($(window).scrollTop() > $("#generellInfo").offset().top-navHeight) {
				if (window.location.hash !== "#generellInfo" | document.querySelector(".generalLink.tileButton h3").className.indexOf("currentSection") == -1) {
					$(".generalLink.tileButton h3").addClass("currentSection");
					if (document.origin != "null") {
						history.replaceState("Romportalen.no - Generelt", "Romportalen.no - Generelt", "#generellInfo");
					}
					$(".preStudentLink.tileButton h3").removeClass("currentSection");
					$(".studentLink.tileButton h3").removeClass("currentSection");
					$(".postStudentLink.tileButton h3").removeClass("currentSection");
				}
			} else if ($(window).scrollTop() < $("#generellInfo").offset().top-navHeight) {
				if (window.location.hash !== "" | !!document.querySelector(".tileButton h3.currentSection")) {
					if (document.origin != "null") {
						history.replaceState("Romportalen.no", "Romportalen.no", ".");
					}
					$(".generalLink.tileButton h3").removeClass("currentSection");
					$(".preStudentLink.tileButton h3").removeClass("currentSection");
					$(".studentLink.tileButton h3").removeClass("currentSection");
					$(".postStudentLink.tileButton h3").removeClass("currentSection");
				}
			}
			
			/* progress bar width updater */
			if($(window).scrollTop() > $("#arbeidslivet").offset().top-navHeight) {
				document.querySelector(".progressBar").style.width = 75+(($(window).scrollTop()-$("#arbeidslivet").offset().top)/($(document).height()-$(window).height()-$("#arbeidslivet").offset().top))*25+"%";
			} else if($(window).scrollTop() > $("#student").offset().top-navHeight) {
				document.querySelector(".progressBar").style.width = 50+(($(window).scrollTop()-$("#student").offset().top)/($("#arbeidslivet").offset().top-$("#student").offset().top))*25+"%";
			} else if($(window).scrollTop() > $("#hoeyereUtdanning").offset().top-navHeight) {
				document.querySelector(".progressBar").style.width = 25+(($(window).scrollTop()-$("#hoeyereUtdanning").offset().top)/($("#student").offset().top-$("#hoeyereUtdanning").offset().top))*25+"%";
			} else if($(window).scrollTop() > $("#generellInfo").offset().top-navHeight) {
				document.querySelector(".progressBar").style.width = 0.05+(($(window).scrollTop()-$("#generellInfo").offset().top)/($("#hoeyereUtdanning").offset().top-$("#generellInfo").offset().top))*25+"%";
			} else {
				document.querySelector(".progressBar").style.width = "0%";
			}
		}
	}

$(document).ready(function(){
	$( window ).scroll(function() {
		updateHeaderPosition();
	});
	
	updateHeaderPosition();
	
	$(".frontPageContainer .titleContainer h1").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		linkNavState = "changing";
		lastScrollPosition = -1;
		updateHeaderPosition();
	});
    $("a").click(function() {
		setTimeout(function(){lastScrollPosition = -5;}, 50);
    });
	var $root = $('html, body');
	$('a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});
});