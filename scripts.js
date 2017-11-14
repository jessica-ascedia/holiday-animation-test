window.onload = function() {
	var figure = document.getElementById('figure');
	var house = document.getElementById('house');
	
	var timeline = new TimelineLite();

	timeline.to(figure, 1, {
		right: "50%"
	}).to(house, 1, {
		left: "40%"
	}, '-=0.5');
	
	figure.addEventListener('click', function() {
		var movement = new TimelineLite();
		movement.set(figure, {className: '+=wiggle'})
		.set(figure, {className: '-=wiggle'}, '+=1');
	});
}