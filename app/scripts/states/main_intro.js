'use strict';

define(['phaser'], function(Phaser) {
    function MainIntroState() {}

    var rgb_logo;

    MainIntroState.prototype = {
        create: function() {
            console.log('start intro');
            this.showLogo();
        },

        showLogo: function() {
            rgb_logo = this.game.add.sprite(10, 100, 'rgb_logo');
            this.tweenFadeState();
        },

        tweenFadeState: function() {
            this.game.add.tween(rgb_logo.scale)
                .to( { x: 2, y: 2 }, 1000, Phaser.Easing.Linear.None, true)
                .onComplete.add(function() {
                this.game.state.start('main-menu');
            }, this);
        }


    };

    return MainIntroState;
});
