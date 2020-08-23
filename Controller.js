class Controller {
  //Properties
    MoveLeft = false;
    MoveRight = false;
    Jump = false;

  constructor(g) {
    this.Game = g;
  }
  //Methods
  OnKeyDown(e) {
    let keyCode = e.keyCode;
    switch (keyCode) {
      case 65:
        this.MoveLeft = true;
        break;
      case 68:
        this.MoveRight = true;
        break;
      case 32:
        this.Jump = true;
        break;
    }
  }
  OnKeyUp(e) {
    let keyCode = e.keyCode;
    switch (keyCode) {
      case 65:
        this.MoveLeft = false;
        break;
      case 68:
        this.MoveRight = false;
        break;
      case 32:
        this.Jump = false;
        break;
    }
  }

  Navigation(o) {
    if (!o.IsStatic) {
      if (this.Jump) {
        console.log(this.Jump);
        o.VelocityY = -40;
      }
    }
  }
}

/* 
o.VelocityX += 0.2;
o.Position.X = FRICTION * o.VelocityX; */

/* if (this.MoveLeft) {
  o.VelocityX - 0.5;
  o.Position.X = FRICTION * o.VelocityX;
}
else if (this.MoveRight) {
  o.VelocityX + 0.5;
  o.Position.X = FRICTION * o.VelocityX;
}
else if (this.Jump) {
  o.VeloctyY = -40;
}
} */