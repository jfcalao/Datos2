var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1300,
    height: 650,
    backgroundColor: '#61210B',     
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {

  }
  
  function create() {}
  
  function update() {}