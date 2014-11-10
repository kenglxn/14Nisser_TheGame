Quintus.Enemy = function(Q) {

  Q.component("commonEnemy", {
    added: function () {
      var entity = this.entity;
      entity.on("bump.left, bump.right, bump.bottom", function (collision) {
        if (collision.obj.isA("Player")) {
          console.log("player damage");
        }
      });
      entity.on("bump.top", function (collision) {
        if (collision.obj.isA("Player")) {
          collision.obj.p.vy = -250;
          this.destroy();
        }
      });
    }
  });
  
  Q.Sprite.extend("Enemy", {
    init: function (p) {
      this._super(p, { vx: -100, defaultDirection: "right" });
      this.add("2d, aiBounce, commonEnemy");
    }
  });

};