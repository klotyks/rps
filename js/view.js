function renderPlayerMove(playerMove) {
  // body
}

function renderComputerMove(computerMove) {
  // body
}

function renderResult(result) {
  const elResult = document.querySelector('.result')
  elResult.textContent = result
}

// function renderRPS() {
//   const elGameRps = document.querySelector('.RPS')
//   const elPlayer = document.querySelector('.player span')
//   const elComputerMove = document.querySelector('.computer-move')
//   const elResult = document.querySelector('.result')

//   // Очищаем предыдущие ходы и результат
//   elPlayer.textContent = 'Ваш ход: '
//   elComputerMove.textContent = ''
//   elResult.textContent = ''

//   // Добавляем ход игрока
//   if (currentPlayerMove) {
//     elPlayer.textContent += currentPlayerMove
//   }

//   if (currentComputerMove) {
//     elComputerMove.textContent = currentComputerMove
//   }
// }

function onClickButtonRock(e) {
  handlePlayerMove(e.target.textContent)
}

function onClickButtonPaper(e) {
  handlePlayerMove(e.target.textContent)
}

function onClickButtonScissors(e) {
  handlePlayerMove(e.target.textContent)
}

const elButtonRock = document.querySelector('.rock')
elButtonRock.onclick = onClickButtonRock

const elButtonPaper = document.querySelector('.paper')
elButtonPaper.onclick = onClickButtonPaper

const elButtonScissors = document.querySelector('.scissors')
elButtonScissors.onclick = onClickButtonScissors
