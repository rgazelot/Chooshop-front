import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
        bought: function() {
            var product = this.get('model');
            product.set('isBought', true);
            product.save();
        }
    }
});
