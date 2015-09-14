// inview plugin: add inviewTrigger class to elements it should look for
$(document).ready(function(){
    $(".inviewTrigger").bind('inview', function (event, visible) {
      if (visible == true) {
        // element is visible
       $(this).addClass('inview');
      } else {
        // element is not visible
         $(this).removeClass('inview');
      }
    });
});
