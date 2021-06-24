class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('rocket','./assets/rocket.png');
        this.load.image('spaceship','./assets/rocket.png');
        this.load.image('starfield','./assets/rocket.png');
    }
    create() {
        this.add.text(20, 20, "Rocket Patrol Play");

        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0,0);

        //green UI background

        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);

        this.add.rectangle(0, 0, game.config.width, borderUISize,0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, 0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(0, 0, game.config.width - borderUISize, 0).setOrigin(0,0)

    }
    update() {
        this.starfield.tilePositionX -= 4;
    }
}