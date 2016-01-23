// fancy header function

var lastScrollPosition = 0;

$(document).ready(function(){
	updateHeaderPosition();
	function updateHeaderPosition() {
		window.requestAnimationFrame(updateHeaderPosition);
		if (lastScrollPosition != $(window).scrollTop()) {
			lastScrollPosition = $(window).scrollTop();
			document.querySelector(".frontPageContainer").style.top = "0px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			if ($(window).scrollTop() == 0) {
				document.querySelector(".frontPageContainer").style.top = "0px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").removeClass("hideImg");
				$(".frontPageContainer").removeClass("navbarState");
			} else if ($(window).scrollTop() < $(".frontPageContainer").height()/10*5 ) {
				document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").removeClass("hideImg");
				$(".frontPageContainer").removeClass("navbarState");
			} else if ($(window).scrollTop() < $(".frontPageContainer").height()-$(".frontPageContainer ul li.preStudentLink a h3").height() ) {
				document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
				$(".frontPageContainer .tile-image").addClass("hideImg");
				$(".frontPageContainer").addClass("navbarState");
			} else {
				document.querySelector(".frontPageContainer").style.top = -($(".frontPageContainer").height()-$(".frontPageContainer ul li a h3").height())+"px";
				document.querySelector(".frontPageContainer .tileNav").style.height = $(".frontPageContainer ul li.preStudentLink a h3").height()+"px";
				$(".frontPageContainer .tile-image").addClass("hideImg");
				$(".frontPageContainer").addClass("navbarState");
			}
			var navHeight = $(".frontPageContainer ul li a h3").height()+2;
			if($(window).scrollTop() > $("#jobb").offset().top-navHeight) {
				$(".postStudentLink.tileButton h3").addClass("currentSection");
				if (document.origin != "null") {
					history.replaceState("Romportalen.no - Student", "Romportalen.no - Student", "#jobb");
				}
				$(".generalLink.tileButton h3").removeClass("currentSection");
				$(".preStudentLink.tileButton h3").removeClass("currentSection");
				$(".studentLink.tileButton h3").removeClass("currentSection");
			} else if($(window).scrollTop() > $("#student").offset().top-navHeight) {
				$(".studentLink.tileButton h3").addClass("currentSection");
				if (document.origin != "null") {
					history.replaceState("Romportalen.no - Student", "Romportalen.no - Student", "#student");
				}
				$(".generalLink.tileButton h3").removeClass("currentSection");
				$(".preStudentLink.tileButton h3").removeClass("currentSection");
				$(".postStudentLink.tileButton h3").removeClass("currentSection");
			} else if($(window).scrollTop() > $("#hoeyereUtdanning").offset().top-navHeight) {
				$(".preStudentLink.tileButton h3").addClass("currentSection");
				if (document.origin != "null") {
					history.replaceState("Romportalen.no - Høyere utdanning", "Romportalen.no - Høyere utdanning", "#hoeyereUtdanning");
				}
				$(".generalLink.tileButton h3").removeClass("currentSection");
				$(".studentLink.tileButton h3").removeClass("currentSection");
				$(".postStudentLink.tileButton h3").removeClass("currentSection");
			} else if($(window).scrollTop() > $("#generellInfo").offset().top-navHeight) {
				$(".generalLink.tileButton h3").addClass("currentSection");
				if (document.origin != "null") {
					history.replaceState("Romportalen.no - Generelt", "Romportalen.no - Generelt", "#generellInfo");
				}
				$(".preStudentLink.tileButton h3").removeClass("currentSection");
				$(".studentLink.tileButton h3").removeClass("currentSection");
				$(".postStudentLink.tileButton h3").removeClass("currentSection");
			} else {
				if (document.origin != "null") {
					history.replaceState("Romportalen.no", "Romportalen.no", ".");
				}
				$(".generalLink.tileButton h3").removeClass("currentSection");
				$(".preStudentLink.tileButton h3").removeClass("currentSection");
				$(".studentLink.tileButton h3").removeClass("currentSection");
				$(".postStudentLink.tileButton h3").removeClass("currentSection");
			}
		}
	}
});