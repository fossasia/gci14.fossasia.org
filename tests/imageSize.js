var fs = require('fs');
var sizeOf = require('image-size');
var assert = require('assert');

function isImagesRatioEqual (path) {
  var result = true;
  fs.readdir(path, function(err, files) {
    if ( err ) {
      throw err;
      return false;
    }

    files.forEach(function(file, i) {
      var ext = file.split('.')[ file.split('.').length - 1 ].toLowerCase();
      if ( ext == 'jpg' || ext == 'png' || ext == 'gif' ) {
        var dimensions = sizeOf(path + file);
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