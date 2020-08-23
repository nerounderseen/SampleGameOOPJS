class Sphere extends GameObject {
  //Properties
  constructor(g) {
    super(g);
    this.IsOnGround = false;
    this.Radius = 50;
    this.Scale = 1 * this.Radius;
    this.Position.X = 0;
    this.Position.Y = 0;
  }
  //Methods
  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.beginPath();
    this.Game.Context.arc(
      this.Position.X + this.Scale,
      this.Position.Y + this.Scale,
      this.Scale,
      0,
      2 * Math.PI);
    this.Game.Context.stroke();
    super.Draw();
  }
  Update() {

  }

}