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
export default Test.registerAsyncHelper('fillInTyping',
	function fillInTyping(app, selector, string, maxDelay = 50) {
    click(selector);
    for(var i = 0; i < string.length; i++) {
      waitTime(Math.random() * maxDelay);
      fillIn(selector, string.substring(0, i+1));
      keyEvent(selector, 'keydown', string.charCodeAt(i));
      keyEvent(selector, 'keypress', string.charCodeAt(i));
      keyEvent(selector, 'keyup', string.charCodeAt(i));   
    }
	}
)
