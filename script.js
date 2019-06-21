document.querySelector('.btn1').src = 'img/activeTochka.svg';

document.querySelector('.button1').addEventListener('click', function() {
	document.querySelector('.btn1').src = 'img/activeTochka.svg';
	document.querySelector('.btn2').src = 'img/tochka.svg';
	document.querySelector('.btn3').src = 'img/tochka.svg';
	document.querySelector('.btn4').src = 'img/tochka.svg';
	document.querySelector('.main-header').style.backgroundImage = 'url(img/background1.jpg)'
})

document.querySelector('.button2').addEventListener('click', function() {
	document.querySelector('.btn1').src = 'img/tochka.svg';
	document.querySelector('.btn2').src = 'img/activeTochka.svg';
	document.querySelector('.btn3').src = 'img/tochka.svg';
	document.querySelector('.btn4').src = 'img/tochka.svg';
	document.querySelector('.main-header').style.backgroundImage = 'url(img/background2.jpg)'
})

document.querySelector('.button3').addEventListener('click', function() {
	document.querySelector('.btn1').src = 'img/tochka.svg';
	document.querySelector('.btn2').src = 'img/tochka.svg';
	document.querySelector('.btn3').src = 'img/activeTochka.svg';
	document.querySelector('.btn4').src = 'img/tochka.svg';
	document.querySelector('.main-header').style.backgroundImage = 'url(img/background3.jpg)'
})


document.querySelector('.button4').addEventListener('click', function() {
	document.querySelector('.btn1').src = 'img/tochka.svg';
	document.querySelector('.btn2').src = 'img/tochka.svg';
	document.querySelector('.btn3').src = 'img/tochka.svg';
	document.querySelector('.btn4').src = 'img/activeTochka.svg';
	document.querySelector('.main-header').style.backgroundImage = 'url(img/background4.jpg)'
})
