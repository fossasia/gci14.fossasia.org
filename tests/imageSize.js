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


var fs = require('fs');
var sizeOf = require('image-size');
var assert = require('assert');

function isImagesRatioEqual (path) {
  var result = true;
  // Reads directories
  fs.readdir(path, function(err, files) {
    if ( err ) {
      throw err;
      return false;
    }

    files.forEach(function(file, i) {
      // Checks extension to know if it's an image or not
      var ext = file.split('.')[ file.split('.').length - 1 ].toLowerCase();
      if ( ext == 'jpg' || ext == 'png' || ext == 'gif' ) {
        var dimensions = sizeOf(path + file);
        // Asserts dimensions
        assert.equal(dimensions.width, dimensions.height)
        if ( dimensions.width !== dimensions.height ) {
          result = false;
          return false;
        }
      } else {
        result = false;
        return false;
      }
    });
  }); 
  return result;
}

describe('Image tester', function() {
  it('Should verify that all student images exist in 1:1 ratio', function() {
    assert.equal(isImagesRatioEqual('./images/students/'), true)
  });
  it('Should verify that all mentor images exist in 1:1 ratio', function() {
    assert.equal(isImagesRatioEqual('./images/mentors/'), true)
  })
});