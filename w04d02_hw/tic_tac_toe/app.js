function addRows(index) {
  const $divRow = $("<div>")
    .addClass("row")
    .attr("id", "row" + index);

  return $divRow;
}

function addSquares(rowNum) {
  const $divSquares = [];
  for (let i = 0; i < 3; i++) {
    $divSquares.push(
      $("<div>").addClass(`${rowNum} square`).attr("id", `${rowNum}-square${i}`)
    );
  }

  return $divSquares;
}

function toggleX(element) {
  let $elementTarget = $(element.target);
  if (!$elementTarget.hasClass("disabled")) {
    $elementTarget.text("X");
    $elementTarget.addClass("disabled");
  }
}

function toggleO(element) {
  let $elementTarget = $(element.target);
  if (!$elementTarget.hasClass("disabled")) {
    $elementTarget.text("O");
    $elementTarget.addClass("disabled");
  }
}

function checkWinner(element) {
  let $elementTarget = $(element.target);
  const $selectedSquare = $elementTarget.attr('id')
  const $selectedSquareText = $elementTarget.text()

  if($selectedSquare === "row0-square2") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row2-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square0").text() === $selectedSquareText && $("#row0-square1").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square2").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row0-square0") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square1").text() === $selectedSquareText && $("#row0-square2").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square0").text() === $selectedSquareText && $("#row2-square0").text() === $selectedSquareText) {
      return true
    }
  }
 
  if($selectedSquare === "row0-square1") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row2-square1").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square0").text() === $selectedSquareText && $("#row0-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row1-square2") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row1-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square2").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row1-square1") {
    if($("#row0-square0").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square2").text() === $selectedSquareText && $("#row2-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row0-square1").text() === $selectedSquareText && $("#row2-square1").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square0").text() === $selectedSquareText && $("#row1-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row1-square0") {
    if($("#row0-square0").text() === $selectedSquareText && $("#row2-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square1").text() === $selectedSquareText && $("#row1-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row2-square0") {
    if($("#row1-square0").text() === $selectedSquareText && $("#row0-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square1").text() === $selectedSquareText && $("#row0-square2").text() === $selectedSquareText) {
      return true
    }
    if($("#row2-square1").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
  }
  
  if($selectedSquare === "row2-square1") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row0-square1").text() === $selectedSquareText) {
      return true
    }
    if($("#row2-square0").text() === $selectedSquareText && $("#row2-square2").text() === $selectedSquareText) {
      return true
    }
  }

  if($selectedSquare === "row2-square2") {
    if($("#row1-square1").text() === $selectedSquareText && $("#row0-square0").text() === $selectedSquareText) {
      return true
    }
    if($("#row1-square2").text() === $selectedSquareText && $("#row0-square2").text() === $selectedSquareText) {
      return true
    }
    if($("#row2-square0").text() === $selectedSquareText && $("#row2-square1").text() === $selectedSquareText) {
      return true
    }
  }
  
}

function newGame() {
  $(".box").remove();
  $(".container").append($("<div>").addClass("box"));
  const $h3PlayerTurn = $("<h3>").attr("id", "player-turn");
  $h3PlayerTurn.text("Welcome to the local favourite TIC-TAC-TOE, Player 1's Turn, place an X");
  $(".box").append($h3PlayerTurn);

  for (let i = 0; i < 3; i++) {
    $(".box").append(addRows(i));
    $(`#row${i}`).append(addSquares(`row${i}`));
  }

  const playerOne = "X";
  const playerTwo = "O";
  let turn = 1;

  $(".box").on("click", (element) => {

    if (turn % 2 !== 0) {
      $h3PlayerTurn.text("Player 2's Turn, place an O");
      if(!$(element.target).hasClass("disabled")) {
        turn ++;
        toggleX(element);
      }
      console.info("turn >>> ", turn)
    } else {
      $h3PlayerTurn.text("Player 1's Turn, place an X");
      if(!$(element.target).hasClass("disabled")) {
        turn ++;
        toggleO(element);
      }
      console.info("turn >>> ", turn)
    }

    if(turn > (3*2-1)) {
      if(checkWinner(element)) {
        if (turn % 2 !== 0) {
          $h3PlayerTurn.text("Congratulations, Player 2!");
          alert ("Player Two Won!")
          newGame()
        }
        if (turn % 2 === 0) {
          $h3PlayerTurn.text("Congratulations, Player 1!");
          alert ("Player One Won!")
          newGame()
        }
      }
    }
    if(turn === 10) {
      alert("It's a tie!")
      newGame()
    }
    
  });
}

$(() => {
  const $newGameButton = $("<button>").attr("id", "new-game").text("NEW GAME");
  $(".container").append($newGameButton);

  $("#new-game").on("click", () => {
    alert("NEW GAME STARTING, Player 1 = X, Player 2 = O");
    newGame();
  });
});
