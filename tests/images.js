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
var students = JSON.parse( fs.readFileSync('./_data/students.json', 'utf-8') );
var mentors = JSON.parse( fs.readFileSync('./_data/mentors.json', 'utf-8') );

var jsonImages = [];
var dirImages = [];


function addImages(obj, path) {
  obj.forEach(function(item, i) {
    if ( item.imgName ) {
      jsonImages.push( path + item.imgName );
    }
  });
}


function initJSONImages () {
  addImages(students, 'students: ');
  addImages(mentors, 'mentors: ');
}


function isImagesRatioEqual (path) {
  // Reads directories
  fs.readdir(path, function(err, files) {
    if ( err ) {
      throw err;
    }

    files.forEach(function(file, i) {
      // Checks extension to know if it's an image or not
      var ext = file.split('.')[ file.split('.').length - 1 ].toLowerCase();
      if ( ext == 'jpg' || ext == 'png' || ext == 'gif' ) {
        var dimensions = sizeOf(path + file);
        // Asserts dimensions
        assert.equal(dimensions.width, dimensions.height, file);
      
        // Add to array
        if ( path.indexOf('students') != -1 )
          dirImages.push( 'students: ' + file );
        if ( path.indexOf('mentors') != -1 ) 
          dirImages.push( 'mentors: ' + file );
      }
    });
  }); 
}


describe('Image ratio tester', function() {
  it('Should verify that all student images exist in 1:1 ratio', function() {
    isImagesRatioEqual('./images/students/');
  });
  it('Should verify that all mentor images exist in 1:1 ratio', function() {
    isImagesRatioEqual('./images/mentors/');
  });
});


describe('Image existance tester', function() {
  it('should test that all images in data files actually exist', function() {
    initJSONImages();

    var difference = jsonImages.filter(function(img) {
      return dirImages.indexOf(img) === -1;
    });

    var dirDifference = dirImages.filter(function(img) {
      return jsonImages.indexOf(img) === -1;
    });

    assert.equal(difference.length, 0, difference);

    if ( dirDifference.length ) {
      console.warn( '    The following files exist in directors but are not used in JSON:\n    ' + dirDifference.join(', ') + '\n' );
    }
  });
});