class Collision {
  //Properties
  constructor(g) {
    this.Game = g;
  }
  //Methods
  CheckIntersect(o) {
    let PlayerObject;
    let PlatformObject;
    PlayerObject = o[0];
    for (let i = 0; i < o.length; i++) {
      o[i].IsColliding = false;
      for (let j = i + 1; j < o.length; j++) {
        PlatformObject = o[j];
        if (o[j].IsPlatform) {
          if (this.DetectCollision(PlayerObject, PlatformObject)) {
            PlayerObject.Position.Y = PlatformObject.Position.Y - PlatformObject.Height - PlayerObject.Scale;
            PlayerObject.IsOnGround = true;
          }
        }
      }
    }
  }

  DetectCollision(o, i) {
    if ((o.Position.Y + o.Scale < i.Position.Y - i.Height) || ((o.Position.X + o.Scale < i.Position.X) || (o.Position.X < o.Width))) {
      return false;
    }
    return true;
  }
}