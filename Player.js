class Player extends GameObject {
  //Properties
  IsMovingLeft = false;
  IsMovingLeft = false;
  IsJumping = false;

  constructor(g) {
    super(g)
  }
  //Methods
  MoveLeft() {
    this.Velocity.X -= 0.5;
  }

  MoveRight() {
    this.Velocity.X += 0.5;
  }

  Jump() {
    this.Velocity.Y += -800;
    this.IsCollided = false;
    this.IsJumping = true;
  }

}