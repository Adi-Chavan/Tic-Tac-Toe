let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winnerAlert = document.querySelector(".winner-alert");
let msg = document.querySelector(".winner-alert > h1");

let turnO = true;

const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [1,4,7],
    [2,5,8]
];


let resetGame = () => {
    turnO = true;
    winnerAlert.classList.add("hide");
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    };
};

let disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    };
}

let showWinner = (winner) => {
    msg.innerText =`Congratulations Winner is ${winner}`;
    winnerAlert.classList.remove("hide");
    disableBox();
}


let checkWinner = () => {
    for(let pattern of winnerPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}




boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            // box.style.color = "red";
            turnO = false;
        }else{
            box.innerText = "X";
            // box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);