(function($) {
	var $winW = $(window).width();
	var $winH = $(window).height();
	var $scene = $(".scene");
	var $sceneInner = $(".scene-inner");
	var $img = $(".iwill-bg-img");

	$(window).load(function() {
		$scene.height($winW * 2 / 3);
		$sceneInner.height($winW * 2 / 3);
	});
	$(window).resize(function() {
		$scene.height($img.height());
		$sceneInner.height($img.height());
	});

	$scene.mousemove(function(event) {
		movementOnHover(event.pageX, event.pageY);
	});

	function movementOnHover(mouseX, mouseY) {
		var ox = halfW = $scene.width() / 2;
		var oy = halfH = $scene.height() / 2

		$('.iwill-bg-img').css( {
			'transform' : 'translate3d(' + (mouseX - ox)/ (halfW * 2) * 5 + '%, 0%, 0)',
		});

		$('.iwill-text-img').css( {
			'transform' : 'translate3d(' + (ox - mouseX)/ (halfW * 2) * 5 + '%, ' + (oy - mouseY)/ (halfH * 2) * 5 + '%, 0)',
		});

		$('.iwill-color-layer').css( {
			'transform' : 'translate3d(' + (ox - mouseX)/ (halfW * 2) * 5 + '%, ' + (oy - mouseY)/ (halfH * 2) * 5 + '%, 0)',
		});
	}
}(jQuery));