// establish variables for crystals, their values, score, and win/lose factors
// generate random hidden values per crystal

  // CRYSTALS
var emerald = document.getElementById('emeraldDiv');
emerald.setAttribute('data-value', randomCrystalValue());

var ruby = document.getElementById('rubyDiv');
ruby.setAttribute('data-value', randomCrystalValue());

var sapphire = document.getElementById('sapphireDiv');
sapphire.setAttribute('data-value', randomCrystalValue());

var diamond = document.getElementById('diamondDiv');
diamond.setAttribute('data-value', randomCrystalValue());


  // SCORE
var totalScore = document.getElementById('totalScoreDiv');
totalScoreDiv.innerHTML = 0;

var wins = document.getElementById('winDiv');
wins.innerHTML = 0;

var losses = document.getElementById('loseDiv');
losses.innerHTML = 0;

// generate random number via randomnumberDiv
var randomEndScore = document.getElementById('randomNumberDiv');
randomNumberDiv.innerHTML = Math.floor((Math.random() * 120) + 19);



// click a crystal to reveal the value
  // value gets applied to totalScoreDiv

function yourScore (value) {
  var crystalPoints = parseInt(value);
  var currentPoints = parseInt(totalScore.innerHTML);
  totalScore.innerHTML = crystalPoints + currentPoints;
}

// Event listeners
emeraldDiv.addEventListener("click", function() {
  yourScore(this.getAttribute('data-value'));
  checkScore();
})

rubyDiv.addEventListener("click", function() {
  yourScore(this.getAttribute('data-value'));
  checkScore();
})

sapphireDiv.addEventListener("click", function() {
  yourScore(this.getAttribute('data-value'));
  checkScore();
})

diamondDiv.addEventListener("click", function() {
  yourScore(this.getAttribute('data-value'));
  checkScore();
})

// Setting the random crystal value
function randomCrystalValue () {
  return Math.floor((Math.random() * 12) + 1)
}


// continue clicking crystals until accumulated points matches totalScoreDiv
  // if match then you win the game
  // else exceeds the totalScoreDiv then you lose the game
// reset totalScoreDiv after each win or loss

function checkScore() {
  var playerScore = parseInt(totalScore.innerHTML);
  var targetScore = parseInt(randomEndScore.innerHTML);
  if (playerScore === targetScore) {
    alert("You win!!!");
    wins.innerHTML++;
    // reset("totalScoreDiv");

  } else if (playerScore > targetScore) {
    alert("You lose!!!");
    losses.innerHTML++;
    // reset("totalScoreDiv");
  }
}
