class GameObject {
  //Properties
  Game;
  Position = new Vector2();
  BoundsColor = Colors.White;
  IsStatic;
  IsColliding = false;
  IsPlatform = true;
  VelocityY = 0;
  VelocityX = 0;

  constructor(g) {
    this.Game = g;
  }
  //Methods
  Draw() {

  }

  Update() {

  }

}