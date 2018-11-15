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
  function fillInAddress(app, selector, address) {
    fillIn(selector, address);
    waitUntil('.fde-form-controls-address-autocomplete-control_result-item:first');
    click('.fde-form-controls-address-autocomplete-control_result-item:first');
    waitTime(250);
  }
)
