const canvas = document.getElementById("mycanvas")
const ctx = canvas.getContext("2d")
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000

const numbersOfEnemies = 1000
const enemiesArray = []

let gameFrame =0

class Enemy {
  constructor() {
    this.image = new Image()
    this.image.src = "enemy1.png"
    this.y = Math.random() * canvas.height
   // this.speed = Math.random() * 4 - 2
    this.spritesWidth = 293
    this.spritesHeight = 155
    this.width = this.spritesWidth / 2.5
    this.height = this.spritesHeight / 2.5
    this.x = Math.random() * canvas.width - canvas.width

    this.frame = 0
    this.flapSpeed =Math.floor(Math.random()*3 + 1)
  }

  update() {
    this.x += Math.random()* 5 - 2.5
    this.y += Math.random() * 5 - 2.5
    if(gameFrame% this.flapSpeed ===0){
    this.frame > 4 ? (this.frame = 0) : this.frame++

    }
  }
  draw() {
     //ctx.strokeRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.frame * this.spritesWidth,
      0,
      this.spritesWidth,
      this.spritesHeight,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}
for (let index = 0; index < numbersOfEnemies; index++) {
  enemiesArray.push(new Enemy())
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  enemiesArray.forEach((enemy) => {
    enemy.update()
    enemy.draw()
  })

  requestAnimationFrame(animate)
}
animate()
