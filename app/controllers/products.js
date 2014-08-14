import Ember from "ember";

export default Ember.ArrayController.extend({
    actions: {
        create: function() {
            var name = this.get('newName');

            if (!name) {
                return;
            }

            if (!name.trim()) {
                return;
            }

            var product = this.store.createRecord('product', {
                name: name
            });

            this.set('newName', '');
            product.save();
        }
    }
});
