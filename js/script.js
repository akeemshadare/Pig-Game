var scores, roundScore, activePlayer;
scores = [0,0]; 
roundScore = 0; 
activePlayer = 0;



//document.querySelector('#currentscore-' + activePlayer).textContent = dice; 
document.querySelector('.image').style.display = 'none';
document.querySelector('#rolldice').addEventListener('click', function(){
    var dice =Math.floor(Math.random() * 6) + 1;
    document.querySelector('.image').style.display = 'block';
    document.querySelector('.image').src = 'dice-' + dice + '.png';
    
    if (dice !== 1) {
        roundScore += dice;
       document.querySelector('#currentscore-' + activePlayer).textContent = roundScore;
    } else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; 
    document.getElementById('currentscore-0').textContent = '0';
    document.getElementById('currentscore-1').textContent = '0';
    document.querySelector('.player0').classList.toggle('active');
    document.querySelector('.player1').classList.toggle('active');    
    //document.querySelector('.player0').classList.remove('active');
    //document.querySelector('.player1').classList.add('active');
        
    }
    
}); 

document.querySelector('#hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    
    if (scores[activePlayer] <= 99) {
    document.querySelector('#globalscore' + activePlayer).textContent = scores[activePlayer]; 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('currentscore-0').textContent = '0';
    document.getElementById('currentscore-1').textContent = '0';
    document.querySelector('.player0').classList.toggle('active');
    document.querySelector('.player1').classList.toggle('active');
    }
    else { var playerName = activePlayer + 1
        alert('Player ' + playerName + ' has won the game');
        roundScore = 0;
        activePlayer = 0; 
        document.getElementById('currentscore-0').textContent = '0';
        document.getElementById('currentscore-1').textContent = '0';
        document.getElementById('globalscore0').textContent = '0';
        document.getElementById('globalscore1').textContent = '0';
        document.querySelector('.image').style.display = 'none';
        document.querySelector('.player0').classList.add('active');
        document.querySelector('.player1').classList.remove('active');
        
        
    }
    
}); 

document.querySelector('.newgame').addEventListener('click', function(){       roundScore = 0;
        activePlayer = 0; 
        document.getElementById('currentscore-0').textContent = '0';
        document.getElementById('currentscore-1').textContent = '0';
        document.getElementById('globalscore0').textContent = '0';
        document.getElementById('globalscore1').textContent = '0';
        document.querySelector('.image').style.display = 'none';
        document.querySelector('.player0').classList.add('active');
        document.querySelector('.player1').classList.remove('active');
    
}); 