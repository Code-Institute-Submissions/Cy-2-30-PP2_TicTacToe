
    const cells = Array.from(document.querySelectorAll('.tile'));
    const popUp = document.querySelector('.popup');
    const resetButton = document.querySelector('#reset');
    const winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
    
    let choiceCells = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let isGameActive = true;

    /********** START GAME ON MOUSE CLICK! **************/
    initializeGame();

    function initializeGame(){
        cells.forEach(cell => cell.addEventListener("click", cellClicked));
        resetButton.addEventListener("click", restartGame);
        popUp.textContent = `${currentPlayer}'s turn`;
        isGameActive = true;
    }
    
    /************* SHOW CLICKS ON THE BOARD AND CHECK WINNING **************/
    function cellClicked(){
        const cellIndex = this.getAttribute("cellIndex");
    
        if(choiceCells[cellIndex] != "" || !isGameActive){
            return;
        }
    
        updateCell(this, cellIndex);
        checkWinner();
    }

    /************* UPDATE THE CELL ON THE ACTIVE PLAYER **************/
    function updateCell(cell, index){
        choiceCells[index] = currentPlayer;
        cell.textContent = currentPlayer;
    }

    /************** SHOW MESSAGE DISPLAYING PLAYER'S TURNS ****************/
    function changePlayer(){
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        popUp.textContent = `${currentPlayer}'s turn`;
    } 

    /*************** AFTER CHECKING FOR A WINNER OR DRAW, STOP THE GAME IF THERE IS ANY ***************/
    function checkWinner(){
        let roundWon = false;
    
        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cellA = choiceCells[condition[0]];
            const cellB = choiceCells[condition[1]];
            const cellC = choiceCells[condition[2]];
    
            if(cellA == "" || cellB == "" || cellC == ""){
                continue;
            }
            if(cellA == cellB && cellB == cellC){
                roundWon = true;
                break;
            }
        }
    
        if(roundWon){
            popUp.textContent = `${currentPlayer} wins!`;
            isGameActive = false;
        }
        else if(!choiceCells.includes("")){
            popUp.textContent = `Draw!`;
            isGameActive = false;
        }
        else{
            changePlayer();
        }
    }

    /**************** AFTER A WIN OR DRAW START THE GAME AGAIN ******************/
    function restartGame(){
        currentPlayer = "X";
        choiceCells = ["", "", "", "", "", "", "", "", ""];
        popUp.textContent = `${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent = "");
        isGameActive = true;
    }
    