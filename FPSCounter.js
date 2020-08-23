class FPSCounter extends GameObject {
  //Properties
  CurrentFPS = 0;
  LastFPS = 0;
  LastFPSDate = moment().valueOf();
  Interval = 1000;
  FontSize = 30

  constructor(g) {
    super(g);
    this.Position.X = 0;
    this.Position.Y = 0;
  }
  //Methods
  Draw() {
    this.CurrentFPS++;
    const currentMoment = moment().valueOf();
    if (currentMoment - this.LastFPSDate >= this.Interval) {
      this.LastFPSDate = currentMoment;
      this.LastFPS = this.CurrentFPS;
      this.CurrentFPS = 0;
    }

    this.Game.Context.font = `${this.FontSize}px Verdana`;
    this.Game.Context.fillStyle = Colors.Lime;
    this.Game.Context.fillText(this.LastFPS, this.Position.X, this.Position.Y + this.FontSize);

    super.Draw();
  }

  Update() {
    super.Update();
  }

}