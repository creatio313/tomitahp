$(document).ready(()=>{
	$(".card-img-overlay").hide();
	
	$(".card").on('mouseenter',()=>{
		event.preventDefault();
		$(event.currentTarget).children(".card-img-overlay").fadeIn(300);
	}).on('mouseleave',()=>{
		$(event.currentTarget).children(".card-img-overlay").fadeOut(300);
	})
});