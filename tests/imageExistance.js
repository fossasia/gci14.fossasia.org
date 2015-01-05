var fs = require('fs');
var assert = require('assert');
var students = JSON.parse( fs.readFileSync('./_data/students.json', 'utf-8').substr(1) );
var mentors = JSON.parse( fs.readFileSync('./_data/mentors.json', 'utf-8') );

var jsonImages = [];
var dirImages = [];

function addImages(obj, path) {
  obj.forEach(function(item, i) {
    if ( item.imgName ) {
      jsonImages.push( path + item.imgName )
    }
  });
}

function initJSONImages () {
  addImages(students, 'students: ');
  addImages(mentors, 'mentors: ');
}

function initDirImages () {
  fs.readdirSync('./images/students/').forEach(function(item, i) {
    dirImages.push( 'students: ' + item );
  });

  fs.readdirSync('./images/mentors/').forEach(function(item, i) {
    dirImages.push( 'mentors: ' + item );
  });
}


describe('Image existance tester', function() {
  it('should test that all images in data files actually exist', function() {
    initJSONImages();
    initDirImages();

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