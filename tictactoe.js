const gameBoard = (() => {
    let gameBoardArr = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    const getGameBoard = () => gameBoardArr;

    const markSpot = (mark, idx) => {
        gameBoardArr[idx] = mark;
    };

    return {
        getGameBoard,
        markSpot,
    };
})();

const Player = (mark) => {
    const playerMark = mark;
    const getMark = () => playerMark;

    const placeMark = (idx) => {
        gameBoard.markSpot(playerMark, idx);

        displayController.changeTurn();
        displayController.displayBoard(gameBoard.getGameBoard());
    };

    return {
        getMark,
        placeMark,
    };
};

const displayController = (() => {
    const blocks = document.querySelectorAll('.grid-block');
    const gameInfo = document.querySelector('.game-info');

    const playerOne = Player("X");
    const playerTwo = Player("O");

    let turn = "X";
    let finished = false;

    const getTurn = () => turn;
    const changeTurn = () => {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    };

    const addClickEvent = (idx) => {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('click', () => {
                let blockIndex = parseInt(blocks[i].id);

                if (turn === "X" && blocks[i].textContent === "" && !finished) {
                    playerOne.placeMark(blockIndex);
                } else if (turn === "O" && blocks[i].textContent === "" && !finished) {
                    playerTwo.placeMark(blockIndex);
                }
            });
        };
    };

    const displayBoard = (gameBoardArr) => {
        if (!gameBoardArr.includes("")) {
            gameInfo.textContent = "It's a tie!";
        } else if (
            (gameBoardArr[0] === "X" && gameBoardArr[1] === "X" && gameBoardArr[2] === "X") ||
            (gameBoardArr[3] === "X" && gameBoardArr[4] === "X" && gameBoardArr[5] === "X") ||
            (gameBoardArr[6] === "X" && gameBoardArr[7] === "X" && gameBoardArr[8] === "X") ||
            (gameBoardArr[0] === "X" && gameBoardArr[3] === "X" && gameBoardArr[6] === "X") ||
            (gameBoardArr[1] === "X" && gameBoardArr[4] === "X" && gameBoardArr[7] === "X") ||
            (gameBoardArr[2] === "X" && gameBoardArr[5] === "X" && gameBoardArr[8] === "X") ||
            (gameBoardArr[0] === "X" && gameBoardArr[4] === "X" && gameBoardArr[8] === "X") ||
            (gameBoardArr[2] === "X" && gameBoardArr[4] === "X" && gameBoardArr[6] === "X")
        ) {
            gameInfo.textContent = "X wins!";
            finished = true;
        } else if (
            (gameBoardArr[0] === "O" && gameBoardArr[1] === "O" && gameBoardArr[2] === "O") ||
            (gameBoardArr[3] === "O" && gameBoardArr[4] === "O" && gameBoardArr[5] === "O") ||
            (gameBoardArr[6] === "O" && gameBoardArr[7] === "O" && gameBoardArr[8] === "O") ||
            (gameBoardArr[0] === "O" && gameBoardArr[3] === "O" && gameBoardArr[6] === "O") ||
            (gameBoardArr[1] === "O" && gameBoardArr[4] === "O" && gameBoardArr[7] === "O") ||
            (gameBoardArr[2] === "O" && gameBoardArr[5] === "O" && gameBoardArr[8] === "O") ||
            (gameBoardArr[0] === "O" && gameBoardArr[4] === "O" && gameBoardArr[8] === "O") ||
            (gameBoardArr[2] === "O" && gameBoardArr[4] === "O" && gameBoardArr[6] === "O")
        ) {
            gameInfo.textContent = "O wins!";
            finished = true;
        } else {
            gameInfo.textContent = "Player " + turn + "'s turn";
        }

        for (let i = 0; i < blocks.length; i++) {
            blocks[i].textContent = gameBoardArr[i];
        }
    };

    return {
        displayBoard,
        getTurn,
        changeTurn,
        addClickEvent,
    };
})();

displayController.addClickEvent();
displayController.displayBoard(gameBoard.getGameBoard());