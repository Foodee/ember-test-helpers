import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

moduleForAcceptance('Acceptance | dom detection test');

test('testing waitUntil', function(assert) {
	const application = startApp();
	
  visit('/dom-detection-test');
	waitUntil('.th-new-div');
  andThen(function() {
		const $newDiv = find('.th-new-div');
		assert.equal($newDiv.length, 1);
  });
	
	andThen(() => {
		destroyApp(application);
	}); 
});
