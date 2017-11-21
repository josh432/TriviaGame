$( document ).ready(function() {
    console.log("ready");

	var right = 0;
	var wrong = 0;
	var unAnswered = 0;

	var displayTime = 121;

    showTime();
	function showTime(){
		$("#displayTime").text(displayTime);
		secondsLeft = setInterval(decrement, 1000);
	};

	function decrement(){
		displayTime--;
		$("#displayTime").text(displayTime);
		if (displayTime == 0) {
		clearInterval(secondsLeft);
	};
