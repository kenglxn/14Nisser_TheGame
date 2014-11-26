Quintus.Player = function(Q) {
  Q.Sprite.extend("Player", {
    init: function (p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -400,
        speed: 200
      });
      this.add("2d, platformerControls");
    }
  });  
};