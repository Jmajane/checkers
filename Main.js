/*-----   Game State Data   -----*/

const board = [
    null, 0, null, 1, null, 2, null, 3, null, 4, null, 5,
    null, 6, null, 7, null, 8, null, 9, null, 10, null, 11,
    null, 12, null, 13, null, 14, null, 15, null, 16, null, 17,
    null, 18, null, 19, null, 20, null, 21, null, 22, null, 23,
    null
]

// DOM references

const cells = document.querySelectorAll("td");
let redsPieces = document.querySelectorAll("p");
let blacksPieces = document.querySelectorAll("span");
const redTurnText = document.querySelectorAll(".red-turn-text");
const blackTurnText = document.querySelectorAll(".black-turn-text");
const divder = document.querySelectorAll("#divider")

let findPiece = function(pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
}

// Player Properties

let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusseventhSpace: false,
    minusninthSpace: false,
    minusfourteenthSpace: false,
    minuseighteenthSpace: false,
}


// Initialize event listeners on pices
function givePiecesEventListeners() {
    if (turn) {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].addEventListener("click", getPlayerPieces)
        }
    }
}

function getPlayerPieces() {
    if (turn) {
        playerPieces = redsPieces;
    } else {
        playerPieces = blacksPieces;
    }
    removeCellonclick()
    resetBorders()
}


function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
}

function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.indexOfBoardPiece = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusseventhSpace = false;
    selectedPiece.minusninthSpace = false;
    selectedPiece.minusfourteenthSpace = false;
    selectedPiece.minuseighteenthSpace = false;
}

// gets ID and Index of the board cell its on 
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(evenet.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();
}

// checking if piece is King
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true;
    } else {
        selectedPiece.isKing = false;
    }

}

function getAvailableSpaces() {
    if (board[selectedPiece.indexOfBoardPiece + 7] === null &&
        cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
            selectedPiece.seventhSpace = true;
        }
}