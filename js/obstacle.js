class Obstacle {
    constructor(ctx, canvasW, playerH, canvasH) {
        this.ctx = ctx;
        this.canvasW = canvasW;
        this.canvasH = canvasH;
        this.w = 100;
        this.h = 120;
        this.img = new Image();
        this.img.src = 'assets/car.png';
        this.x = Math.floor(Math.random() * (canvasW - this.w));
        this.y = canvasH - 250; 
        this.dy = 5;
    }
	getCollisionRect() {
       
        return {
            x: this.x,
            y: this.y,
            width: this.w-50,
            height: this.h-119.5,
        };
    }
    draw() {
        this.ctx.save();
        this.ctx.scale(1, -1);
        this.ctx.drawImage(this.img, this.x, -this.y, this.w, this.h); 
        this.ctx.restore(); 
    }

    move() {
        this.y += this.dy;
    }
}
