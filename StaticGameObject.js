class StaticGameObject{
  //Properties
  Game;
  Position = new Vector2DPosition();
  BoundsColor = Colors.White;

  constructor(g) {
    this.Game = g;
  }

  Draw() {
    //Draw Object Logic
    this.Game.Context.strokeStyle = this.BoundsColor;
    this.Game.Context.strokeRect(
      this.Position.X,
      this.Position.Y,
      this.Width,
      this.Height);
      console.log(this.Position.X,);
  }

  Update() {
  }
}