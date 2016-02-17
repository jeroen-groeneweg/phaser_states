'use strict';

define([], function() {
    function Boot() {}

    Boot.prototype = {
        preload: function() {
            // Set default values
            this.game.stage.backgroundColor = '#fff';

            // load preloader assets
            this.game.load.image('rgb_logo', 'assets/rgb_logo.png');
            this.game.load.image('btn_start_game', 'assets/button_start_game.png');

            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('ground', 'assets/platform.png');
            this.game.load.image('star', 'assets/star.png');
            this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        },

        create: function() {
            // setup game environment

            //  Enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // Preload all the assets
            this.game.state.start('preload');
        }
    };

    return Boot;
});
