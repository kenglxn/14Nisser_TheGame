window.addEventListener('load',function(e) {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    .setup({
      //TODO: 1280x720|320x180
      width: 320, 
      height: 180,
      maximize: true
    })
    .controls()
    .touch();

  Q.setImageSmoothing(false);

  Q.scene("level", function (stage) {
    Q.stageTMX("map.tmx", stage);
  });

  Q.loadTMX("map.tmx", function () {
    Q.stageScene("level");
  });
});