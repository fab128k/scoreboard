let pointsHome = document.getElementById("pointsHome")
let pointsGuest = document.getElementById("pointsGuest")
let newGameBtn = document.getElementById("newgame-btn")
let countHome = 0
let countGuest = 0

// console.log(pointsHome)

function newGame() {
    countHome = 0
    countGuest = 0
    pointsHome.textContent = 0
    pointsGuest.textContent = 0
    updateLeaderHighlight()
}

function plus1Home() {
    countHome += 1
    pointsHome.textContent = countHome
    updateLeaderHighlight()
}

function plus2Home() {
    countHome += 2
    pointsHome.textContent = countHome
    updateLeaderHighlight()
}

function plus3Home() {
    countHome += 3
    pointsHome.textContent = countHome
    updateLeaderHighlight()
}

function plus1Guest() {
    countGuest += 1
    pointsGuest.textContent = countGuest
    updateLeaderHighlight()
}

function plus2Guest() {
    countGuest += 2
    pointsGuest.textContent = countGuest
    updateLeaderHighlight()
}

function plus3Guest() {
    countGuest += 3
    pointsGuest.textContent = countGuest
    updateLeaderHighlight()
}

function updateLeaderHighlight() {
    const pointsHome = document.getElementById('pointsHome');
    const pointsGuest = document.getElementById('pointsGuest');
    
    // Remove the leader class from both to reset the state
    pointsHome.classList.remove('leader');
    pointsGuest.classList.remove('leader');
    
    // Compare the scores and add the leader class to the higher score
    if (parseInt(pointsHome.innerText) > parseInt(pointsGuest.innerText)) {
        pointsHome.classList.add('leader');
    } else if (parseInt(pointsHome.innerText) < parseInt(pointsGuest.innerText)) {
        pointsGuest.classList.add('leader');
    }
    // If the scores are equal, you can decide whether to highlight both or neither
}
