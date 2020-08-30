class GameObject {
  //Properties
  Game;
  Position = new Vector2D();
  Velocity = new Vector2D();
  Restitution = 0.75;
  BoundsColor = Colors.White;
  IsStatic = false;
  IsCollided = false;
  Width = 0;
  Height = 0;

  constructor(g) {
    this.Game = g;
  }
  //Methods
  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Position.X,
      this.Position.Y,
      this.Width,
      this.Height);
  }

  Update(deltaST) {
    this.BoundsColor = this.IsCollided ? Colors.Red : Colors.White;
    if (!this.IsStatic) {
      if (!this.IsCollided) {
        this.Velocity.Y += SCALED_GRAVITY * deltaST;
      }
      else {
        this.Velocity.Y = -this.Velocity.Y * this.Restitution;
      }

      this.Position.Y += this.Velocity.Y * deltaST;

      this.Velocity.X *= FRICTION;
      this.Position.X += this.Velocity.X * FRICTION;
    }
  }

  CollidesWith(otherObject) {
    if (otherObject.Position.X > this.Width + this.Position.X ||
      this.Position.X > otherObject.Width + otherObject.Position.X ||
      otherObject.Position.Y > this.Height + this.Position.Y ||
      this.Position.Y > otherObject.Height + otherObject.Position.Y) {
      this.IsCollided = false;
    }
    else {
      this.IsCollided = true;
    }
  }

}