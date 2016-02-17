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

            this.enterKey = this.game.input.keyboard
                .addKey(Phaser.Keyboard.ENTER);

            this.game.time.advancedTiming = true;

            this.enterKey.onDown.add(this.roundEnd, this);
        },

        update: function()
        {
            // Set collision for player and level
            this.game.physics.arcade.collide(player.player, level.level);

            // Show FPS
            this.game.debug.text(this.game.time.fps || '--', 2, 14, "#eeffee");

            player.update();


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
