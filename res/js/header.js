// fancy header function
$(document).ready(function(){
	document.querySelector(".frontPageContainer").style.top = "0px";
	document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
	$(".frontPageContainer .tile-image").removeClass("hideImg");
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			document.querySelector(".frontPageContainer").style.top = "0px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").removeClass("hideImg");
			console.log("scrolled to top");
		} else if ($(window).scrollTop() < $(".frontPageContainer").height()/10*5 ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").removeClass("hideImg");
			console.log("transitioning start");
		} else if ($(window).scrollTop() < $(".frontPageContainer").height()-$(".frontPageContainer ul li.preStudentLink a h3").height() ) {
			document.querySelector(".frontPageContainer").style.top = -$(window).scrollTop()+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(window).height()-$(window).scrollTop()+"px";
			$(".frontPageContainer .tile-image").addClass("hideImg");
			console.log("transitioning mid");
		} else {
			document.querySelector(".frontPageContainer").style.top = -($(".frontPageContainer").height()-$(".frontPageContainer ul li a h3").height())+"px";
			document.querySelector(".frontPageContainer .tileNav").style.height = $(".frontPageContainer ul li.preStudentLink a h3").height()+"px";
			$(".frontPageContainer .tile-image").addClass("hideImg");
			console.log("navbar state");
		}
		var navHeight = $(".frontPageContainer ul li a h3").height()+2;
		if($(window).scrollTop() > $(".postStudent").offset().top-navHeight) {
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "underline";
			if (document.origin != "null") {
				history.replaceState("Romportalen.no - Student", "Romportalen.no - Student", "#jobb");
			}
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".student").offset().top-navHeight) {
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "underline";
			if (document.origin != "null") {
				history.replaceState("Romportalen.no - Student", "Romportalen.no - Student", "#student");
			}
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".preStudent").offset().top-navHeight) {
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "underline";
			if (document.origin != "null") {
				history.replaceState("Romportalen.no - Høyere utdanning", "Romportalen.no - Høyere utdanning", "#hoeyereUtdanning");
			}
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else if($(window).scrollTop() > $(".generalInfo").offset().top-navHeight) {
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "underline";
			if (document.origin != "null") {
				history.replaceState("Romportalen.no - Generelt", "Romportalen.no - Generelt", "#generellInfo");
			}
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		} else {
			if (document.origin != "null") {
				history.replaceState("Romportalen.no", "Romportalen.no", ".");
			}
			document.querySelector(".generalLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".preStudentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".studentLink.tileButton h3").style.textDecoration = "none";
			document.querySelector(".postStudentLink.tileButton h3").style.textDecoration = "none";
		}
	});
});