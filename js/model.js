const availableMoves = ['Rock', 'Paper', 'Scissors']
let currentPlayerMove = ''
let currentComputerMove = ''

function playerMove(move) {
  if (availableMoves.includes(move)) {
    currentPlayerMove = move
  }
}

function randomPCMove() {
  let PC = availableMoves[Math.floor(Math.random() * availableMoves.length)]
  currentComputerMove = PC
}

function compareMoves(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'Tie'
  }
  if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Scissors' && computerMove === 'Paper') ||
    (playerMove === 'Paper' && computerMove === 'Rock')
  ) {
    return 'Win!'
  }
  return 'Lose...'
}

// function round(move) {
//   playerMove(move)
//   randomPCMove()
//   currentPlayerMove
//   currentComputerMove
//   result = compareMoves(currentPlayerMove, currentComputerMove)
//   result
// }

let result

round('Rock')

playerMove('Rock')
randomPCMove()
result = compareMoves(currentPlayerMove, currentComputerMove)
