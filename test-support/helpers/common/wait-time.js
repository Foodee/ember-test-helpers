import Ember from 'ember';

/**
 * Waits a specified amount of time in milliseconds
 * before the acceptance test runner will continue.
 * 
 * @param milliseconds Amount of time to wait in milliseconds.
 */
export default Ember.Test.registerAsyncHelper('waitTime',
	function(app, milliseconds) {
		let isWaiting = true;
		
		const waiter = function() {
			return !isWaiting;
		};
		
		Ember.Test.registerWaiter(waiter);
		
		const promise = app.testHelpers.wait();
		
		setTimeout(() => {
			isWaiting = false;
		}, milliseconds);
		
		promise.then(function() {
			Ember.Test.unregisterWaiter(waiter);
		});
		
		return promise;
	}
);