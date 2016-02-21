Player = function(game, x, y)
{
	this.game = game;
	this.x = x;
	this.y = y;

	this.playerFrames = {
		'standLeft': 3,
		'standRight': 9,
		'jumpLeft': 4,
		'jumpRight': 10,
		'duckLeft': 5,
		'duckRight': 11
	};

	this.player = null;
	this.cursor = null;

	this.direction = null;

	this.init();

	return this;
};

Player.prototype.init = function()
{
	this.cursors = this.game.input.keyboard.createCursorKeys();

	// The player and its settings
	this.player = this.game.add.sprite(this.x, this.y, 'jeroen');

	//  We need to enable physics on the player
	this.game.physics.arcade.enable(this.player);
	this.game.physics.arcade.enableBody(this.player);

	// Specify the speed increase and decrease of the player
//	this.player.body.drag.set(900, 0);
	this.player.body.maxVelocity.set(450, 750);

	//  Player physics properties. Give the little guy a slight bounce.
	this.player.body.gravity.y = 1600;
	this.player.body.collideWorldBounds = true;

	//  Our two animations, walking left and right.
	this.player.animations.add('left', [0, 1, 2], 20, true);
	this.player.animations.add('right', [6, 7, 8], 20, true);
};

Player.prototype.getPlayerSprite = function() {
	return this.player;
};

Player.prototype.resetMovement = function()
{
	if(this.player.body.velocity.x >= 10 && this.player.body.velocity.x <= 10)
	{
		this.player.body.velocity.x = 0;
	}

	if(this.player.body.velocity.x > 0)
	{
		this.player.body.velocity.x = this.player.body.velocity.x - 10;
	}

	if(this.player.body.velocity.x < 0)
	{
		this.player.body.velocity.x = this.player.body.velocity.x + 10;
	}
};

Player.prototype.update = function()
{
	this.resetMovement();

	// Only allow to duck when on the ground
	if (this.cursors.down.isDown && this.player.body.touching.down)
	{
		this.duck();
	}
	else if (this.cursors.left.isDown)
	{
		this.moveLeft();
	}
	else if (this.cursors.right.isDown)
	{
		this.moveRight();
	}
	else
	{
		this.standStill();
	}

	// Only allow to jump when on the ground
	if (this.cursors.up.isDown && this.player.body.touching.down)
	{
		this.jump();
	}

	// If the player is not touching the ground, show jump sprite
	if( ! this.player.body.touching.down)
	{
		this.jumping();
	}
};

Player.prototype.moveLeft = function()
{
	this.player.body.velocity.x = this.player.body.velocity.x -30;

	this.direction = 'left';

	this.player.animations.play('left');
};

Player.prototype.moveRight = function()
{
	this.player.body.velocity.x = this.player.body.velocity.x +30;

	this.direction = 'right';

	this.player.animations.play('right');
};

Player.prototype.standStill = function()
{
	this.player.animations.stop();
	this.player.frame = this.direction === 'left' ? this.playerFrames.standLeft : this.playerFrames.standRight;
};

Player.prototype.jump = function()
{
	this.player.body.drag.set(0);
	this.player.body.velocity.y = -750;
	this.player.frame = this.direction === 'left' ? this.playerFrames.jumpLeft : this.playerFrames.jumpRight;
};

Player.prototype.jumping = function()
{
	this.player.frame = this.direction === 'left' ? this.playerFrames.jumpLeft : this.playerFrames.jumpRight;
};

Player.prototype.duck = function()
{
	this.player.animations.stop();
	this.player.frame = this.direction === 'left' ? this.playerFrames.duckLeft : this.playerFrames.duckRight;
};