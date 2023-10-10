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
		this.car = new Car(this.ctx, this.canvasW, this.canvasH, this.keys, this.img);

		this.start();
	},

	start: function () {
		this.intervalId = setInterval(() => {
			this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
			this.background.draw();
			this.car.move();
			this.car.draw();
		}, 1000 / this.fps);
	},
};


