define(['zepto'],function($){
	$('.dropdown-toggle').on('click',function(e){
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});
	$('.dropdown-menu').on('click',function(){
		$(this).parent().removeClass('open');
	});
});