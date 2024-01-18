console.log("Wellcom To Tic-Tac-Toe")

let bgm = new Audio("bgm.mp3")
let turnMusic = new Audio("turnmusic.mp3")
let overMusic = new Audio("over.mp3")

let turn = "X"
let gameOver = false;

// Create a function to change a turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Create a function to check win
const checkWin = () => {
    let textbox = document.getElementsByClassName('textbox');
    // let textbox = document.getElementsByClassName("box")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && textbox[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = textbox[e[0]].innerText + "- Has been Won"
            gameOver = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "60px"
        }
    })

}

// Game Logic
// bgm.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let textbox = element.querySelector('.textbox');
    element.addEventListener('click', () => {
        if (textbox.innerText === '') {
            textbox.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameOver) {

                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
    

   
})

reset.addEventListener('click', () => {
    let textbox = document.querySelectorAll('.textbox');
    Array.from(textbox).forEach(element => {
        element.innerText = '';
    });

    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "0px"
    

})
