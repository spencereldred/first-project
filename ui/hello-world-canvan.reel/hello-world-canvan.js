/**
 * @module ui/hello-world-canvan.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldCanvan
 * @extends Component
 */
exports.HelloWorldCanvan = Component.specialize(/** @lends HelloWorldCanvan# */ {
    constructor: {
        value: function HelloWorldCanvan() {
            this.super();
        }
    },
    
    draw: {
        value: function() {
            var canvas = this.element.querySelector('canvas');
            canvas.getContext("2d").fillText("Hello, World!", 120, 80);
        }
    }
});
