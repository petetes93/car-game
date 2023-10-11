const Game = {
	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	fps: 60,
	keys: {
		RIGHT: 'KeyD',
		LEFT: 'KeyA',
	},

	init: function () {
		console.log('Test');
		const canvas = document.querySelector('canvas');
		this.ctx = canvas.getContext('2d');

		this.canvasW = canvas.width;
		this.canvasH = canvas.height;

		this.reset();
		
	},

	reset: function () {
		console.log('Reset');
		this.background = new Background(this.ctx, this.canvasW, this.canvasH);
		this.car = new Car(this.ctx, this.canvasW, this.canvasH, this.keys);
		this.obstacles = []
		this.start();
	},

	start: function () {
		this.frameCounter = 0
		this.intervalId = setInterval(() => {
			this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
			this.background.draw();
			this.car.move();
			this.car.draw();
			if (this.frameCounter % 50 === 0) {
				this.generateObstacle()
			}
			if (this.isCollision()) {
				// this.gameOver()
			}
			this.clearObstacles()
			console.log(this.obstacles)
		}, 1000 / this.fps);
	},

	gameOver: function () {
		// para el intervalo que implementa el loop de animación
		clearInterval(this.intervalId)

		if (confirm('GAME OVER! ¿Volver a jugar?')) {
			this.reset()
		}
	},

	generateObstacle: function () {
		this.obstacles.push(
			new Obstacle(this.ctx, this.canvasW, this.player.h)
			
		)
		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
		})
	},

	isCollision: function () {
		return this.obstacles.some(
			(obstacle) =>
				obstacle.x + 10 < this.player.x + this.player.w &&
				obstacle.x + obstacle.w > this.player.x &&
				obstacle.y + obstacle.h > this.player.y &&
				obstacle.y < this.player.y + this.player.h
		)
	},

	clearObstacles: function () {
		this.obstacles = this.obstacles.filter(
			(obstacle) => obstacle.x + obstacle.w > 0
		)
	},

	clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},
}
