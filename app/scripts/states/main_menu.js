'use strict';

define(['phaser'], function(Phaser) {
    function MainMenuState() {}

    var btn_start_game;

    MainMenuState.prototype = {
        create: function() {
            console.log('menu - press enter');

            // Add start button to start the game
            btn_start_game = this.game.add.button(this.game.world.centerX - 95, 400, 'btn_start_game', this.tweenPlayState, this, 2, 1, 0);

            // Also assign the enter key to start the game
            this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            this.enterKey.onDown.add(this.tweenPlayState, this);
        },

        tweenPlayState: function() {
            var tweenMenuShrink = this.game.add.tween({})
                    .to({x: 0, y: 0}, 200);

            var tweenFadeIn = this.game.add.tween({})
                    .to({alpha: 1}, 1000);

            tweenFadeIn.onComplete.add(function() {
                this.game.state.start('level-master');
            }, this);

            tweenMenuShrink.chain(tweenFadeIn);
            tweenMenuShrink.start();
        }
    };

    return MainMenuState;
});
