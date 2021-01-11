const guessGenerator = document.querySelector('.generate')
		guessGenerator.addEventListener("click", () => {
		let guess = []
		const minimum = 1
		const maximum = 60
	
    function randInt(min, max) {
        let num = Math.random() * (max - min) + min
        return Math.floor(num)
	}
	
    function sortNumbers(number1, number2) {
        return (number1 - number2)
	}
	
    let cont = 0
    while (guess.length < 6) {
        let ball = randInt(minimum, maximum)

        if (guess.indexOf(ball) === -1) {
            guess.push(ball)
            cont++
        }   
    }
    guess.sort(sortNumbers)
    
    for (i = 0; i < guess.length; i++) {
        
        let ball = document.querySelector(`#ball${i}`)
        let alertFlag = document.querySelector(`#alert${i}`)  
        
        ball.classList.remove('less-drawn', 'more-drawn')
        
        alertFlag.classList.remove('alert', 'alert-primary', 'alert-danger')

        alertFlag.innerHTML = ''

        ball.innerHTML = guess[i]
    }
});
