import DS from "ember-data";

var Product = DS.Model.extend({
    name: DS.attr('string'),
    isBought: DS.attr('boolean', { defaultValue: false })
});

export default Product;
