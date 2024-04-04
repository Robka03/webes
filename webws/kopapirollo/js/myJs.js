
let winCount = 0;
let drawCount = 0;
let loseCount = 0;


function resetGame(userChoice) {
   
    var elem = document.getElementById("win");
    elem.textContent = "Győzelem : 0";
    var elem2 = document.getElementById("winwin");
    elem2.textContent = "Döntetlen : 0";
    var elem3 = document.getElementById("lose");
    elem3.textContent = "Vereség : 0";
    var computerChoiceImage = document.getElementById('gepKep');
    computerChoiceImage.src = 'imgs/tmp.jpg';
    winCount = 0;
    drawCount = 0;
    loseCount = 0;
  
}

function chooseOption(userChoice) {
    var options = ['ko', 'papir', 'ollo'];
    var computerChoice = options[Math.floor(Math.random() * options.length)];
    
    
    
    var computerChoiceImage = document.getElementById('gepKep');
    computerChoiceImage.src = 'imgs/' + computerChoice + '.jpg';


    if (userChoice === computerChoice) {
        alert('Döntetlen!');
        drawCount++;
        document.getElementById("winwin").innerHTML = "Döntetlen: " + drawCount;
    } else if ((userChoice === 'ko' && computerChoice === 'ollo') ||
               (userChoice === 'papir' && computerChoice === 'ko') ||
               (userChoice === 'ollo' && computerChoice === 'papir')) {
        alert('Te nyertél!');
        winCount++;
        document.getElementById("win").innerHTML = "Győzelem: " + winCount;
    } else {
        alert('A gép nyert!');
        loseCount++;
        document.getElementById("lose").innerHTML = "Vereség: " + loseCount;
    }


  }
  