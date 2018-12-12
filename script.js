$(document).ready(()=>{
	$(".card-img-overlay").hide();
	
	$(".card").on('mouseenter',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeIn(300);
	}).on('mouseleave',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeOut(300);
	})
});