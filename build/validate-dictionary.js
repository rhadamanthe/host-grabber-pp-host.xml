
var fs = require('fs');
var lib = require('../library.dictionary.js')

fs.readFile( '../hosts.xml', 'utf8', function(err, data) {
  var DOMParser = require('xmldom').DOMParser;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(data, 'text/xml');

  var result = lib.parseAndVerifyDictionary(xmlDoc);
  result.errors.forEach( function(error) {
    console.log(error);
  });

  if (result.errors.length !== 0) {
    process.exit(1);
  }
});
