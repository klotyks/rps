function handlePlayerMove(move) {
  playerMove(move)
  randomPCMove()
  const result = compareMoves(currentPlayerMove, currentComputerMove)
  renderRPS()
  handlePCMove()
  handleCompareMove(move)
}

function handlePCMove() {
  randomPCMove()
  renderRPS()
}

function handleCompareMove() {
  compareMoves()
  const result = compareMoves()
  renderResult(result)
}
