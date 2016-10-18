import Ember from 'ember';

const {
	$,
	Test
} = Ember;

/**
 * Signs a user in through the userSession service. Skipping the need to visit the login page.
 * @param email {String}
 * @param password {String}
 */
export default Test.registerAsyncHelper('fillInAddress',
	function signIn(app, selector, address) {
    fillInTyping(selector, address);
    waitUntil('.pac-item:first');  
		keyEvent(selector, 'keydown', 40); //Down
		keyEvent(selector, 'keydown', 13); //Enter
    
    return andThen(() => {
      $(selector).blur();
    });
	}
)
