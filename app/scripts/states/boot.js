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

            this.game.load.image('background', 'assets/background.png');
            this.game.load.image('ground', 'assets/platform.png');
            this.game.load.spritesheet('jeroen', 'assets/jeroen.png', 24, 44);
        },

        create: function() {
            // setup game environment
            this.game.time.advancedTiming = true;

            //  Enable the Arcade Physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            // Preload all the assets
            this.game.state.start('preload');
        }
    };

    return Boot;
});
