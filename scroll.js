var controller = new ScrollMagic.Controller();

var flightpath = {
	looping : {
		curviness: 1.25,
		autoRotate: true,
		values: [
				{x: 100,	y: 60},
				{x: 180,	y: 20},
				{x: 120,	y: 15}
			]
	}
};

var snowflakeAnimate = new TweenMax.to('#subject', 1.5, {
    rotation: 180,
	css:{bezier:flightpath.looping}
});

var scene = new ScrollMagic.Scene({
	//triggerElement: '#container',
	duration: 2000
}).setPin('#subject').setTween(snowflakeAnimate).addIndicators().addTo(controller);



/* var scene = new ScrollMagic.Scene({
  duration: 800 // pin the element for 400px of scrolling
}).setPin('#subject');

controller.addScene(scene); */

