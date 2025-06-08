let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnX = true;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        let winner = checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    turnX = true;
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnX = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const newGame = () => {
    turnX = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);