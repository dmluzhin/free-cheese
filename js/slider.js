var sliderBlock = document.getElementById('slider'), slides = sliderBlock.getElementsByClassName('main-post-container'), stepBlock, step, i,
	slideLeft = sliderBlock.getElementsByClassName('arrow-left'), slideRight = sliderBlock.getElementsByClassName('arrow-right');
if (slides.length > 1) {
	slideLeft[0].classList.add('disabled');
	stepBlock = document.createElement('div');
	stepBlock.className = 'slider_footer';
	for (i=0; i<slides.length; i+=1) {
		step = document.createElement('div');
		step.className = 'slider_footer-step';
		step.setAttribute('data-select', 'false');
		if (i==0) {
			step.classList.add('slider_footer-step-active');
			step.setAttribute('data-select', 'true');
		}
		step.setAttribute('data-step', i);
		step.onclick = function() {
			var numStep = this.getAttribute('data-step'), stepDots = document.getElementsByClassName('slider_footer-step');
			for (var i=0; i<slides.length; i+=1) {
				slides[i].classList.remove('active');
				stepDots[i].className = stepDots[i].className.split(' ')[0];
				stepDots[i].setAttribute('data-select', 'false');
			}
			stepDots[numStep].setAttribute('data-select', 'true');
			stepDots[numStep].classList.add('slider_footer-step-active');
			slides[numStep].className += ' active';
			checkButtons(numStep);
			resizeSlider(true);
		};
		stepBlock.appendChild(step);
	}
	function checkSelect(stepDots) {
		var step;
		for (var i=0; i<stepDots.length; i+=1) {
			if (stepDots[i].getAttribute('data-select') == 'true') {
				stepDots[i].setAttribute('data-select', 'false');
				stepDots[i].className = stepDots[i].className.split(' ')[0];
				step = i;
				break;
			}
		}
		return step;
	}
	function checkButtons(now) {
		if (now == 0) {
			slideLeft[0].classList.add('disabled');
			slideRight[0].classList.remove('disabled')
		}
		else if (now == slides.length-1) {
			slideLeft[0].classList.remove('disabled');
			slideRight[0].classList.add('disabled');
		}
		else {
			slideLeft[0].classList.remove('disabled');
			slideRight[0].classList.remove('disabled');
		}
		resizeSlider(true);
	}
	slideLeft[0].onclick = function() {
		var stepDots = document.getElementsByClassName('slider_footer-step'), now = checkSelect(stepDots), now = now-1;
		stepDots[now].setAttribute('data-select', 'true');
		stepDots[now].classList.add('slider_footer-step-active');
		slides[now].className += ' active';
		checkButtons(now);
	};
	slideRight[0].onclick = function() {
		var stepDots = document.getElementsByClassName('slider_footer-step'), now = checkSelect(stepDots), now = now+1;
		stepDots[now].setAttribute('data-select', 'true');
		stepDots[now].classList.add('slider_footer-step-active');
		slides[now].className += ' active';
		checkButtons(now);
	};
	sliderBlock.parentNode.appendChild(stepBlock);
}
else {
	slideLeft[0].classList.add('disabled');
	slideRight[0].classList.add('disabled');
}
window.onresize = function() {
	resizeSlider(false);
};
function resizeSlider(click) {
	var width = parseInt(slides[0].offsetWidth), stepDots = document.getElementsByClassName('slider_footer-step'), nowStep = false;
	for (var i=0; i<slides.length; i+=1) {
		if (stepDots[i].getAttribute('data-select') == 'true' && nowStep === false) {
			nowStep = i;
			i = 0;
		}
		if (nowStep !== false) {
			if (!click) {
				slides[i].style.transition = 'all 0s ease';
				slides[i].style.transform = 'translate3d(-'+width*(nowStep)+'px, 0px, 0px)';
			}
			else {
				slides[i].style.transition = '';
				slides[i].style.transform = 'translate3d(-'+width*(nowStep)+'px, 0px, 0px)';
			}
		}
	}
}
