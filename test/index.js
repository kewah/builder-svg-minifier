/* global describe, it */

var assert = require('assert');
var Resolver = require('component-resolver');
var Builder = require('component-builder');
var path = require('path');
var vm = require('vm');
var fs = require('fs');
var path = require('path');
var svg = require('..');

var expectedPath = path.join(__dirname, 'fixture/expected.svg');

describe('builder-svg-minifier', function() {
  it('should optimize svg', function(done) {
    Resolver(path.join(__dirname, 'fixture'), {}, function(err, tree) {
      Builder.scripts(tree)
        .use('templates', svg())
        .end(function(err, string) {
          var script = Builder.scripts.require + string;
          var output = vm.runInNewContext(script + ';require("fixture")');
          var expected = fs.readFileSync(expectedPath, 'utf-8');

          assert(output, expected);
          done();
        });
    });
  });
});
