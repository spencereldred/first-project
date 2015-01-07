/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleIncrementAction: {
        value: function (event) {
            console.log("increment handler");
            console.log(this);
            console.log(this.templateObjects);
            var value = Number( this.templateObjects.value.value );
            this.templateObjects.value.value = value + 1;
            
        }
    },

    handleDecrementAction: {
        value: function (event) {
            console.log("decrement handler");
            var value = Number( this.templateObjects.value.value );
            this.templateObjects.value.value = value - 1;
        }
    }

});
