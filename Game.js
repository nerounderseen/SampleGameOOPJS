class Game {
  //Properties
  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  GameObjects = [];
  Gravity = new Gravity();
  Collision = new Collision();
  Controller = new Controller();
  //Methods
  Initialize = () => {
    this.CanvasElement = document.createElement("canvas");
    this.CanvasElement.width = this.Width;
    this.CanvasElement.height = this.Height;
    this.CanvasElement.style.display = "block";
    this.CanvasElement.style.margin = "auto";
    this.CanvasElement.style.border = "1px solid white";
    this.CanvasElement.style.marginTop = "100px";
    document.body.appendChild(this.CanvasElement);

    document.addEventListener("keydown", this.Controller.OnKeyDown, false);
    document.addEventListener("keyup", this.Controller.OnKeyUp, false);

    this.Context = this.CanvasElement.getContext("2d");
    //Player Object
    let circle = new Sphere(this);
    circle.IsStatic = false;
    this.GameObjects.push(circle);
    //Left Platform Object
    let leftPlatform = new Quadrilateral(this);
    leftPlatform.IsStatic = true;
    leftPlatform.Position.X = 0;
    leftPlatform.Position.Y = 718;
    leftPlatform.Height = 50;
    leftPlatform.Width = 400;
    this.GameObjects.push(leftPlatform);
    //Right Platform Object
    let rightPlatform = new Quadrilateral(this);
    rightPlatform.IsStatic = true;
    rightPlatform.Position.X = 624;
    rightPlatform.Position.Y = 418;
    rightPlatform.Height = 50;
    rightPlatform.Width = 400;
    this.GameObjects.push(rightPlatform);
    //FPS Counter
    let fpsCounter = new FPSCounter(this);
    fpsCounter.IsPlatform = false;
    fpsCounter.IsStatic = true;
    fpsCounter.Position.X = 964
    this.GameObjects.push(fpsCounter);

    requestAnimationFrame(() => this.Draw());
    setInterval(() => this.Update(), 6.94);
  }

  ClearDraw = () => {
    this.Context.fillStyle = this.BackgroundColor;
    this.Context.fillRect(0, 0, this.Width, this.Height);
  }

  Draw = () => {
    this.ClearDraw();
    for (let i in this.GameObjects)
      this.GameObjects[i].Draw();;
    requestAnimationFrame(this.Draw);
  }

  Update = () => {
    for (let i in this.GameObjects) {
      this.GameObjects[i].Update();
      this.Gravity.ApplyGravity(this.GameObjects[i]);
      this.Controller.Navigation(this.GameObjects[i])
      this.Collision.CheckIntersect(this.GameObjects);
    }
  }
}