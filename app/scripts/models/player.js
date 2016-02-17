function Player(game, x, y) {

	this.game = game;
	this.x = x;
	this.y = y;

	this.player = null;
	this.cursor = null;

	this.init();

	return this;
}
Player.prototype = {
	init: function()
	{
		this.cursors = this.game.input.keyboard.createCursorKeys();

		// The player and its settings
		this.player = this.game.add.sprite(this.x, this.y, 'dude');

		//  We need to enable physics on the player
		this.game.physics.arcade.enable(this.player);

		//  Player physics properties. Give the little guy a slight bounce.
		this.player.body.bounce.y = 0;
		this.player.body.gravity.y = 1600;
		this.player.body.collideWorldBounds = true;

		//  Our two animations, walking left and right.
		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);
	},

	update: function()
	{
		this.player.body.velocity.x = 0;

		if (this.cursors.left.isDown)
		{
			//  Move to the left
			this.player.body.velocity.x = -450;

			this.player.animations.play('left');
		}
		else if (this.cursors.right.isDown)
		{
			//  Move to the right
			this.player.body.velocity.x = 450;

			this.player.animations.play('right');
		}
		else
		{
			//  Stand still
			this.player.animations.stop();

			this.player.frame = 4;
		}

		//  Allow the player to jump if they are touching the ground.
		if (this.cursors.up.isDown && this.player.body.touching.down)
		{
			this.player.body.velocity.y = -750;
		}
	}
};