let sunAnimationContainer = document.querySelector("#sunanimation-container");

var game = new Phaser.Game(
  sunAnimationContainer.offsetWidth,
  600,
  Phaser.CANVAS,
  "sunanimation-container",
  {
    preload: preload,
    create: create,
    update: update,
  }
);

function preload() {
  game.load.image("ship", "./js/sunanimation/ship.png");
  game.load.image("sun", "./js/sunanimation/sun.png");

  this.gameWidth = this.game.width;
  this.gameHeight = this.game.height;
}

var ship;
var orb;
var cursors;

function create() {
  game.stage.backgroundColor = "#001255";

  ship = game.add.sprite(this.gameWidth / 2, this.gameHeight / 2, "ship");
  ship.anchor.setTo(0.5, 0.5);

  game.physics.arcade.enable(ship);

  orb = game.add.sprite(this.gameWidth / 2, this.gameHeight / 2, "sun");
  orb.anchor.setTo(0.5);
  orb.pivot.x = 100;
}

function update() {
  orb.rotation += 0.02;

  resizeAnimation(this.game);
}

function preRender() {
  orb.x = ship.x;
  orb.y = ship.y;
}

function resizeAnimation(game) {
  game.scale.setGameSize(sunAnimationContainer.offsetWidth, 600);
  ship.x = game.width / 2;
  ship.y = game.height / 2;
  orb.x = game.width / 2;
  orb.y = game.height / 2;
}
