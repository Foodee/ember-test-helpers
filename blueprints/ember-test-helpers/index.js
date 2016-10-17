/* globals module */
/* eslint-env node */

var EOL = require('os').EOL;

module.exports = {
    description: 'A set of useful test helpers developed by Foodee for ember acceptance tests',

    afterInstall: function( /* options */ ) {
      // .jshintrc file
      const file1          = 'tests/.jshintrc';
      const text1          = '    "waitTime",' + EOL +
                             '    "waitUntil",' + EOL +
                             '    "fillInTyping",' + EOL +
                             '    "fillInAddress",' + EOL +
                             '    "fillInPhone",';
      const locationText1  = '"predef": [' + EOL;
			
      const file2          = 'tests/.eslintrc.js';
      const text2          = '    "waitTime": 1,' + EOL +
                             '    "waitUntil": 1,' + EOL +
                             '    "fillInTyping": 1,' + EOL +
                             '    "fillInAddress": 1,' + EOL +
                             '    "fillInPhone": 1,';
      const locationText2  = '"globals": {' + EOL;
			
      const file3          = 'tests/helpers/start-app.js';
      const text3          = "import './common/all';";
      const locationText3  = "import Ember from 'ember';" + EOL;
      
      return this.insertIntoFile(file1, text1, { after: locationText1 })
				.then(() => {
					return this.insertIntoFile(file2, text2, { after: locationText2 })
				})
				.then(() => {
					return this.insertIntoFile(file3, text3, { after: locationText3 })
				});
    },

    normalizeEntityName: function() {}
};