'use strict';

require.config({
    paths: {
        phaser: 'phaser.min',
        requirejs: 'require',
        'phaser-official': ''
    },
    shim: {
        phaser: {
            exports: 'Phaser'
        }
    }
});

require(['phaser', 'app'], function (Phaser, App) {
    var app = new App();
    app.start();
});
