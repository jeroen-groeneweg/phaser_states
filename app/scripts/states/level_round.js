'use strict';

define([], function() {
    function LevelRoundState() {}

    var level;
    var player;

    LevelRoundState.prototype = {
        init: function(levelData) {
            this.levelData = levelData;
        },
        
        create: function() {
            console.log('game round started - press enter to end!');

            level = new Level(this.game);
            player = new Player(this.game, 100, 100);

            this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            this.enterKey.onDown.add(this.roundEnd, this);

            this.game.camera.follow(player.getPlayerSprite());
        },

        update: function()
        {
            // Check for collision between player and level
            this.game.physics.arcade.collide(player.getPlayerSprite(), level.getLevelSprite());

            // Update the player movement
            player.update();
        },

        render: function()
        {
            // Show camera info
            this.game.debug.cameraInfo(this.game.camera, 32, 32);

            // Show FPS
            this.game.debug.text(this.game.time.fps || '--', 2, 14, "#eeffee");
        },

        roundEnd: function() {
            this.nextRound();
        },

        nextRound: function() {
            this.game.state.start('level-master', true, false, this.levelData);
        }
    };

    return LevelRoundState;
});
