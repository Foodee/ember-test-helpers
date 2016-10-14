import Ember from 'ember';

export default Ember.Controller.extend({
	status: null,
	
	onSetupController() {
		this.set('status', 'Test started');
		
		setTimeout(() => {
			Ember.run(() => {
				this.set('status', 'Test completed');
			});
			
			Ember.$('.th-hoist').append('<div class="th-new-div"></div>');
		}, 3000);
	}
});