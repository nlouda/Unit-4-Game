crystalGame = {
    buttons: $("#buttons").children(),
    goalNumber: 0,
    playerNumber: 0,
    wins: 0,
    losses: 0,
    game: function() {
     
      if (this.playerNumber >= this.goalNumber) {
        if (this.playerNumber == this.goalNumber) {
          this.wins++;
          $("#wins").html("Wins: " + this.wins);
        }else {
          this.losses++;
          $("#losses").html("Losses: " + this.losses);
        }
        this.start();
      }
      
      $("#playerNumber").html(this.playerNumber);
    },
    start: function() {
      
      this.goalNumber = Math.floor(Math.random() * 120) + 19;
      this.playerNumber = 0;
      $("#randomNumber").html(this.goalNumber);
      $("#playerNumber").html(this.playerNumber);
      $.map(this.buttons, (element) => {
          element.randNumber = Math.floor(Math.random() * 12) + 1;
      });
    }
  }
  
  crystalGame.start();
  $("#wins").html("Wins: " + crystalGame.wins);
  $("#losses").html("Losses: " + crystalGame.losses);
  
  $.map(crystalGame.buttons, (element) => {
    $(element).on('click', () => {
      console.log(element.randNumber);
      crystalGame.playerNumber += element.randNumber
      crystalGame.game();
    })
  })
  