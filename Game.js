class Game {
  //Properties
  CanvasElement;
  Context;
  Width = GAME_WIDTH;
  Height = GAME_HEIGHT;
  BackgroundColor = Colors.CornFlowerBlue;
  DeltaST = 0;
  PrevMST = moment().valueOf();
  Player;
  FPSCounter;

  GameObjects = [];
  //Methods
  Initialize = () => {
    this.AppendControls();
    this.CanvasElement = document.createElement("canvas");
    this.CanvasElement.width = this.Width;
    this.CanvasElement.height = this.Height;
    this.CanvasElement.style.display = "block";
    this.CanvasElement.style.margin = "auto";
    this.CanvasElement.style.border = "1px solid white";
    this.CanvasElement.style.marginTop = "100px";
    document.body.appendChild(this.CanvasElement);

    this.Context = this.CanvasElement.getContext("2d");
    //Player
    this.Player = new Player(this);
    this.Player.IsStatic = false;
    this.Player.Position.X = 424;
    this.Player.Height = 100;
    this.Player.Width = 100;
    this.GameObjects.push(this.Player);

    //Main Platform
    let platform1 = new GameObject(this);
    platform1.IsStatic = true;
    platform1.Position.X = 124;
    platform1.Position.Y = 718;
    platform1.Height = 50;
    platform1.Width = 724;
    this.GameObjects.push(platform1);

    //Second Platform
    let platform2 = new GameObject(this);
    platform2.IsStatic = true;
    platform2.Position.X = 124;
    platform2.Position.Y = 618;
    platform2.Height = 50;
    platform2.Width = 524;
    this.GameObjects.push(platform2);

    //FPS Counter
    this.FPSCounter = new FPSCounter(this);
    this.FPSCounter.IsStatic = true;
    this.FPSCounter.Position.X = 964
    this.GameObjects.push(this.FPSCounter);

    requestAnimationFrame(() => this.Draw());
    setInterval(() => this.Update(), 6.94);
  }

  AppendControls() {
    document.addEventListener("keydown", (e) => {
      let keyCode = e.keyCode;
      switch (keyCode) {
        case 65:
          if (this.Player.Velocity.X > -X_MAX_SPEED)
            this.Player.MoveLeft();
          break;
        case 68:
          if (this.Player.Velocity.X < X_MAX_SPEED)
            this.Player.MoveRight();
          break;
        case 32:
          if (!this.Player.IsJumping)
            this.Player.Jump();
          break;
      }
    });
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
    let currentMST = moment().valueOf();
    this.DeltaST = (currentMST - this.PrevMST) / 1000;
    this.PrevMST = currentMST;

    for (let i in this.GameObjects) {
      this.GameObjects[i].Update(this.DeltaST);
    }

    for (let i in this.GameObjects) {
      for (let j in this.GameObjects) {
        if (this.GameObjects[i] != this.GameObjects[j] && this.FPSCounter != this.GameObjects[j])
          this.GameObjects[i].CollidesWith(this.GameObjects[j]);
          console.log(this.GameObjects[i]);
      }
    }
  }

}