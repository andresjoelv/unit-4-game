$(document).ready(function() {

    // Define references to DOM elements
    var $randomNumber = $('.random-number');
    var $wins = $('#wins');
    var $losses = $('#losses');
    var $userScore = $('#user-score');

    // game variables
    var min = 1;
    var max = 12;

    var userPoints = 0;
    var wins = 0;
    var losses = 0;

    var blue = Math.floor(Math.random() * max ) + min;
    var green = Math.floor(Math.random() * max ) + min;
    var red = Math.floor(Math.random() * max ) + min;
    var yellow = Math.floor(Math.random() * max ) + min;

    var randomNumber = Math.floor(Math.random() * 100 ) + 19;

    $randomNumber.text(randomNumber);

    /*function addSum(e){
        if(e.dataset.crystal === 'blue') userPoints += blue;
        else if(e.dataset.crystal === 'green') userPoints += green;
        else if(e.dataset.crystal === 'red') userPoints += red;
        else if(e.dataset.crystal === 'yellow') userPoints += yellow;
        $userScore.text(userPoints);
        checkWin();
    }*/

    const crystals = document.querySelectorAll('.crystal-images');

    //crystals.forEach(crystal => crystal.addEventListener('click', addSum));

    $.each(crystals, function(i) {
        $(this).on('click', function() {
            document.documentElement.style.setProperty("--crystal", this.dataset.crystal);
            if(this.dataset.crystal === 'blue') userPoints += blue;
            else if(this.dataset.crystal === 'green') userPoints += green;
            else if(this.dataset.crystal === 'red') userPoints += red;
            else if(this.dataset.crystal === 'yellow') userPoints += yellow;
            $userScore.text(userPoints);
            checkWin();
        });
    });

    function checkWin(){
        if(randomNumber === userPoints){
            // user wins
            wins++;
            $wins.text(wins);
            // reset
            reset();
        }
        else if (userPoints > randomNumber) {
            losses++;
            $losses.text(losses);
            // reset
            reset();
        }
    }

    function reset() {
        userPoints = 0;

        randomNumber = Math.floor(Math.random() * 100 ) + 19;
        
        blue = Math.floor(Math.random() * max ) + min;
        green = Math.floor(Math.random() * max ) + min;
        red = Math.floor(Math.random() * max ) + min;
        yellow = Math.floor(Math.random() * max ) + min;

        updateScreen();
    }

    function updateScreen(){
        $randomNumber.text(randomNumber);
        $userScore.text(userPoints);
    }
});