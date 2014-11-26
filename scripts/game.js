window.addEventListener('load',function(e) {
  var ww = window.innerWidth, 
        wh = window.innerHeight,
        landscape = ww > wh ,
        controls = [['left','<' ],['right','>' ],[],['action','^']],
        Q = window.Q = Quintus({development: true});
    
    Q.include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
      .include("Player, Enemy")
      .setup({
        width:   landscape ? ww : ww / 2,
        height:  landscape ? window.innerHeight : window.innerHeight / 2,
        scaleToFit: true
      });

  if (landscape) {
    controls = [['left','<' ],['right','>' ],[],[],[],[],[],['action','^']];
  }
  // for this to take effect, can not call controls() ^^
  Q.input.touchControls({controls:  controls});
  Q.input.keyboardControls();

  Q.setImageSmoothing(false);

  Q.scene("level1", function (stage) {
    var player;
    Q.stageTMX("map.tmx", stage);

    player = Q("Player").first();
    stage.add("viewport").follow(player, { x: true, y: true});


  });

  Q.loadTMX("map.tmx, sprites.json, spritesheet.png", function () {
    Q.compileSheets("spritesheet.png", "sprites.json");
    Q.stageScene("level1");
  });
});