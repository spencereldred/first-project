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
   https://cusyup.project.montagestudio.net/ui/main.reel/     value: function Main() {
            this.super();
        }
    },

    handleIncrementAction: {
        value: function (event) {
            var value = Number( this.templateObjects.value.element.textContent );
            this.templateObjects.value.element.textcontent = value + 1;
            
        }
    },

    handleDecrementAction: {
        value: function (event) {
            var value = Number( this.templateObjects.value.element.textContent );
            this.templateObjects.value.element.textcontent = value - 1;
        }
    }

}

});
