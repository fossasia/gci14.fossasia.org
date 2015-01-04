/**
 * imageSize
 * a test to check ratios of images
 * by Namanyay Goel
 *
 * The test has a simple idea - it loads all
 * images from the images/students and
 * images/mentors folders, and compares
 * their heights and widths. If they do 
 * not match, the test fails.
 */


$('body').append('<div class="images-cont" />');
var $cont = $('.images-cont').css('opacity', '0');



describe('Image tester', function() {
  this.timeout(5000)
  it('Should verify that all images exist in 1:1 ratio', function(done) {
    isImagesRatioEqual(done)
  });
});



function isImagesRatioEqual (done) {


  function addToImages(obj, path) {
    obj.forEach(function(obj, i) {
      var img = obj.imgName || 'mentor.png';
      // If no image then use 'mentor.png'
      $cont.append('<img src="' + path + img + '"/>');
    });
  }


  function checkRatio () {
    var $imgs = $('.images-cont img');

    console.log( $imgs.length + " images loaded" );

    $imgs.each(function() {
      var $img = $(this);

      // console.log( $img.attr('src'), $img.height(), $img.width() );
      // Uncomment above for debugging.

      if ( $img.height() > 500 || $img.width() > 500 ) {
        console.warn( $img.attr('src') + " has too large dimensions!" );
        // Additional warning
      }
      
      if ( $img.height() !== $img.width() ) {
        console.error( $img.attr('src') + " is incorrectly sized!" );
      }

      var a = chai.assert.equal( $img.height(), $img.width(), $img.attr('src') )
    });

    done();
  }


  $.when(
    $.getJSON('../_data/students.json', function(json) { addToImages(json, '/images/students/') }),
    $.getJSON('../_data/mentors.json', function(json) { addToImages(json, '/images/mentors/') })
  ).done(function() {
    setTimeout( checkRatio, 1000 )
    // Calls checker with a 1000s delay to let images load.
    // Does not work if delay is removed, for some reason.
  });


}