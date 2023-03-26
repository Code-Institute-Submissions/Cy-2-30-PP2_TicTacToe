window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const arlertor = document.querySelector('.arlet');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = "X";
    let isGameActive = true;

    const PLAYER1_WON = 'Player1_Won';
    const PLAYER2_WON = 'Player2_Won';
    const TIE = 'TIE';

    /* Indexes within the board easy level
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]

    hard level
    [0] [1] [2] [3] [4]
    [5] [6] [7] [8] [9]
    [10] [11] [12] [13] [14]
    [15] [16] [17] [18] [19]
    [20] [21] [22] [23] [24]
    */

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
    ];*/


    
    
    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});
