function Level(game) {

	this.game = game;
	this.level = null;

	this.init();

	return this;
}
Level.prototype = {
	init: function()
	{
		//  A simple background for our game
		this.game.add.sprite(0, 0, 'sky');

		//  The platforms group contains the ground and the 2 ledges we can jump on
		this.level = this.game.add.group();

		//  We will enable physics for any object that is created in this group
		this.level.enableBody = true;

		// Here we create the ground.
		var ground = this.level.create(0, this.game.world.height - 64, 'ground');

		//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
		ground.scale.setTo(2, 2);

		//  This stops it from falling away when you jump on it
		ground.body.immovable = true;

		//  Now let's create two ledges
		var ledge = this.level.create(400, 400, 'ground');

		ledge.body.immovable = true;

		ledge = this.level.create(-150, 250, 'ground');

		ledge.body.immovable = true;
	},

	update: function()
	{

	}
};

