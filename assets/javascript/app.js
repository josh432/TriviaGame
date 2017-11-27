//Jquery / Javascript Cartoon Trivia Game

//Global Variables
var displayTime = 100;
var song = new Audio('assets/The Simpsons.mp3');
var doh = new Audio('assets/doh1.mp3');

//Game set-up welcome screen
$('.questions').hide();
$('.timer').hide();
$('.score').hide();
$('.newGame').hide();

$('.startGame').on('click', function() {
$('.startGame').hide();
$('.greet').hide();
$('.questions').fadeIn(5000);
$('.timer').fadeIn(5000);
$('.score').show();
$('.newGame').show();
showTime();
song.play();
});

//New Game reset 
$('.newGame').on('click', function(){
$('.questions').fadeIn(5000);
$('.timer').fadeIn(5000).css('color', 'black');
$('.right').html(0);
$('.wrong').html(0);
$('.unanswered').html(0);
displayTime = 100;
$('input[type=radio]').attr('disabled', false); //radio button functionality : resets radios
$('input[type=radio]').prop('checked',false); //clears previous radio selection
$('.gameover').empty();
showTime();
song.play();

});

//Timer Functionality
function showTime(){
	$("#displayTime").text(displayTime);
  secondsLeft = setInterval(decrement, 1000);

	
};
function decrement(){
	displayTime--;
	$("#displayTime").text(displayTime);
  if (displayTime < 25) { //warns player that game is almost over
    $('.timer').css('color', 'red');
  }


	if (displayTime == 0) {  //hide all questions when game over, push scorebox to top of page.
    $('.questions').hide();
    $('.score').animate({ scrollTop: 0 }, 'fast');
    $('.gameover').html('Game Over!');
    $('.timer').hide();
		clearInterval(secondsLeft);
    doh.play();
	}
};



//Radio Button functionality
$(":radio").click(function(){
   var radioName = $(this).attr("name"); //Get radio name
  $(":radio[name='"+radioName+"']:not(:checked)").attr("disabled", true); //Disable all unchecked radios with the same name
});

//Main Game logic
$( document ).on('click', function() {
  var right = 0;
  var wrong = 0;
  var unanswered = 0;
  if ($('#correct1').is(':checked')) {
     right++;
  }else if ($('.wrong1').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }


  if ($('#correct2').is(':checked')) {
    right++;
  } else if ($('.wrong2').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct3').is(':checked')) {
    right++;
  } else if ($('.wrong3').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct4').is(':checked')) {
    right++;
  } else if ($('.wrong4').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct5').is(':checked')) {
    right++;
  } else if ($('.wrong5').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct6').is(':checked')) {
    right++;
  } else if ($('.wrong6').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct7').is(':checked')) {
    right++;
  } else if ($('.wrong7').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct8').is(':checked')) {
    right++;
  } else if ($('.wrong8').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct9').is(':checked')) {
    right++;
  } else if ($('.wrong9').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct10').is(':checked')) {
     right++;
  } else if ($('.wrong10').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct11').is(':checked')) {
    right++;
  } else if ($('.wrong11').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct12').is(':checked')) {
    right++;
  } else if ($('.wrong12').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct13').is(':checked')) {
    right++;
  } else if ($('.wrong13').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct14').is(':checked')) {
    right++;
  } else if ($('.wrong14').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct15').is(':checked')) {
     right++;
  } else if ($('.wrong15').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

if ($('#correct16').is(':checked')) {
    right++;
  } else if ($('.wrong16').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct17').is(':checked')) {
     right++;
  } else if ($('.wrong17').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct18').is(':checked')) {
    right++;
  } else if ($('.wrong18').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct19').is(':checked')) {
    right++;
  } else if ($('.wrong19').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct20').is(':checked')) {
    right++;
  } else if ($('.wrong20').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct21').is(':checked')) {
     right++;
  } else if ($('.wrong21').is(':checked')) {
    wrong++;
  } else {
    unanswered++;
  }

  if ($('#correct22').is(':checked')) {
     right++;
  } else if ($('.wrong22').is(':checked')) {
     wrong++;
  } else {
    unanswered++;
  }

  $('.right').html(right);
  $('.wrong').html(wrong);
  if(unanswered > 0) {
    $('.unanswered').html(unanswered);
      } else {
        $('.unanswered').html(0);
  }
  
 console.log(right);
 console.log(wrong);

//hide all questions when game over, push scorebox to top of page.
  










 








});


//advanced game comments. 
//start the first game.  All subsequent games are started by the user clicking the 'new game' button.
//displays time left and if time runs out then the endQuestion function is called.

//this is the 'new game' button and starts a new game by resetting the necessary variables.
//The nextQuestion function increments the quesitonNum pointer and calls the startNextQuestion
//startNextQuestion gets the browser ready for the next question and then calls displayChoices.
//displays a 30 in the timer.
//Displays all the choices and sets up hover and click listening events.


//this area creates click event for user's choice and also shows the user what the correct choice would have been.
//this creates hover on and off color change to respond to mouse over the choices.
//the endQuestion function checks to see if the user made the correct choice or not (or no choice made due to time out flag -1)//







