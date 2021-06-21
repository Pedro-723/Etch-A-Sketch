const board = document.querySelector(".container");

const clearButton = document.querySelector(".clear-btn");

function boardContent() {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.classList.add("board-btn");
        board.appendChild(div);
    }
};

boardContent();

const square = document.querySelector("div");

square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("board-btn", "active");
});

clearButton.addEventListener('click', function() {
    board.innerHTML = '';
    boardContent();
})