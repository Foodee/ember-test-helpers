import Ember from 'ember';

const {
	Test
} = Ember;

/**
 * Signs a user in through the userSession service. Skipping the need to visit the login page.
 * @param email {String}
 * @param password {String}
 */
export default Test.registerAsyncHelper('fillInPhone',
	function signIn(app, selector, phone) {
		const phoneString = phone + '';
		const areaCode = phoneString.substring(0, 3);
		const firstPart = phoneString.substring(3, 6);
		const secondPart = phoneString.substring(6, 10);
		
		const formattedPhoneString = `(${areaCode}) ${firstPart}-${secondPart}`;
		
		return fillIn(selector, formattedPhoneString);
	}
)
