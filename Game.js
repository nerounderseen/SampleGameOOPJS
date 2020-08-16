class Game {
  //Properties
  CanvasElement;
  Context;
  DisplayWidth = GAME_WIDTH;
  DisplayHeight = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  GameObjects = [];


  Initialize = () => {
    this.CanvasElement = document.createElement("canvas");
    this.CanvasElement.width = this.DisplayWidth;
    this.CanvasElement.height = this.DisplayHeight;
    this.CanvasElement.style.display = "block";
    this.CanvasElement.style.margin = "auto";
    this.CanvasElement.style.border = "1px solid white";
    this.CanvasElement.style.marginTop = "100px";
    document.body.appendChild(this.CanvasElement);

    this.Context = this.CanvasElement.getContext("2d");

    //FPS Counter
    let fpsCounter = new FPSCounter(this);
    this.GameObjects.push(fpsCounter);

    //Ball Object
    let circle = new GameObject(this);
    circle.Scale = 50;
    this.GameObjects.push(circle);

    //Left Platform Object
    let leftPlatform = new StaticGameObject(this);
    leftPlatform.Position.X = 0;
    leftPlatform.Position.Y = 718;
    leftPlatform.Height = 50;
    leftPlatform.Width = 400;
    this.GameObjects.push(leftPlatform);

    //Right Platform Object
    let rightPlatform = new StaticGameObject(this);
    rightPlatform.Position.X = 624;
    rightPlatform.Position.Y = 418;
    rightPlatform.Height = 50;
    rightPlatform.Width = 400;
    this.GameObjects.push(rightPlatform);

    requestAnimationFrame(() => this.Draw());
    setInterval(() => this.Update(), 6.94);
  }

  ClearDraw = () => {
    //Reset/Redraw Canvas Layer
    this.Context.fillStyle = this.BackgroundColor;
    this.Context.fillRect(0, 0, this.DisplayWidth, this.DisplayHeight);
  }

  Draw = () => {
    this.ClearDraw();

    for (let i in this.GameObjects)
      this.GameObjects[i].Draw();

    requestAnimationFrame(this.Draw);
  }

  Update = () => {

    for (let i in this.GameObjects)
      this.GameObjects[i].Update();

  }
}

