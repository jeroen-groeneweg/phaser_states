'use strict';

define([], function() {
    function Preload() {}

    Preload.prototype = {
        preload: function() {
            console.log('preload');
        },

        create: function() {
            this.game.state.start('main-intro');
        }
    };

    return Preload;
});
