const gameBoard = (() => {
    let gameBoardArr = [
        "X", "O", "",
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

    const markSpot = (idx) => {
        gameBoard.markSpot(playerMark, idx);
        console.log(gameBoard.getGameBoard());

        displayController.changeTurn();
        displayController.displayBoard(gameBoard.getGameBoard());
    };

    return {
        getMark,
        markSpot,
    };
};

const displayController = (() => {
    const blocks = document.querySelectorAll('.grid-block');
    const gameInfo = document.querySelector('.game-info');

    const playerOne = Player("X");
    const playerTwo = Player("O");

    let turn = "X";

    const getTurn = () => turn;
    const changeTurn = () => {
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    };

    const addClickables = () => {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('click', () => {
                let blockIndex = parseInt(blocks[i].id);

                if (turn === "X" && blocks[i].textContent === "") {
                    playerOne.markSpot(blockIndex);
                } else if (turn === "O" && blocks[i].textContent === "") {
                    playerTwo.markSpot(blockIndex);
                }
            });
        }
    };

    const displayBoard = (gameBoardArr) => {
        gameInfo.textContent = "Player " + turn + "'s turn"

        for (let i = 0; i < blocks.length; i++) {
            blocks[i].textContent = gameBoardArr[i];
        }
    };

    return {
        displayBoard,
        getTurn,
        changeTurn,
        addClickables,
    };
})();

displayController.addClickables();
displayController.displayBoard(gameBoard.getGameBoard());