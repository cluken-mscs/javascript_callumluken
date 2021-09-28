
// constants
//? const GRIDSIZE
const xClass = "x";
const oClass = "o";
const GRIDSIZE = 3;

// globals
// mark means the "mark" the user makes when clicking on a box
let xMark = "X";
let oMark = "O";
let lastMark = "";
let mark = "";
let boardArray = new Array(GRIDSIZE); // Array with initial size of GRIDSIZE

// references
//? tictacBoard
let tictacBoard = document.getElementById("tictacBoard");
//? newGame
let newGame = document.getElementById("newGame");

// EVENT LISTENERS ----------------
//? initialize on load
window.onload = initialize();
//? call initialization function

//? event listener for newGame button
    
tictacBoard.addEventListener("click", function (event) {
    newGame();
    event.preventDefault();
});

// below resets the grid too much

// document.getElementById("newGame").addEventListener("click", function (event) {
//     initialize();
// });

// FUNCTIONS ----------------------
// ****************************************************************
function initialize() {

    // replace this pseudo code ...
    //? for every row, create an array of columns so that we can later reference the 
    // tic-tac-toe cell as boardArray[row][column] -- a multidimensional array

    // Draw board
    let htmlCode = "";
    let boxNumber = 0;
    let colSize = Math.round(12/GRIDSIZE);

    //? for loop for rows goes here?
    for (row = 0; row < GRIDSIZE; row++) {
        document.writeln (htmlCode += '<div class="row h-25">');
        //? for loop for columns goes here
        for (col = 0; col < GRIDSIZE; col++) {
            document.writeln (htmlCode += '<div onClick="markIt('+row+','+col+')" id="'+row+'_'+col+'" class="col-'+colSize+' h-100 bg-primary bg-gradient border border-info shadow d-flex align-items-center justify-content-center fs-1">'+boxNumber+++'('+row+','+col+')</div>');
            // you can clean up the output of that html if you want to :-)
        }
        htmlCode += '</div>';
    }
    document.writeln(tictacBoard.innerHTML = htmlCode);
}

// ****************************************************************
function markIt(row,col) {

    //? if the lastMark is X, then set mark=O, else set mark=X 
        lastMark = mark;
        if (lastMark == mark) {
            mark = xMark;
            if (lastMark == xMark) {
                mark = oMark;}
        document.getElementById(row+'_'+col).innerHTML = mark;}
    
        //? save the mark in boardArray multidimensional array  (remember Array indexes start at 0 and not 1)

        // works to make everything after first click o
        // boardArray[0],[xMark] = mark;
        boardArray[0],[lastMark] = mark;


        // check if there's a winner
        let winner = checkBoard();
        if (winner!="") {
            alert("Game Over! "+winner);
        }
    }

// ****************************************************************
function checkBoard() {

    let xTest = true;
    let oTest = true;

    // check columns for x's
    for (col=0; col<GRIDSIZE; col++) {   
        xTest = true;    
        for (row=0; row<GRIDSIZE; row++) {
            if (boardArray[row][col] != xMark) {
                xTest=false;
                break;
            }
        }
        if (xTest===true) {
            return xMark+" is the vertical winner!";
        }
    }
    //? check columns for o's
    for (col=0; col<GRIDSIZE; col++) {   
        oTest = true;    
        for (row=0; row<GRIDSIZE; row++) {
            if (boardArray[row][col] != oMark) {
                oTest=false;
                break;
            }
        }
        if (oTest===true) {
            return oMark+" is the vertical winner!";
        }
    }


    // check rows for x's
    for (row=0; row<GRIDSIZE; row++) {   
        xTest = true;    
        for (col=0; col<GRIDSIZE; col++) {
            if (boardArray[row][col] != xMark) {
                xTest=false;
                break;
            }
        }
        if (xTest===true) {
            return xMark+" is the horizontal winner!";
        }
    }
    //? check rows for o's
    for (row=0; row<GRIDSIZE; row++) {   
        oTest = true;    
        for (col=0; col<GRIDSIZE; col++) {
            if (boardArray[row][col] != oMark) {
                oTest=false;
                break;
            }
        }
        if (oTest===true) {
            return oMark+" is the horizontal winner!";
        }
    }
    
 
    // check diagonals for x's
    // upper left to lower right
    xTest = true;
    for (grid=0; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != xMark) {
            xTest=false;
            break;
        }
    }
    if (xTest===true) {
        return xMark+" is the diagonal winner!";
    }
    //? upper right to lower left
    
    // check diagonals for o's
    //? upper left to lower right
    oTest = true;
    for (grid=0; grid<GRIDSIZE; grid++) {              
        if (boardArray[grid][grid] != oMark) {
            oTest=false;
            break;
        }
    }
    if (oTest===true) {
        return oMark+" is the diagonal winner!";
    }

    //? upper right to lower left
    

    return false;

}
