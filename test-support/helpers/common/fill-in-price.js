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
export default Test.registerAsyncHelper('fillInPrice',
  function signIn(app, selector, price) {
    const inputVal = find(selector).val();
    const delCount = inputVal.length - 3; // $ 0.00 -> cursor is focused on end. Must delete all, skips 3 useless characters, ., space and $
    triggerEvent(selector, 'focus');
    for(let i = 0; i < delCount; i++) {
      keyEvent(selector, 'keydown', '8');
      keyEvent(selector, 'keypress', '8');
      keyEvent(selector, 'keyup', '8');
    }
    price = price.toString();
    fillInTyping(selector, price, 100);
    triggerEvent(selector, 'change');
    triggerEvent(selector, 'blur');
  }
)
