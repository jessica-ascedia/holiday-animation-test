window.onload = function() {
	var figure = document.getElementById('figure');
	var house = document.getElementById('house');
	var body = document.getElementsByTagName('body')[0];
	
	//generate some snowflakes
	
	function createSnowflakes() {
		
		var snowflakeCount = Math.floor(Math.random() * (10 - 4) + 4);
		
		for (i=0; i < snowflakeCount; i++) {
			body.insertAdjacentHTML('beforeend', '<img src="snow.png" class="snowflake" />');
		}
		
		//animate the snowflakes
		
		var snowflakes = document.getElementsByClassName('snowflake');
		
		for (i=0; i < snowflakes.length; i++) {
			var thisSnowflake = snowflakes[i];
			var thisSnowflakeMovement = new TimelineLite();
			var thisSnowflakeOffset = Math.floor(Math.random() * (6 - 1) + 1) * 10 +i + "%";
			var thisSnowflakeDelay = Math.random() * (4 - 1) + 1;
			var position = Math.floor(Math.random() * 2);
			thisSnowflake.style.left = thisSnowflakeOffset;
			//some snowflakes go in front of the house, others behind
			if (position === 0) {
				thisSnowflakeMovement.set(thisSnowflake, {className: '+=behind'})
			}
			//move the snowflake
			thisSnowflakeMovement.to(thisSnowflake, 3, {
				bottom: "80px",
				marginLeft: "30%",
				opacity: '.3',
				delay: thisSnowflakeDelay,
				onComplete: removeSnowflake,
				onCompleteParams: [thisSnowflake]
			});
			
		}
	
	}
	
	
	
	//entering the scene
	

	var timeline = new TimelineLite();

	timeline.to(figure, 1, {
		right: "50%"
	}).to(house, 1, {
		left: "40%"
	}, '-=0.5');
	
	//wiggling
	
	figure.addEventListener('click', function() {
		var movement = new TimelineLite();
		movement.set(figure, {className: '+=wiggle'})
		.set(figure, {className: '-=wiggle'}, '+=1');
	});
	
	//moving in and out of the house
	
	var inHouse = false;
	var enterHouse = new TimelineLite({
		paused: true
	});
	enterHouse.to(figure, 1, {
		marginRight: "-300"
	}).to(figure, 1, {
		opacity: 0
	}).set(figure, {className: '+=behind'}); //don't want figure blocking house
	house.addEventListener('click', function() {
		console.log(inHouse);

		if (inHouse === false) {
			enterHouse.play();
			inHouse = true;
		} else {
			enterHouse.reverse();
			inHouse = false;
		}
	});
	
	function removeSnowflake(thisSnowflake) {
		var body = document.getElementsByTagName('body')[0];
		var snowflakeCount = document.getElementsByClassName('snowflake').length;
		body.removeChild(thisSnowflake);
		if (snowflakeCount === 1) {
			//snowflakes forever!
			createSnowflakes();
		}
	}
	
	createSnowflakes();
	//removeSnowflakes();
	
}

