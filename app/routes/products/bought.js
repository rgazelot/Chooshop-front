import Ember from "ember";

export default Ember.Route.extend({
    model: function() {
        return this.store.filter('product', function(product) {
            return product.get('isBought');
        });
    },

    renderTemplate: function(controller) {
        this.render('products/index', {controller: controller});
    }
});
