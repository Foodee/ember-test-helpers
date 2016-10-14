import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

moduleForAcceptance('Acceptance | waitTime helper test');

test('testing waitTime helper', function(assert) {
	const application = startApp();
  visit('/async-test');
	waitTime(3000);
	andThen(function() { 
		const $thStatus = find('.th-status');
		assert.equal($thStatus.text(), 'Test completed');
	});
	andThen(() => {
		destroyApp(application);
	});
}); 