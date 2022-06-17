// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		// var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
		  'total': t,
		//   'days': days,
		  'hours': hours,
		  'minutes': minutes,
		  'seconds': seconds
		};
	  }
	  
	  function initializeClock(id, endtime) {
		var clock = document.getElementById(id);
		// var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');
	  
		function updateClock() {
		  var t = getTimeRemaining(endtime);
	  
		//   daysSpan.innerHTML = t.days;
		  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	  
		  if (t.total <= 0) {
			clearInterval(timeinterval);
		  }
		}
	  
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	  }
	  
	  var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
	  var deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000); // for endless timer
	  initializeClock('countdown', deadline);
	  initializeClock('countdown2', deadline);

	  class ItcAccordion {
		constructor(target, config) {
		  this._el = typeof target === 'string' ? document.querySelector(target) : target;
		  const defaultConfig = {
			alwaysOpen: true
		  };
		  this._config = Object.assign(defaultConfig, config);
		  this.addEventListener();
		}
		addEventListener() {
		  this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.accordion__header');
			if (!elHeader) {
			  return;
			}
			if (!this._config.alwaysOpen) {
			  const elOpenItem = this._el.querySelector('.accordion__item_show');
			  if (elOpenItem) {
				elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
			  }
			}
			elHeader.parentElement.classList.toggle('accordion__item_show');
		  });
		}
	  }

	  new ItcAccordion(document.querySelector('.accordion'), {
		alwaysOpen: false
	  });

})
