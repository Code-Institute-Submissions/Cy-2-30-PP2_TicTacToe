
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
    let isGameActive = false;

    

    /* Indexes within the board easy level
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]

const PLAYERX_WON = 'PlayerX_Won';
    const PLAYERO_WON = 'PlayerO_Won';
    const TIE = 'TIE';
    hard level
    
    [0] [1] [2] [3] [4]
    [5] [6] [7] [8] [9]
    [10] [11] [12] [13] [14]
    [15] [16] [17] [18] [19]
    [20] [21] [22] [23] [24]
    */

  

    /*
    const winningCondition = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]; 
     function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winningCondition = winningCondition[i];
            const a = board[winningCondition[0]];
            const b = board[winningCondition[1]];
            const c = board[winningCondition[2]];
            const d = board[winningCondition[3]];
            const e = board[winningCondition[4]];
            if (a === '' || b === '' || c === '' || d=== '' || e ==='') {
                continue;
            }
            if (a === b && b === c && c === d && d === e ) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            arletor(currentPlayer === 'X' ? PLAYER1_WON : PLAYER2_WON);
            isGameActive = false;
            return;
        }
        if (!board.includes(''))
            arletor(TIE);
    }


   

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winningCondition = winningCondition[i];
            const a = board[winningCondition[0]];
            const b = board[winningCondition[1]];
            const c = board[winningCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYER1_WON : PLAYER2_WON);
            isGameActive = false;
            return;
        }
        if (!board.includes(''))
            arlertor(TIE);
    }
 

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});
 */