var $peopleContainer = $('.people'),
  $people = $peopleContainer.find('li'),
  $circle = $('.circle');
/* When a name gets clicked, we're going to keep moving names one position down the list until the clicked name is in the active position */
$people.find('.person-container').click(function() {
  var $selected = $(this).parent('li'),
  //less confusing since nth-child is not zero indexed
    selectedPos = $selected.index() + 1;
  
  var movement = reOrderPeople($selected, selectedPos);
  var totalDelay = 501 * movement;
  //var movement = 1;
  //console.log("movement " + movement);
  console.log("total Delay " + totalDelay);
  
  $circle.addClass("animate--" + movement);
  
  function setCircle() {
      innerTimeout = window.setTimeout(resetCircle, totalDelay);
    }
  
  function resetCircle() {
      $circle.removeClass("animate--" + movement);
    }
  
  for (i = 0; i < movement; i++) {
    var delay = 200 * (i + 1);
    //console.log("delay " + delay);
    var innerDelay = delay + 100;
      //console.log("innerDelay" + innerDelay);
    var timeout;
    var innerTimeout;
    //console.log("looping");
    

    function addAnimate() {
      timeout = window.setTimeout(startAnimate, delay);
    }
    
    function removeAnimate() {
      innerTimeout = window.setTimeout(doAnimate, innerDelay);
    }

    function startAnimate() {
      //console.log("adding animate");
      $people.addClass('animate');
    }
    
    function doAnimate() {
      //console.log("removing animate");
      $people.removeClass('animate');
        $people.filter(':last-child').prependTo($peopleContainer);
        
      }
    
    addAnimate();
    removeAnimate();

  }
  
  setCircle();
  
});

function reOrderPeople(thisPerson, thisPosition) {
  var $selected = thisPerson,
    selectedPos = thisPosition;
  var movement = 0;
  
  while (selectedPos !== 2) {
    if (selectedPos === 6) {
      selectedPos = 1;
    } else {
      selectedPos++;
    }
    
    movement++
    
  }
  return movement;
}