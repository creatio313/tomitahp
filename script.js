$(document).ready(()=>{
	
	let fadeSpeed=300;
	
	$(".card").on('mouseenter',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeIn(fadeSpeed);
	}).on('mouseleave',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeOut(fadeSpeed);
	})
});