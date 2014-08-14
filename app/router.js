import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ChooshopFrontENV.locationType
});

Router.map(function() {
    this.resource('products', {path: '/'}, function() {

    });
});

export default Router;
