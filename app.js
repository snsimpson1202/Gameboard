var main = function() {
	$(".more-btn").click(function(){
    $(".more-menu").toggle().next();
  });
  $(".share").click(function(){
    $(".share-menu").toggle();
  });
  $(".glyphicon-bell").click(function(){
    $(this).toggleClass("active");
  });
};

$(document).ready(main);
