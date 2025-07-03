function handlePlayerMove(text) {
  playerMove(text)
  renderRPS()
  handlePCMove()
  handleCompareMove(text)
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
