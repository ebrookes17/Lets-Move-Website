"use strict";

/* declares variables to help determine clock time */

var minsLeft = 20;
var secsLeft = 0;
var timeLeft = (minsLeft*60)+secsLeft;
var clockID = setInterval("countdown()", 1000);


/* function which starts the clocks countdown. It runs every second */

function countdown() {
	minsLeft = Math.floor(timeLeft/60);
	secsLeft = timeLeft-(60*minsLeft);
	var minsString = addLeadingZero(minsLeft);
	var secsString = addLeadingZero(secsLeft);
	
	document.getElementById("minutes").textContent = minsString;
	document.getElementById("seconds").textContent = secsString;
	
	checkTimer();
	
	--timeLeft;
}

/* function which stops the clock when time runs out and displays: "Order Expired" */

function stopClock() {
	timeRemaining.insertAdjacentHTML('beforebegin', '<br/><span style ="margin-left:auto; margin-right:auto; font-weight: bold; color: red;">(Order Form Expired)</span>');
	
	clearInterval(clockID);
	
	formExpired();

}
/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}

function formExpired() {
	
	alert("The order form has expired. Returning to home page.");
	window.location.href = 'index.html';
}