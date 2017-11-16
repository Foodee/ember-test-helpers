import Ember from 'ember';

/**
 * Will pause the test runner until the selector is found in the dom.
 *
 * @param selector
 */
export default Ember.Test.registerAsyncHelper('waitUntilNot',
	function(app, selector) {
		const waiter = function() {
			return Ember.$(selector).length === 0;
		};

		Ember.Test.registerWaiter(waiter);
		const promise = app.testHelpers.wait();

		promise.then(function() {
			Ember.Test.unregisterWaiter(waiter);
		});

		return promise;
	}
);
