(function () {
    let score = 0;
    let intervalID;

    const gameElement = document.createElement("div");

    const panelElement = document.createElement("div");

    const arenaElement = document.createElement("div");

    const catElement = document.createElement("div");

    gameElement.classList.add("game");
    panelElement.classList.add("panel");
    arenaElement.classList.add("arena");
    catElement.classList.add("cat");

    gameElement.appendChild(panelElement);
    gameElement.appendChild(arenaElement);

    arenaElement.appendChild(catElement);

    function setcatPosition() {
        catElement.style.top = (Math.round(Math.random() * 9) * 50) + "px";
        catElement.style.left = (Math.round(Math.random() * 9) * 50) + "px";
    }

    function startInterval() {
        clearInterval(intervalID);
        intervalID = setInterval(setcatPosition, 1500);
    }

    function callback(e) {
        e.stopPropagation();
        const clickedElement = e.target;
        if (
            clickedElement
            .classList
            .contains("cat")
        ) {
            score += 1;
            panelElement.innerHTML = score;

            setcatPosition();
            startInterval();
        }
    }

    arenaElement.addEventListener(
        "click",
        callback,
        false
    );

    document.body.appendChild(gameElement);
    startInterval();
}());