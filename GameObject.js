class GameObject {
  //Properties
  Game;
  Position = new Vector2DPosition();
  Physics = new Physics();
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
    //Draw Object Logic
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.beginPath();
    this.Game.Context.arc(
      this.Position.X + this.Scale,
      this.Position.Y + this.Scale,
      this.Scale,
      0,
      2 * Math.PI);
    this.Game.Context.stroke();
  }

  Update() {
    this.Physics.VelocityY += this.Physics.Gravity;
    this.Position.Y += this.Physics.Friction * this.Physics.VelocityY;
  }

}