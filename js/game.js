
void function () {
	const data = {
		level1:['bug', 'CSS', 'fix', 'git', 'math', 'calc', 'html', 'random', 'code', 'IDE', 'brain', 'data', 'info', 'type', 'scss', 'less', 'flex', 'web', 'RAM', 'job', 'stack', 'site'],
		level2:['analog','algorithm','recursion','embedding','assembler','impressions','traffic','conversion'],
		level3:['optimization','resolution','declarations','application','frameworks','firewalls']
	};
	let level = 1;
    let randomElem;
    let points = 0;
       
    
    
    function shuffle(arr) {
      arr = arr.sort(function() {
          return (Math.round(Math.random()) - 0.5);
      });
      if(arr.join('') === randomElem) {
        shuffle(arr)
      }
      return arr;
    }


    function playGame(level) {

      let key = 'level' + level;
      $('#answer').focus();
      $('#currentPoints').text(points);
      randomElem = data[key][Math.floor(Math.random() * data[key].length)].toUpperCase();

      const shuffledElem = shuffle(randomElem.split(''));
      let htmlLetters = ''
      shuffledElem.forEach((letter) => {
         htmlLetters += '<div class="letterBlock">' + letter +'</div>';
      });
      $("#letters").html(htmlLetters);
    }

    let seconds = 30;
    function onTimer() {
      $('#timer').text(seconds)
      seconds--;
      if (seconds < 0) {
         gameOver();
      }
      else {
      setTimeout(onTimer, 1000);
      }
    }

    function gameOver() {
      $('#game').hide();
      $('#points').text('Points ' + points)
      $('#gameOver').show();
    }

    $('#answer').keyup((event) => {
      if(event.target.value.length === randomElem.length) {
        if(event.target.value.toUpperCase() === randomElem) {
          level++;
          points += randomElem.length * 10;
          playGame(level);
        }
        $('#answer').val('');

      }
    });

    $('#startBtn').click(() => {
      document.getElementById("startBtn").style.opacity = "0";
      document.getElementById("startContent").style.display = "none";
       $('#game').show();
        playGame(1);
        onTimer(); 
      }) 


	
}()