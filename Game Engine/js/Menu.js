/**
A  scene to display the menu that displays the keywords related to each bug 
before switching to the "Play" scene.
*/

class Menu extends Phaser.Scene {

  // Just sets the scene's key name
  constructor() {
    super({
      key: `menu`
    });
  }

  create() {

    // Add intro background image
    this.add.image(0, 0, 'menu').setOrigin(0);    

    // Listen for keyboard input
    this.input.keyboard.once('keydown-ENTER', () => {
      // Switch to the play scene
      this.scene.start(`play`);
    });

  }
}