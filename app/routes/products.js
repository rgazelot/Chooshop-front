import Ember from "ember";

export default Ember.Route.extend({
    model: function() {
        // return this.store.find('product');
        return this.store.filter('product', function(product) {
            console.log(product);
            return true;
        });
    },

    renderTemplate: function(controller) {
        this.render('products', {controller: controller});
    }
});
