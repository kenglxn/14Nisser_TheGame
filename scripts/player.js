Quintus.Player = function(Q) {
  Q.Sprite.extend("Player", {
    init: function (p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -500,
        speed: 300
      });
      this.add("2d, platformerControls");
    }
  });  
};