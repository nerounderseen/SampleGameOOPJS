class Gravity {
  //Properties
  constructor(g) {
    this.Game = g;
  }

  //Methods
  ApplyGravity(o) {
    if (!o.IsStatic) {
      o.VelocityY += GRAVITY;
      o.Position.Y += SPEED_Y * o.VelocityY;
    }
  }
}