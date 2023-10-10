window.addEventListener('load', () => {
	const startBtn = document.getElementById('start-button')

	startBtn.addEventListener('click', () => {
		Game.init()
	})
})
