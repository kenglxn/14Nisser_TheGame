Quintus.Player = function(Q) {
  Q.Sprite.extend("Player", {
    init: function (p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -550,
        speed: 250
      });
      this.add("2d, platformerControls");
    }
  });  
};