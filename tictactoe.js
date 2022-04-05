const gameBoard = (function() {
    let gameBoardArr = [
        "X", "O", "X",
        "", "", "O",
        "X", "", ""
    ];

    const getGameBoard = () => gameBoardArr;

    const placeSign = (sign, idx) => {
        gameBoardArr[idx] = sign;
    }

    return {
        getGameBoard,
    }
})();

const Player = (sign) => {
    const blocks = document.querySelectorAll('.grid-block');

    let playerSign = sign;
    const getSign = () => playerSign;

    const placeSign = (sign) => {

    }
};

const displayController = (function() {
    const blocks = document.querySelectorAll('.grid-block');

    const displayBoard = (gameBoardArr) => {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].textContent = gameBoardArr[i];
        }
    }

    return {
        displayBoard,
    }
})();

displayController.displayBoard(gameBoard.getGameBoard());