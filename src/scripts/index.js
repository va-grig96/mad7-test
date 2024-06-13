const gridContainer = document.querySelector('.grid')

if (gridContainer) {
	const grideElems = gridContainer.querySelectorAll('.grid__elem')
	var elemHeight,
			valueRandom = []

	const getRandomInt = (max) => {
		return (Math.random() * max).toFixed(3)
	}

	const valueRandomChange = () => {
		for (let index = 0; index < grideElems.length - 1; index++) {
			valueRandom[index] = getRandomInt(3)
		}
	}

	const elemHeightChange = () => {
		grideElems.forEach((element, index) => {
			elemHeight = element.getBoundingClientRect().width.toFixed(2)
			

			element.setAttribute('style', `height: ` + elemHeight + `px; animation-delay: ` + valueRandom[index] + `s;`)
		})
	}

	
	valueRandomChange()
	elemHeightChange()
	

	window.addEventListener('resize', () => {
		elemHeightChange()
	})
	
}