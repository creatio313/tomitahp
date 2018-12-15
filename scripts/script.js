$(document).ready(()=>{
	
	let fadeSpeed=300;
	
	let $card=$(".card")
	
	$card.on('click',()=>{$(event.currentTarget).children(".card-img-overlay").stop(true).fadeToggle(fadeSpeed)});
	
	$card.on('mouseenter',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeIn(fadeSpeed);
	}).on('mouseleave',()=>{
		let $image=$(event.currentTarget);
		$image.children(".card-img-overlay").stop(true).fadeOut(fadeSpeed);
	})
});