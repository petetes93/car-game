class Car {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx;
		this.canvasW = canvasW;
		this.canvasH = canvasH;
		this.keys = keys;
		this.img = new Image();
		this.img.src = 'assets/ambulance.png'; 
		this.w = 100;
		this.h = 120;
		this.x = canvasW * 0.08;
		this.y = canvasH * 0.8;
		this.vx = 5;
		this.actions = {
			right: false,
			left: false,
		};
		this.frameIndex = 0;
		this.frames = 3;
		this.frameWidth = this.img.width / this.frames;
		this.frameHeight = this.img.height;
		this.frameCounter = 0;
		this.setControls();
	}

	setControls() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
					this.actions.right = true;
					break;

				case this.keys.LEFT:
					this.actions.left = true;
					break;
			}
		});

		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
					this.actions.right = false;
					break;

				case this.keys.LEFT:
					this.actions.left = false;
					break;
			}
		});
	}

	draw() {
		this.ctx.drawImage(
			this.img,
			this.frameIndex * this.frameWidth,
			0,
			this.frameWidth,
			this.frameHeight,
			this.x,
			this.y,
			this.w,
			this.h
		);
	}

	animateSprite() {
		this.frameCounter++;

		if (this.frameCounter % 6 === 0) {
			this.frameIndex++;

			if (this.frameIndex >= this.frames) {
				this.frameIndex = 0;
			}
		}
	}

	move() {
		this.animateSprite();

		if (this.actions.right) {
			if ( this.x < 393){
			this.x += this.vx
			}
		
		}
		if (this.actions.left) {
			if ( this.x > 10){
				this.x -= this.vx
				}

		
		}
	}
}
