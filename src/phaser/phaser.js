import phaser from "phaser";
import logo from "../assets/logo.png";

var config = {
  type: phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

let game = new phaser.Game(config);

function preload() {
  this.load.image("logo", logo);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}

export { game };
