class Rocket {
  constructor() {
    this.speed = 100
    this.weight = 100
    this.width = 180
    this.height = 350
    this.acceleration = 0
    this.position = {
      x: canvas.width / 1.4,
      y: canvas.height - this.height - 1
    }
  }

  draw() {
    ctx.fillStyle = "orangered"
    ctx.fillRect(this.position.x,this.position.y - this.acceleration,this.width,this.height)
  }

  update() {
    this.draw()
  }
}
