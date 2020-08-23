class Quadrilateral extends GameObject {
  //Properties
  constructor(g) {
    super(g);
    this.Width = 0;
    this.Height = 0;
    this.Position.X = 0;
    this.Position.Y = 0;
  }
  //Methods
  Draw() {
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Position.X,
      this.Position.Y,
      this.Width,
      this.Height);
      super.Draw();
  }
  Update() {

  }

}