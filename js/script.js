const playBtn = document.getElementById("playBtn");
const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const gameBoard = document.getElementById("gameBoard");

const icons = [
    "💻","💻",
    "🖥️","🖥️",
    "🌐","🌐",
    "⚙️","⚙️",
    "🤖","🤖",
    "📡","📡",
    "☁️","☁️",
    "💾","💾"
];

playBtn.addEventListener("click", function () {

    homePage.style.display = "none";
    gamePage.style.display = "block";

    createBoard();

});

function createBoard() {

    gameBoard.innerHTML = "";

    const shuffled = [...icons].sort(() => Math.random() - 0.5);

    shuffled.forEach(icon => {

        const card = document.createElement("div");

        card.className = "card";
        card.innerHTML = "?";
        card.dataset.icon = icon;

        gameBoard.appendChild(card);

    });

}
