class Obstacle {
    constructor(ctx, canvasW, playerY, playerH){
        this.ctx = ctx
		this.canvasW = canvasW

		this.w = 20
		this.h = 50

        this.img.src = 'assets/car.png';

		this.x = canvasW
		this.y = playerY + playerH - this.h

		this.dx = 10

    }

    draw() {
		this.ctx.drawImage();
	}

    move() {
		this.x -= this.dx
	}
}