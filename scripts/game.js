window.addEventListener('load',function(e) {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    .include("Player")
    .setup({
      //TODO: 1280x720|320x180
      width: 320, 
      height: 180,
      maximize: true
    })
    .controls()
    .touch();

  // for this to take effect, can not call controls() ^^
  Q.input.touchControls({
    controls:  [ 
      ['left','<' ],
      ['right','>' ],
      [],
      ['action','^']
     ]
  });

  Q.setImageSmoothing(false);

  Q.scene("level", function (stage) {
    Q.stageTMX("map.tmx", stage);
  });

  Q.loadTMX("map.tmx, sprites.json, spritesheet.png", function () {
    Q.compileSheets("spritesheet.png", "sprites.json");
    Q.stageScene("level");
  });
});