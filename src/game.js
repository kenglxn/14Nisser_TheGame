window.addEventListener('load',function(e) {
  var Q = window.Q = Quintus()
    .include("Sprites, Scenes, 2D, Input, Touch, UI, TMX, Audio")
    .setup({
      width: 1280,
      height: 720,
      scaleToFit: true
    });

  Q.setImageSmoothing(false);


  // game stuff
});