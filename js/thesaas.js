$(document).ready(function(){
	
  //menu sliding process
  if ($(window).width() <= 600) {
  	  $("nav  ul  li").click(function() {
		$(this).children("ul").slideToggle(500);
		$(this).toggleClass("active");
	});
  	  $("nav ul li:first-child a").removeClass("active");
  }
  $(".cross-mark").click(function() {
  		$("nav").css("display", "none");
  });
   $(".menu-hamburger").click(function() {
  		$("nav").css("display", "block");
  });

});