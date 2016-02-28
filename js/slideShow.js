(function(){
var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.gallery figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
function showCurrent(reverse){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
    el.classList.remove('hide');
    el.classList.remove('reverse');
  });
  // add .show to the one item that's supposed to have it
  itemToHide = itemToShow - 1;
  if(itemToShow === 0){
    itemToHide = $items.length - 1;
  }
  if(reverse){
    itemToHide = itemToShow;
    itemToShow = itemToHide - 1;
    if(itemToHide === 0){
      itemToShow = $items.length - 1;
    }
  }
  // console.log("item to show: " + itemToShow);
  // console.log("item to hide: " + itemToHide);
  $items[itemToShow].classList.add('show');
  if(reverse){
    $items[itemToShow].classList.add('reverse');
  }
  $items[itemToHide].classList.add('hide');
  if(reverse){
    $items[itemToHide].classList.add('reverse');
  }

};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent(false);
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent(true);
  }, false);

})();
