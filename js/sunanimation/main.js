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
  game.load.image("solarPanel", "./js/sunanimation/solar-panel.svg");
  game.load.image("sun", "./js/sunanimation/sun.svg");
}

var solarPanel;
var orb;
var cursors;

function create() {
  game.stage.backgroundColor = "#add8e6";

  solarPanel = game.add.sprite(
    this.game.width / 2 + 20,
    this.game.height / 2,
    "solarPanel"
  );
  solarPanel.anchor.setTo(0.5, 0.5);

  game.physics.arcade.enable(solarPanel);

  orb = game.add.sprite(this.game.width / 2, this.game.height / 2, "sun");
  orb.anchor.setTo(0.75);
  orb.pivot.x = 150;
}

function update() {
  orb.rotation += 0.01;

  resizeAnimation(this.game);
}

function preRender() {
  orb.x = solarPanel.x;
  orb.y = solarPanel.y;
}

function resizeAnimation(game) {
  game.scale.setGameSize(sunAnimationContainer.offsetWidth, 600);
  solarPanel.x = game.width / 2 + 20;
  solarPanel.y = game.height / 2;
  orb.x = game.width / 2;
  orb.y = game.height / 2;
}
