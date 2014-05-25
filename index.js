'use strict';

var SVGO = require('svgo');

module.exports = function(options) {
  return function(file, done) {
    if (file.extension !== 'svg') return done();

    var svgo = new SVGO(options);

    file.read(function(err, string) {
      if (err) return done(err);

      svgo.optimize(string, function(result) {
        if (result.error) return done(result.error);
        file.string = JSON.stringify(result.data);
        file.define = true;
        done();
      });
    });
  };
};
