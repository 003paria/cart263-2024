/**
A  scene to display the Game Over image after 
one of the bugs finally reaches the right side of the screen. 
*/

class Lose extends Phaser.Scene {
  // Just sets the scene's key name
  constructor() {
    super({
      key: `lose`
    });
  }

  create(data) {
    // Add game over image
    this.add.image(0, 0, 'gameover').setOrigin(0);
    
    // Access the score from the data
    let score = data.score;
    console.log(score);
    
    // Display the score
    this.add.text(10, 10, `Final Score: ${score}`, { fontSize: '32px', fill: '#FFF' });
  }
}
