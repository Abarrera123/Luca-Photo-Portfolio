let images = [
  "https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg",
  "v",
]

var img = document.getElementById('background');
var index = 0;
var iterations = 0;

var updateImage = function() {
  /* reset index to zero if current index is greater than number of images.
   * increment iterations variable since it means we've done one whole loop.
   */
  if (index >= images.length) {
    index = 0;
    iterations++;
  }

  // set the background image
  img.body.style.backgroundImage = 'url(' + images[index] + ')';

  /* clear interval (stop timer) when we've reached
   * the number of iterations allowed.
   */
  if (iterations >= 2) {
    clearInterval(interval);
  } else {
    /* increment current index in order to get next image
     * when this function gets called again.
     */
    index++;
  }
}

// update first image
updateImage();

// initiate timer
var interval = setInterval(updateImage, 4000);