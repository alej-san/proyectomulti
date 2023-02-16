var game = new Phaser.Game(1500, 600, Phaser.CANVAS, "phaser-example", {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  game.load.image("ship", "./js/sunanimation/ship.png");
  game.load.image("sun", "./js/sunanimation/sun.png");
}

var ship;
var orb;
var cursors;

function create() {
  game.stage.backgroundColor = "#001255";

  ship = game.add.sprite(400, 300, "ship");
  ship.anchor.setTo(0.5, 0.5);

  game.physics.arcade.enable(ship);

  orb = game.add.sprite(400, 300, "sun");
  orb.anchor.setTo(0.5);
  orb.pivot.x = 100;

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  ship.body.velocity.x = 0;
  ship.body.velocity.y = 0;

  if (cursors.left.isDown) {
    ship.body.velocity.x = -300;
  } else if (cursors.right.isDown) {
    ship.body.velocity.x = 300;
  }

  if (cursors.up.isDown) {
    ship.body.velocity.y = -300;
  } else if (cursors.down.isDown) {
    ship.body.velocity.y = 300;
  }

  orb.rotation += 0.05;
}

function preRender() {
  orb.x = ship.x;
  orb.y = ship.y;
}
