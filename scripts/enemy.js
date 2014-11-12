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
    },
    step: function (dt) {
      var dirX = this.p.vx / Math.abs(this.p.vx);
      var ground = Q.stage().locate(this.p.x, this.p.y +  this.p.h/2 + 1, Q.SPRITE_DEFAULT);
      var nextElement = Q.stage().locate(this.p.x + dirX * this.p.w/2 + dirX, this.p.y +  this.p.h/2 + 1, Q.SPRITE_DEFAULT);
      var nextTile;
      if (nextElement instanceof Q.TileLayer) {
        nextTile = true;
      }
      if (!nextTile && ground) {
        if ((dirX > 0 && this.p.defaultDirection === "right") || (dirX < 0 && this.p.defaultDirection === "left")) {
          this.p.flip = "x";
        } else {
          this.p.flip = false;
        }
        this.p.vx = -this.p.vx;
      }
    }
  });

};