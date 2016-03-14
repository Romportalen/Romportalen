/*
$(document).ready(function(){
	var popup = document.createElement("div");
	
	document.body.appendChild(p);
});


function togglePopup(popupIdentifier) {
	if () {
		$('#modal-7 .modal-body').html(html);
		$('#modal-7').modal('show', {backdrop: 'static'});
		
	}
}

$('body').keydown(function(key){
	key.preventDefault();
	console.log(key.which);
	if((key.which == 27 | key.keyCode == 27) && (!!document.querySelector('body.modal-open'))){
		$('.modal').modal('hide');
	}
});*/
	
$(document).ready(function(){
	$('.togglePopup').click(function(ev){
		ev.preventDefault();
		console.log("toggle popup executed");
		if (!!document.querySelector('body.modal-open')) {
			$('.modal').modal('hide');
		} else {
			console.log(this);
			var pid = $(this).data('popup');
			$.get('res/popups/' + pid + '.txt', function(data){
				var headerRegex = /(?:<header>)(.|[\r\n])*(?:<\/header>)/g;
				var contentRegex = /(?:<content>)(.|[\r\n])*(?:<\/content>)/g;
				var headerContent = headerRegex.exec(data)[0];
				var bodyContent = contentRegex.exec(data)[0];
				document.querySelector(".modal").style.marginTop = document.querySelector(".frontPageContainer").offsetHeight+Number($('.frontPageContainer').css('top').slice(0,-2))+"px";
				$('.modal .modal-title').html(headerContent);
				$('.modal .modal-body').html(bodyContent);
				$('.modal').modal('show');
				document.querySelector('.modal').focus();
			});
		}
	});
});


